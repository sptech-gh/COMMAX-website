# COMMAX Healthcare Solutions

A responsive static website for COMMAX Healthcare Solutions Ltd, presenting domiciliary care, live-in care, supported living, complex care, nursing staffing, recruitment opportunities, and contact information for Telford and Shropshire.

## Highlights

- Responsive one-page service and recruitment experience
- Structured healthcare-provider metadata and social-sharing metadata
- Accessible navigation, accordions, modals, and call-to-action controls
- Click-to-call, email, and Google Maps integration
- Care-assessment, enquiry, career, and vacancy email-draft workflows
- Optimized local imagery with Bootstrap and Font Awesome delivery through CDNs

## Project structure

```text
index.html          Page content, metadata, structured data, and forms
assets/css/         Site styling and responsive rules
assets/js/          Navigation, modal, toast, and email-draft behavior
assets/images/      Referenced brand and service imagery
```

## Local development

No build step is required. Serve the repository through a local HTTP server:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Form behavior

The site does not currently include a server-side form processor. Submitting a form opens a prepared email draft addressed to COMMAX Healthcare. The visitor must review and send the message from their email application; the site never falsely reports that data was received by a backend.

For production-grade online submission, add an approved secure form service or server endpoint with validation, spam protection, encryption in transit, access controls, retention rules, and a clear privacy notice.

## Deployment checklist

- Serve the site over HTTPS.
- Verify the canonical domain and Open Graph image URL.
- Confirm phone numbers, email address, office address, service descriptions, and opening hours.
- Test email-draft workflows, Google Maps, Bootstrap, and Font Awesome loading.
- Review accessibility, keyboard navigation, mobile layouts, and colour contrast.
- Confirm that public healthcare and recruitment claims are current and approved.

## Security and privacy

See [SECURITY.md](SECURITY.md). Do not commit care enquiries, applicant information, credentials, or unpublished operational documents.

## Ownership

Copyright © COMMAX Healthcare Solutions Ltd. All rights reserved.
