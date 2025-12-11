import { useState } from 'react';
import { practiceProblems, PracticeProblem } from '../data/enhancedData';
import { modules } from '../data/islamicBankingData';
import { ArrowLeft, Lightbulb, CheckCircle } from 'lucide-react';

interface Props {
  onBack: () => void;
  onComplete?: (problemId: string) => void;
}

export default function PracticeProblemsView({ onBack, onComplete }: Props) {
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedProblem, setSelectedProblem] = useState<PracticeProblem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const filteredProblems =
    selectedModule === 'all'
      ? practiceProblems
      : practiceProblems.filter((p) => p.moduleId === selectedModule);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      calculation: '🔢',
      scenario: '📋',
      identification: '🔍',
      comparison: '⚖️',
    };
    return icons[type] || '📝';
  };

  const handleReset = () => {
    setSelectedProblem(null);
    setUserAnswer('');
    setShowHints(false);
    setShowSolution(false);
  };

  if (selectedProblem) {
    return (
      <div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 text-islamic-green-600 hover:text-islamic-green-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Problems
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{getTypeIcon(selectedProblem.type)}</span>
                <h2 className="text-2xl font-bold text-gray-800">Practice Problem</h2>
              </div>
              <div className="flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(
                    selectedProblem.difficulty
                  )}`}
                >
                  {selectedProblem.difficulty.toUpperCase()}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  {selectedProblem.type}
                </span>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Question:</h3>
            <p className="text-gray-700 leading-relaxed">{selectedProblem.question}</p>
          </div>

          {/* Answer Input */}
          {!showSolution && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Answer:
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green-500 focus:outline-none min-h-[100px]"
              />
            </div>
          )}

          {/* Hints */}
          {selectedProblem.hints && !showSolution && (
            <div className="mb-6">
              {!showHints ? (
                <button
                  onClick={() => setShowHints(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-lg font-semibold transition-colors"
                >
                  <Lightbulb size={20} />
                  Show Hints
                </button>
              ) : (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Lightbulb size={20} className="text-yellow-600" />
                    Hints:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProblem.hints.map((hint, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">{idx + 1}.</span>
                        <span>{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          {!showSolution && (
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setShowSolution(true)}
                className="flex-1 px-6 py-3 bg-islamic-green-600 hover:bg-islamic-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                Check Solution
              </button>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <>
              <div className="mb-6 bg-islamic-green-50 border-l-4 border-islamic-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="text-islamic-green-600" />
                  Correct Answer:
                </h3>
                <p className="text-lg font-semibold text-islamic-green-700 mb-4">
                  {selectedProblem.answer}
                </p>
                <h4 className="font-bold text-gray-800 mb-2">Explanation:</h4>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedProblem.explanation}
                </div>
              </div>

              {onComplete && (
                <div className="text-center">
                  <button
                    onClick={() => onComplete(selectedProblem.id)}
                    className="px-8 py-3 bg-islamic-gold-600 hover:bg-islamic-gold-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    ✅ Mark as Solved (+15 points)
                  </button>
                </div>
              )}
            </>
          )}
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
        Back to Dashboard
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Practice Problems</h2>
        <p className="text-gray-600 mb-6">
          Sharpen your skills with hands-on problems and exercises
        </p>

        {/* Module Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Filter by Module
          </label>
          <select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green-500 focus:outline-none"
          >
            <option value="all">All Modules</option>
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.icon} {module.title}
              </option>
            ))}
          </select>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              onClick={() => setSelectedProblem(problem)}
              className="border-2 border-gray-200 rounded-xl p-6 hover:border-islamic-green-400 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{getTypeIcon(problem.type)}</span>
                <div className="flex-1">
                  <div className="flex gap-2 mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                        problem.difficulty
                      )}`}
                    >
                      {problem.difficulty}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {problem.type}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-4">{problem.question}</p>
                </div>
              </div>
              <button className="text-islamic-green-600 hover:text-islamic-green-700 font-semibold text-sm flex items-center gap-1 mt-3">
                Solve Problem →
              </button>
            </div>
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No practice problems available for this module yet.
          </div>
        )}
      </div>
    </div>
  );
}
