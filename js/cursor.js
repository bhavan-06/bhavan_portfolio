const cursor = document.querySelector(".cursor");
const cursorTrail = document.querySelector(".cursor-trail");

if (cursor && cursorTrail) {
    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let isVisible = false;

    // Track mouse position and update main cursor immediately
    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

        if (!isVisible) {
            cursor.style.opacity = "1";
            cursorTrail.style.opacity = "1";
            isVisible = true;
        }
    });

    // Smooth physics-based trailing motion for spider web ring
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.2;
        trailY += (mouseY - trailY) * 0.2;

        cursorTrail.style.left = trailX + "px";
        cursorTrail.style.top = trailY + "px";

        requestAnimationFrame(animateTrail);
    }
    requestAnimationFrame(animateTrail);

    // Hide custom cursor when mouse leaves window
    document.addEventListener("mouseleave", function () {
        cursor.style.opacity = "0";
        cursorTrail.style.opacity = "0";
        isVisible = false;
    });

    // Restore custom cursor when mouse enters window
    document.addEventListener("mouseenter", function () {
        cursor.style.opacity = "1";
        cursorTrail.style.opacity = "1";
        isVisible = true;
    });

    // Interactive hover effects on links, buttons, and cards
    document.addEventListener("mouseover", function (e) {
        if (e.target.closest("a, button, input, textarea, select, [role='button'], .magnetic-button, .project-card, .skill-category, .service-card, .achievement-card, .theme-toggle, .mobile-menu")) {
            cursor.classList.add("cursor-hover");
            cursorTrail.classList.add("cursor-trail-hover");
        }
    });

    document.addEventListener("mouseout", function (e) {
        if (e.target.closest("a, button, input, textarea, select, [role='button'], .magnetic-button, .project-card, .skill-category, .service-card, .achievement-card, .theme-toggle, .mobile-menu")) {
            cursor.classList.remove("cursor-hover");
            cursorTrail.classList.remove("cursor-trail-hover");
        }
    });

    // Click reaction
    document.addEventListener("mousedown", function () {
        cursor.classList.add("cursor-click");
    });

    document.addEventListener("mouseup", function () {
        cursor.classList.remove("cursor-click");
    });
}
