# README

Formats arguments of selected function call to a single argument per line using clang-format modifiers.
Simply select the text to change, and select "One Argument per Line: Format Selection" from the command palette.
Alternatively, use the provided keybinding (defaults to ctrl+f1).

## Features

![feature X](images/format.gif)

## Requirements

Assumes clang-format to be set as the default formatter for the document (manually or through some other extension).
Calls document.save() after text manipulation, which assumes the "format-on-save" option to be set.

## Install

### Local install
Either clone this repository to your VS Code extensions path:
```
~/.vscode/extensions
```

Or install the provided `.vsix` file with:
```
code --install extension argument-formatter.vsix
```
### Remote install
In case you are using the VS Code Remote SSH solution, you need to clone this into the `.vscodeserver` folder on your remote machine:
```
~/.vscode-server/extensions/
```
I'm not aware of a `*.vsix` compliant solution here.

## Known Issues

Won't work with nested function calls as of now, i.e.:
```
void foo(2.0, bar(2.0, 1.0));
```

**Please report more bugs! This is a very early version!**

**Enjoy!**
