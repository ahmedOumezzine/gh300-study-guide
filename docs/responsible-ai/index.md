# Use GitHub Copilot responsibly

This domain represents **15–20%** of the GH-300 exam. The focus is not on memorising product slogans: it is on recognising risk, applying human judgement, and validating every AI-assisted change before it reaches users.

## Objectives

- Describe risks and limitations of generative AI tools.
- Explain ethical and responsible AI usage.
- Identify potential harms and suitable mitigations.
- Explain why Copilot output must be validated.
- Operate Copilot in a way that preserves human accountability.

## Study notes

### Risks and limitations

Copilot generates suggestions from patterns in its available context. A suggestion can be plausible and still be wrong, incomplete, insecure, biased, or unsuitable for the project. Keep these limits in mind:

- A model can invent an API, misuse a library, or misunderstand a requirement.
- A suggestion can contain security defects such as injection risks, unsafe deserialisation, or hard-coded secrets.
- Training patterns can be outdated, biased, or inconsistent with the team's standards.
- A limited context window can hide constraints in other files, services, or business rules.
- The same request can produce different results, so generated code is not a deterministic specification.

### Responsible AI principles in practice

Use fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability as a review lens. In a GH-300 scenario, ask:

1. Who could be affected by this output?
2. Can the result be explained and tested?
3. Does the change expose personal, confidential, or proprietary information?
4. Who reviews and accepts the final change?

The developer and the organisation remain responsible for the software they ship. Copilot is an assistant, not the owner of the decision.

### Validate before accepting

Treat a suggestion as a draft. Check its behaviour against the requirement, run existing tests, add tests for new paths, inspect error handling and edge cases, and verify every API or dependency it references. Apply normal code review, security scanning, licensing review, and release controls.

## Practice checklist

- [ ] Reproduce the requirement in a test or acceptance criterion.
- [ ] Review generated code line by line before accepting it.
- [ ] Check secrets, personal data, permissions, and external input handling.
- [ ] Run tests and security tools; investigate warnings instead of suppressing them.
- [ ] Record a human reviewer and the reason the change is safe to ship.

## Official references

- [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [Responsible AI with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/)
- [GitHub Copilot documentation](https://docs.github.com/en/copilot)
- [GitHub Trust Center](https://github.com/trust-center)
