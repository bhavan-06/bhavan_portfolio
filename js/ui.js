/* =========================================
   UI.JS
   Advanced Portfolio UI Interactions
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       TOAST NOTIFICATIONS
    ========================================= */

    window.showToast = function (message, type = "success") {

        let toast = document.getElementById("toast");

        if (!toast) {
            toast = document.createElement("div");
            toast.id = "toast";
            document.body.appendChild(toast);
        }

        toast.textContent = message;

        toast.className = "show";

        toast.classList.add(type);

        clearTimeout(window.toastTimeout);

        window.toastTimeout = setTimeout(() => {

            toast.classList.remove("show");
            toast.classList.remove(type);

        }, 3000);

    };


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                /* Close mobile navigation */

                const navLinks =
                    document.getElementById("navLinks");

                if (navLinks) {
                    navLinks.classList.remove("active");
                }

            }

        });

    });


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    const updateActiveNavigation = () => {

        const scrollPosition =
            window.scrollY + 150;

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                navigationLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${sectionId}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    };

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    /* =========================================
       TOOLTIP SYSTEM
    ========================================= */

    const tooltipElements =
        document.querySelectorAll("[data-tooltip]");

    tooltipElements.forEach((element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                const tooltip =
                    document.createElement("div");

                tooltip.className =
                    "custom-tooltip";

                tooltip.textContent =
                    element.dataset.tooltip;

                document.body.appendChild(
                    tooltip
                );

                const rect =
                    element.getBoundingClientRect();

                tooltip.style.left =
                    rect.left +
                    rect.width / 2 +
                    "px";

                tooltip.style.top =
                    rect.top -
                    45 +
                    "px";

                element._tooltip = tooltip;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                if (element._tooltip) {

                    element._tooltip.remove();

                    element._tooltip = null;

                }

            }
        );

    });


    /* =========================================
       MAGNETIC BUTTONS
    ========================================= */

    const magneticButtons =
        document.querySelectorAll(
            ".magnetic-button"
        );

    magneticButtons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                button.style.transform =
                    `translate(${x * 0.15}px,
                               ${y * 0.15}px)`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0, 0)";

            }
        );

    });


    /* =========================================
       ACCORDION
    ========================================= */

    const accordionButtons =
        document.querySelectorAll(
            ".accordion-button"
        );

    accordionButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const accordionItem =
                    button.closest(
                        ".accordion-item"
                    );

                if (!accordionItem) {
                    return;
                }

                const wasActive =
                    accordionItem.classList.contains(
                        "active"
                    );

                document
                    .querySelectorAll(
                        ".accordion-item"
                    )
                    .forEach((item) => {

                        item.classList.remove(
                            "active"
                        );

                    });

                if (!wasActive) {

                    accordionItem.classList.add(
                        "active"
                    );

                }

            }
        );

    });


    /* =========================================
       TABS SYSTEM
    ========================================= */

    const tabButtons =
        document.querySelectorAll(
            "[data-tab]"
        );

    tabButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const tabId =
                    button.dataset.tab;

                document
                    .querySelectorAll(
                        "[data-tab]"
                    )
                    .forEach((tab) => {

                        tab.classList.remove(
                            "active"
                        );

                    });

                button.classList.add(
                    "active"
                );


                document
                    .querySelectorAll(
                        ".tab-panel"
                    )
                    .forEach((panel) => {

                        panel.classList.remove(
                            "active"
                        );

                    });


                const targetPanel =
                    document.getElementById(
                        tabId
                    );

                if (targetPanel) {

                    targetPanel.classList.add(
                        "active"
                    );

                }

            }
        );

    });


    /* =========================================
       MODAL ESCAPE KEY SUPPORT
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                document
                    .querySelectorAll(
                        ".project-modal.active"
                    )
                    .forEach((modal) => {

                        modal.classList.remove(
                            "active"
                        );

                    });

            }

        }
    );


    /* =========================================
       CLICK OUTSIDE MODAL
    ========================================= */

    document.addEventListener(
        "click",
        (event) => {

            if (
                event.target.classList.contains(
                    "project-modal"
                )
            ) {

                event.target.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =========================================
       ACCESSIBILITY:
       KEYBOARD FOCUS MODE
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Tab") {

                document.body.classList.add(
                    "keyboard-navigation"
                );

            }

        }
    );


    document.addEventListener(
        "mousedown",
        () => {

            document.body.classList.remove(
                "keyboard-navigation"
            );

        }
    );


    /* =========================================
       CONTACT FORM VALIDATION
    ========================================= */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();

                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();

                const message =
                    document
                        .getElementById("message")
                        ?.value
                        .trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    event.preventDefault();

                    window.showToast(
                        "Please fill in all fields.",
                        "error"
                    );

                    return;

                }

            }
        );

    }


    /* =========================================
       PROJECT CARD RIPPLE EFFECT
    ========================================= */

    document.addEventListener(
        "click",
        (event) => {

            const card =
                event.target.closest(
                    ".interactive-card"
                );

            if (!card) {
                return;
            }

            const ripple =
                document.createElement("span");

            ripple.className =
                "ripple-effect";

            const rect =
                card.getBoundingClientRect();

            ripple.style.left =
                event.clientX -
                rect.left +
                "px";

            ripple.style.top =
                event.clientY -
                rect.top +
                "px";

            card.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );


    /* =========================================
       MOBILE TOUCH FEEDBACK
    ========================================= */

    document
        .querySelectorAll(
            "button, .primary-button, .secondary-button"
        )
        .forEach((element) => {

            element.addEventListener(
                "touchstart",
                () => {

                    element.classList.add(
                        "touch-active"
                    );

                },
                { passive: true }
            );


            element.addEventListener(
                "touchend",
                () => {

                    setTimeout(() => {

                        element.classList.remove(
                            "touch-active"
                        );

                    }, 150);

                }
            );

        });


    /* =========================================
       REDUCED MOTION DETECTION
    ========================================= */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (prefersReducedMotion.matches) {

        document.body.classList.add(
            "reduce-motion"
        );

    }


    console.log(
        "Portfolio UI system initialized successfully."
    );

});