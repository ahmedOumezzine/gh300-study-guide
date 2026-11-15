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

## Microsoft Learn practice labs

These official Microsoft Learn modules provide guided exercises that complement the notes. They are training activities, not leaked exam questions. Open the module to confirm its current prerequisites, supported product surface, and account requirements.

| Official module or path | GH-300 skills practised |
| --- | --- |
| [GitHub Copilot Fundamentals Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/copilot) | Responsible use, IDE setup, prompt engineering, Spaces, advanced features, and environments |
| [GitHub Copilot Fundamentals Part 2 of 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) | Agent Mode, Copilot in the cloud, and GitHub MCP Server |
| [Develop unit tests using GitHub Copilot tools](https://learn.microsoft.com/en-us/training/modules/develop-unit-tests-using-github-copilot-tools/) | Unit tests, edge cases, assertions, and verification |
| [Implement code improvements using GitHub Copilot tools](https://learn.microsoft.com/en-us/training/modules/implement-code-improvements-using-github-copilot-tools/) | Refactoring, reliability, performance, security, and code review |
| [Microsoft guided technical labs](https://learn.microsoft.com/en-us/labs/) | Browse current hands-on labs, including Copilot CLI and paired programming scenarios |

## GH-300 local practice labs

The following labs are original practice activities for this guide. Use a disposable repository and never paste secrets, personal data, or proprietary code into a prompt.

### 1. Compare prompt context

**Skills:** prompt engineering and context crafting.

Use the [prompt comparison exercise](#compare-two-prompts) above. Save both outputs, run the same assertions, and record how the added context changed the result.

**Evidence:** two prompts, the test output, one improvement, and one remaining risk.

### 2. Responsible output review

**Skills:** responsible AI.

Ask Copilot to implement a small input-validation function. Review the result for incorrect assumptions, injection risks, error handling, accessibility, and hard-coded secrets. Ask for tests, then write at least one assertion yourself.

**Evidence:** a review checklist, the final diff, test results, and the human decision to accept, revise, or reject the suggestion.

### 3. Trace a Copilot request

**Skills:** data and architecture.

For an IDE chat request, draw the path from user input and selected context through prompt construction, filtering, model response, post-processing, and human review. Mark which parts are explicit, inferred, retrieved, or unavailable.

**Evidence:** a lifecycle diagram and a short list of assumptions that must be confirmed in the current product documentation.

### 4. Safe Copilot CLI session

**Skills:** Copilot features and responsible operation.

In a disposable repository, use the current [Copilot CLI documentation](https://docs.github.com/en/copilot/how-tos/copilot-cli) to start an interactive session. Ask it to explain the project, propose a small script, and show the files it would change. Do not allow a command or file write until you understand its scope.

**Evidence:** the session goal, approvals or denials, commands proposed, files changed, and a rollback note.

### 5. Agent plan and bounded edit

**Skills:** Agent Mode, Copilot Edits, MCP, and review controls.

Give Copilot a multi-file task with explicit acceptance criteria. Compare a plan-first request with a bounded Copilot Edits request. If you use MCP, list the server tools and permissions before enabling it. Review the diff and run the project checks.

**Evidence:** the plan, the selected files, tool approvals, final diff, and validation results.

### 6. Test generation and edge cases

**Skills:** developer productivity.

Ask Copilot to generate unit and integration tests for a small function or endpoint. Add boundary, invalid-input, failure, and security cases that Copilot missed. Run the full test suite and inspect assertions for false positives.

**Evidence:** test matrix, generated tests, added tests, command output, and one limitation of the generated suite.

### 7. Content exclusion and public-code controls

**Skills:** privacy, content exclusions, and safeguards.

In a test repository, configure a harmless file-pattern exclusion using the [current GitHub documentation](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion). Verify the behavior in an included file and an excluded file, then reload the client if required. Separately review the public-code matching setting and explain what a code reference can and cannot prove.

**Evidence:** the scope of the exclusion, the reload or propagation observation, the test results, and a licensing-review decision. Never use a real secret as test data.

### 8. GH-300 capstone scenario

**Skills:** all six official domains.

Choose a small feature request. Write a prompt with context and acceptance criteria, use Copilot in one surface, review the data and policy assumptions, generate tests, inspect public-code and privacy implications, and prepare a human-reviewed pull request summary.

**Evidence:** prompt, context inventory, policy checks, diff, tests, security notes, and a short retrospective on productivity versus review effort.

## Lab completion checklist

- [ ] Use a disposable repository and current product documentation.
- [ ] Record the Copilot surface, account or plan context, and date of the exercise.
- [ ] Keep secrets and personal data out of prompts, files, logs, and screenshots.
- [ ] Save evidence: prompts, diffs, tests, approvals, and decisions.
- [ ] Re-run the lab after a product change and note what became outdated.
