// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Argument Formatter extension activated.');

	// provide implementation of command defined in package.json
	let disposable = vscode.commands.registerCommand('one-argument-per-line-clang-format.format', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor && !editor.selection.isEmpty) {
			const document = editor.document;
			const selection = editor.selection;
			const word = document.getText(selection);
			editor.edit(editBuilder => {
				// 1. Use negative lookahead to only find ", " that are not wrapped in in <>/{}() or already have a trailing "//".
				// this needs to be done globally.
				// this takes care of template parameters, braced initializers, etc.
				let changedword = word.replace(/, (?!([^<\{()]*[>\})](?!;)|\s*\/\/))/g, ", //\n");
				// 2. find all ",\n" replace those
				// this takes care of all arguments directly followed by a newline
				changedword = changedword.replace(/,\n/g, ", //\n");
				// 3. replace the word
				editBuilder.replace(selection, changedword);
			});
			// 3. Save document (if format-on-save is enable for vscode, this should call clang-format and thus make it all look nicely)
			document.save();
		}
		else {
			vscode.window.showWarningMessage("Please select code to be formatted. Thank you!");
		}

	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
