import { UserProgress } from '../types';
import { modules } from '../data/islamicBankingData';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface Props {
  onModuleClick: (moduleId: string) => void;
  userProgress: UserProgress;
}

export default function ModuleGrid({ onModuleClick, userProgress }: Props) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundation':
        return 'from-blue-500 to-blue-600';
      case 'Products':
        return 'from-islamic-green-500 to-islamic-green-600';
      case 'Financing':
        return 'from-purple-500 to-purple-600';
      case 'Advanced':
        return 'from-islamic-gold-500 to-islamic-gold-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getModuleProgress = (moduleId: string) => {
    const module = modules.find((m) => m.id === moduleId);
    if (!module) return 0;
    const completed = module.topics.filter((t) =>
      userProgress.completedTopics.includes(t.id)
    ).length;
    return Math.round((completed / module.topics.length) * 100);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Learning Path</h2>
        <p className="text-gray-600">
          Progress through 4 levels from foundation to advanced concepts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => {
          const progress = getModuleProgress(module.id);
          const isCompleted = progress === 100;

          return (
            <div
              key={module.id}
              onClick={() => onModuleClick(module.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group border-2 border-transparent hover:border-islamic-green-400"
            >
              <div
                className={`bg-gradient-to-r ${getLevelColor(
                  module.level
                )} text-white p-4 flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{module.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{module.title}</h3>
                    <span className="text-sm opacity-90">{module.level} Level</span>
                  </div>
                </div>
                {isCompleted && <CheckCircle size={32} className="text-white" />}
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{module.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${getLevelColor(
                        module.level
                      )} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{module.topics.length} Topics</span>
                  <span>
                    {module.topics.filter((t) => userProgress.completedTopics.includes(t.id)).length}{' '}
                    Completed
                  </span>
                </div>

                <button className="w-full bg-islamic-green-600 hover:bg-islamic-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors group-hover:bg-islamic-green-700">
                  Start Learning
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-gradient-to-r from-islamic-green-100 to-islamic-gold-100 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Learning Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-3xl mb-2">📖</div>
            <h4 className="font-semibold text-gray-800 mb-1">1. Learn</h4>
            <p className="text-sm text-gray-600">
              Read comprehensive explanations with examples
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-3xl mb-2">🎴</div>
            <h4 className="font-semibold text-gray-800 mb-1">2. Memorize</h4>
            <p className="text-sm text-gray-600">Use flashcards to reinforce key terms</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-3xl mb-2">✅</div>
            <h4 className="font-semibold text-gray-800 mb-1">3. Test</h4>
            <p className="text-sm text-gray-600">Take quizzes to assess understanding</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-semibold text-gray-800 mb-1">4. Master</h4>
            <p className="text-sm text-gray-600">Apply knowledge to real scenarios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
