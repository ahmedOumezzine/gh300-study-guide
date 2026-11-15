# Configure privacy, content exclusions, and safeguards

This domain represents **10–15%** of the exam. Learn what each control protects, where it is configured, and what it does *not* guarantee.

## Objectives

- Configure content exclusions and editor settings.
- Describe ownership and limitations of Copilot outputs.
- Enable filtering for suggestions that match public code.
- Resolve issues involving suggestions and content exclusions.

## Official exam coverage

The Microsoft study guide assesses this domain through privacy settings, output limitations, public-code safeguards, and troubleshooting. Use the map below to verify every objective.

| Official objective | Where to revise it |
| --- | --- |
| Configure content exclusions and editor settings | [Content exclusions](#content-exclusions) and [Troubleshooting workflow](#troubleshooting-workflow) |
| Describe ownership and limitations of outputs | [Output ownership and limitations](#output-ownership-and-limitations) |
| Enable suggestions matching public code filtering | [Public-code matching and review](#public-code-matching-and-review) |
| Resolve issues with suggestions and content exclusions | [Troubleshooting workflow](#troubleshooting-workflow) |

## Controls to understand

### Content exclusions

Content exclusion rules can prevent selected files or repositories from being used for Copilot context or suggestions, depending on the product surface and configuration. Study the scope, inheritance, propagation time, and unsupported surfaces in the current documentation. An exclusion is not a substitute for removing secrets from a repository.

| Scope to identify | Example question |
| --- | --- |
| Organisation or enterprise | Who can define or override the rule? |
| Repository | Does the rule apply to forks, private content, or only this repository? |
| Client or editor | Does this Copilot surface enforce the rule locally? |
| File pattern | Does the pattern match the intended path and case? |
| Propagation | When will existing sessions observe the change? |

Use a harmless test file to verify an exclusion. Never test by placing a real credential or personal record in a prompt.

#### Boundaries, propagation, and audit

Content exclusion is a Copilot guardrail, not a filesystem security boundary. Depending on the surface, it may not prevent indirect access to semantic information, access through a third-party MCP server, or every form of file access. Keep operating-system permissions, repository permissions, and secret management in place.

After changing an exclusion, allow for client propagation or reload the supported client as documented. GitHub's current documentation describes a delay of up to 30 minutes for IDEs with already-loaded settings. Review the repository or organization audit information when the change itself must be tracked, and use the supported REST API when administrators need programmatic management.

### Public-code matching and review

Filtering or matching controls can help identify suggestions that resemble publicly available code. They do not transfer responsibility for license review or prove that every result is unique. Keep normal dependency, attribution, and code-review practices in place.

Depending on the effective account, organization, enterprise, and product settings, suggestions matching public code can be blocked or allowed with code references. When references are available, inspect the source repository and license information before deciding whether to keep, replace, or attribute the code. Matching systems compare a suggestion and surrounding code against an index; an absence of a match is not proof of originality.

### Output ownership and limitations

Generated output may need human editing before it is useful, and legal treatment can depend on the output, jurisdiction, licence, and your organisation's policy. Do not present a generated result as guaranteed original, secure, or correct.

Ownership, licensing, confidentiality, and liability are separate questions. Check the applicable GitHub terms, organisation policy, project licence, and jurisdiction, then keep a human reviewer responsible for the accepted result.

## Troubleshooting workflow

1. Confirm the account, plan, repository, organisation, and editor are the expected ones.
2. Check whether a policy or exclusion applies to the file, language, or feature surface.
3. Reload or restart the client when documentation says a policy change needs propagation.
4. Compare a minimal safe test file with the excluded file.
5. Record the effective setting and escalate with diagnostics rather than copying sensitive content into a prompt.

## Practice checklist

- [ ] Locate content-exclusion settings at the correct administration scope.
- [ ] Explain the difference between an exclusion and deleting a secret.
- [ ] Explain what public-code matching can and cannot prove.
- [ ] Diagnose a missing suggestion without exposing private code.
- [ ] Re-check settings after product or policy changes.

## Official references

- [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [Configure content exclusion](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion)
- [GitHub Copilot plans and features](https://docs.github.com/en/copilot/get-started/plans)
- [GitHub Trust Center](https://github.com/trust-center)
