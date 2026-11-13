# Practical labs

## Compare two prompts

**Goal:** Observe how context and acceptance criteria affect Copilot’s output. Use a disposable workspace, an editor with Copilot Chat enabled, and a local Node.js installation.

1. Start a fresh chat and ask Copilot to write a function that normalizes a list of tags.
2. Start another chat in the same workspace. Ask for a JavaScript function that trims whitespace, converts tags to lowercase, drops empty entries, and keeps each tag’s first occurrence. Request an example for empty input.
3. Save the second draft as `tags.cjs` and name the function `normalizeTags`. Add these assertions to the bottom of the file and run `node tags.cjs`.

```js
const assert = require('node:assert/strict')
assert.deepEqual(normalizeTags([' JavaScript ', '', 'javascript', ' Node ']), ['javascript', 'node'])
assert.deepEqual(normalizeTags([]), [])
```

Compare both drafts against the same rules. Record one improvement from the added context and one behavior you still had to verify. See [prompt engineering](../prompt-engineering/).