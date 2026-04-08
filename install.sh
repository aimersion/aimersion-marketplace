#!/bin/bash
# Aimersion AI Plugin Marketplace — Installer
# Usage: curl -sL https://raw.githubusercontent.com/aimersion/aimersion-marketplace/main/install.sh | bash
# Or:    bash install.sh [plugin-name]

set -e

BASE_URL="https://raw.githubusercontent.com/aimersion/aimersion-marketplace/main/plugins"
REPO_URL="https://github.com/aimersion/aimersion-marketplace"

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo -e "${BLUE}✦ Aimersion AI Plugin Marketplace${NC}"
echo "────────────────────────────────────"
echo ""

PLUGIN_NAME="${1:-}"

# ── If no plugin specified, show menu ───────────────────────────────
if [ -z "$PLUGIN_NAME" ]; then
  echo "Available plugins:"
  echo ""
  echo "  Trades / Field Service:"
  echo "    pool-service-operator        dental-practice-autopilot"
  echo "    general-contractor-operator  electrician-business-manager"
  echo "    roofing-company-operator     landscaping-business-operator"
  echo ""
  echo "  Business / SaaS:"
  echo "    saas-growth-operator         dev-agency-manager"
  echo "    it-services-provider         small-business-autopilot"
  echo ""
  echo "  Knowledge Work:"
  echo "    engineering                  product-management"
  echo "    marketing                    sales"
  echo "    data                         operations"
  echo ""
  echo "  Full list: $REPO_URL"
  echo ""
  printf "Enter plugin name (or 'all' for full list): "
  read -r PLUGIN_NAME
  echo ""
fi

# ── Validate plugin exists ───────────────────────────────────────────
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/$PLUGIN_NAME/.claude-plugin/plugin.json")
if [ "$STATUS" != "200" ]; then
  echo -e "${RED}✗ Plugin '$PLUGIN_NAME' not found.${NC}"
  echo "  Check the full list at: $REPO_URL"
  exit 1
fi

echo -e "${BLUE}Installing: ${PLUGIN_NAME}${NC}"
echo ""

# ── Detect target: CLAUDE.md for current dir ─────────────────────────
TARGET_DIR="$(pwd)"
CLAUDE_MD="$TARGET_DIR/CLAUDE.md"
COMMANDS_DIR="${HOME}/.claude/commands"

# ── Get list of skills ───────────────────────────────────────────────
SKILLS_PAGE=$(curl -s "https://api.github.com/repos/aimersion/aimersion-marketplace/contents/plugins/$PLUGIN_NAME/skills")
SKILLS=$(echo "$SKILLS_PAGE" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    for item in data:
        if item.get('type') == 'dir':
            print(item['name'])
except:
    pass
" 2>/dev/null)

if [ -z "$SKILLS" ]; then
  echo -e "${YELLOW}⚠ Could not fetch skill list via API. Trying direct download...${NC}"
fi

# ── Append skills to CLAUDE.md ───────────────────────────────────────
echo "# ── Aimersion Plugin: $PLUGIN_NAME ──" >> "$CLAUDE_MD"
echo "# Installed: $(date '+%Y-%m-%d')" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"

SKILL_COUNT=0
while IFS= read -r skill; do
  [ -z "$skill" ] && continue
  SKILL_URL="$BASE_URL/$PLUGIN_NAME/skills/$skill/SKILL.md"
  SKILL_CONTENT=$(curl -s "$SKILL_URL")
  if echo "$SKILL_CONTENT" | grep -q "^---"; then
    echo "$SKILL_CONTENT" >> "$CLAUDE_MD"
    echo "" >> "$CLAUDE_MD"
    echo -e "  ${GREEN}✓${NC} Skill: $skill"
    SKILL_COUNT=$((SKILL_COUNT + 1))
  fi
done <<< "$SKILLS"

# ── Install slash commands ───────────────────────────────────────────
COMMANDS_PAGE=$(curl -s "https://api.github.com/repos/aimersion/aimersion-marketplace/contents/plugins/$PLUGIN_NAME/commands")
COMMANDS=$(echo "$COMMANDS_PAGE" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    for item in data:
        if item.get('name','').endswith('.md') and item['name'] != 'README.md':
            print(item['name'])
except:
    pass
" 2>/dev/null)

CMD_COUNT=0
if [ -n "$COMMANDS" ]; then
  mkdir -p "$COMMANDS_DIR"
  while IFS= read -r cmd_file; do
    [ -z "$cmd_file" ] && continue
    CMD_URL="$BASE_URL/$PLUGIN_NAME/commands/$cmd_file"
    CMD_CONTENT=$(curl -s "$CMD_URL")
    CMD_NAME="${cmd_file%.md}"
    DEST="$COMMANDS_DIR/${PLUGIN_NAME}-${CMD_NAME}.md"
    echo "$CMD_CONTENT" > "$DEST"
    echo -e "  ${GREEN}✓${NC} Command: /$PLUGIN_NAME-$CMD_NAME"
    CMD_COUNT=$((CMD_COUNT + 1))
  done <<< "$COMMANDS"
fi

echo ""
echo -e "${GREEN}✓ Done!${NC} Installed $SKILL_COUNT skill(s) and $CMD_COUNT command(s)"
echo ""
echo "  Skills added to: $CLAUDE_MD"
[ $CMD_COUNT -gt 0 ] && echo "  Commands added to: $COMMANDS_DIR"
echo ""
echo -e "${BLUE}Next step:${NC} Run 'claude' in this directory to start using $PLUGIN_NAME"
echo ""
