const questions = [
    {
        question: "Qual é a função utilizada para exibir uma mensagem em uma janela simples de alerta no navegador?",
        answers: [
            {id: 1, text: "Window.prompt()", correct: false},
            {id: 2, text: "Window.alert()", correct: true},
            {id: 3, text: "Console.log()", correct: false},
            {id: 4, text: "Window.confirm()", correct: false},
        ]
    },
    {
        question: "O método Window.confirm() retorna qual tipo de valor?",
        answers: [
           {id: 1, text: "Número inteiro", correct: false},
            {id: 2, text: "String", correct: true},
            {id: 3, text: "Boolean", correct: false},
            {id: 4, text: "Objeto", correct: false},
        ],
    },
    {
        question: "O que acontece se o usuário clicar em CANCELAR em Window.prompt()?",
        answers: [
           {id: 1, text: "O valor retornado será uma String vazia", correct: false},
            {id: 2, text: "O valor retornado será NULL", correct: true},
            {id: 3, text: "O código gera erro", correct: false},
            {id: 4, text: "O valor retornado será falso", correct: false},
        ],
    },
    {
        question: "Qual dessas palavras-chave é usada para declarar uma variável em JavaScript?",
        answers: [
           {id: 1, text: "int", correct: false},
            {id: 2, text: "var", correct: true},
            {id: 3, text: "define", correct: false},
            {id: 4, text: "declare", correct: false},
        ],
    },
    {
        question: "Qual destas é uma forma válida de declarar uma função em JavaScript?",
        answers: [
           {id: 1, text: "function = minhaFuncao()", correct: false},
            {id: 2, text: "func minhaFuncao() {}", correct: false},
            {id: 3, text: "function minhaFuncao () {}", correct: true},
            {id: 4, text: "create function minhaFuncao () {}", correct: false},
        ],
    },
    {
        question: "Qual é resultado da expressão TYPEOF NULL em JavaScript?",
        answers: [
           {id: 1, text: "object", correct: false},
            {id: 2, text: "null", correct: true},
            {id: 3, text: "undefined", correct: false},
            {id: 4, text: "boolean", correct: false},
        ],
    },
    {
        question: "Qual destas estruturas permite percorrer os elementos de um array?",
        answers: [
           {id: 1, text: "while", correct: false},
            {id: 2, text: "for", correct: false},
            {id: 3, text: "forEach", correct: false},
            {id: 4, text: "Todas as anteriores", correct: true},
        ],
    },
    {
        question: "Qual é a saída do código console.log(typeof naN);?",
        answers: [
           {id: 1, text: "number", correct: true},
            {id: 2, text: "naN", correct: false},
            {id: 3, text: "undeFined", correct: false},
            {id: 4, text: "object", correct: false},
        ],
    },
    {
        question: "Qual método é usado para remover o último item de um array em JavaScript",
        answers: [
           {id: 1, text: "pop()", correct: true},
            {id: 2, text: "remove()", correct: false},
            {id: 3, text: "deleteLast()", correct: false},
            {id: 4, text: "shift", correct: false},
        ],
    },
    {
        question: "Qual das opções abaixo é usada para converter uma string em número inteiro em JavaScript?",
        answers: [
           {id: 1, text: "parseInt()", correct: true},
            {id: 2, text: "toInteger()", correct: false},
            {id: 3, text: "int()", correct: false},
            {id: 4, text: "NumberString", correct: false},
        ],
    },
    {
        question: "Qual destas opções NÃO é um tipo de dado primitivo em JavaScript?",
        answers: [
           {id: 1, text: "string", correct: false},
            {id: 2, text: "boolean", correct: false},
            {id: 3, text: "object", correct: true},
            {id: 4, text: "number", correct: false},
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();

}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

    })
}

startQuiz();






