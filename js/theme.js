const themeToggle =
    document.getElementById("themeToggle");


// CHECK SAVED THEME

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.setAttribute(
        "data-theme",
        "light"
    );

}


// TOGGLE THEME

themeToggle.addEventListener(
    "click",
    function () {

        const currentTheme =
            document.body.getAttribute(
                "data-theme"
            );


        if (currentTheme === "light") {

            document.body.removeAttribute(
                "data-theme"
            );


            localStorage.setItem(
                "theme",
                "dark"
            );


        } else {

            document.body.setAttribute(
                "data-theme",
                "light"
            );


            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);