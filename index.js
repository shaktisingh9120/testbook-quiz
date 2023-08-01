const htmlQuiz = [
    {
        qNo: 0,
        question: "HTML stands for:",
        options: ["Hyperlinks and Text Markup Language.", "Hyper Text Markup Language.", "Home Tool Markup Language.", "Home Text Markup Language."],
        correct: 2
    },

    {
        qNo: 1,
        question: "Which of the following tags is used to define a paragraph in HTML?",
        options: ["para", "ph", "prh", "p"],
        correct: 4
    },

    {
        qNo: 2,
        question: "Which of the following is the feature of markup language?",
        options: ["Language that used tags.", "Language is more readable human friendly.", "It does not have typical programming syntax.", "All of the above."],
        correct: 4
    },

    {
        qNo: 3,
        question: "The tag used to give the largest heading?",
        options: ["h1", "h2", "h6", "h3"],
        correct: 1
    },

    {
        qNo: 4,
        question: "What are the two types of elements in HTML?",
        options: ["Primary and secondary elements.", "Block level and inline elements.", "Block level and secondary level elements.", "Primary level and inline elements."],
        correct: 2
    },

    {
        qNo: 5,
        question: "Where the attributes should appear on the element?",
        options: ["Opening tag.", "Along with the content.", "Closing tag.", "Either in the opening or closing tag."],
        correct: 1
    },

    {
        qNo: 6,
        question: "The text notes added to the program to provide explanatory information about the code is known as",
        options: ["Explanation.", "Extra information.", "Comments.", "Information."],
        correct: 3
    },

    {
        qNo: 7,
        question: "The elements inside other elements are known as ",
        options: ["Sub elements.", "Child elements.", "Nested elements.", "Both 1 and 2."],
        correct: 3
    },

    {
        qNo: 8,
        question: "Visited links in HTML appear in",
        options: ["blue and underlined.", "red and underlined.", "blue and italics.", "purple and underlined."],
        correct: 4
    },

    {
        qNo: 9,
        question: "Which attribute is used to give the destination address in a <a> tag of HTML?",
        options: ["href", "type", "address", "link"],
        correct: 1
    }
];

// CSS Quiz Array:
const cssQuiz = [
    {
        qNo: 0,
        question: "What are the three ways to include styles in CSS?",
        options: ["Inline CSS.", "Internal CSS.", "External CSS.", "All the above."],
        correct: 4
    },
    {
        qNo: 1,
        question: "Which of the following is not the best practice to include CSS?",
        options: ["Internal CSS.", "Inline CSS.", "External CSS.", "None of the above."],
        correct: 1
    },

    {
        qNo: 2,
        question: "What are the types of units used in CSS?",
        options: ["Absolute and non-absolute units.", "Absolute and relative units.", "Relative and non-relative units.", "None of the above."],
        correct: 2
    },

    {
        qNo: 3,
        question: "The selector that uses tag name for applying styles is known as",
        options: ["Type selector.", "Element selector.", "Universal selector.", "Both a and b."],
        correct: 4
    },

    {
        qNo: 4,
        question: "Which of the following properties is used to adjust the transparency of the background color?",
        options: ["transparency", "transparent", "opacity", "opaque"],
        correct: 3
    },

    {
        qNo: 5,
        question: "HTML elements are described as being in",
        options: ["Rectangle boxes", "Circles", "Cubes", "Triangle boxes"],
        correct: 1
    },
    {
        qNo: 6,
        question: "Which of the following is not a part of the box model?",
        options: ["Padding", "Content", "Radius", "Margin"],
        correct: 3
    },

    {
        qNo: 7,
        question: "What is the area between the content and the border?",
        options: ["Width", "Content", "Margin", "Padding"],
        correct: 4
    },

    {
        qNo: 8,
        question: "Which type of margin collapses?",
        options: ["Top and bottom", "Left and right", "Top and left", "Bottom and right"],
        correct: 1
    },

    {
        qNo: 9,
        question: "Which of the following margin properties allows center content?",
        options: ["inherit", "dissolve", "center", "auto"],
        correct: 4
    }

];

// JavaScript Quiz Array:
const jsQuiz = [
    {
        qNo: 0,
        question: "The JavaScript language is _______.",
        options: ["Object based", "Object oriented", "High level", "Assembly language"],
        correct: 1
    },
    {
        qNo: 1,
        question: "Which of the following is an extension of the script file?",
        options: [".javascript", ".js", ".java", ".script"],
        correct: 2
    },
    {
        qNo: 2,
        question: "Which of the following attributes has the link of the external JavaScript file?",
        options: ["href", "link", "file", "src"],
        correct: 4
    },
    {
        qNo: 3,
        question: "In which part of the HTML code, the script can be included?",
        options: ["Only inside <head>", "Only inside <body>", "Either inside <head> or <body>", "Only inside <meta> of <head>"],
        correct: 3,
    },
    {
        qNo: 4,
        question: "Which of the following JavaScript methods is used to access the HTML element by using the id of the element?",
        options: ["getIdElementBy()", "getByElementId()", "getElementById()", "getElementIdBy()"],
        correct: 3
    },
    {
        qNo: 5,
        question: "Which of the following is used by the getElementById() method to access the elements?",
        options: ["Class name of the HTML elements.", "Unique id of the HTML elements.", "Tag name of the HTML elements.", "Name of the HTML elements."],
        correct: 2
    },
    {
        qNo: 6,
        question: "Which of the following is true about JavaScript?",
        options: ["JavaScript is a compiled language", "JavaScript is a scripting language", "JavaScript is an assembly language", "JavaScript is a styling language"],
        correct: 2
    },
    {
        qNo: 7,
        question: "Which of the following is the name of the data storing containers?",
        options: ["Literals", "Variables", "Operators", "None of the above"],
        correct: 2
    },
    {
        qNo: 8,
        question: "Which of the following keywords are used  to  declare the variables in JavaScript?",
        options: ["let", "var", "const", "All of the above"],
        correct: 4
    },
    {
        qNo: 9,
        question: "Which of the following variables can be defined anywhere in the JavaScript code?",
        options: ["Global Variable", "Local Variable", "All of the above", "None of the above"],
        correct: 1,
    }
];

// Bootstrap Quiz Array:
const bootstrapQuiz = [
    {
        qNo: 0,
        question: "What is bootstrap?",
        options: ["Front-end framework", "Back-end framework", "API framework", "None of the above."],
        correct: 1
    },

    {
        qNo: 1,
        question: "Which of the following is an advantage of Bootstrap?",
        options: ["Easy to use.", "Responsive features.", "Browser compatibility.", "All the above."],
        correct: 4
    },

    {
        qNo: 2,
        question: "How to use bootstrap in web design?",
        options: ["By downloading the bootstrap from the official website.", "By including the CDN in HTML.", "Either a or b.", "Both a and b."],
        correct: 3
    },

    {
        qNo: 3,
        question: "CDN stands for",
        options: ["Content Delivery Network.", "Content Design Network.", "CSS Delivery Network.", "CSS Design Network."],
        correct: 1
    },

    {
        qNo: 4,
        question: "Types of container classes available in bootstrap5?",
        options: ["One", "Two", "Three", "Four"],
        correct: 2
    },

    {
        qNo: 5,
        question: "Which of the following classes should be added to get dark background color to the container?",
        options: [".bg-black", ".bg-light", ".bg-dark", ".bg-thick"],
        correct: 3
    },

    {
        qNo: 6,
        question: "Which of the following classes is used to quote blocks of content from another source?",
        options: [".quote", ".blockquote", ".block", ".quoteblock"],
        correct: 2
    },
    {
        qNo: 7,
        question: "Which of the following classes is used to left-align the text?",
        options: [".text-start", ".text-end", ".text-left", ".text-right"],
        correct: 1
    },
    {
        qNo: 8,
        question: "______ are used to add additional information to any content.",
        options: ["Additional info", "Add info", "Badges", "Containers"],
        correct: 3
    },
    {
        qNo: 9,
        question: "The ______ class to make the badges more round.",
        options: [".round-pill", ".rounded-pill", ".round-badge", ".rounded-badge"],
        correct: 2
    }
];

// Declaring necessary variables globally:
var count;
var counter;
var user = '';

// Getting user name and saying hello:
var enterBtn = document.getElementsByClassName('enterBtn');
enterBtn[0].addEventListener('click', function () {
    user = document.getElementsByName('user')[0].value;
    document.getElementById('userName').innerHTML = "Hello " + user;
    document.getElementsByTagName('h3')[0].innerHTML = "Please select a category to continue...";

});

// Grabbing various element using ID:
const question = document.getElementById('question-box');
const score = document.getElementById('score');
const timer = document.getElementById('timer');
const optBtn = document.getElementsByClassName('option');
const next = document.getElementById('next');
const quizContainer = document.getElementById('quiz-container');
const quizResult = document.getElementById('quizResult');
const resultButton = document.getElementById('resultBtn');
const startAgain = document.getElementById('restartQuiz');

// storing quiz name according to selected category
var quizName;

// function quiz start to start the quiz:
function quizStart(qname) {
    quizName = qname;
    var quizArray = [];
    document.getElementById('show').style.display = 'none';
    quizContainer.style.display = 'block';
    document.getElementById('quiz-header').innerHTML = qname.toUpperCase();
    var start = true;
    var qNo = 0;
    var correctQues = 0;
    var incorrectQues = 0;
    var quizScore = 0;

    // pushing questions in quizarray according to selected category:
    switch (quizName) {
        case 'html': Array.prototype.push.apply(quizArray, htmlQuiz);
            break;
        case 'css': Array.prototype.push.apply(quizArray, cssQuiz);
            break;
        case 'javascript': Array.prototype.push.apply(quizArray, jsQuiz);
            break;
        case 'bootstrap': Array.prototype.push.apply(quizArray, bootstrapQuiz);
            break;
        default:
            break;
    }

    // calling timer function as the quiz starts
    startTimer();

    // Quiz function called with question number
    // here question number corresponds to question index in quiz array
    function quiz(qNo) {
        // Current questionn number:
        document.getElementById('ques-number').innerText = (qNo + 1) + "/10"

        // Populating question and and options in quiz box:
        question.innerHTML = "<p>" + quizArray[qNo].question + "</p>";
        for (let i = 0; i < 4; i++) {
            optBtn[i].innerText = quizArray[qNo].options[i];
        }

        // Checking correct or incorrect question according to option selected:
        optBtn[0].onclick = function () {
            if (optBtn[0].value == quizArray[qNo].correct) {
                quizScore += 1;
                correctQues += 1;
                console.log(quizScore);
                optBtn[0].style.backgroundColor = "green";
            } else {
                optBtn[0].style.backgroundColor = "red";
                incorrectQues += 1;
            }
            score.innerHTML = quizScore;
            disableButton();
        }
        optBtn[1].onclick = function () {
            if (optBtn[1].value == quizArray[qNo].correct) {
                quizScore += 1;
                correctQues += 1;
                console.log(quizScore);
                optBtn[1].style.backgroundColor = "green";
            } else {
                optBtn[1].style.backgroundColor = "red";
                incorrectQues += 1;
            }
            score.innerHTML = quizScore;
            disableButton();
        }
        optBtn[2].onclick = function () {
            if (optBtn[2].value == quizArray[qNo].correct) {
                quizScore += 1;
                correctQues += 1;
                console.log(quizScore);
                optBtn[2].style.backgroundColor = "green";


            } else {
                optBtn[2].style.backgroundColor = "red";
                incorrectQues += 1;
            }
            score.innerHTML = quizScore;
            disableButton();
        }
        optBtn[3].onclick = function () {
            if (optBtn[3].value == quizArray[qNo].correct) {
                quizScore += 1;
                correctQues += 1;
                console.log(quizScore);
                optBtn[3].style.backgroundColor = "green";
            } else {
                optBtn[3].style.backgroundColor = "red";
                incorrectQues += 1;
            }
            score.innerHTML = quizScore;
            disableButton();
        }
    }

    // Starting quiz from question one i.e. zero index. start will be false after below statement
    if (start) {
        quiz(0);
    }

    // Handling next button
    next.onclick = function () {
        start = false;
        for (let k = 0; k < 4; k++) {
            optBtn[k].style.backgroundColor = "buttonface";
        }
        if (qNo < 9) {
            enableButton();
            qNo++;
            quiz(qNo);
            // console.log(qNo);
        } else {
            stopTimer();
            // next.style.display = 'none';
            resultButton.style.display = "inline";
        }
    }
    // Displaying result:
    resultButton.addEventListener('click', () => {
        quizContainer.style.display = 'none';
        document.getElementById('user').innerHTML = user;
        document.getElementById('timeTaken').innerHTML = (100 - count) + " seconds"
        document.getElementById('attemptedQues').innerHTML = correctQues + incorrectQues;
        document.getElementById('correctQues').innerHTML = correctQues;
        document.getElementById('wrongQues').innerHTML = incorrectQues;
        document.getElementById('percenQues').innerHTML = (quizScore * 10) + '%';
        quizResult.style.display = 'block';
    });
}

// Handling go home button:
const goHome = document.getElementById('goHome');
goHome.onclick = function () {
    quizName = '';
    start = true;
    document.getElementById('show').style.display = 'block';
    quizResult.style.display = 'none';
    next.style.display = 'inline';
    resultButton.style.display = "none";
    enableButton();
}

// Handling start again button
startAgain.onclick = function () {
    quizContainer.style.display = 'block';
    quizResult.style.display = 'none';
    resultButton.style.display = "none";

    next.style.display = 'inline';
    quizStart(quizName);
    enableButton();
}

// Start Timer function
function startTimer() {
    count = 100;
    counter = setInterval(function () {
        if (count > 0) {
            timer.innerHTML = count;
            count--;
        } else {
            timer.innerHTML = "0";
            clearTimeout(counter);

        }
    }, 1000);
}

// Stop Timer Function
function stopTimer() {
    timer.innerHTML = count;
    clearInterval(counter);
}

//Enable button function
function enableButton() {
    for (let i = 0; i <= 3; i++) {
        optBtn[i].disabled = false;
    }
}

// Button disable function
function disableButton() {
    for (let i = 0; i <= 3; i++) {
        optBtn[i].disabled = true;
    }
}