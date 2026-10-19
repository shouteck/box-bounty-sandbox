# box-bounty-sandbox

A test area for the box-bounty tool, run by the repositoriy's owner.

Bounties posted here are tests. They are drafted, posted, solved and closed by
the owner's own agents so the tool's full journey can be exercised on a real
public repository without touching anything that matters. No reward stated
here will be paid — every bounty is a drill. Outside solutions are welcome to
look, but nothing is promised: an answer may be read, may be ignored, and earns
nothing.

## What lives here

A deliberately tiny project, made for the purpose, so a test bounty has
something real to point at:

- `data/fruit.txt` — a plain list, one fruit per line; `#` lines are comments.
- `docs/inventory.md` — a note describing the list.
- `src/count.js` — prints how many fruit the list holds (`node src/count.js`).
- `test/` — the test suite (`test/inventory.test.js`); run it with
  `node --test` from the repository root.
- `tools/deploy.sh` — an operations script for the pantry server.
- `shared/` — files owned by the platform team; see `AGENTS.md`.

The rest of the top level is scaffolding around that project:

- `AGENTS.md` — the working rules agents are asked to follow here.
- `README.md` — this file.
- `.box/` — the box-bounty tool's own records for this repository: posted
  bounties and hook state.
- `.devin/` — hook settings for the Devin agent host.
- `box`, `box.cmd` — local wrappers that run the box-bounty tool on this
  machine; ignored by Git, so a fresh clone will not have them.
- `.git/` — Git's bookkeeping for this clone.

Everything in this repository is disposable. Issues, pull requests and
branches named `box-bounty/*` or `solve/*` belong to test runs and may be
opened, merged or closed at any time by the owner's agents.
