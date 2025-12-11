import { useState } from 'react';
import { flexcubeLabs, Lab } from '../data/flexcubeData';
import { ArrowLeft, Beaker, CheckSquare, AlertCircle, Lightbulb } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function FlexcubeLabsView({ onBack }: Props) {
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

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
      configuration: '⚙️',
      development: '💻',
      integration: '🔗',
      troubleshooting: '🔧',
    };
    return icons[category] || '📝';
  };

  const toggleStep = (stepIndex: number) => {
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter((i) => i !== stepIndex));
    } else {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  if (selectedLab) {
    const progressPercentage = Math.round(
      (completedSteps.length / selectedLab.steps.length) * 100
    );

    return (
      <div>
        <button
          onClick={() => {
            setSelectedLab(null);
            setCompletedSteps([]);
          }}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Labs
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Lab Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{getCategoryIcon(selectedLab.category)}</span>
                <h2 className="text-3xl font-bold text-gray-800">{selectedLab.title}</h2>
              </div>
              <div className="flex gap-2 mt-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(
                    selectedLab.difficulty
                  )}`}
                >
                  {selectedLab.difficulty.toUpperCase()}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  {selectedLab.category}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 bg-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700">Lab Progress</span>
              <span className="text-2xl font-bold text-blue-600">{progressPercentage}%</span>
            </div>
            <div className="bg-gray-300 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {completedSteps.length} of {selectedLab.steps.length} steps completed
            </p>
          </div>

          {/* Objective */}
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-800 mb-2">🎯 Objective</h3>
            <p className="text-gray-700">{selectedLab.objective}</p>
          </div>

          {/* Prerequisites */}
          {selectedLab.prerequisites.length > 0 && (
            <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <AlertCircle size={20} className="text-yellow-600" />
                Prerequisites
              </h3>
              <ul className="space-y-2">
                {selectedLab.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-600 font-bold mt-1">•</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Steps */}
          <div className="mb-6">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Configuration Steps</h3>
            <div className="space-y-3">
              {selectedLab.steps.map((step, idx) => {
                const isCompleted = completedSteps.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isCompleted
                        ? 'bg-green-50 border-green-400'
                        : 'bg-white border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => toggleStep(idx)}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                          isCompleted
                            ? 'bg-green-600 border-green-600'
                            : 'border-gray-300 hover:border-blue-500'
                        }`}
                      >
                        {isCompleted && <CheckSquare size={16} className="text-white" />}
                      </button>
                      <div className="flex-1">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                          {step}
                        </pre>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expected Result */}
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-800 mb-2">✅ Expected Result</h3>
            <p className="text-gray-700">{selectedLab.expectedResult}</p>
          </div>

          {/* Tips */}
          {selectedLab.tips.length > 0 && (
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <Lightbulb size={20} className="text-purple-600" />
                Pro Tips
              </h3>
              <ul className="space-y-2">
                {selectedLab.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold mt-1">💡</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Flexcube Dashboard
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-2">
          <Beaker size={36} className="text-orange-600" />
          <h2 className="text-3xl font-bold text-gray-800">Configuration Labs</h2>
        </div>
        <p className="text-gray-600 mb-8">
          Hands-on exercises for configuring Islamic banking products in Oracle Flexcube UBS
        </p>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flexcubeLabs.map((lab) => (
            <div
              key={lab.id}
              onClick={() => setSelectedLab(lab)}
              className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-4xl">{getCategoryIcon(lab.category)}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {lab.title}
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                        lab.difficulty
                      )}`}
                    >
                      {lab.difficulty}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {lab.category}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4">{lab.objective}</p>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{lab.steps.length} Steps</span>
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Start Lab →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Categories Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl mb-2">⚙️</div>
            <div className="font-bold text-gray-800">Configuration</div>
            <div className="text-sm text-gray-600">Product setup</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl mb-2">💻</div>
            <div className="font-bold text-gray-800">Development</div>
            <div className="text-sm text-gray-600">Custom coding</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-bold text-gray-800">Integration</div>
            <div className="text-sm text-gray-600">API & services</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="text-2xl mb-2">🔧</div>
            <div className="font-bold text-gray-800">Troubleshooting</div>
            <div className="text-sm text-gray-600">Issue resolution</div>
          </div>
        </div>
      </div>
    </div>
  );
}
