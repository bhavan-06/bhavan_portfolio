// SCROLL REVEAL

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


document
    .querySelectorAll(
        ".section, .stat-card, .service-card"
    )
    .forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


// ANIMATED PROGRESS BARS

const skillSection =
    document.getElementById("skills");


const skillObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    document
                        .querySelectorAll(
                            ".progress-bar span"
                        )
                        .forEach(function (bar) {

                            bar.style.width =
                                bar.dataset.width;

                        });

                }

            });

        },

        {
            threshold: 0.3
        }

    );


if (skillSection) {

    skillObserver.observe(skillSection);

}


// COUNTERS

const counters =
    document.querySelectorAll(
        "[data-target]"
    );


const counterObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const element =
                        entry.target;

                    const target =
                        Number(
                            element.dataset.target
                        );

                    let current = 0;

                    const interval =
                        setInterval(function () {

                            current++;

                            element.textContent =
                                current;

                            if (current >= target) {

                                clearInterval(
                                    interval
                                );

                            }

                        }, 2000 / target);

                    counterObserver.unobserve(
                        element
                    );

                }

            });

        }

    );


counters.forEach(function (counter) {

    counterObserver.observe(counter);

});


// TILT CARDS

document
    .querySelectorAll(".tilt-card")
    .forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const rotateX =
                    ((y / rect.height) - 0.5) * -10;

                const rotateY =
                    ((x / rect.width) - 0.5) * 10;

                card.style.transform =
                    `perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0)";

            }
        );

    });