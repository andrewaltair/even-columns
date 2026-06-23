'use strict';

const vscode = require('vscode');

let statusItem;

function cfg() { return vscode.workspace.getConfiguration('evenColumns'); }

function applyStatusBar() {
  const c = cfg();
  if (!c.get('showStatusBar', true)) { if (statusItem) statusItem.hide(); return; }
  const align = c.get('alignment', 'right') === 'left'
    ? vscode.StatusBarAlignment.Left
    : vscode.StatusBarAlignment.Right;
  // recreate if the side changed (alignment is fixed at creation time)
  if (statusItem && statusItem._align !== align) { statusItem.dispose(); statusItem = undefined; }
  if (!statusItem) {
    statusItem = vscode.window.createStatusBarItem(align, 998);
    statusItem._align = align;
    statusItem.command = 'evenColumns.run';
  }
  const text = (c.get('buttonText', 'Even') || 'Even').trim();
  statusItem.text = '$(split-horizontal) ' + text;
  statusItem.tooltip = 'Make all editor columns equal width';
  statusItem.show();
}

function activate(context) {
  applyStatusBar();

  context.subscriptions.push(
    { dispose() { if (statusItem) statusItem.dispose(); } },
    vscode.commands.registerCommand('evenColumns.run', async () => {
      // Built-in "Reset Editor Group Sizes": equalizes all editor group widths.
      await vscode.commands.executeCommand('workbench.action.evenEditorWidths');
    }),
    vscode.commands.registerCommand('evenColumns.toggleStatusBar', async () => {
      const c = cfg();
      const next = !c.get('showStatusBar', true);
      await c.update('showStatusBar', next, vscode.ConfigurationTarget.Global);
      applyStatusBar();
      vscode.window.showInformationMessage('Even Columns button ' + (next ? 'shown.' : 'hidden.'));
    }),
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('evenColumns')) applyStatusBar();
    }),
  );
}

function deactivate() { if (statusItem) statusItem.dispose(); }

module.exports = { activate, deactivate };
