# opencode-agents-pack

Personal pack of agents, commands, rules, and skills for **opencode** / **Everything Claude Code**. 
Dapat digunakan dengan semua model agents.

## Quick Start

Install ke proyek manapun dengan `npx`:

```bash
# Install ke folder saat ini
npx github:onlymeknow88/opencode-agents-pack

# Install ke folder tertentu
npx github:onlymeknow88/opencode-agents-pack ./my-new-project

# Lihat isi pack
npx github:onlymeknow88/opencode-agents-pack --list

# Force overwrite jika sudah ada
npx github:onlymeknow88/opencode-agents-pack --force
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

## Kompatibilitas

- ✅ opencode
- ✅ Claude Code
- ✅ Model agents lain yang support rules/commands format

## License

MIT

---

**Author:** onlymeknow88  
**Repo:** https://github.com/onlymeknow88/opencode-agents-pack
