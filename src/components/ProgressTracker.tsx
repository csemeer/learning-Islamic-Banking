import { UserProgress } from '../types';
import { Trophy, Target, CheckCircle } from 'lucide-react';
import { modules } from '../data/islamicBankingData';

interface Props {
  userProgress: UserProgress;
}

export default function ProgressTracker({ userProgress }: Props) {
  const totalTopics = modules.reduce((sum, module) => sum + module.topics.length, 0);
  const completedCount = userProgress.completedTopics.length;
  const progressPercentage = Math.round((completedCount / totalTopics) * 100);

  const quizzesTaken = Object.keys(userProgress.quizScores).length;
  const averageScore = quizzesTaken > 0
    ? Math.round(Object.values(userProgress.quizScores).reduce((a, b) => a + b, 0) / quizzesTaken)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-t-4 border-islamic-green-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Trophy className="text-islamic-gold-500" />
        Your Learning Progress
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-islamic-green-50 to-islamic-green-100 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="text-islamic-green-600" size={24} />
            <h3 className="font-semibold text-gray-700">Topics Completed</h3>
          </div>
          <div className="text-3xl font-bold text-islamic-green-700">
            {completedCount} / {totalTopics}
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-3">
            <div
              className="bg-islamic-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">{progressPercentage}% Complete</p>
        </div>

        <div className="bg-gradient-to-br from-islamic-gold-50 to-islamic-gold-100 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-islamic-gold-600" size={24} />
            <h3 className="font-semibold text-gray-700">Quiz Performance</h3>
          </div>
          <div className="text-3xl font-bold text-islamic-gold-700">
            {averageScore}%
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {quizzesTaken} {quizzesTaken === 1 ? 'quiz' : 'quizzes'} taken
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="text-blue-600" size={24} />
            <h3 className="font-semibold text-gray-700">Achievement Level</h3>
          </div>
          <div className="text-2xl font-bold text-blue-700">
            {progressPercentage < 25
              ? '🌱 Beginner'
              : progressPercentage < 50
              ? '📚 Student'
              : progressPercentage < 75
              ? '🎓 Scholar'
              : progressPercentage < 100
              ? '⭐ Expert'
              : '👑 Master'}
          </div>
          <p className="text-sm text-gray-600 mt-1">Keep learning to advance!</p>
        </div>
      </div>
    </div>
  );
}
