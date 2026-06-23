# Even Columns

Equalize all editor column widths from a status-bar button or a command.

Even Columns adds a small button to the VS Code status bar. Click it and all your editor columns snap to equal width. Handy when you keep several columns side by side (for example Claude Code chat sessions) and they drift to uneven widths.

Under the hood it runs VS Code's built-in "Reset Editor Group Sizes" command (workbench.action.evenEditorWidths), exposed as a one-click button so you do not have to hunt the command each time.

## Usage

- Click the button in the status bar, bottom right by default.
- Or open the Command Palette and run "Even Columns: Equalize Editor Column Widths".
- "Even Columns: Toggle Status Bar Button" shows or hides the button.

## Settings

- evenColumns.showStatusBar (boolean, default true): show the button in the status bar.
- evenColumns.buttonText (string, default "Even"): label shown on the button, after the icon.
- evenColumns.alignment ("left" or "right", default "right"): which side of the status bar the button sits on.

## Install

Search for "Even Columns" in the Extensions view, or install the packaged VSIX via Extensions, then "Install from VSIX".

## License

MIT. Copyright (c) 2026 Andrew Altair.
