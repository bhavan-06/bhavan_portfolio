const chatButton =
    document.getElementById("chatButton");

const chatContainer =
    document.getElementById("chatContainer");

const closeChat =
    document.getElementById("closeChat");

const userInput =
    document.getElementById("userInput");

const sendButton =
    document.getElementById("sendButton");

const chatMessages =
    document.getElementById("chatMessages");


// OPEN CHAT

chatButton.addEventListener(
    "click",
    function () {

        chatContainer.classList.toggle(
            "active"
        );

    }
);


// CLOSE CHAT

closeChat.addEventListener(
    "click",
    function () {

        chatContainer.classList.remove(
            "active"
        );

    }
);


// SEND MESSAGE

function sendMessage() {

    const message =
        userInput.value.trim();


    if (!message) {

        return;

    }


    addMessage(
        message,
        "user-message"
    );


    userInput.value = "";


    setTimeout(function () {

        const response =
            getBotResponse(message);

        addMessage(
            response,
            "bot-message"
        );

    }, 500);

}


// ADD MESSAGE

function addMessage(
    message,
    className
) {

    const messageElement =
        document.createElement("div");

    messageElement.className =
        className;

    messageElement.textContent =
        message;


    chatMessages.appendChild(
        messageElement
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


// BOT RESPONSE

function getBotResponse(message) {

    message =
        message.toLowerCase();


    if (
        message.includes("skill")
    ) {

        return "Bhavan's skills include Python, Machine Learning, Deep Learning, Artificial Intelligence, Data Science, HTML, CSS and JavaScript.";

    }


    if (
        message.includes("project")
    ) {

        return "Bhavan has worked on Deepfake Detection, Social Media Text Classification and a real-time Weather Application.";

    }


    if (
        message.includes("education") ||
        message.includes("college")
    ) {

        return "Bhavan is pursuing a B.Tech in Artificial Intelligence and Data Science at Jeppiaar Engineering College.";

    }


    if (
        message.includes("experience") ||
        message.includes("intern")
    ) {

        return "Bhavan has internship experience in Artificial Intelligence, Machine Learning and Web Development.";

    }


    if (
        message.includes("contact") ||
        message.includes("email")
    ) {

        return "You can contact Bhavan at abhavankumar@gmail.com.";

    }


    if (
        message.includes("github")
    ) {

        return "You can visit Bhavan's GitHub profile through the GitHub link in this portfolio.";

    }


    return "I can help you learn about Bhavan's skills, projects, education, internship experience and contact information! 😊";

}


// EVENTS

sendButton.addEventListener(
    "click",
    sendMessage
);


userInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);