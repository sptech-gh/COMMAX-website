/**
 * COMMAX HEALTHCARE SOLUTIONS LTD
 * Core Interactive Scripts (assets/js/main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.custom-navbar');
    const backToTopBtn = document.getElementById('backToTopBtn');

    const handleScroll = () => {
        if (window.scrollY > 40) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            backToTopBtn?.classList.add('visible');
        } else {
            backToTopBtn?.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 2. Back to top smooth scroll
    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. Mobile Navbar Auto-Collapse on click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
    const navCollapse = document.getElementById('navbarCollapse');
    const bsCollapse = navCollapse ? new bootstrap.Collapse(navCollapse, { toggle: false }) : null;

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse?.classList.contains('show')) {
                bsCollapse?.hide();
            }
        });
    });

    // 4. Toast Notification Utility
    const showToast = (title, message, type = 'success') => {
        let toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toastContainer';
            toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            toastContainer.style.zIndex = '9999';
            document.body.appendChild(toastContainer);
        }

        const toastId = 'toast_' + Date.now();
        const icon = type === 'success' ? 'fa-circle-check text-success' : 'fa-circle-exclamation text-danger';
        const toastHtml = `
            <div id="${toastId}" class="toast align-items-center border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body d-flex align-items-start gap-2">
                        <i class="fa-solid ${icon} fs-5 mt-1"></i>
                        <div>
                            <strong>${title}</strong>
                            <div class="text-muted small">${message}</div>
                        </div>
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        `;
        toastContainer.insertAdjacentHTML('beforeend', toastHtml);
        const toastElement = document.getElementById(toastId);
        const bsToast = new bootstrap.Toast(toastElement, { delay: 4500 });
        bsToast.show();
        toastElement.addEventListener('hidden.bs.toast', () => toastElement.remove());
    };

    // 5. Email-draft form helpers
    const contactEmail = 'commaxcare@gmail.com';

    const buildFormSummary = (form) => {
        const controls = form.querySelectorAll('input, select, textarea');
        return Array.from(controls)
            .filter((control) => control.type !== 'submit' && control.value?.trim())
            .map((control) => {
                const container = control.closest('[class*="col-"]');
                const label = container?.querySelector('label')?.textContent?.replace('*', '').trim()
                    || control.getAttribute('aria-label')
                    || control.getAttribute('placeholder')
                    || 'Details';
                return `${label}: ${control.value.trim()}`;
            })
            .join('\n');
    };

    const openEmailDraft = (subject, body) => {
        const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = href;
        showToast('Email Draft Opened', 'Please review the prepared message in your email application and send it to complete your request.');
    };

    // 6. Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        openEmailDraft('Website enquiry', buildFormSummary(contactForm));
    });

    // 7. Care assessment request
    const assessmentForm = document.getElementById('assessmentForm');
    assessmentForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        openEmailDraft('Care assessment request', buildFormSummary(assessmentForm));
    });

    // 8. Career application and vacancy enquiry
    const careerForm = document.getElementById('careerForm');
    careerForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        openEmailDraft('Career application enquiry', buildFormSummary(careerForm));
    });

    const vacancyAlertForm = document.getElementById('vacancyAlertForm');
    vacancyAlertForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        openEmailDraft('Healthcare vacancy updates', buildFormSummary(vacancyAlertForm));
    });

    // 9. Pre-fill Job Role when clicking on specific job card
    window.applyForRole = (roleTitle) => {
        const roleSelect = document.getElementById('applicantRole');
        if (roleSelect) {
            for (let i = 0; i < roleSelect.options.length; i++) {
                if (roleSelect.options[i].text.toLowerCase().includes(roleTitle.toLowerCase())) {
                    roleSelect.selectedIndex = i;
                    break;
                }
            }
        }
        const careerModal = new bootstrap.Modal(document.getElementById('careerModal'));
        careerModal.show();
    };

    // 10. Service Assessment Pre-fill when clicking service card CTA
    window.requestServiceAssessment = (serviceName) => {
        const serviceSelect = document.getElementById('assessmentCareType');
        if (serviceSelect) {
            for (let i = 0; i < serviceSelect.options.length; i++) {
                if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
                    serviceSelect.selectedIndex = i;
                    break;
                }
            }
        }
        const assessmentModal = new bootstrap.Modal(document.getElementById('assessmentModal'));
        assessmentModal.show();
    };
});
