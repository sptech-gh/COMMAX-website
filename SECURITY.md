# Security and Privacy Policy

## Reporting vulnerabilities

Use this repository's **Security** tab to submit a private security advisory. Do not publish applicant details, care enquiries, personal information, credentials, or exploit instructions in an issue.

## Form and healthcare-data rules

- Do not store or log care requirements, applicant information, or contact details in browser storage.
- Collect only information necessary to respond to an enquiry.
- Do not claim successful server receipt unless a backend confirms it.
- Any future form processor must use HTTPS, server-side validation, spam controls, restricted access, retention limits, and a published privacy notice.
- Avoid requesting clinical details through ordinary email when a secure approved channel is available.

## Third-party resources

The site loads Bootstrap, Font Awesome, and Google Maps from third parties. Review those dependencies periodically, pin versions, and configure an appropriate Content Security Policy when deployment requirements are finalized.

## Incident response

If personal information or a credential is committed, restrict access, revoke exposed credentials, remove the data from Git history, assess privacy obligations, and require collaborators to discard old clones after a history rewrite.
