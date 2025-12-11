import { useState } from 'react';
import { quizQuestions, modules } from '../data/islamicBankingData';
import { ArrowLeft, CheckCircle, XCircle, Award, RotateCw } from 'lucide-react';

interface Props {
  moduleId: string | null;
  onBack: () => void;
  onComplete: (moduleId: string, score: number) => void;
}

export default function QuizView({ moduleId, onBack, onComplete }: Props) {
  const [selectedModule, setSelectedModule] = useState<string>(moduleId || 'foundations');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const moduleQuestions = quizQuestions.filter((q) => q.moduleId === selectedModule);
  const currentQuestion = moduleQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < moduleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const finalScore = Math.round((score / moduleQuestions.length) * 100);
      onComplete(selectedModule, finalScore);
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const handleModuleChange = (newModuleId: string) => {
    setSelectedModule(newModuleId);
    handleRestartQuiz();
  };

  if (quizCompleted) {
    const finalScore = Math.round((score / moduleQuestions.length) * 100);
    const module = modules.find((m) => m.id === selectedModule);

    return (
      <div>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-islamic-green-600 hover:text-islamic-green-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Modules
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <Award size={80} className="mx-auto text-islamic-gold-500" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
          <p className="text-xl text-gray-600 mb-6">{module?.title}</p>

          <div className="bg-gradient-to-r from-islamic-green-100 to-islamic-gold-100 rounded-xl p-8 mb-6">
            <div className="text-6xl font-bold text-islamic-green-700 mb-2">
              {finalScore}%
            </div>
            <p className="text-gray-700">
              You got {score} out of {moduleQuestions.length} questions correct
            </p>
          </div>

          <div className="mb-6">
            {finalScore >= 80 ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                <p className="text-green-800 font-semibold text-lg">
                  🎉 Excellent! You've mastered this module!
                </p>
              </div>
            ) : finalScore >= 60 ? (
              <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-4">
                <p className="text-yellow-800 font-semibold text-lg">
                  👍 Good job! Review the material to improve further.
                </p>
              </div>
            ) : (
              <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-4">
                <p className="text-orange-800 font-semibold text-lg">
                  📚 Keep studying! Review the topics and try again.
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-2 px-6 py-3 bg-islamic-green-600 hover:bg-islamic-green-700 text-white rounded-lg font-semibold transition-colors"
            >
              <RotateCw size={20} />
              Retake Quiz
            </button>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors"
            >
              Back to Modules
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-islamic-green-600 hover:text-islamic-green-700 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Modules
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Knowledge Quiz</h2>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Module
          </label>
          <select
            value={selectedModule}
            onChange={(e) => handleModuleChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green-500 focus:outline-none"
          >
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.icon} {module.title}
              </option>
            ))}
          </select>
        </div>

        {currentQuestion ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-600">
                  Question {currentQuestionIndex + 1} of {moduleQuestions.length}
                </span>
                <span className="text-sm font-semibold text-islamic-green-600">
                  Score: {score}/{answeredQuestions.length}
                </span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-islamic-green-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / moduleQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800">{currentQuestion.question}</h3>
            </div>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? 'bg-green-50 border-green-500'
                        : showIncorrect
                        ? 'bg-red-50 border-red-500'
                        : isSelected
                        ? 'bg-islamic-green-50 border-islamic-green-500'
                        : 'bg-white border-gray-300 hover:border-islamic-green-300'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800">{option}</span>
                      {showCorrect && <CheckCircle className="text-green-600" size={24} />}
                      {showIncorrect && <XCircle className="text-red-600" size={24} />}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div
                className={`p-6 rounded-lg mb-6 ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'bg-green-50 border-2 border-green-500'
                    : 'bg-orange-50 border-2 border-orange-500'
                }`}
              >
                <h4 className="font-bold text-gray-800 mb-2">
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? '✅ Correct!'
                    : '❌ Incorrect'}
                </h4>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="flex justify-end">
              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                    selectedAnswer === null
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-islamic-green-600 hover:bg-islamic-green-700 text-white'
                  }`}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3 bg-islamic-green-600 hover:bg-islamic-green-700 text-white rounded-lg font-semibold transition-colors"
                >
                  {currentQuestionIndex < moduleQuestions.length - 1
                    ? 'Next Question →'
                    : 'Complete Quiz'}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No quiz questions available for this module yet.
          </div>
        )}
      </div>
    </div>
  );
}
