const questions = [
    {
        question: "¿Cuál es el porcentaje de agua potable en la Tierra?",
        answers: [
            { text: "2.5%", correct: true },
            { text: "5%", correct: false },
            { text: "10%", correct: false },
            { text: "20%", correct: false }
        ],
        explanation: "Solo el 2.5% del agua en la Tierra es potable."
    },
    {
        question: "¿Qué país tiene la mayor reserva de agua dulce?",
        answers: [
            { text: "Brasil", correct: true },
            { text: "Canadá", correct: false },
            { text: "Rusia", correct: false },
            { text: "Estados Unidos", correct: false }
        ],
        explanation: "Brasil tiene la mayor reserva de agua dulce del mundo."
    },
    {
        question: "¿Cuál es el uso principal del agua en la agricultura?",
        answers: [
            { text: "Riego de cultivos", correct: true },
            { text: "Producción de alimentos", correct: false },
            { text: "Consumo humano", correct: false },
            { text: "Generación de energía", correct: false }
        ],
        explanation: "El uso principal del agua en la agricultura es el riego de cultivos."
    },
    {
        question: "¿Qué porcentaje del agua dulce en la Tierra se encuentra en lagos y ríos?",
        answers: [
            { text: "0.3%", correct: true },
            { text: "3%", correct: false },
            { text: "30%", correct: false },
            { text: "50%", correct: false }
        ],
        explanation: "Solo el 0.3% del agua dulce en la Tierra se encuentra en lagos y ríos."
    },
    {
        question: "¿Cuántas personas en el mundo carecen de acceso a agua potable?",
        answers: [
            { text: "Más de 2 mil millones", correct: true },
            { text: "Menos de 500 millones", correct: false },
            { text: "Alrededor de 1 mil millones", correct: false },
            { text: "Cerca de 3 mil millones", correct: false }
        ],
        explanation: "Más de 2 mil millones de personas en el mundo carecen de acceso a agua potable."
    },
    {
        question: "¿Cuál es el país que consume más agua per cápita?",
        answers: [
            { text: "Estados Unidos", correct: true },
            { text: "China", correct: false },
            { text: "India", correct: false },
            { text: "Brasil", correct: false }
        ],
        explanation: "Estados Unidos es el país que consume más agua per cápita."
    },
    {
        question: "¿Cuál es la principal causa de contaminación del agua?",
        answers: [
            { text: "Vertido de desechos industriales", correct: true },
            { text: "Uso agrícola de fertilizantes", correct: false },
            { text: "Vertido de aguas residuales", correct: false },
            { text: "Contaminación por plásticos", correct: false }
        ],
        explanation: "El vertido de desechos industriales es la principal causa de contaminación del agua."
    },
    {
        question: "¿Qué porcentaje del agua dulce en el mundo está atrapado en glaciares y casquetes de hielo?",
        answers: [
            { text: "68.7%", correct: true },
            { text: "50%", correct: false },
            { text: "30%", correct: false },
            { text: "10%", correct: false }
        ],
        explanation: "El 68.7% del agua dulce en el mundo está atrapado en glaciares y casquetes de hielo."
    },
    {
        question: "¿Cuál es el efecto del cambio climático en la disponibilidad de agua?",
        answers: [
            { text: "Incrementa la escasez de agua", correct: true },
            { text: "Aumenta la disponibilidad de agua", correct: false },
            { text: "No tiene impacto en la disponibilidad de agua", correct: false },
            { text: "Disminuye la calidad del agua", correct: false }
        ],
        explanation: "El cambio climático incrementa la escasez de agua en muchas regiones del mundo."
    },
    {
        question: "¿Qué porcentaje del cuerpo humano está compuesto por agua?",
        answers: [
            { text: "Aproximadamente 60%", correct: true },
            { text: "Aproximadamente 40%", correct: false },
            { text: "Aproximadamente 80%", correct: false },
            { text: "Aproximadamente 20%", correct: false }
        ],
        explanation: "Aproximadamente el 60% del cuerpo humano está compuesto por agua."
    },
    {
        question: "¿Cuál es el componente más abundante en el planeta Tierra?",
        answers: [
            { text: "El agua", correct: true },
            { text: "El aire", correct: false },
            { text: "La tierra", correct: false },
            { text: "Los minerales", correct: false }
        ],
        explanation: "El agua es el componente más abundante en el planeta Tierra."
    },
    {
        question: "¿Cuál es la cantidad mínima de agua que una persona necesita para sobrevivir por día?",
        answers: [
            { text: "Aproximadamente 2 litros", correct: true },
            { text: "Aproximadamente 1 litro", correct: false },
            { text: "Aproximadamente 3 litros", correct: false },
            { text: "Aproximadamente 4 litros", correct: false }
        ],
        explanation: "Una persona necesita aproximadamente 2 litros de agua por día para sobrevivir."
    },
    {
        question: "¿Cuánto tiempo puede sobrevivir una persona sin agua?",
        answers: [
            { text: "Aproximadamente 3 días", correct: true },
            { text: "Aproximadamente 1 semana", correct: false },
            { text: "Aproximadamente 2 semanas", correct: false },
            { text: "Aproximadamente 1 mes", correct: false }
        ],
        explanation: "Una persona puede sobrevivir aproximadamente 3 días sin agua."
    },
    {
        question: "¿Cuál es el método más efectivo para purificar agua contaminada?",
        answers: [
            { text: "La ebullición", correct: true },
            { text: "El filtrado", correct: false },
            { text: "El tratamiento químico", correct: false },
            { text: "La destilación", correct: false }
        ],
        explanation: "La ebullición es el método más efectivo para purificar agua contaminada."
    },
    {
        question: "¿Qué porcentaje del agua dulce en el mundo está disponible para consumo humano?",
        answers: [
            { text: "Menos del 1%", correct: true },
            { text: "Alrededor del 10%", correct: false },
            { text: "Alrededor del 25%", correct: false },
            { text: "Más del 50%", correct: false }
        ],
        explanation: "Menos del 1% del agua dulce en el mundo está disponible para consumo humano."
    },
    {
        question: "¿Cuál es el mayor uso de agua en los hogares?",
        answers: [
            { text: "El baño", correct: true },
            { text: "La cocina", correct: false },
            { text: "El lavado de ropa", correct: false },
            { text: "El riego de jardines", correct: false }
        ],
        explanation: "El mayor uso de agua en los hogares es el baño."
    },
    {
        question: "¿Cuánto tiempo tarda una botella de plástico en degradarse en el agua?",
        answers: [
            { text: "Aproximadamente 450 años", correct: true },
            { text: "Aproximadamente 100 años", correct: false },
            { text: "Aproximadamente 50 años", correct: false },
            { text: "Aproximadamente 1000 años", correct: false }
        ],
        explanation: "Una botella de plástico puede tardar aproximadamente 450 años en degradarse en el agua."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let shuffledQuestions = [];

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer');
const feedbackElement = document.getElementById('feedback');
const feedbackMessageElement = document.getElementById('feedback-message');
const explanationElement = document.getElementById('explanation');
const scoreElement = document.getElementById('score');
const nextQuestionButton = document.getElementById('next-question');
const nextLevelButton = document.getElementById('next-level');
const viewResultsButton = document.getElementById('view-results');
const resultsContainer = document.getElementById('results');
const resultsMessageElement = document.getElementById('results-message');
const restartQuizButton = document.getElementById('restart-quiz');

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    scoreElement.textContent = `Puntos: ${score}`;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    feedbackElement.classList.add('hidden');
    nextQuestionButton.classList.add('hidden');
    nextLevelButton.classList.add('hidden');
    viewResultsButton.classList.add('hidden');
    resultsContainer.classList.add('hidden');
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
    answerButtons.forEach((button, index) => {
        button.textContent = shuffledAnswers[index].text;
        button.dataset.correct = shuffledAnswers[index].correct;
        button.classList.remove('correct', 'incorrect');
        button.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    showFeedback(correct);

    if (correct) {
        score += 10;
        correctAnswers++;
        scoreElement.textContent = `Puntos: ${score}`;
    } else {
        explanationElement.textContent = shuffledQuestions[currentQuestionIndex].explanation;
        explanationElement.classList.remove('hidden');
    }

    feedbackElement.classList.remove('hidden');
    answerButtons.forEach(button => {
        button.removeEventListener('click', selectAnswer);
    });

    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        viewResultsButton.classList.remove('hidden');
        nextQuestionButton.classList.add('hidden');
    } else {
        nextQuestionButton.classList.remove('hidden');
    }

    if (score >= 50 && currentQuestionIndex !== shuffledQuestions.length - 1) {
        nextLevelButton.classList.remove('hidden');
    }
}

function showFeedback(isCorrect) {
    if (isCorrect) {
        feedbackMessageElement.textContent = "Correcto";
        feedbackMessageElement.classList.add('correct');
        feedbackMessageElement.classList.remove('incorrect');
    } else {
        feedbackMessageElement.textContent = "Incorrecto";
        feedbackMessageElement.classList.add('incorrect');
        feedbackMessageElement.classList.remove('correct');
    }
}

function viewResults() {
    resultsContainer.classList.remove('hidden');
    resultsMessageElement.textContent = `Has contestado correctamente ${correctAnswers} de ${shuffledQuestions.length} preguntas. Puntuación final: ${score}`;
    restartQuizButton.classList.remove('hidden');
}

function restartQuiz() {
    resultsContainer.classList.add('hidden');
    startGame();
}

nextQuestionButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    feedbackElement.classList.add('hidden');
    nextQuestionButton.classList.add('hidden');
    explanationElement.classList.add('hidden');
});

viewResultsButton.addEventListener('click', viewResults);
restartQuizButton.addEventListener('click', restartQuiz);

startGame();