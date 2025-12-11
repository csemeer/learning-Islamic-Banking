import { useState } from 'react';
import { caseStudies, CaseStudy } from '../data/enhancedData';
import { ArrowLeft, BookOpen, Lightbulb, CheckCircle, Filter } from 'lucide-react';

interface Props {
  onBack: () => void;
  onComplete?: (caseId: string) => void;
}

export default function CaseStudiesView({ onBack, onComplete }: Props) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [showSolution, setShowSolution] = useState(false);

  const filteredCases = caseStudies.filter((cs) => {
    const categoryMatch = filterCategory === 'all' || cs.category === filterCategory;
    const difficultyMatch = filterDifficulty === 'all' || cs.difficulty === filterDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      casa: '🏦',
      financing: '🏠',
      investment: '📈',
      sukuk: '📜',
      compliance: '✅',
    };
    return icons[category] || '📚';
  };

  if (selectedCase) {
    return (
      <div>
        <button
          onClick={() => {
            setSelectedCase(null);
            setShowSolution(false);
          }}
          className="flex items-center gap-2 text-islamic-green-600 hover:text-islamic-green-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Case Studies
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{getCategoryIcon(selectedCase.category)}</span>
                <h2 className="text-3xl font-bold text-gray-800">{selectedCase.title}</h2>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(selectedCase.difficulty)}`}>
                  {selectedCase.difficulty.charAt(0).toUpperCase() + selectedCase.difficulty.slice(1)}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  {selectedCase.category.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Scenario */}
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="text-blue-600" />
              Scenario
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedCase.scenario}</p>
          </div>

          {/* Challenge */}
          <div className="mb-6 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 Your Challenge</h3>
            <p className="text-gray-700 leading-relaxed">{selectedCase.challenge}</p>
          </div>

          {/* Think Button */}
          {!showSolution && (
            <div className="text-center mb-6">
              <button
                onClick={() => setShowSolution(true)}
                className="px-8 py-3 bg-islamic-green-600 hover:bg-islamic-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                💡 Show Solution
              </button>
              <p className="text-sm text-gray-600 mt-2">
                Think about the solution before revealing it!
              </p>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <>
              <div className="mb-6 bg-islamic-green-50 border-l-4 border-islamic-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="text-islamic-green-600" />
                  Solution
                </h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedCase.solution}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="mb-6 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="text-purple-600" />
                  Key Learnings
                </h3>
                <ul className="space-y-2">
                  {selectedCase.keyLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Topics */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📚 Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.relatedTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {onComplete && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => onComplete(selectedCase.id)}
                    className="px-8 py-3 bg-islamic-gold-600 hover:bg-islamic-gold-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    ✅ Mark as Completed (+25 points)
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Real-World Case Studies</h2>
        <p className="text-gray-600 mb-6">
          Apply your Islamic Banking knowledge to practical scenarios
        </p>

        {/* Filters */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={20} className="text-gray-600" />
            <h3 className="font-semibold text-gray-800">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-islamic-green-500 focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="casa">CASA</option>
                <option value="financing">Financing</option>
                <option value="investment">Investment</option>
                <option value="sukuk">Sukuk</option>
                <option value="compliance">Compliance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-islamic-green-500 focus:outline-none"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              onClick={() => setSelectedCase(caseStudy)}
              className="border-2 border-gray-200 rounded-xl p-6 hover:border-islamic-green-400 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{getCategoryIcon(caseStudy.category)}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{caseStudy.title}</h3>
                  <div className="flex gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(caseStudy.difficulty)}`}>
                      {caseStudy.difficulty}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {caseStudy.scenario}
              </p>
              <button className="text-islamic-green-600 hover:text-islamic-green-700 font-semibold text-sm flex items-center gap-1">
                Solve This Case →
              </button>
            </div>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No case studies match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
