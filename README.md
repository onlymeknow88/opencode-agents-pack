# opencode-agents-pack

Personal pack of agents, commands, rules, and skills for **opencode** / **Everything Claude Code**. 
Dapat digunakan dengan semua model agents.

## Quick Start

Install ke proyek manapun dengan `npx`:

```bash
# Install ke folder saat ini
npx opencode-agents-pack

# Install ke folder tertentu
npx opencode-agents-pack ./my-new-project

# Lihat isi pack
npx opencode-agents-pack --list

# Force overwrite jika sudah ada
npx opencode-agents-pack --force
```

## Isi Pack

```
.agents/
├── agents/           # Agent definitions (planner, architect, code-reviewer, dll)
├── commands/         # Commands untuk orchestrate, plan, tdd, dll
├── contexts/         # Contexts (dev, review, research)
├── rules/            # Rules (coding-style, hooks, patterns, security, dll)
└── skills/           # Skills (backend-patterns, frontend-patterns, tdd-workflow, dll)
```

## Setup Manual (jika tidak pakai npx)

1. Clone repo ini
2. Copy folder `.agents/` ke proyek target
3. Aktifkan di `opencode.json` atau `AGENTS.md`:

```json
{
  "agent": {
    "rules": ".agents/rules",
    "agents": ".agents/agents",
    "commands": ".agents/commands"
  }
}
```

## Publish ke GitHub Packages (opsional)

Jika ingin publish sebagai npm package pribadi:

```bash
# 1. Update package.json
#    - Ganti "name" ke "@your-github-username/opencode-agents-pack"
#    - Update "repository" dan "homepage"

# 2. Login ke GitHub Packages
npm login --registry=https://npm.pkg.github.com

# 3. Publish
npm publish --access public

# 4. Install dari GitHub Packages
npx @your-github-username/opencode-agents-pack
```

## Kompatibilitas

- ✅ opencode
- ✅ Claude Code
- ✅ Model agents lain yang support rules/commands format

## License

MIT

---

**Author:** your-github-username  
**Repo:** https://github.com/your-github-username/opencode-agents-pack
