const projectsGrid =
    document.getElementById("projectsGrid");

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


function displayProjects(filter = "all") {

    projectsGrid.innerHTML = "";


    const filteredProjects =
        filter === "all"

            ? portfolioData.projects

            : portfolioData.projects.filter(

                function (project) {

                    return project.category === filter;

                }

            );


    filteredProjects.forEach(
        function (project) {
            const projectCard = document.createElement("article");
            projectCard.className = "project-card";
            projectCard.setAttribute("tabindex", "0");
            projectCard.setAttribute("role", "button");
            projectCard.setAttribute("aria-label", "View project details for " + project.title);

            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-card-expand-badge">
                        <i class="fa-solid fa-expand"></i>
                        <span>Explore</span>
                    </div>
                </div>

                <div class="project-content">
                    <span class="project-category">
                        ${project.categoryLabel || project.category.toUpperCase()}
                    </span>

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                    <small>
                        ${project.technologies}
                    </small>
                </div>
            `;

            projectCard.addEventListener("click", function () {
                if (typeof openProjectModal === "function") {
                    openProjectModal(project);
                }
            });

            projectCard.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (typeof openProjectModal === "function") {
                        openProjectModal(project);
                    }
                }
            });

            projectsGrid.appendChild(projectCard);
        }
    );

}


displayProjects();


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                displayProjects(
                    button.dataset.filter
                );

            }
        );

    }
);