const questions = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    options: ["var x = 5;", "int x = 5;", "declare x = 5;", "variable x = 5;"],
    answer: "var x = 5;"
  },
  {
    question: "Which symbol is used for strict equality comparison in JavaScript?",
    options: ["==", "===", "=", "<>"],
    answer: "==="
  },
  {
    question: "What is the output of 'typeof null' in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'null value'"],
    answer: "'object'" 
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: "const"
  },
  {
    question: "What does 'this' refer to in a regular function?",
    options: ["The global object", "The object calling the method", "The function itself", "Undefined"],
    answer: "The object calling the method"
  },
  {
    question: "Which of these is NOT a primitive data type in JavaScript?",
    options: ["Number", "String", "Object", "Boolean"],
    answer: "Object"
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    answer: "// comment"
  },
  {
    question: "What is the purpose of 'try...catch' in JavaScript?",
    options: ["To handle errors", "To declare variables", "To loop over data", "To define functions"],
    answer: "To handle errors"
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: "JSON.parse()"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const resultEl = document.getElementById('result');

window.onload = () => {
  resetQuiz();
};

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion(currentQuestionIndex);
  backBtn.style.display = 'none'; 
  resultEl.classList.add('hide'); 
  document.getElementById('quiz-container').classList.remove('hide'); 
  
}

function loadQuestion(index) {
  const q = questions[index];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('div');
    btn.className = 'option';
    btn.innerText = option;
    btn.onclick = () => {
  
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  
      btn.classList.add('selected');
    };
    optionsEl.appendChild(btn);
  });

  backBtn.style.display = index === 0 ? 'none' : 'inline-block';
}

nextBtn.onclick = () => {
  const selectedOption = document.querySelector('.option.selected');

  if (selectedOption) {
    if (selectedOption.innerText === questions[currentQuestionIndex].answer) {
      score++;
    }
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
};

backBtn.onclick = () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
};

function showResult() {
  document.getElementById('quiz-container').classList.add('hide'); // hide quiz

  const resultDiv = document.getElementById('result');
  resultDiv.classList.remove('hide');

    resultDiv.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
    <button onclick="restartQuiz()">Back</button>
  `;
}

function restartQuiz() {
  resetQuiz();
}
