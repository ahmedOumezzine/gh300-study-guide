# Use GitHub Copilot features

This is the largest GH-300 domain at **25–30%**. The official guide treats the IDE, CLI, capabilities, and organisation management as one domain. These notes split the topics into readable sections without changing the exam weighting.

## Objectives

- Enable Copilot and trigger it through inline suggestions, chat, CLI, and agent mode.
- Install and use Copilot CLI interactively and in sessions, including scripts and file tasks.
- Use Agent Mode, Copilot Edits, MCP, code review, Spaces, Spark, pull request summaries, and instruction files.
- Understand chat commands, participants, variables, limits, feedback, and reusable prompt files.
- Recognise organisation policies, audit events, and subscription-management surfaces.

## IDE workflows

Start with the smallest useful interaction and make the context explicit. Inline suggestions are useful for local code; chat is better for explanations, alternatives, and multi-file questions. Agent mode can plan and execute a broader task, so inspect its plan, tool requests, and diff before accepting anything.

When a result is weak, improve the context before changing the model: select the relevant code, name the expected behaviour, point to tests, and state constraints such as runtime, API version, or security requirements.

## CLI workflows

Use the [current Copilot CLI documentation](https://docs.github.com/en/copilot/github-copilot-in-the-cli) for installation and command syntax because the CLI evolves quickly. For the exam, distinguish an interactive session from a prompt used in automation, and understand that requests which create files or run commands need an appropriate trust and approval decision.

## Capabilities and organisation management

Capabilities are controlled at more than one level. An individual can use available editor and chat features, while organisation and enterprise administrators decide which features, models, and policies are available to members. Review the effective policy, audit evidence, and the target scope before diagnosing a missing feature.

Remember the exam distinction between a capability and its governance: a feature can exist in the product while being unavailable because of plan, policy, repository, editor, or rollout settings.

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
