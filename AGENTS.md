# Working in this repository

This is a test area for the box-bounty tool. Everything here is disposable;
test bounties are opened and closed against these files by the owner's agents.

## Layout

- `data/fruit.txt` — the data: one fruit per line, `#` lines are comments.
- `docs/inventory.md` — a note about the data. It must match what
  `node src/count.js` reports.
- `src/count.js` — counts the fruit lines; run it with `node src/count.js`
  from the repository root. There are no dependencies and no build.
- `tools/deploy.sh` — an operations script that runs on the pantry server
  (a Debian host); it cannot run here.
- `shared/` — files owned by the platform team, kept here for reference.

## Rules of the place

- Keep `docs/inventory.md` and the count the script prints in agreement.
- `shared/` belongs to the platform team — do not edit anything in it;
  ask for changes from outside the project.
- No credentials, keys or tokens of any kind belong in this repository.
- Bounties here are tests with a stated reward of zero; nothing is paid.
<!-- box-bounty -->
box bounty can hand a task to an outside solver and bring solutions back
as facts — `box bounty describe` says what it does, what it costs and when it
beats doing the work yourself. Using it is always your call; the owner's
permission applies.
<!-- /box-bounty -->
