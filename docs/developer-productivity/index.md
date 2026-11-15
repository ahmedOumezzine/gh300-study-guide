# Improve developer productivity with Copilot

This domain represents **10–15%** of the exam. Productivity is measured by the quality of the workflow, not by how quickly code is pasted into a repository.

## Objectives

- Use Copilot for code generation, refactoring, and documentation.
- Accelerate learning and reduce context switching.
- Generate sample data and modernise legacy code.
- Generate unit and integration tests.
- Identify edge cases, write assertions, and suggest security or performance improvements.

## High-value workflows

### Generate and refactor safely

Give Copilot the existing contract, invariants, and examples before asking for a change. For a refactor, request a small diff, keep the public behaviour unchanged, and compare tests before and after. For legacy code, ask for an explanation and a migration plan before requesting edits.

### Test the behaviour, not the suggestion

Ask for tests that cover normal, boundary, invalid, and failure paths. Review generated assertions for false positives, then run the suite. Generated sample data should be representative without containing real secrets or personal data.

### Use Copilot to learn

Ask for a focused explanation, a comparison of alternatives, or a glossary of unfamiliar terms. Keep the question anchored to the project so that the answer supports the next development decision instead of creating a new research detour.

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
