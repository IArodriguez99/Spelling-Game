const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Author', correct: true },
      { text: 'Auther', correct: false }
    ]
  },
  {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Dolphin', correct: true },
      { text: 'Dolphine', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Alphabit', correct: false },
      { text: 'Alphabet', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'When', correct: true },
      { text: 'Wen', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Wear', correct: true },
      { text: 'Ware', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Car', correct: false },
      { text: 'Care', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Phonics', correct: true },
      { text: 'Phoniks', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Said', correct: true },
      { text: 'Sed', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Thay', correct: false },
      { text: 'They', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Has', correct: true },
      { text: 'Haz', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Our', correct: true },
      { text: 'Ouer', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Says', correct: true },
      { text: 'Ses', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Thare', correct: false },
      { text: 'There', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Bulge', correct: true },
      { text: 'Buldge', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Adjust', correct: true },
      { text: 'Ajust', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Naw', correct: false },
      { text: 'Gnaw', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Metil', correct: false },
      { text: 'Metal', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Nostrul', correct: false },
      { text: 'Nostril', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Wait', correct: true },
      { text: 'Wate', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Tinsil', correct: false },
      { text: 'Tinsel', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Anoy', correct: false },
      { text: 'Annoy', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Each', correct: true },
      { text: 'Ech', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Meant', correct: true },
      { text: 'Ment', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Tuesday', correct: true },
      { text: 'Tosday', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Thrday', correct: false },
      { text: 'Thursday', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Clue', correct: true },
      { text: 'Clu', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Bisy', correct: false },
      { text: 'Busy', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Haf', correct: false },
      { text: 'Half', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Hole', correct: true },
      { text: 'Hol', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Any', correct: true },
      { text: 'Eny', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Whole', correct: true },
      { text: 'Whol', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Meny', correct: false },
      { text: 'Many', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Nisest', correct: false },
      { text: 'Nicest', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Sixes', correct: true },
      { text: 'Sixis', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Wurm', correct: false },
      { text: 'Worm', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Always', correct: true },
      { text: 'Alweas', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Quantiy', correct: false },
      { text: 'Quantity', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Towereds', correct: false },
      { text: 'Towards', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Cudnt', correct: false },
      { text: 'Couldnt', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Woold', correct: false },
      { text: 'Would', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Should', correct: true },
      { text: 'Shood', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Could', correct: true },
      { text: 'Cood', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Ho', correct: false  },
      { text: 'Who', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Whut', correct: false },
      { text: 'What', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'When', correct: true },
      { text: 'Wen', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Where', correct: true },
      { text: 'Whare', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Wy', correct: false },
      { text: 'Why', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Gos', correct: false },
      { text: 'Goes', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Gruw', correct: false },
      { text: 'Grew', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Cathies', correct: false },
      { text: 'Catches', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Poket', correct: false },
      { text: 'Pocket', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'School', correct: true },
      { text: 'Shool', correct: false }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Pol', correct: false },
      { text: 'Pull', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Enrgy', correct: false },
      { text: 'Energy', correct: true }
    ]
  }, {
    question: 'Which word is spelled correctly?',
    answers: [
      { text: 'Hosptial', correct: false },
      { text: 'Hospital', correct: true }
    ]
  } 
];