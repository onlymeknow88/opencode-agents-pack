#!/usr/bin/env node

/**
 * opencode-agents-pack
 * CLI untuk menginstall/menyalin template agents, commands, rules, dan skills
 * ke proyek opencode / Claude Code manapun. Bisa dipakai dengan npx.
 *
 * Usage:
 *   npx opencode-agents-pack [target]
 *   npx opencode-agents-pack            # install ke cwd
 *   npx opencode-agents-pack ./my-app  # install ke ./my-app
 *   npx opencode-agents-pack --list     # list isi pack
 *   npx opencode-agents-pack --force    # overwrite existing
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const force = args.includes("--force");
const list = args.includes("--list");
const target = args.find((a) => !a.startsWith("--")) || ".";

const TEMPLATES_DIR = path.join(__dirname, "..", "templates");

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    if (fs.existsSync(dest) && !force) {
      console.warn(`  ! skip (exists): ${path.relative(process.cwd(), dest)}`);
      return;
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`  + ${path.relative(process.cwd(), dest)}`);
  }
}

function listTree(dir, prefix = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    console.log(`${prefix}${entry.name}${entry.isDirectory() ? "/" : ""}`);
    if (entry.isDirectory()) {
      listTree(path.join(dir, entry.name), prefix + "  ");
    }
  }
}

function main() {
  console.log("\n  opencode-agents-pack\n  ---------------------");

  if (list) {
    console.log("\n  Templates bundled:\n");
    listTree(TEMPLATES_DIR);
    console.log("\n  done.\n");
    return;
  }

  const agentsSrc = path.join(TEMPLATES_DIR, ".agents");
  if (!fs.existsSync(agentsSrc)) {
    console.error("\n  error: templates/.agents not found inside pack.\n");
    process.exit(1);
  }

  const resolvedTarget = path.resolve(target);
  const destAgents = path.join(resolvedTarget, ".agents");

  console.log(`\n  target  : ${resolvedTarget}`);
  console.log(`  force   : ${force ? "yes" : "no"}`);
  console.log(`  source  : ${agentsSrc}\n`);

  if (!fs.existsSync(resolvedTarget)) {
    fs.mkdirSync(resolvedTarget, { recursive: true });
  }

  copyRecursive(agentsSrc, destAgents);

  const hasOpglobal = fs.existsSync(path.join(resolvedTarget, "opencode.json"));
  if (!hasOpglobal) {
    console.log("\n  i tip: add this to your opencode.json / AGENTS.md to activate:");
    console.log('    { "agent": { "rules": ".agents/rules" } }');
  }

  console.log("\n  installation complete.\n");
}

main();
