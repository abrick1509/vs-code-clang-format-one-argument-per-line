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
1. Clone this repository.
2. cd into repository.
3. Install the extension through the included `.vsix` file:
```
code --install-extension *.vsix
```
Doing this from a regular terminal or the integrated terminal of a local VS Code instance will only install it for the local VS Code instance under:
```
~/.vscode/extensions/
```
Working with a remote instance requires one extra call:
### Remote install
1. Repeat steps 1-2 from above on your remote machine, or copy the `*.vsix` to your remote host.
2. Use the integrated terminal of your remote VS Code instance to execute 3. from above. This will place the extension correctly to the remote instance's extension folder under:
```
~/.vscode-server/extensions/
```

## Known Issues

Won't work with nested function calls as of now, i.e.:
```
void foo(2.0, bar(2.0, 1.0));
```

**Please report more bugs! This is a very early version!**

**Enjoy!**
