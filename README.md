# EventCard invitation maker

An EventCard editor for weddings and birthdays, with one original invitation design being built at a time. Choose a design, edit details and photos, add guest blocks, choose an opening animation and optional music, customize the future link card, preview it live, and download a PNG or standalone HTML page. Drafts are saved in the current browser.

## Local preview

Run `npm run dev`, then open `http://localhost:4300`.

## Adding a new template

We build one template at a time. When a design is finished, add it to the `templates` list in `src/catalog.js`:

```js
{ id: 'invitation-02', name: 'Invitation 02', note: 'Short description',
  motif: 'garden', bg: '#fffaf8', ink: '#532d38', accent: '#bd4b4b', soft: '#efb7b7' },
```

Each entry needs a unique `id` and a `motif` that `src/draw.js` knows how to render. The gallery and editor automatically pick up new entries. To test locally:

1. Save the entry, then reload `http://localhost:4300`.
2. Run `npm run check` to catch JavaScript syntax errors.
3. Open the template from the gallery, try both occasions, and download the PNG and HTML to confirm the design.

To publish the template to GitHub:

```bash
git add src/catalog.js && git commit -m "Add invitation-02 template"
git push origin codex/eventcard-editor
```

Then, from the parent repository, point the submodule at the new frontend commit so a fresh clone includes it:

```bash
cd ..
git add frontend && git commit -m "Update frontend submodule"
git push origin main
```

The GitHub copy is at `https://github.com/khurshedvick/event-card-frontend` (branch `codex/eventcard-editor`); the parent planning repo is at `https://github.com/khurshedvick/event-card-planning`.

## Scope of this review build

This editor was updated after inspecting the separate `invite.uz-editor` project and the live Worldinvite editor. Its six-step editing flow informed the EventCard experience. The EventCard designs were left as they were; no Worldinvite templates, client photos, names, music files, credentials, or backend connections were copied. A vendored Leaflet library and its license support the map picker. We made no edits to the separate Worldinvite project.

The current app is static. Hosted invitation links, user accounts, payments, and server-side draft storage require the planned EventCard backend. Downloaded HTML pages can be shared as files, and downloaded images can be sent directly. Uploaded music is included in the downloaded HTML page and must be selected again after a browser refresh.
