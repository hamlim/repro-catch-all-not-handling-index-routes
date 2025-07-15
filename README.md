# repro-catch-all-not-handling-index-routes

Bug: https://github.com/wakujs/waku/issues/1518

Get started with:

- `bun i` to install deps
- `bun run dev` to start the development server
- Attempt to visit `localhost:3000/`
  - should see `Root Catch All`, instead see blank 404 page
- Attempt to visit `localhost:3000/foo/`
  - should see `Foo Catch All`, instead see `Root Catch All`
