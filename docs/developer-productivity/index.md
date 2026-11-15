# Improve developer productivity with GitHub Copilot

This domain represents **10–15%** of the exam. Productivity is measured by the quality of the workflow, not by how quickly code is pasted into a repository.

## Objectives

- Use Copilot for code generation, refactoring, and documentation.
- Accelerate learning and reduce context switching.
- Generate sample data and modernise legacy code.
- Generate unit and integration tests.
- Identify edge cases, write assertions, and suggest security or performance improvements.

## Official exam coverage

The Microsoft study guide assesses this domain through productivity, code quality, testing, and security outcomes. Use the map below to verify every objective.

| Official objective | Where to revise it |
| --- | --- |
| Use Copilot for code generation, refactoring, and documentation | [Generate and refactor safely](#generate-and-refactor-safely) and [Map a request to a workflow](#map-a-request-to-a-workflow) |
| Accelerate learning and reduce context switching | [Use Copilot to learn](#use-copilot-to-learn) |
| Generate sample data and modernise legacy code | [Map a request to a workflow](#map-a-request-to-a-workflow) |
| Generate unit and integration tests | [Test the behaviour, not the suggestion](#test-the-behaviour-not-the-suggestion) |
| Identify edge cases, write assertions, and suggest security improvements and performance optimizations | [Test the behaviour, not the suggestion](#test-the-behaviour-not-the-suggestion) and [Measure the outcome](#measure-the-outcome) |

## High-value workflows

### Generate and refactor safely

Give Copilot the existing contract, invariants, and examples before asking for a change. For a refactor, request a small diff, keep the public behaviour unchanged, and compare tests before and after. For legacy code, ask for an explanation and a migration plan before requesting edits.

### Test the behaviour, not the suggestion

Ask for tests that cover normal, boundary, invalid, and failure paths. Review generated assertions for false positives, then run the suite. Generated sample data should be representative without containing real secrets or personal data.

### Map a request to a workflow

| Need | Useful Copilot request | Human check |
| --- | --- | --- |
| New function | Generate a small implementation from a contract | API, errors, edge cases, tests |
| Refactor | Propose a plan and preserve public behaviour | Diff, regression suite, performance |
| Documentation | Explain public behaviour and examples | Accuracy, audience, stale claims |
| Test coverage | Generate unit and integration cases | Assertions, fixtures, false positives |
| Security review | Identify trust boundaries and risky patterns | Threat model, scanner, remediation |
| Legacy modernisation | Explain first, then propose an incremental migration | Compatibility, rollout, rollback |

### Use Copilot to learn

Ask for a focused explanation, a comparison of alternatives, or a glossary of unfamiliar terms. Keep the question anchored to the project so that the answer supports the next development decision instead of creating a new research detour.

### Measure the outcome

Productivity is not just generated lines of code. Compare a baseline with the Copilot-assisted workflow using evidence such as:

- time to understand a change or complete a task;
- test coverage, defect rate, and escaped regressions;
- review rework, maintainability, and documentation quality;
- context switching, interruptions, and repeated clarification;
- security findings, performance measurements, and rollback effort.

Choose measures that fit the project, and do not trade safety or maintainability for a faster first draft. Copilot can accelerate a workflow while still producing code that requires substantial review.

## Practice checklist

- [ ] Ask for a refactor plan before asking for the diff.
- [ ] Generate tests for happy paths, edge cases, and failures.
- [ ] Use synthetic fixtures and review them for privacy and realism.
- [ ] Run formatters, linters, tests, and security checks after generation.
- [ ] Measure whether the change improves behaviour, maintainability, or delivery speed.

## Official references

- [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [Developer use cases for AI](https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/)
- [Testing with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/testing-with-github-copilot/)
- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
