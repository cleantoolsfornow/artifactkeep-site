# ArtifactKeep User Guide

**A local-first desktop app for organizing AI prompts, images, conversations, and model libraries.**

---

## Table of Contents

1. [What is ArtifactKeep?](#what-is-artifactkeep)
2. [Why Use ArtifactKeep?](#why-use-artifactkeep)
3. [Getting Started](#getting-started)
4. [Navigation & Layout](#navigation-layout)
5. [Libraries & Views](#libraries-views)
   - [Image Prompts](#image-prompts)
   - [System Prompts](#system-prompts)
   - [Images](#images)
   - [Conversations](#conversations)
   - [Model Library](#model-library)
   - [User Guide](#user-guide)
   - [Settings](#settings)
6. [Core Features & Workflows](#core-features-workflows)
   - [Unified Folder System](#unified-folder-system)
   - [Search, Filters, and View Modes](#search-filters-and-view-modes)
   - [Bulk Actions + Undo Delete](#bulk-actions-undo-delete)
   - [Prompt Import Templates + Validation](#prompt-import-templates-validation)
   - [Image Metadata Extraction (PNG)](#image-metadata-extraction-png)
   - [Auto-Created Prompts from Images](#auto-created-prompts-from-images)
   - [Linked Image Folders](#linked-image-folders)
   - [Performance & Scalability](#performance-scalability)
7. [Keyboard Shortcuts](#keyboard-shortcuts)
8. [Data Storage & Privacy](#data-storage-privacy)
9. [Technical Architecture](#technical-architecture)

---

## What is ArtifactKeep?

ArtifactKeep is a **local-first desktop application** built with [Tauri](https://tauri.app/) that helps you organize and reuse AI assets: prompts, image generations, LLM conversations, and model files. Everything runs **entirely on your machine**. No cloud, no telemetry, no subscriptions.

**Current Version**: 2.0.3

---

## Why Use ArtifactKeep?

### 🎯 Centralized Asset Management

One place for image prompts, system prompts, images with metadata, conversations, and local model indexes.

### 🔒 100% Local & Private

All data is stored in local JSON files and folders on your machine. Nothing leaves your computer.

### ⚡ Built for Large Libraries

Virtualized lists, windowed rendering, and lazy loading help the UI stay fast with thousands of entries.

### 🧰 Metadata-Aware Workflows

Extract ComfyUI and Automatic1111-style metadata from PNGs and turn it into reusable prompts.

### 💻 Cross-Platform

Available for macOS, Windows, and Linux.

---

## Getting Started

1. **Install & Launch**: Run the latest build for your OS.
2. **First Run**: ArtifactKeep creates its data directory in your system application support folder.
3. **Explore**: Each library view includes a Welcome Card to orient you.
4. **Build Your Library**:
   - Create prompts and tags.
   - Import PNGs.
   - Import conversation files.
   - Link model folders to scan.

---

## Navigation & Layout

- **Sidebar**: Persistent navigation between libraries and settings.
- **Folder Subnav**: Each library shows folders under its nav entry.
- **Card/List Views**: Most libraries support both view modes.
- **Sticky Headers**: Search, filters, and actions stay visible while you scroll.
- **Folder Detail Headers**: Folder name, count, and quick actions appear when inside a folder.

---

## Libraries & Views

### Image Prompts

Store and organize prompts for image generation.

- **Prompt Editor**: Positive/negative prompts, notes, base models, LoRAs, and tags.
- **Live Stats**: Word, character, and token estimates on prompts.
- **Title Tools**: Local title generator from prompt text.
- **Organization**: Drag-and-drop, folders, bulk move, card/list views.
- **Filters**: Base models, LoRAs, tags, and "Has Negative Prompt".
- **Bulk Actions**: Copy, duplicate, export (JSON/Markdown/CSV/TXT), delete.
- **Favorites**: Star frequently used prompts.
- **Import**: JSON import with templates and preflight validation.

### System Prompts

Manage system instructions and persona prompts.

- **LLM Targeting**: Tag prompts for specific models (e.g., GPT-4, Llama 3).
- **Profile Image + Gallery**: Attach a profile image and reference gallery.
- **Organization**: Drag-and-drop, folders, bulk move, card/list views.
- **Filters**: LLM models and tags.
- **Bulk Actions**: Copy, duplicate, export (JSON/Markdown/CSV/TXT), delete.
- **Favorites**: Pin important prompts.
- **Import**: JSON import with templates and preflight validation.

### Images

A searchable gallery for AI-generated PNGs with extracted metadata.

- **PNG Import**: Drag-and-drop or browse.
- **Linked Folders**: Auto-scan a folder for new PNGs and import them.
- **Linked Rescans**: Re-scan a linked folder to pick up new files, then refresh metadata in one pass.
- **Metadata Viewer**: Prompts, models, settings, and raw metadata.
- **Detail Actions**: Click an image to open the detail modal and copy prompt blocks or create a prompt from metadata.
- **Search Scopes**: Everything, prompts, models, or filename.
- **Filters**: Model, tool (ComfyUI/A1111), and prompt status.
- **Rescan Settings**: Toggle whether top-level metadata rescans create prompts (Images toolbar → Rescan Settings).
- **Utilities**: Rescan metadata, regenerate thumbnails, bulk move/delete.
- **Favorites**: Star top images.
- **Auto Prompt Creation**: Optional prompt creation from metadata on import or rescan.

### Conversations

Archive exported chat logs from LLM interfaces.

- **Supported Formats**: `.json`, `.txt`, `.md`, `.markdown`, `.log`, `.yaml`, `.yml`, `.html`.
- **Metadata Editor**: Title, notes, LLM models, and tags.
- **Preview + Raw View**: Markdown/text preview with full raw file view for large files.
- **Export Original**: Export a single file from the detail modal or bulk export selected conversations to a folder.
- **Organization**: Drag-and-drop, folders, bulk move, card/list views.
- **Filters**: LLM models and tags.
- **Favorites**: Pin important conversations.

### Model Library

Index and organize model files without moving them.

- **Folder Scanning**: Scan folders for `.safetensors`, `.ckpt`, `.pt`, `.gguf`.
- **Type Detection**: Auto-categorize by extension or folder path keywords (LoRAs, Checkpoints, UNet, VAE, Embeddings, LLM, Other).
- **Status Tracking**: Folder status (linked/scanning/unavailable) and missing entries.
- **Relink & Refresh**: Update paths and rescan without losing metadata.
- **Entry Details**: Tags, notes, file size, last modified, copy-path.
- **Search + Filters**: By name/path, type, and missing status.
- **Bulk Actions**: Remove multiple folders or entries at once (index only).

### User Guide

In-app Markdown guide loaded from `assets/guide.md`.

### Settings

- **Theme**: Light/dark toggle.
- **Autocomplete Lists**: Base models, LoRAs, and LLM models.
- **Welcome Cards**: Reset onboarding tips for all views.

---

## Core Features & Workflows

### Unified Folder System

- Shared folder behavior across prompts, images, conversations, and models.
- Mixed view: folders and top-level items coexist.
- Drag items into folders to organize quickly.
- Folder actions include create, rename, delete (with safety checks).

### Search, Filters, and View Modes

- Every library includes search.
- Filters are tailored per library:
  - Prompts: models, tags, LoRAs, negative prompt presence.
  - Images: tools, models, prompt status, scope-based search.
  - Conversations: models and tags.
  - Models: type and missing status.
- Card/list view toggles where available.

### Bulk Actions + Undo Delete

- Multi-select with checkboxes or `Shift + Click`.
- Bulk copy/duplicate/export/move/delete (varies by view).
- Undo delete is available for a short window (global delete manager).

### Prompt Import Templates + Validation

- JSON import for image/system prompts.
- Preflight modal lists invalid entries and reasons.
- Templates can be downloaded directly in the import modal.

### Image Metadata Extraction (PNG)

- Optimized for PNGs.
- Supports ComfyUI and Automatic1111-style metadata.
- Raw metadata is available in the image detail modal.
- Large metadata payloads are externalized to `/raw` JSON files.

### Auto-Created Prompts from Images

- Image imports or rescans can generate prompt cards automatically.
- Prompt fingerprints prevent duplicate creation.
- Optional per-folder toggle and top-level rescan setting.

### Linked Image Folders

- Link a folder to scan for new PNGs.
- New files are imported into the library and deduped by source metadata.
- Linked folders can also auto-create prompts from new images.

### Performance & Scalability

- Windowed rendering and lazy loading across large libraries.
- Background metadata extraction and thumbnail generation.

---

## Keyboard Shortcuts

| Context | Shortcut | Action |
|---------|----------|--------|
| General | `Esc` | Close modal / clear selection |
| Editors | `Cmd/Ctrl + Enter` | Save & close |
| Lists | `Shift + Click` | Range selection |

---

## Data Storage & Privacy

### Location

All data is stored locally:

- **macOS**: `~/Library/Application Support/com.artifactkeep.app/`
- **Windows**: `%APPDATA%\\com.artifactkeep.app\\`
- **Linux**: `~/.local/share/com.artifactkeep.app/`

### File Structure

- `image-prompts.json`, `system-prompts.json`
- `images.json`, `conversations.json`, `models-library.json`
- `image-models.json`, `llm-models.json`
- `image-tags.json`, `system-tags.json`, `conversation-tags.json`
- `settings.json`
- `images/`: imported image files
- `thumbnails/`: generated thumbnails
- `raw/`: large raw metadata blobs
- `conversations/original/`: conversation source files
- `system-prompt-images/`: system prompt profile images
- `system-prompt-gallery/`: system prompt gallery images

**Backups**: Copy or zip this directory to back up your entire library.

---

## Technical Architecture

ArtifactKeep is a hybrid desktop app:

- **Frontend**: Vanilla ES modules and modular CSS (no framework).
- **Backend**: Rust (Tauri v2) for file I/O, image metadata extraction, thumbnail generation, and folder scanning.
- **Data Layer**: JSON schema validation, auto-repair, and a debounced write queue (`src/data.js`).
- **Shared Patterns**: Selection manager, filter manager, drag/selection utilities, reusable modals.

---

*ArtifactKeep — Your machine, your rules.*
