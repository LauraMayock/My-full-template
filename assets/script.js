
//* Variables for the HTML Quiz elements */
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


//* Add functions *//
function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);



// * Quiz question array *//

const myQuestions = [
    {
      question: "What year was the first Kill Bill released?",
      answers: {
        a: "1999",
        b: "2003",
        c: "2001",
        d: "2004",
      },
      correctAnswer: "b"
    },
    {
        question: "By what name is Uma Thurman's character known throughout the film?",
        answers: {
          a: "Black Momba",
          b: "Arlene",
          c: "The Bride",
          d: "she has no name or nickname",
        },
        correctAnswer: "c"
      },
      {
        question: "What color is associated with the Bride?",
        answers: {
          a: "black",
          b: "yellow",
          c: "red",
          d: "white",
        },
        correctAnswer: "b"
      },
      {
        question: "On what scene does the movie open?",
        answers: {
          a: "the massacre at the wedding chapel",
          b: "Vernita Green's house",
          c: "the sheriff's examination of the massacre aftermath",
          d: "the aftermath of the House of Blue Leaves Showdown",
        },
        correctAnswer: "a"
      },
      {
        question: "What was the name of the team of assassins?",
        answers: {
          a: "the Snake Den",
          b: "Deadly Vipers Assassination Squad",
          c: "Operation Snowblood",
          d: "the Snake Charmers",
        },
        correctAnswer: "b"
      },
      {
        question: "What unusual item does Elle Driver wear?",
        answers: {
          a: "a prosthetic foot",
          b: "a neck brace",
          c: "an eyepatch",
          d: "a Medic-Alert bracelet",
        },
        correctAnswer: "b"
      },
      {
        question: "What was Elle Driver's codename during her assassin years?",
        answers: {
          a: "sidewinder",
          b: "water moccasin",
          c: "ball python",
          d: "California mountain snake",
        },
        correctAnswer: "d"
      },
      {
        question: "What is painted on the truck that the Bride drives?",
        answers: {
          a: "Blitzmobile",
          b: "Pussy Wagon",
          c: "Suavecito",
          d: "Vengeance is Mine",
        },
        correctAnswer: "b"
      },
      {
        question: "What question does the Bride repeatedly ask Buck when she wakes up in the hospital?",
        answers: {
          a: "Where am I?",
          b: "Where is my baby?",
          c: "Who am I?",
          d: "Where's Bill?",
        },
        correctAnswer: "d"
      },
      {
        question: "Where is the gun hidden with which Vernita tries to shoot the Bride?",
        answers: {
          a: "a cereal box",
          b: "her purse",
          c: "a dishtowel",
          d: "a hollowed-out Bible",
        },
        correctAnswer: "a"
      },
      {
        question: "Who played Vernita Green?",
        answers: {
          a: "Jade Pinkett Smith",
          b: "Hally Berry",
          c: "Vivica A. Fox",
          d: "Stacey Dash",
        },
        correctAnswer: "c"
      },
      {
        question: "What does the Bride do that tells the sheriff she's not dead?",
        answers: {
          a: "coughs",
          b: "winks at him",
          c: "spits on him",
          d: "opens her eyes",
        },
        correctAnswer: "c"
      },
      {
        question: "Complete the sentence: 'If you encounter God on your travels, __________.'",
        answers: {
          a: "'Take care taht you step aside.'",
          b: "'god will approve.'",
          c: "'God will step aside.'",
          d: "'God will be cut.'",
        },
        correctAnswer: "d"
      },
];