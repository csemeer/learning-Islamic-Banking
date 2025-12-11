import { modules } from '../data/islamicBankingData';
import { UserProgress } from '../types';
import { ArrowLeft, CheckCircle, Lightbulb, BookOpen, GitCompare } from 'lucide-react';

interface Props {
  moduleId: string;
  topicId: string | null;
  onTopicSelect: (topicId: string) => void;
  onBack: () => void;
  onTopicComplete: (topicId: string) => void;
  userProgress: UserProgress;
}

export default function TopicView({
  moduleId,
  topicId,
  onTopicSelect,
  onBack,
  onTopicComplete,
  userProgress,
}: Props) {
  const module = modules.find((m) => m.id === moduleId);

  if (!module) return null;

  const currentTopic = topicId
    ? module.topics.find((t) => t.id === topicId)
    : module.topics[0];

  if (!currentTopic) return null;

  const isCompleted = userProgress.completedTopics.includes(currentTopic.id);
  const currentIndex = module.topics.findIndex((t) => t.id === currentTopic.id);
  const hasNext = currentIndex < module.topics.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      onTopicSelect(module.topics[currentIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      onTopicSelect(module.topics[currentIndex - 1].id);
    }
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-islamic-green-600 hover:text-islamic-green-700 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Modules
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-islamic-green-600 to-islamic-green-700 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{module.icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{module.title}</h2>
              <p className="text-islamic-green-100">{module.level} Level</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-b">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {module.topics.map((topic, idx) => (
              <button
                key={topic.id}
                onClick={() => onTopicSelect(topic.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap flex items-center gap-2 transition-colors ${
                  topic.id === currentTopic.id
                    ? 'bg-islamic-green-600 text-white'
                    : userProgress.completedTopics.includes(topic.id)
                    ? 'bg-islamic-green-100 text-islamic-green-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-xs font-bold">{idx + 1}</span>
                {userProgress.completedTopics.includes(topic.id) && (
                  <CheckCircle size={16} />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {currentTopic.title}
              </h3>
              {currentTopic.arabicTerm && (
                <p className="text-2xl text-islamic-gold-600 font-arabic mb-2">
                  {currentTopic.arabicTerm}
                </p>
              )}
            </div>
            {isCompleted && (
              <div className="flex items-center gap-2 text-islamic-green-600 bg-islamic-green-50 px-4 py-2 rounded-lg">
                <CheckCircle size={20} />
                <span className="font-semibold">Completed</span>
              </div>
            )}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">{currentTopic.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="text-islamic-green-600" />
              Key Points
            </h4>
            <ul className="space-y-2">
              {currentTopic.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-islamic-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {currentTopic.examples && currentTopic.examples.length > 0 && (
            <div className="mb-6 bg-islamic-gold-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Lightbulb className="text-islamic-gold-600" />
                Examples
              </h4>
              <div className="space-y-3">
                {currentTopic.examples.map((example, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700 whitespace-pre-line">{example}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentTopic.comparison && (
            <div className="mb-6 bg-purple-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <GitCompare className="text-purple-600" />
                Islamic vs Conventional Banking
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-islamic-green-100 rounded-lg p-4">
                  <h5 className="font-semibold text-islamic-green-800 mb-2">
                    ✅ Islamic Banking
                  </h5>
                  <p className="text-gray-700">{currentTopic.comparison.islamic}</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">
                    Conventional Banking
                  </h5>
                  <p className="text-gray-700">{currentTopic.comparison.conventional}</p>
                </div>
              </div>
            </div>
          )}

          {currentTopic.memorization && (
            <div className="mb-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-2 border-pink-200">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                💡 Memory Tip
              </h4>
              <p className="text-lg text-gray-700 italic">{currentTopic.memorization}</p>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => onTopicComplete(currentTopic.id)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                isCompleted
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-islamic-green-600 hover:bg-islamic-green-700 text-white'
              }`}
              disabled={isCompleted}
            >
              {isCompleted ? '✓ Completed' : 'Mark as Complete'}
            </button>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={!hasPrevious}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                hasPrevious
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              ← Previous Topic
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                hasNext
                  ? 'bg-islamic-green-600 hover:bg-islamic-green-700 text-white'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next Topic →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
