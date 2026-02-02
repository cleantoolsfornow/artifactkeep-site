# ArtifactKeep

Local-first desktop app for organizing AI prompts, images, conversations, and model libraries.

## Highlights

- Local-first: data stays on your machine, no cloud or telemetry.
- Image prompts and system prompts (great for character/persona setups) with tags, notes, and favorites.
- Image gallery with metadata extraction (ComfyUI/A1111) and auto prompt creation.
- Conversations library for imported chat exports.
- Model library that indexes model files without moving them.
- Cross-platform: macOS, Windows, Linux (Tauri).

## Quick Start (Dev)

Prereqs: Node.js and Rust (Tauri v2 toolchain).

```bash
npm install
```

```bash
npm run tauri dev
```

## Tests

```bash
npm test
```

```bash
npm run test:e2e
```

## Project Layout

- `src/` frontend (vanilla ES modules + modular CSS)
- `src-tauri/` Tauri backend (Rust)
- `schemas/` JSON schemas and examples
- `docs/` internal docs and release notes

## User Guide

See `UserGuide.md`.

## License

All rights reserved. See `LICENSE` if present.
