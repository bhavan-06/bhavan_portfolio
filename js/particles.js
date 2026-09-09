const canvas = document.createElement("canvas");

canvas.id = "particleCanvas";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

let particles = [];


function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


class Particle {

    constructor() {

        this.x =
            Math.random() * canvas.width;

        this.y =
            Math.random() * canvas.height;

        this.size =
            Math.random() * 2 + 1;

        this.speedX =
            (Math.random() - 0.5) * 0.5;

        this.speedY =
            (Math.random() - 0.5) * 0.5;

    }


    update() {

        this.x += this.speedX;

        this.y += this.speedY;


        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {

            this.speedX *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.speedY *= -1;

        }

    }


    draw() {

        ctx.fillStyle =
            "rgba(139, 92, 246, 0.5)";

        ctx.beginPath();

        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI * 2

        );

        ctx.fill();

    }

}


function createParticles() {

    particles = [];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {

        for (
            let b = a + 1;
            b < particles.length;
            b++
        ) {

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                ctx.strokeStyle =
                    `rgba(
                        139,
                        92,
                        246,
                        ${1 - distance / 120}
                    )`;

                ctx.lineWidth = 0.5;

                ctx.beginPath();

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}


function animateParticles() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );


    particles.forEach(

        function (particle) {

            particle.update();

            particle.draw();

        }

    );


    connectParticles();


    requestAnimationFrame(
        animateParticles
    );

}


createParticles();

animateParticles();