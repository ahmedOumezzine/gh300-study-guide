# Exam tips and caveats

Use this page after studying the six domains. It turns the official scope into a revision plan without reproducing exam questions or claiming access to confidential exam content.

## Exam overview and format

The Microsoft certification page currently states that the assessment lasts **100 minutes**, is proctored, and may include interactive components. Check the certification page immediately before scheduling because exam policies, languages, and delivery options can change.

| Detail | Current guidance |
| --- | --- |
| Exam | GH-300: GitHub Copilot |
| Passing score | 700 or greater |
| Duration | 100 minutes |
| Delivery | Proctored; online or test-centre options depend on registration |
| Interactive work | May be included; practise with the exam sandbox |
| Certification validity | The current certification page describes a two-year validity and a transition to Microsoft recertification |

## Weight strategy

Start with the single 25–30% Copilot features domain. Revise the IDE and CLI page together with [capabilities and policies](../copilot-capabilities/); they are two study pages for one official domain. Then rotate through responsible use, data and architecture, prompting, productivity, and safeguards.

Do not convert a range into a fabricated exact score. Use the ranges to decide how much practice time each area deserves.

## Common caveats

### Plans and policies are not the same thing

A feature can be documented but unavailable because of plan, organisation policy, repository settings, client support, or rollout. In a scenario, identify the scope before choosing a command or troubleshooting step.

### Modes solve different problems

Inline completion, chat, Edit Mode, Plan Mode, and Agent Mode differ in context, autonomy, and approval. Choose the least autonomous mode that can satisfy the requirement, then increase autonomy only when the controls are understood.

### Exclusions and public-code matching are different controls

Content exclusions limit what can be used in particular Copilot contexts. Public-code matching or filtering addresses a different review and licensing concern. Neither control removes the need for human review or secret management.

### Human accountability remains

Generated code is a draft. The developer must understand, test, secure, license, and maintain what is merged. A green test suite is evidence, not proof that every requirement is met.

### Context is a design choice

Open files, selected symbols, repository instructions, chat history, examples, and tool results all affect a response. More context is not automatically better; remove irrelevant material and restate critical constraints.

## Four-week study plan

1. **Week 1 — foundations:** complete the two Microsoft Learn fundamentals paths and practise responsible review.
2. **Week 2 — high-weight features:** use the IDE and CLI, compare interaction modes, and inspect policy settings.
3. **Week 3 — remaining domains:** trace data flow, write prompts, generate tests, and practise exclusions safely.
4. **Week 4 — reinforcement:** take the official practice assessment, review every missed objective, and use the sandbox.

## Hands-on practice

- Install Copilot in a disposable project and compare inline, chat, Edit, Plan, and Agent workflows.
- Create a `.github/copilot-instructions.md` with safe, testable project conventions.
- Run the prompt comparison lab and record which context changed the result.
- Generate unit and integration tests, then add an edge case Copilot missed.
- Configure an exclusion in a test repository and document the expected propagation and client behaviour.
- Review an AI-assisted pull request as a human reviewer; do not accept a summary without reading the diff.

## Day-of-exam habits

- Read scenario qualifiers such as *best*, *first*, *least privilege*, and *most appropriate*.
- Eliminate choices that ignore the stated plan, policy, or scope.
- Flag uncertain items and return after completing the questions you know.
- Treat interactive components as part of the assessment, not as a reason to rush.
- Use the official sandbox and current certification page for logistics.

## High-yield revision cards

| Topic | Remember |
| --- | --- |
| Responsible AI | Six principles, harms, mitigation, validation, accountability |
| Features | IDE, CLI, chat, modes, capabilities, policies |
| Data | Context, prompt building, filtering, post-processing, limitations |
| Prompting | Goal, context, examples, acceptance criteria, history |
| Productivity | Refactoring, documentation, tests, edge cases, security, performance |
| Safeguards | Exclusions, settings, public-code matching, troubleshooting |

## Official practice resources

- [GH-300 certification page](https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/)
- [Official study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [Microsoft practice assessment](https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/?practice-assessment-type=certification)
- [Exam sandbox](https://aka.ms/exam-sandbox)
- [GitHub Copilot Fundamentals Part 1](https://learn.microsoft.com/en-us/training/paths/copilot/)
- [GitHub Copilot Fundamentals Part 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/)
