let projectModal, modalClose, modalBackdrop, modalVideo, modalImage,
    modalTitle, modalCategory, modalDetailedDesc, modalHighlightsList,
    modalFeaturesList, modalTechTags, modalGithubLink;

function initModalElements() {
    projectModal = document.getElementById("projectModal");
    modalClose = document.getElementById("modalClose");
    modalBackdrop = document.getElementById("modalBackdrop");
    modalVideo = document.getElementById("modalVideo");
    modalImage = document.getElementById("modalImage");
    modalTitle = document.getElementById("modalTitle");
    modalCategory = document.getElementById("modalCategory");
    modalDetailedDesc = document.getElementById("modalDetailedDescription");
    modalHighlightsList = document.getElementById("modalHighlightsList");
    modalFeaturesList = document.getElementById("modalFeaturesList");
    modalTechTags = document.getElementById("modalTechTags");
    modalGithubLink = document.getElementById("modalGithubLink");

    if (modalClose) {
        modalClose.removeEventListener("click", closeProjectModal);
        modalClose.addEventListener("click", closeProjectModal);
    }

    if (modalBackdrop) {
        modalBackdrop.removeEventListener("click", closeProjectModal);
        modalBackdrop.addEventListener("click", closeProjectModal);
    }
}

function openProjectModal(project) {
    if (!projectModal) {
        initModalElements();
    }
    if (!projectModal) return;

    // Populate visual preview
    if (modalImage) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
    }

    // Category and Title
    if (modalCategory) {
        modalCategory.textContent = project.categoryLabel || project.category.toUpperCase();
    }
    if (modalTitle) {
        modalTitle.textContent = project.title;
    }

    // Detailed explanation
    if (modalDetailedDesc) {
        modalDetailedDesc.textContent = project.detailedDescription || project.description;
    }

    // Key Highlights
    if (modalHighlightsList) {
        const highlights = project.highlights || [];
        modalHighlightsList.innerHTML = highlights.map(function (item) {
            return '<li><i class="fa-solid fa-check"></i> <span>' + item + '</span></li>';
        }).join("");
    }

    // Core Features List
    if (modalFeaturesList) {
        const features = project.features || [];
        modalFeaturesList.innerHTML = features.map(function (item) {
            return '<li><i class="fa-solid fa-arrow-right"></i> <span>' + item + '</span></li>';
        }).join("");
    }

    // Technologies Tags
    if (modalTechTags) {
        const techs = (project.technologies || "").split(",");
        modalTechTags.innerHTML = techs.map(function (t) {
            const trimmed = t.trim();
            return trimmed ? '<span class="tech-tag">' + trimmed + '</span>' : '';
        }).join("");
    }

    // GitHub repository link
    if (modalGithubLink) {
        modalGithubLink.href = project.github || portfolioData.github || "#";
    }

    // Background Playing Video
    if (modalVideo && project.video) {
        modalVideo.src = project.video;
        modalVideo.load();
        const playPromise = modalVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(function (err) {
                console.log("Background video autoplay policy handled:", err);
            });
        }
    }

    // Open Modal
    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    if (!projectModal) {
        initModalElements();
    }
    if (!projectModal) return;

    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Pause and reset background video to save memory and CPU
    if (modalVideo) {
        modalVideo.pause();
        modalVideo.removeAttribute("src");
        modalVideo.load();
    }
}

// Initialize on DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initModalElements);
} else {
    initModalElements();
}

// Escape key to close
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
        closeProjectModal();
    }
});
