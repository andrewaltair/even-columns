<div align="center">

<img src="https://raw.githubusercontent.com/andrewaltair/even-columns/main/icon.png" width="120" alt="Even Columns" />

# Even Columns

**One click makes every editor column equal width.**

[![Marketplace](https://img.shields.io/visual-studio-marketplace/v/andrewaltair.even-columns?style=flat-square&label=Marketplace&color=1f6feb)](https://marketplace.visualstudio.com/items?itemName=andrewaltair.even-columns)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/andrewaltair.even-columns?style=flat-square&color=2ea043)](https://marketplace.visualstudio.com/items?itemName=andrewaltair.even-columns)
[![License: MIT](https://img.shields.io/github/license/andrewaltair/even-columns?style=flat-square&color=8957e5)](LICENSE)

</div>

---

Adds a small **`⬌ Even`** button to the status bar. Click it and all your editor columns snap to equal width. Handy when you keep several columns side by side (for example Claude Code chat sessions) and they drift to uneven widths.

Under the hood it runs VS Code's built-in **Reset Editor Group Sizes** (`workbench.action.evenEditorWidths`), exposed as a one-click button so you don't have to hunt the command each time.

## Use

- Click **`⬌ Even`** in the status bar (bottom right).
- Or Command Palette, **Even Columns: Equalize Editor Column Widths**.

## Install

From the Marketplace (search **“Even Columns”**) or:
```
ext install andrewaltair.even-columns
```
Or grab the `.vsix` from [Releases](https://github.com/andrewaltair/even-columns/releases) → Extensions → **⋯ → Install from VSIX…**.

## License

[MIT](LICENSE) © Andrew Altair
