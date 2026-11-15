# Understand GitHub Copilot data and architecture

This domain represents **10–15%** of the exam. Build a conceptual model of how an interaction is prepared, filtered, sent for completion, and returned to the developer. Avoid assuming that every Copilot surface has the same context or lifecycle.

## Objectives

- Explain data usage, flow, and sharing.
- Describe input processing and prompt building.
- Explain proxy filtering and post-processing.
- Visualise the code-suggestion lifecycle.
- Describe limitations of large language models and Copilot.

## Official exam coverage

The Microsoft study guide assesses this domain through data handling and lifecycle objectives. Use the map below to check each required topic.

| Official objective | Where to revise it |
| --- | --- |
| Explain data usage, flow, and sharing | [Data handling and sharing](#data-handling-and-sharing) |
| Describe input processing and prompt building | [A useful request model](#a-useful-request-model) |
| Explain proxy filtering and post-processing | [Filtering and post-processing](#filtering-and-post-processing) |
| Visualise the code suggestion lifecycle | [Lifecycle checkpoints](#lifecycle-checkpoints) |
| Describe limitations of LLMs and Copilot | [Limitations to recognise](#limitations-to-recognise) |

## A useful request model

1. **Intent and context** — the user asks for a result and the client gathers permitted context such as the current file, nearby code, chat history, or repository instructions.
2. **Prompt construction** — the client and service prepare an input that combines the request with the selected context and system constraints.
3. **Filtering and routing** — policy, privacy, security, and abuse controls can affect what is sent, what is returned, or which capability is available.
4. **Generation** — a model produces a candidate completion or response; it is a probabilistic output, not an execution result.
5. **Post-processing** — the product may apply safety, policy, or matching checks before displaying the response.
6. **Human decision** — the developer reviews, tests, edits, accepts, or rejects the result.

This is a study model, not a promise that every product surface uses identical implementation details. Use the official documentation for the specific client or feature.

### Filtering and post-processing

Filtering can happen before a request is sent, while it is routed through a service, or before a response is displayed. Depending on the product surface and policy, controls may remove or restrict context, apply safety or abuse checks, detect public-code matches, or limit an available capability. Post-processing can format a response and apply additional policy or content checks. Do not treat a filter as proof that the remaining output is correct or safe.

### Data handling and sharing

For any data-handling scenario, ask these questions instead of relying on a blanket statement about Copilot:

| Question | Evidence to identify |
| --- | --- |
| What is sent? | The prompt, selected code, open files, repository context, conversation history, tool calls, and system instructions that the surface actually uses |
| Where does it go? | The client, GitHub service boundary, model provider or other configured service, and any approved integration |
| Who can access it? | The user, organisation or enterprise administrators, service operators, and any provider allowed by the effective plan or policy |
| How long is it retained? | The current product, plan, surface, and Trust Center statements; do not infer retention from another Copilot feature |
| What controls apply? | Content exclusions, policy settings, public-code matching, permissions, logging, and the selected client |

The official documentation describes context windows as including conversation messages, Copilot responses, tool calls and results, and system instructions. A long session can fill the available context, so older material may be compacted or no longer influence a response. Keep context selective and verify the current behaviour for the client you are studying.

### Context differs by surface

| Surface | Typical context to investigate | Review question |
| --- | --- | --- |
| IDE | Current or open files, repository name, selected code, chat history, and repository instructions | Is the relevant file or instruction actually in scope? |
| GitHub.com | Repository data, issues, pull requests, selected code, and optional web-search context | Is web search enabled and is the source allowed by policy? |
| Terminal or CLI | Prompt, active shell or working directory, session history, and approved tool results | Will a suggested command run automatically, or must a person approve and execute it? |
| Copilot Spaces | Sources deliberately added to the Space and the subset retrieved for the response | Is the Space content relevant, current, and safe to share? |

### Data categories to keep separate

| Category | Example | Review question |
| --- | --- | --- |
| User input | A prompt, selection, or command | Does it contain a secret or unnecessary personal data? |
| Context | Open files, repository instructions, chat history | Is it relevant and allowed by policy? |
| Generated output | A completion, explanation, or patch | What must be tested, filtered, or reviewed? |
| Telemetry and administration | Usage or audit information | Who can access it and for what purpose? |

### Lifecycle checkpoints

| Stage | What to verify |
| --- | --- |
| Before sending | Context scope, exclusions, account, policy |
| During processing | Prompt construction, routing, filtering, service boundary |
| Before display | Safety, matching, policy, and post-processing signals |
| Before merge | Tests, security, licence, requirements, reviewer |

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
