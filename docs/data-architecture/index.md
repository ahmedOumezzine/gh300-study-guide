# Understand Copilot data and architecture

This domain represents **10–15%** of the exam. Build a conceptual model of how an interaction is prepared, filtered, sent for completion, and returned to the developer. Avoid assuming that every Copilot surface has the same context or lifecycle.

## Objectives

- Explain data usage, flow, and sharing.
- Describe input processing and prompt building.
- Explain proxy filtering and post-processing.
- Visualise the code-suggestion lifecycle.
- Describe limitations of large language models and Copilot.

## A useful request model

1. **Intent and context** — the user asks for a result and the client gathers permitted context such as the current file, nearby code, chat history, or repository instructions.
2. **Prompt construction** — the client and service prepare an input that combines the request with the selected context and system constraints.
3. **Filtering and routing** — policy, privacy, security, and abuse controls can affect what is sent, what is returned, or which capability is available.
4. **Generation** — a model produces a candidate completion or response; it is a probabilistic output, not an execution result.
5. **Post-processing** — the product may apply safety, policy, or matching checks before displaying the response.
6. **Human decision** — the developer reviews, tests, edits, accepts, or rejects the result.

This is a study model, not a promise that every product surface uses identical implementation details. Use the official documentation for the specific client or feature.

## Limitations to recognise

Models do not automatically know the full architecture, current production state, or unstated business rules. Long context can be incomplete, retrieved files can be irrelevant, and generated code can compile while still violating a security or domain requirement. A strong answer explains what evidence is available and what must be checked by a person or tool.

## Practice checklist

- [ ] Draw the lifecycle for an inline completion and for a chat request.
- [ ] Mark which context is explicit, inferred, retrieved, or unavailable.
- [ ] Identify where privacy, policy, matching, or safety filtering could change the result.
- [ ] Explain why a model response is not proof that the code works.
- [ ] Use the Trust Center to verify current data-handling statements.

## Official references

- [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [How GitHub Copilot handles data](https://github.com/github/copilot-docs/blob/main/docs/how-tos/data-handling.md)
- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
- [GitHub Trust Center](https://github.com/trust-center)
