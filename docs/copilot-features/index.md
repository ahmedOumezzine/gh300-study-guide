# Use GitHub Copilot features

This is the largest GH-300 domain at **25–30%**. The official guide treats the IDE, CLI, capabilities, and organisation management as one domain. These notes split the topics into readable sections without changing the exam weighting.

## Objectives

- Enable Copilot in the IDE and trigger it through inline suggestions, chat, CLI, and agent mode.
- Configure content exclusions for specific files or repositories where the product surface supports them.
- Install and use Copilot CLI interactively and in sessions, including scripts and file tasks.
- Use Agent Mode, Copilot Edits, MCP, agent sessions, sub-agents, code review, Spaces, Spark, pull request summaries, and instruction files.
- Understand chat limits, options, commands, participants, variables, feedback, and reusable prompt files.
- Recognise organisation-wide policies, Copilot Code Review policy controls, audit events, and subscription-management surfaces.

## Official exam coverage

The Microsoft study guide assesses this domain through four functional groups. Use this map to confirm that your revision covers every official objective.

| Official objective | Where to revise it |
| --- | --- |
| Enable Copilot in the IDE; trigger inline suggestions, chat, CLI, and agent mode | [IDE workflows](#ide-workflows) |
| Configure content exclusions for specific files or repositories | [IDE workflows](#ide-workflows) and the [privacy domain](../privacy-safeguards/) |
| Define, install, and use Copilot CLI; understand commands, sessions, scripts, and file management | [CLI workflows](#cli-workflows) and [CLI setup and scope](#cli-setup-and-scope) |
| Use Agent Mode, Copilot Edits, MCP, Agent Sessions, Sub-Agents, code review, Spaces, Spark, pull request summaries, and instruction files | [Capabilities and organisation management](#capabilities-and-organisation-management) |
| Understand Chat limits, options, feedback, commands, and prompt file reuse | [Chat vocabulary](#chat-vocabulary) |
| Manage organisation policies, Code Review policies, audit events, and subscriptions through the REST API | [Organisation controls](#organisation-controls) |

## IDE workflows

Start with the smallest useful interaction and make the context explicit. Inline suggestions are useful for local code; chat is better for explanations, alternatives, and multi-file questions. Agent mode can plan and execute a broader task, so inspect its plan, tool requests, and diff before accepting anything.

When a result is weak, improve the context before changing the model: select the relevant code, name the expected behaviour, point to tests, and state constraints such as runtime, API version, or security requirements.

### Chat vocabulary

| Context mechanism | Use it for |
| --- | --- |
| Slash command | A repeatable action such as explain, fix, test, or document |
| Chat participant | A specialised source or surface, such as the workspace or terminal |
| Chat variable | A file, symbol, solution, or other explicit context reference |
| Instruction file | Repository or path-specific conventions that should persist |

### Keyboard practice

Shortcut labels vary by editor and operating system. Practise the commands shown by your current client rather than copying a shortcut from an old release. The core workflow is accept, dismiss, cycle through alternatives, open chat, and inspect multiple suggestions.

## CLI workflows

Use the [current Copilot CLI documentation](https://docs.github.com/en/copilot/github-copilot-in-the-cli) for installation and command syntax because the CLI evolves quickly. For the exam, distinguish an interactive session from a prompt used in automation, and understand that requests which create files or run commands need an appropriate trust and approval decision.

| Workflow | Review focus |
| --- | --- |
| Interactive session | Folder trust, plan, tool approvals, files changed |
| Programmatic prompt | Exit status, deterministic inputs, logs, secrets, CI permissions |
| Script generation | Shell safety, quoting, portability, test data, dry runs |
| File management | Scope of the target path, diff review, rollback plan |

Do not conflate the current agentic CLI with older GitHub CLI extensions. When a question names a command, identify the product and release context before selecting an answer.

### CLI setup and scope

GitHub Copilot CLI is a terminal interface for asking questions, writing and debugging code, and interacting with GitHub. For a current setup, use the official quickstart and command reference rather than memorising a command copied from an older release:

1. Confirm that the account, plan, organisation policy, and operating system support the CLI.
2. Install the current CLI release and authenticate with the intended GitHub account.
3. Start in a disposable repository and review the trust and tool-approval prompts.
4. Practise both an interactive session and an automation-oriented request.
5. Verify generated scripts, file changes, exit status, logs, and secrets before using the result elsewhere.

The [official CLI documentation](https://docs.github.com/en/copilot/how-tos/copilot-cli) provides the current installation steps, command reference, keyboard shortcuts, session behaviour, and tool-permission controls. Those details can change independently of the exam objectives.

## Capabilities and organisation management

Capabilities are controlled at more than one level. An individual can use available editor and chat features, while organisation and enterprise administrators decide which features, models, and policies are available to members. Review the effective policy, audit evidence, and the target scope before diagnosing a missing feature.

Remember the exam distinction between a capability and its governance: a feature can exist in the product while being unavailable because of plan, policy, repository, editor, or rollout settings.

### Organisation controls

When a scenario asks why a feature is unavailable or how an administrator should manage it, identify the scope and the evidence before changing anything:

| Control area | What to identify |
| --- | --- |
| Feature availability | Whether the enterprise or organisation allows the feature across supported IDEs and github.com |
| Code review policy | Whether Copilot Code Review is enabled and which review standards or instruction files apply |
| Audit evidence | Which audit-log events record the administrative or subscription change |
| Subscription management | Which GitHub REST API operation and permission scope are appropriate |
| Effective scope | Whether an enterprise, organisation, repository, user, client, or rollout setting wins |

Do not infer a plan or permission from a feature name. Verify the current [plans and features documentation](https://docs.github.com/en/copilot/get-started/plans) and the applicable organisation policy.

## Practice checklist

- [ ] Enable Copilot in an IDE and verify the active account and extension.
- [ ] Compare an inline suggestion, a chat request, and an agent task for the same requirement.
- [ ] Run one CLI task interactively and document what files or commands it touched.
- [ ] Find the organisation controls for feature availability and code review.
- [ ] Explain how an instruction file or prompt file makes results more consistent.

## Official references

- [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
- [Copilot plans and features](https://docs.github.com/en/copilot/get-started/plans)
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli)
