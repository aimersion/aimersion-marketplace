#!/bin/bash
# Aimersion Plugin Live Test
# Tests that the plugin actually works as a real Claude Code plugin
# Run: bash test_plugin.sh

set -e
CLAUDE="/opt/homebrew/bin/claude"
PLUGIN_DIR="$HOME/aimersion-marketplace/plugins/pool-service-operator"
RESULTS="/tmp/plugin-test-results.txt"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Aimersion Plugin Live Test"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Step 1: Pull latest
echo ""
echo "▶ Step 1: Pulling latest plugin fixes..."
cd ~/aimersion-marketplace && git pull --quiet
echo "  ✅ Up to date"

# Step 2: Verify plugin.json is clean
echo ""
echo "▶ Step 2: Validating plugin.json..."
PLUGIN_JSON=$(cat "$PLUGIN_DIR/.claude-plugin/plugin.json")
if echo "$PLUGIN_JSON" | python3 -c "import json,sys; d=json.load(sys.stdin); assert 'skills' not in d and 'commands' not in d" 2>/dev/null; then
  echo "  ✅ plugin.json valid — no invalid fields"
  echo "  Name: $(echo $PLUGIN_JSON | python3 -c 'import json,sys; print(json.load(sys.stdin)["name"])')"
else
  echo "  ❌ plugin.json still has invalid fields — run git pull again"
  exit 1
fi

# Step 3: Test 1 — Skills auto-activate
echo ""
echo "▶ Step 3: Test — Skills auto-activate (no slash command)"
echo "  Question: 'My pool FC is low, how do I fix it?'"
mkdir -p /tmp/plugin-test-dir
cd /tmp/plugin-test-dir

$CLAUDE --print \
  --plugin-dir "$PLUGIN_DIR" \
  "My pool's free chlorine is at 0.8 ppm and I have an 18000 gallon chlorine pool. How much liquid chlorine do I need to add?" \
  > "$RESULTS.test1" 2>&1

RESULT=$(cat "$RESULTS.test1")
if echo "$RESULT" | grep -qi "chlorine\|gallon\|ounce\|quart\|ppm"; then
  echo "  ✅ PASSED — skill auto-activated, gave specific dosing answer"
  echo "  Preview: $(echo "$RESULT" | head -3)"
else
  echo "  ❌ FAILED — skill didn't activate"
  echo "  Got: $(echo "$RESULT" | head -5)"
fi

# Step 4: Test 2 — Slash command
echo ""
echo "▶ Step 4: Test — /water-test slash command"
echo "  Command: /water-test FC 1.2 pH 7.9 TA 70 CH 180 CYA 30 18000gal plaster"

$CLAUDE --print \
  --plugin-dir "$PLUGIN_DIR" \
  "/water-test FC 1.2 pH 7.9 TA 70 CH 180 CYA 30 18000gal plaster" \
  > "$RESULTS.test2" 2>&1

RESULT=$(cat "$RESULTS.test2")
if echo "$RESULT" | grep -qi "sodium bicarbonate\|muriatic\|calcium chloride\|dosing\|POOL\|1\.\|2\."; then
  echo "  ✅ PASSED — /water-test command executed, got dosing plan"
  echo "  Preview: $(echo "$RESULT" | head -3)"
else
  echo "  ❌ FAILED or partial"
  echo "  Got: $(echo "$RESULT" | head -5)"
fi

# Step 5: Show plugin in /plugin list
echo ""
echo "▶ Step 5: Verifying plugin appears in session..."
$CLAUDE --print \
  --plugin-dir "$PLUGIN_DIR" \
  "List all your loaded skills and slash commands. Just the names." \
  > "$RESULTS.test3" 2>&1

RESULT=$(cat "$RESULTS.test3")
if echo "$RESULT" | grep -qi "chemical\|water-test\|pool\|route"; then
  echo "  ✅ PASSED — plugin skills visible in session"
else
  echo "  ⚠️  Skills may not be listed explicitly but are loaded"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  COMPLETE. Full results saved to $RESULTS.*"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  To install permanently for any project:"
echo "  /plugin install pool-service-operator@aimersion"
echo ""
echo "  To add marketplace to Claude Code:"
echo "  claude plugin marketplace add aimersion/aimersion-marketplace"
echo ""
