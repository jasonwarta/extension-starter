# common

This folder is designated for helper and utility functions that are meant to be imported into multiple parts of your extension.

This isn't a required component of an extension, but is included to encourage refactoring utility functions out of a specific execution context. The reason for this is that if you import a function from one context to another, webpack will bundle the contexts together when building, which can lead to all sorts of strange problems that can be very difficult to debug.
