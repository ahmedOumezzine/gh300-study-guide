# Configure privacy, content exclusions, and safeguards

This domain represents **10–15%** of the exam. Learn what each control protects, where it is configured, and what it does *not* guarantee.

## Objectives

- Configure content exclusions and editor settings.
- Describe ownership and limitations of Copilot outputs.
- Enable filtering for suggestions that match public code.
- Resolve issues involving suggestions and content exclusions.

## Controls to understand

### Content exclusions

Content exclusion rules can prevent selected files or repositories from being used for Copilot context or suggestions, depending on the product surface and configuration. Study the scope, inheritance, propagation time, and unsupported surfaces in the current documentation. An exclusion is not a substitute for removing secrets from a repository.

### Public-code matching and review

Filtering or matching controls can help identify suggestions that resemble publicly available code. They do not transfer responsibility for license review or prove that every result is unique. Keep normal dependency, attribution, and code-review practices in place.

### Output ownership and limitations

Generated output may need human editing before it is useful, and legal treatment can depend on the output, jurisdiction, licence, and your organisation's policy. Do not present a generated result as guaranteed original, secure, or correct.

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
