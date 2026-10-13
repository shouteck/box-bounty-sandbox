Correct the stale fruit count in docs/inventory.md.

docs/inventory.md says the pantry list holds five fruit, but
`node src/count.js` (run from the repository root) reports six. Change the
sentence in docs/inventory.md so the note agrees with the data and with what
the script prints — a one-line fix. Do not touch the list itself or the
script; the data is right, the note is stale.
