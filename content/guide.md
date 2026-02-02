# ArtifactKeep User Guide

Welcome to ArtifactKeep! This guide will help you get started with organizing your AI artifacts.

## Getting Started

ArtifactKeep is a local-first desktop application for organizing AI prompts, images, conversations, and model libraries. Everything is stored on your computer with no cloud sync required.

### First Launch

When you first launch ArtifactKeep, you'll see five main sections in the sidebar:

1. **Image Prompts** - Store prompts for image generation
2. **System Prompts** - LLM system prompts and character cards
3. **Conversations** - Archive AI chat conversations
4. **Images** - Browse AI-generated images with metadata
5. **Model Library** - Index Stable Diffusion and LLM models

## Image Prompts

Create and organize prompts for Stable Diffusion, Midjourney, DALL-E, and other image generators.

### Creating a Prompt

1. Click the "+" button in the toolbar
2. Enter your prompt title
3. Add positive and negative prompts
4. Optionally add:
   - Custom thumbnail (for visual identification)
   - Tags (e.g., "landscape", "portrait", "anime")
   - Model name (e.g., "SDXL", "SD 1.5")
   - Notes

### Organization

- **Folders**: Create folders to group related prompts
- **Tags**: Add multiple tags for flexible categorization
- **Favorites**: Star your most-used prompts
- **Search**: Full-text search across titles, prompts, tags, and notes

### Views

Switch between **Card View** (visual grid) and **List View** (compact table) using the toolbar buttons.

## System Prompts

Manage LLM system prompts and character cards for ChatGPT, Claude, and local models.

### Creating a System Prompt

1. Click the "+" button
2. Enter a title (e.g., "Helpful Assistant", "Code Reviewer")
3. Write the system prompt/instructions
4. Optionally add:
   - Profile image (generates thumbnail automatically)
   - Model tags (GPT-4, Claude, Llama, etc.)
   - Notes

## Images Library

Browse and organize AI-generated images with automatic metadata extraction.

### Importing Images

1. Click "Import Images" or drag & drop
2. Select PNG or JPG files from ComfyUI or Automatic1111
3. Metadata is automatically extracted (prompts, model, sampler, etc.)

### Viewing Metadata

Click any image to view:

- Full resolution preview
- Positive and negative prompts
- Model, sampler, steps, CFG scale
- Seed, size, and other parameters

### Create Prompt from Image

Click "Create Prompt" in the image detail to automatically create a new Image Prompt from the extracted metadata.

## Conversations

Import and organize AI chat conversations.

### Supported Formats

- JSON exports (ChatGPT, Claude)
- Plain text (.txt)
- Markdown (.md)

### Importing

1. Click "Import"
2. Select conversation files
3. Add tags and organize as needed

## Model Library

Index Stable Diffusion and LLM models without moving files.

### Linking Folders

1. Go to Model Library
2. Click "Link Folder"
3. Select a folder containing models
4. ArtifactKeep indexes all models automatically

Files stay in place—no copying or moving required.

### Supported Types

- Checkpoints (.safetensors, .ckpt)
- LoRAs
- VAEs
- LLM models (.bin, .gguf)

## Bulk Actions

Select multiple items (Cmd/Ctrl+Click or Shift+Click) to:

- Move to folder
- Add/remove tags
- Export
- Delete

## Exporting Data

Export your prompts and data in multiple formats:

1. Select items or select all
2. Click "Export"
3. Choose format:
   - JSON (complete data)
   - Markdown (human-readable)
   - CSV (spreadsheet)
   - Plain text

## Settings

Access settings from the sidebar to:

- Change theme (light/dark)
- Configure data location
- View app version
- Check for updates

## Tips

- Use **keyboard shortcuts**: Cmd/Ctrl+F to search, Cmd/Ctrl+A to select all
- **Folder hierarchy**: You can nest folders within folders
- **Favorites**: Star your best prompts to keep them at the top
- **Tags are flexible**: Use them for any categorization you need
- **Regular exports**: Back up your data periodically

## Need Help?

- Email: <cleantoolsfornow@gmail.com>
- GitHub: [github.com/cleantoolsfornow/artifactkeep](https://github.com/cleantoolsfornow/artifactkeep)

---

**Note**: This is a placeholder guide. The actual user guide will be synced from the app repository.
