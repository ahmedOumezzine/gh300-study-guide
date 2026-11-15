# Apply prompt engineering and context crafting

This domain represents **10–15%** of the exam. Prompt engineering is a repeatable way to reduce ambiguity: define the job, provide the right context, describe the output, and verify the result.

## Objectives

- Describe prompt structure and context.
- Explain how context is determined.
- Use zero-shot and few-shot prompting.
- Apply prompt-crafting best practices.
- Explain prompt process flow and chat-history usage.

## A practical prompt structure

Use a compact template and adapt it to the task:

```text
Goal: what should change or be produced?
Context: which files, APIs, data shapes, and constraints matter?
Examples: what is a good input/output or an existing pattern to follow?
Acceptance: how will we test or review the result?
```

The best context is relevant and bounded. Link to a file or symbol, paste only the necessary excerpt, and state versions or non-functional requirements. Extra unrelated text can make the response less precise.

## Prompt strategies

- **Zero-shot:** ask directly when the task is conventional and the constraints are clear.
- **Few-shot:** provide one or more small examples when format, terminology, or edge-case behaviour matters.
- **Iterative:** start with a small request, inspect the result, then add the missing constraint instead of rewriting everything at once.
- **Verification-first:** ask for tests, assumptions, or a plan before asking for implementation.

Chat history can provide continuity, but it can also carry a wrong assumption forward. Start a focused conversation or restate the critical constraints when the task changes.

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
