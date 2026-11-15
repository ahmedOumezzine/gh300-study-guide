# Use GitHub Copilot responsibly

This domain represents **15–20%** of the GH-300 exam. The focus is not on memorising product slogans: it is on recognising risk, applying human judgement, and validating every AI-assisted change before it reaches users.

## Objectives

- Describe risks and limitations of generative AI tools.
- Explain ethical and responsible AI usage.
- Identify potential harms and suitable mitigations.
- Explain why Copilot output must be validated.
- Operate Copilot in a way that preserves human accountability.

## Official exam coverage

The Microsoft study guide groups this domain into two skill areas. The table below maps each official objective to the notes on this page.

| Official objective | Where to revise it |
| --- | --- |
| Describe risks and limitations of Generative AI tools | [Risks and limitations](#risks-and-limitations) |
| Describe ethical and responsible AI usage | [Responsible AI principles](#responsible-ai-principles-in-practice) |
| Identify potential harms and mitigation strategies of AI usage | [Match a harm to a mitigation](#match-a-harm-to-a-mitigation) |
| Explain the need to validate AI output | [Validate before accepting](#validate-before-accepting) |
| Identify how to operate GitHub Copilot responsibly | [Responsible operation workflow](#responsible-operation-workflow) |

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

### Responsible operation workflow

Use this sequence when a scenario asks how to operate Copilot responsibly:

1. **Define the task and boundaries.** State the requirement, permitted data, affected users, and acceptance criteria before prompting.
2. **Choose the smallest useful context.** Exclude secrets, personal data, and unrelated proprietary material. Follow the repository and organisation policies.
3. **Treat the response as untrusted draft output.** Check APIs, dependencies, assumptions, permissions, error handling, and edge cases.
4. **Validate with evidence.** Run tests, security and quality checks, licence review, and a focused human code review.
5. **Keep human ownership.** Record who approved the change, what was checked, and what monitoring or rollback is available after release.

The safest answer is not to accept a plausible suggestion blindly or to assume that a policy setting makes generated code correct.

### Six principles as a review lens

| Principle | Question for a Copilot-assisted change |
| --- | --- |
| Fairness | Could the code or data disadvantage a group of users? |
| Reliability and safety | Does it fail safely and behave as intended under stress? |
| Privacy and security | Does it protect secrets, personal data, and permissions? |
| Inclusiveness | Can people with different abilities and backgrounds use the result? |
| Transparency | Can a reviewer understand the origin, assumptions, and behaviour? |
| Accountability | Is a named human responsible for the accepted change? |

### Match a harm to a mitigation

| Potential harm | Useful mitigation |
| --- | --- |
| Incorrect or fabricated logic | Tests, API verification, edge-case review |
| Insecure implementation | Threat modelling, code review, static analysis, dependency checks |
| Sensitive data in context | Content exclusions, secret scanning, prompt hygiene |
| Biased or outdated behaviour | Inclusive requirements, current standards, representative tests |
| Licence or attribution concern | Public-code matching controls and human licence review |
| Blind acceptance | Small diffs, approval gates, and explicit ownership |

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
