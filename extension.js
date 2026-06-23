'use strict';

const vscode = require('vscode');

let statusItem;

function activate(context) {
  statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 998);
  statusItem.text = '$(split-horizontal) Even';
  statusItem.tooltip = 'Make all editor columns equal width';
  statusItem.command = 'evenColumns.run';
  statusItem.show();

  context.subscriptions.push(
    statusItem,
    vscode.commands.registerCommand('evenColumns.run', async () => {
      // Built-in "Reset Editor Group Sizes": equalizes all editor group widths.
      await vscode.commands.executeCommand('workbench.action.evenEditorWidths');
    }),
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
