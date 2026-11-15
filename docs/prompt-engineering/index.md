# Apply prompt engineering and context crafting

This domain represents **10–15%** of the exam. Prompt engineering is a repeatable way to reduce ambiguity: define the job, provide the right context, describe the output, and verify the result.

## Objectives

- Describe prompt structure and context.
- Explain how context is determined.
- Use zero-shot and few-shot prompting.
- Apply prompt-crafting best practices.
- Explain prompt process flow and chat-history usage.

## Official exam coverage

The Microsoft study guide assesses this domain through effective prompt construction and prompt performance. Use the map below to verify every objective.

| Official objective | Where to revise it |
| --- | --- |
| Describe prompt structure and context | [A practical prompt structure](#a-practical-prompt-structure) |
| Understand how context is determined | [Context sources](#context-sources) |
| Use zero-shot and few-shot prompting | [Prompt strategies](#prompt-strategies) |
| Apply best practices for prompt crafting | [Prompt-crafting best practices](#prompt-crafting-best-practices) |
| Explain prompt engineering principles, process flow, and chat-history usage | [Prompt process flow](#prompt-process-flow) |

## A practical prompt structure

Use a compact template and adapt it to the task:

```text
Goal: what should change or be produced?
Context: which files, APIs, data shapes, and constraints matter?
Examples: what is a good input/output or an existing pattern to follow?
Acceptance: how will we test or review the result?
```

The best context is relevant and bounded. Link to a file or symbol, paste only the necessary excerpt, and state versions or non-functional requirements. Extra unrelated text can make the response less precise.

### Five questions for a strong prompt

1. **Intent:** What outcome is needed and for whom?
2. **Context:** Which files, symbols, examples, APIs, or error messages matter?
3. **Constraints:** What must remain unchanged, and what security or performance rules apply?
4. **Examples:** What input/output or existing project pattern shows the desired shape?
5. **Checks:** What tests, assertions, or review criteria decide whether the result is acceptable?

### Context sources

Context is surface-specific. Inline completion normally uses nearby code and editor state; chat can use selected text, referenced files, repository instructions, conversation history, and supported tools. Open files are not a guarantee that every line is equally relevant. Explicitly name the important files and remove stale assumptions.

### Prompt process flow

1. **State the goal.** Describe the outcome, audience, language, format, and success criteria.
2. **Select context.** Attach the relevant file, symbol, issue, pull request, repository, example, or instruction file; remove unrelated material.
3. **Construct the request.** Add constraints, examples, allowed tools, and the expected output shape.
4. **Inspect the response.** Check assumptions, references, missing cases, and whether the requested format was followed.
5. **Iterate or reset.** Refine the prompt for a small correction, or start a new conversation/session when the history is no longer relevant.

Conversation history is useful context, but it can also preserve an incorrect assumption. Keep only the history that supports the current task and restate critical constraints when the task changes.

## Prompt strategies

- **Zero-shot:** ask directly when the task is conventional and the constraints are clear.
- **Few-shot:** provide one or more small examples when format, terminology, or edge-case behaviour matters.
- **Iterative:** start with a small request, inspect the result, then add the missing constraint instead of rewriting everything at once.
- **Verification-first:** ask for tests, assumptions, or a plan before asking for implementation.

Chat history can provide continuity, but it can also carry a wrong assumption forward. Start a focused conversation or restate the critical constraints when the task changes.

### Prompt-crafting best practices

- Start with a general goal, then add the most important specifics and constraints.
- Give small, representative examples of inputs, outputs, or existing implementations.
- Break a complex task into smaller requests with a check after each step.
- Avoid ambiguous references such as “this file” or “that code”; name the symbol, path, or response.
- Provide relevant context, not the entire repository by default.
- Experiment and iterate instead of rewriting a large prompt blindly.
- Review Copilot’s output and apply normal coding, testing, and security practices.

## Practice checklist

- [ ] State the goal and the intended audience.
- [ ] Identify the files or symbols Copilot should use.
- [ ] Include one example or acceptance criterion for ambiguous output.
- [ ] Ask for tests and name the edge cases to cover.
- [ ] Compare a short prompt and a contextual prompt in the lab.

## Official references

- [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [Prompt engineering](https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering)
- [Prompting and context](https://docs.github.com/en/copilot/concepts/prompting-and-context)
- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
