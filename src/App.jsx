import { useState, useEffect } from 'react';
import allQuestions from './utils/questions';

import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { VscDebugRestart } from 'react-icons/vsc';
import { BsFillTrophyFill } from 'react-icons/bs';

function getRandomQuestions(count) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function App() {
  const [quizQuestions, setQuizQuestions] = useState(() => getRandomQuestions(10));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);


  useEffect(() => {
    let interval = null;
    if (!showWelcome && isActive && timer > 0 && !answered) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else if (timer === 0 && !answered) {
      handleAnswerClick(null, false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, isActive, answered, showWelcome]);


  const handleAnswerClick = (answerIndex, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(answerIndex);
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      const next = currentQuestion + 1;
      if (next < quizQuestions.length) {
        setCurrentQuestion(next);
        setAnswered(false);
        setSelectedAnswer(null);
        setTimer(30);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setQuizQuestions(getRandomQuestions(10));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswered(false);
    setSelectedAnswer(null);
    setTimer(30);
    setIsActive(true);
  };

  const getAnswerCardClass = (answerOption, index) => {
    if (!answered) return 'bg-gray-800 border-gray-600 hover:scale-105 transition-transform';
    if (answerOption.isCorrect) return 'bg-green-600 border-green-400 shadow-xl';
    if (selectedAnswer === index) return 'bg-red-600 border-red-400 shadow-xl';
    return 'bg-gray-800 border-gray-600';
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);
  const getFeedback = () => {
    if (percentage >= 80) return '🌟 Premium Performance!';
    if (percentage >= 60) return '🎉 Great Work!';
    if (percentage >= 40) return '🙂 Keep Going!';
    return '💪 Stay Determined!';
  };

  if (showWelcome) {
    return (
      <div
        className="fixed inset-0 z-50  flex items-center justify-center text-white text-center p-6 cursor-pointer animated-gradient-bg"
        onClick={() => setShowWelcome(false)}
      >
        <div className="space-y-6 max-w-xl bg-transparent p-10 rounded-3xl border border-indigo-500 shadow-xl backdrop-blur-md">
          <h1 className="heading text-6xl p-4 sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
            Welcome to Quizzy Pro!
          </h1>
          <p className="font-serif text-2xl">Practice <span className='backdrop-blur-md'>10</span> quiz questions daily to sharpen your mind.</p>
          <p className="text-md text-gray-300 font-bold">Click anywhere to begin</p>
        </div>
      </div>
    );
  }


  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen p-4 text-white animated-gradient-bg">
        <div className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700 p-6 sm:p-8 space-y-6 sm:space-y-8">
          {showScore ? (
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 px-2">
              <BsFillTrophyFill size={80} className="text-yellow-400 drop-shadow-md" />
              <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Quiz Completed!</h2>
              <p className="text-lg sm:text-xl text-gray-300">Your final score is:</p>
              <div className="w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center rounded-full border-8 border-indigo-500 shadow-lg">
                <span className="text-4xl sm:text-6xl font-bold text-indigo-400">{percentage}%</span>
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-indigo-300">{getFeedback()}</p>
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all text-sm sm:text-base"
              >
                <VscDebugRestart size={22} />
                <span>Try Again</span>
              </button>
            </div>
          ) : (
            <>
              <div className="bg-indigo-700 text-white p-4 sm:p-6 rounded-3xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 opacity-20 rounded-3xl blur-xl"></div>
                <div className="flex flex-wrap justify-between items-center mb-3 sm:mb-4 relative z-10">
                  <h2 className="heading text-3xl font-Lobster sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-500 pb-1 sm:pb-2 w-full sm:w-auto">
                    Quizzy Pro
                  </h2>
                  <span className="text-sm sm:text-lg font-medium mt-2 sm:mt-0">Q : {currentQuestion + 1}/{quizQuestions.length}</span>
                </div>
                <div
                  className="bg-white h-1 sm:h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>

              <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="question-text text-xl sm:text-3xl font-bold max-w-[70%] break-words">{quizQuestions[currentQuestion].questionText}</h3>
                  <span className="text-sm sm:text-lg bg-cyan-300 text-indigo-900 px-3 py-1 rounded-full font-semibold shadow-md whitespace-nowrap mt-2 sm:mt-0">
                    ⏱ {timer}s
                  </span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button
                      key={index}
                      onClick={() => !answered && handleAnswerClick(index, answerOption.isCorrect)}
                      disabled={answered}
                      className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 group transition-all duration-300 ${getAnswerCardClass(answerOption, index)} break-words`}
                    >
                      <div className="flex justify-between items-center font-medium">
                        <span>{answerOption.answerText}</span>
                        {answered && answerOption.isCorrect && <IoCheckmarkSharp className="text-green-400" size={20} />}
                        {answered && selectedAnswer === index && !answerOption.isCorrect && <RxCross2 className="text-red-400" size={20} />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
} 
