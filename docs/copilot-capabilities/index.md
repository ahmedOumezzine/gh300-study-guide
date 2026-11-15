# Capabilities and organization policies

The official guide places these topics inside **Use GitHub Copilot features (25–30%)**. This page separates the governance and advanced-capability material for easier revision; it is not a seventh exam domain.

## Official exam coverage

This supporting page covers the official GH-300 feature-capability and organisation-management objectives. They remain part of **Use GitHub Copilot features (25–30%)**.

| Official objective | Where to revise it |
| --- | --- |
| Use Agent Mode, Copilot Edits, and MCP; manage Agent Sessions and delegate tasks to Sub-Agents | [Interaction modes](#interaction-modes) and [Model Context Protocol](#model-context-protocol) |
| Use Copilot for code review and coding assistance | [Code review and pull requests](#code-review-and-pull-requests) |
| Use Spaces, Spark, pull request summaries, and customizable review standards via instruction files | [Spaces, Spark, and reusable instructions](#spaces-spark-and-reusable-instructions) |
| Understand Chat limits, options, feedback, commands, and prompt file reuse | [Chat controls and feedback](#chat-controls-and-feedback) |
| Configure organisation-wide policies, Code Review policies, and feature availability across IDEs and github.com | [Plans and organisation management](#plans-and-organisation-management) |
| Use audit-log events and manage subscriptions with the REST API | [Plans and organisation management](#plans-and-organisation-management) |

## On this page

- [Interaction modes](#interaction-modes)
- [Model Context Protocol](#model-context-protocol)
- [Code review and pull requests](#code-review-and-pull-requests)
- [Spaces, Spark, and reusable instructions](#spaces-spark-and-reusable-instructions)
- [Chat controls and feedback](#chat-controls-and-feedback)
- [Plans and organization management](#plans-and-organization-management)

## Interaction modes

### Agent Mode

Agent Mode is suited to a multi-step task where Copilot needs to inspect context, propose a plan, use tools, and iterate. The developer still owns the task: review the plan, approve sensitive actions, inspect the resulting diff, and run the project's checks.

### Copilot Edits

Copilot Edits focuses on a selected set of files and an explicit change. Use it when you want a bounded, reviewable multi-file diff rather than an autonomous exploration of the repository. Confirm the target files, review every edit, and run the relevant checks before accepting it.

### Plan Mode

Plan Mode is for analysis before implementation. Expect a plan, assumptions, impacted files, and open questions; do not confuse a plan with a completed change. A strong exam answer chooses Plan Mode when visibility and approval are required before editing.

### Agent sessions and sub-agents

Large tasks can be divided into sessions or delegated subtasks. The important control is context and authority: give each worker a narrow goal, limit the files or tools it can use, and review the combined result for conflicts and missing requirements.

For an exam scenario, distinguish the Agent Session that coordinates work from a delegated Sub-Agent. Delegation can improve context focus, but it does not transfer responsibility for permissions, tool approvals, or the final diff.

## Model Context Protocol

MCP connects a Copilot client to external tools or data sources through a standard protocol. Study the difference between a model response and a tool result, the server's available tools and resources, authentication, and the policy that controls whether a server can be used.

Before enabling an MCP server, verify its publisher, permissions, data access, network path, and organisation policy. Treat tool output as untrusted input and keep approval gates for actions that write files, call services, or change infrastructure.

Record which tools and resources the server exposes, which credentials it can reach, and whether the client permits read, write, or command execution. A model response is not the same thing as a verified tool result.

## Code review and pull requests

Copilot can help explain a change, identify possible defects, draft a review, or summarise a pull request. It does not replace a reviewer. Check the diff, tests, security implications, and the repository's review standards. An instruction file can make review criteria more consistent, but it cannot make an incorrect policy correct.

For code review scenarios, separate coding assistance from approval: review the changed lines, check the repository's customizable review standards, and treat a pull request summary as an aid to navigation rather than evidence that the change is safe.

## Spaces, Spark, and reusable instructions

- **Spaces:** collect selected sources and instructions so a response is grounded in a bounded topic.
- **Spark:** use the current product documentation for availability and limits; product surfaces can change.
- **Instructions files:** express repository conventions, commands, constraints, and review expectations.
- **Prompt files:** store a repeatable request template with explicit inputs and acceptance criteria.

Keep instructions short, testable, and versioned with the project. Avoid secrets, personal data, and contradictory rules.

## Chat controls and feedback

Chat commands, participants, variables, model selection, and feedback controls vary by client. A scenario question normally tests whether you can choose the smallest context source and the safest capability for the task. When a result is poor, improve the request and context first, then verify the client, account, policy, and feature availability.

## Plans and organization management

Individual, Business, and Enterprise offerings can differ in features, administration, policy controls, and data handling. Do not infer a license from a feature name: check the current [plans documentation](https://docs.github.com/en/copilot/get-started/plans) and the effective organisation policy.

Administrators may manage feature availability, model access, code review policies, audit-log events, and subscription information through GitHub's administration surfaces and APIs. The scope hierarchy matters: enterprise, organisation, repository, user, and client settings can all affect the effective result.

When an objective asks for a REST API action or an audit event, identify the target organisation or enterprise, the required permission, the operation's effect, and the evidence that should be recorded. Do not infer an API route or permission from memory; use the current GitHub documentation.

## Revision table

| Scenario | Best first question |
| --- | --- |
| A feature is missing | Which account, plan, policy, repository, client, and rollout apply? |
| An agent wants to run a command | What is the command, what data does it touch, and who approves it? |
| A review is inconsistent | Are repository instructions and review standards current and in scope? |
| An MCP server is proposed | Which tools, data, credentials, and write permissions does it expose? |

## Practice checklist

- [ ] Compare Plan, Edit, and Agent Mode using the same feature request.
- [ ] Inspect an MCP server's tools and write permissions before enabling it.
- [ ] Create a small instruction file and verify that it changes a response predictably.
- [ ] Find the effective feature policy at organisation and repository scope.
- [ ] Explain why a Copilot review is evidence for a human reviewer, not approval itself.

## Official references

- [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
- [Manage policies for Copilot](https://docs.github.com/en/copilot/managing-copilot)
- [GitHub Copilot plans and features](https://docs.github.com/en/copilot/get-started/plans)
- [GitHub Copilot Fundamentals Part 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/)
