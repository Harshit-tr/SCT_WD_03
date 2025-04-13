import React, { useState } from "react";
import './style.css'
function Questions() {
    const questions = [
        {
          question: "What is JSX?",
          answer: "JSX stands for JavaScript XML. It allows writing HTML in React.",
        },
        {
          question: "What is Virtual DOM in React?",
          answer: "A lightweight copy of the real DOM used for performance optimization.",
        },
        {
          question: "What is the difference between useEffect and useLayoutEffect?",
          answer:
            "useEffect runs asynchronously after render, while useLayoutEffect runs synchronously before the browser paints the screen.",
        },
        {
          question: "What are Higher-Order Components (HOCs) in React?",
          answer: "A function that takes a component and returns a new enhanced component.",
        },
        {
          question: "What is the difference between Context API and Redux?",
          answer: "Context API is built-in for small apps, Redux is for complex state management.",
        },
        {
          question: "What is the difference between state and props in React?",
          answer: "State is mutable and private to the component; Props are immutable and passed down.",
        },
        {
          question: "What is an uncontrolled component in React?",
          answer:
            "A component where form data is handled by the DOM instead of React state.",
        },
        {
          question: "Explain event delegation in JavaScript.",
          answer:
            "Event delegation is a technique where a parent handles events for dynamically added child elements.",
        },
        {
          question: "What is the significance of key props in React lists?",
          answer:
            "Keys help React identify which items changed, are added, or removed for efficient re-rendering.",
        },
        {
          question: "What is the difference between debouncing and throttling?",
          answer:
            "Debouncing delays execution until after a pause, while throttling ensures execution at regular intervals.",
        },
        {
          question: "What are closures in JavaScript?",
          answer:
            "A closure is a function that remembers the variables from its lexical scope even when executed outside.",
        },
        {
          question: "What is hoisting in JavaScript?",
          answer:
            "Hoisting moves variable and function declarations to the top of their scope before execution.",
        },
        {
          question: "Explain the execution context in JavaScript.",
          answer:
            "Execution context contains the variable environment, scope chain, and 'this' reference during execution.",
        },
        {
          question: "What is the difference between == and === in JavaScript?",
          answer: "== checks value equality, while === checks both value and type equality.",
        },
        {
          question: "What is the difference between var, let, and const?",
          answer:
            "var is function-scoped, let is block-scoped, and const is block-scoped but immutable.",
        },
      ];
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };
  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
  const [showAnswer, setShowAnswer] = useState("");
  const [iscorrect, setIsCorrect] = useState(false);
  const [score , setScore] = useState(0);

  const handleAnswerSubmit = (e) => {
    setShowAnswer(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isAnswerCorrect =
    showAnswer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase();

  if (isAnswerCorrect) {
    setScore((prevScore) => prevScore + 1); 
  }

  setIsCorrect(isAnswerCorrect);

    setTimeout(() => {
      setCurrentQuestion(getRandomQuestion());
      setShowAnswer("");
      setIsCorrect(null);
    }, 2000);

  }
  const handleRestart = () => {
    setCurrentQuestion(getRandomQuestion());
    setShowAnswer("");
    setIsCorrect(null);
    setScore(0);
  }
  return (
    <div className="quiz-container">
    <h2>React Quiz</h2>
    <h3>Score: {score}</h3>
    <p><strong>Question:</strong> {currentQuestion.question}</p>
  
    <form onSubmit={handleSubmit}>
      <label>Answer:</label><br />
      <input type="text" value={showAnswer} onChange={handleAnswerSubmit} />
      <br />
      <button type="submit">Submit</button>
    </form>
  
    {iscorrect !== null && (
      <p className={`feedback ${iscorrect ? "correct" : "wrong"}`}>
        {iscorrect ? "Correct Answer 🎉" : "Wrong Answer ❌"}
      </p>
    )}
  
    <button onClick={handleRestart}>Restart Quiz</button>
  </div>  
  );
}

export default Questions;

