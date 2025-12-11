import { UserProgress } from '../types';
import { badges } from '../data/enhancedData';
import { Trophy, Award, Flame, Target, TrendingUp, Calendar, Star, Medal } from 'lucide-react';
import { modules } from '../data/islamicBankingData';

interface Props {
  userProgress: UserProgress;
}

export default function Dashboard({ userProgress }: Props) {
  const totalTopics = modules.reduce((sum, module) => sum + module.topics.length, 0);
  const completedCount = userProgress.completedTopics.length;
  const progressPercentage = Math.round((completedCount / totalTopics) * 100);

  const quizzesTaken = Object.keys(userProgress.quizScores).length;
  const averageScore = quizzesTaken > 0
    ? Math.round(Object.values(userProgress.quizScores).reduce((a, b) => a + b, 0) / quizzesTaken)
    : 0;

  const earnedBadges = badges.filter((badge) => userProgress.earnedBadges.includes(badge.id));
  const nextBadges = badges.filter((badge) => !userProgress.earnedBadges.includes(badge.id)).slice(0, 3);

  const recentAchievements = userProgress.achievements.slice(-5).reverse();

  const studyStats = {
    totalPoints: userProgress.totalPoints,
    streak: userProgress.studyStreak,
    badges: earnedBadges.length,
    certificates: userProgress.certificates.length,
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Learning Dashboard</h2>
        <p className="text-gray-600">Track your progress and achievements</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-islamic-green-500 to-islamic-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Star className="text-islamic-gold-300" size={32} />
            <span className="text-3xl font-bold">{studyStats.totalPoints}</span>
          </div>
          <p className="text-islamic-green-100">Total Points</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Flame className="text-yellow-300" size={32} />
            <span className="text-3xl font-bold">{studyStats.streak}</span>
          </div>
          <p className="text-orange-100">Day Streak</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Medal className="text-yellow-300" size={32} />
            <span className="text-3xl font-bold">{studyStats.badges}</span>
          </div>
          <p className="text-purple-100">Badges Earned</p>
        </div>

        <div className="bg-gradient-to-br from-islamic-gold-500 to-islamic-gold-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="text-white" size={32} />
            <span className="text-3xl font-bold">{studyStats.certificates}</span>
          </div>
          <p className="text-islamic-gold-100">Certificates</p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="text-islamic-green-600" />
          Learning Progress
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-semibold">Topics Completed</span>
              <span className="text-2xl font-bold text-islamic-green-600">
                {completedCount}/{totalTopics}
              </span>
            </div>
            <div className="bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-islamic-green-500 to-islamic-green-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{progressPercentage}% Complete</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-semibold">Quiz Performance</span>
              <span className="text-2xl font-bold text-islamic-gold-600">{averageScore}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-islamic-gold-500 to-islamic-gold-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${averageScore}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {quizzesTaken} {quizzesTaken === 1 ? 'quiz' : 'quizzes'} taken
            </p>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Earned Badges */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="text-islamic-gold-600" />
            Earned Badges ({earnedBadges.length})
          </h3>
          {earnedBadges.length > 0 ? (
            <div className="space-y-3">
              {earnedBadges.slice(-5).reverse().map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-islamic-gold-50 to-yellow-50 rounded-lg border-2 border-islamic-gold-300"
                >
                  <span className="text-3xl">{badge.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-800">{badge.name}</h4>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              Complete activities to earn your first badge!
            </p>
          )}
        </div>

        {/* Next Badges */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="text-blue-600" />
            Next Badges to Earn
          </h3>
          <div className="space-y-3">
            {nextBadges.map((badge) => {
              let progress = 0;
              if (badge.type === 'topics') {
                progress = (completedCount / badge.requirement) * 100;
              } else if (badge.type === 'quiz' && badge.requirement === 100) {
                const perfectScores = Object.values(userProgress.quizScores).filter(
                  (score) => score === 100
                ).length;
                progress = perfectScores > 0 ? 100 : averageScore;
              } else if (badge.type === 'streak') {
                progress = (userProgress.studyStreak / badge.requirement) * 100;
              } else if (badge.type === 'points') {
                progress = (userProgress.totalPoints / badge.requirement) * 100;
              }
              progress = Math.min(progress, 100);

              return (
                <div key={badge.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl opacity-50">{badge.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-700">{badge.name}</h4>
                      <p className="text-xs text-gray-500">{badge.description}</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{Math.round(progress)}% Complete</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      {recentAchievements.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="text-islamic-green-600" />
            Recent Achievements
          </h3>
          <div className="space-y-2">
            {recentAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center justify-between p-3 bg-islamic-green-50 rounded-lg"
              >
                <div>
                  <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-islamic-green-600">
                    +{achievement.points}
                  </span>
                  <p className="text-xs text-gray-500">points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily Challenge */}
      {userProgress.dailyChallenges.length > 0 && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-2xl font-bold mb-4">🎯 Daily Challenge</h3>
          {userProgress.dailyChallenges[0].completed ? (
            <div className="text-center py-4">
              <p className="text-lg">✅ Challenge Complete!</p>
              <p className="text-purple-100">Come back tomorrow for a new challenge</p>
            </div>
          ) : (
            <div>
              <p className="text-lg mb-2">
                {userProgress.dailyChallenges[0].type === 'flashcard'
                  ? '📚 Review 10 flashcards'
                  : userProgress.dailyChallenges[0].type === 'quiz'
                  ? '✏️ Complete a quiz'
                  : '📖 Complete a new topic'}
              </p>
              <p className="text-purple-100">
                Reward: +{userProgress.dailyChallenges[0].points} points
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
