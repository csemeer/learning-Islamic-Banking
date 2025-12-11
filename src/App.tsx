import { useState, useEffect } from 'react';
import { CreditCard, Home, Award, LayoutDashboard, FileText, Briefcase, Moon, Sun, Trophy } from 'lucide-react';
import { AppState, ViewMode, Achievement } from './types';
import ModuleGrid from './components/ModuleGrid';
import TopicView from './components/TopicView';
import FlashcardsView from './components/FlashcardsView';
import QuizView from './components/QuizView';
import GlossaryView from './components/GlossaryView';
import ComparisonView from './components/ComparisonView';
import Dashboard from './components/Dashboard';
import CertificatesView from './components/CertificatesView';
import CaseStudiesView from './components/CaseStudiesView';
import PracticeProblemsView from './components/PracticeProblemsView';
import CareerGuideView from './components/CareerGuideView';
import Header from './components/Header';
import { pointsSystem, badges } from './data/enhancedData';

function App() {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('islamicBankingProgress');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure all new fields exist
      return {
        ...parsed,
        userProgress: {
          completedTopics: parsed.userProgress?.completedTopics || [],
          quizScores: parsed.userProgress?.quizScores || {},
          lastVisited: parsed.userProgress?.lastVisited || new Date().toISOString(),
          studyStreak: parsed.userProgress?.studyStreak || 0,
          totalPoints: parsed.userProgress?.totalPoints || 0,
          earnedBadges: parsed.userProgress?.earnedBadges || [],
          achievements: parsed.userProgress?.achievements || [],
          notes: parsed.userProgress?.notes || [],
          bookmarks: parsed.userProgress?.bookmarks || [],
          dailyChallenges: parsed.userProgress?.dailyChallenges || [],
          lastChallengeDate: parsed.userProgress?.lastChallengeDate || '',
          reviewQueue: parsed.userProgress?.reviewQueue || [],
          darkMode: parsed.userProgress?.darkMode || false,
          certificates: parsed.userProgress?.certificates || [],
        },
      };
    }
    return {
      currentView: 'dashboard' as ViewMode,
      selectedModuleId: null,
      selectedTopicId: null,
      userProgress: {
        completedTopics: [],
        quizScores: {},
        lastVisited: new Date().toISOString(),
        studyStreak: 0,
        totalPoints: 0,
        earnedBadges: [],
        achievements: [],
        notes: [],
        bookmarks: [],
        dailyChallenges: [],
        lastChallengeDate: '',
        reviewQueue: [],
        darkMode: false,
        certificates: [],
      },
    };
  });

  useEffect(() => {
    localStorage.setItem('islamicBankingProgress', JSON.stringify(state));
  }, [state]);

  // Apply dark mode
  useEffect(() => {
    if (state.userProgress.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.userProgress.darkMode]);

  const toggleDarkMode = () => {
    setState((prev) => ({
      ...prev,
      userProgress: {
        ...prev.userProgress,
        darkMode: !prev.userProgress.darkMode,
      },
    }));
  };

  const addPoints = (points: number, reason: string) => {
    setState((prev) => {
      const newTotalPoints = prev.userProgress.totalPoints + points;
      const newAchievement: Achievement = {
        id: Date.now().toString(),
        title: reason,
        description: `Earned ${points} points`,
        points,
        earnedDate: new Date().toISOString(),
      };

      // Check for new badges
      const newBadges: string[] = [];
      badges.forEach((badge) => {
        if (prev.userProgress.earnedBadges.includes(badge.id)) return;

        let earned = false;
        if (badge.type === 'topics') {
          earned = prev.userProgress.completedTopics.length >= badge.requirement;
        } else if (badge.type === 'points') {
          earned = newTotalPoints >= badge.requirement;
        } else if (badge.type === 'streak') {
          earned = prev.userProgress.studyStreak >= badge.requirement;
        } else if (badge.type === 'quiz' && badge.requirement === 100) {
          const perfectScores = Object.values(prev.userProgress.quizScores).filter(
            (score) => score === 100
          );
          earned = perfectScores.length > 0;
        }

        if (earned) {
          newBadges.push(badge.id);
        }
      });

      return {
        ...prev,
        userProgress: {
          ...prev.userProgress,
          totalPoints: newTotalPoints,
          achievements: [newAchievement, ...prev.userProgress.achievements],
          earnedBadges: [...prev.userProgress.earnedBadges, ...newBadges],
        },
      };
    });
  };

  const navigateToView = (view: ViewMode, moduleId?: string, topicId?: string) => {
    setState((prev) => ({
      ...prev,
      currentView: view,
      selectedModuleId: moduleId || prev.selectedModuleId,
      selectedTopicId: topicId || prev.selectedTopicId,
    }));
  };

  const markTopicComplete = (topicId: string) => {
    setState((prev) => {
      if (prev.userProgress.completedTopics.includes(topicId)) {
        return prev;
      }
      return {
        ...prev,
        userProgress: {
          ...prev.userProgress,
          completedTopics: [...prev.userProgress.completedTopics, topicId],
        },
      };
    });
    addPoints(pointsSystem.topicCompleted, 'Topic Completed');
  };

  const updateQuizScore = (moduleId: string, score: number) => {
    setState((prev) => ({
      ...prev,
      userProgress: {
        ...prev.userProgress,
        quizScores: {
          ...prev.userProgress.quizScores,
          [moduleId]: score,
        },
      },
    }));
    if (score >= 70) {
      addPoints(pointsSystem.quizPassed, 'Quiz Passed');
    }
    if (score === 100) {
      addPoints(pointsSystem.quiz100Percent, 'Perfect Quiz Score!');
    }
  };

  const renderView = () => {
    switch (state.currentView) {
      case 'dashboard':
        return <Dashboard userProgress={state.userProgress} />;
      case 'modules':
        return (
          <ModuleGrid
            onModuleClick={(moduleId) => navigateToView('topic', moduleId)}
            userProgress={state.userProgress}
          />
        );
      case 'topic':
        return (
          <TopicView
            moduleId={state.selectedModuleId!}
            topicId={state.selectedTopicId}
            onTopicSelect={(topicId) => navigateToView('topic', state.selectedModuleId!, topicId)}
            onBack={() => navigateToView('modules')}
            onTopicComplete={markTopicComplete}
            userProgress={state.userProgress}
          />
        );
      case 'flashcards':
        return (
          <FlashcardsView
            moduleId={state.selectedModuleId}
            onBack={() => navigateToView('dashboard')}
          />
        );
      case 'quiz':
        return (
          <QuizView
            moduleId={state.selectedModuleId}
            onBack={() => navigateToView('dashboard')}
            onComplete={updateQuizScore}
          />
        );
      case 'glossary':
        return <GlossaryView onBack={() => navigateToView('dashboard')} />;
      case 'comparison':
        return <ComparisonView onBack={() => navigateToView('dashboard')} />;
      case 'certificates':
        return (
          <CertificatesView
            userProgress={state.userProgress}
            onBack={() => navigateToView('dashboard')}
          />
        );
      case 'casestudies':
        return (
          <CaseStudiesView
            onBack={() => navigateToView('dashboard')}
            onComplete={() => addPoints(pointsSystem.caseStudyCompleted, 'Case Study Solved')}
          />
        );
      case 'practice':
        return (
          <PracticeProblemsView
            onBack={() => navigateToView('dashboard')}
            onComplete={() =>
              addPoints(pointsSystem.practiceProblemSolved, 'Practice Problem Solved')
            }
          />
        );
      case 'career':
        return <CareerGuideView onBack={() => navigateToView('dashboard')} />;
      default:
        return null;
    }
  };

  const isDarkMode = state.userProgress.darkMode;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-islamic-green-50 via-white to-islamic-gold-50'}`}>
      <Header />

      {/* Enhanced Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white'} shadow-md sticky top-0 z-10`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex gap-1 overflow-x-auto">
              <NavButton
                icon={<LayoutDashboard size={18} />}
                label="Dashboard"
                isActive={state.currentView === 'dashboard'}
                onClick={() => navigateToView('dashboard')}
                isDark={isDarkMode}
              />
              <NavButton
                icon={<Home size={18} />}
                label="Modules"
                isActive={state.currentView === 'modules'}
                onClick={() => navigateToView('modules')}
                isDark={isDarkMode}
              />
              <NavButton
                icon={<CreditCard size={18} />}
                label="Flashcards"
                isActive={state.currentView === 'flashcards'}
                onClick={() => navigateToView('flashcards')}
                isDark={isDarkMode}
              />
              <NavButton
                icon={<Award size={18} />}
                label="Quiz"
                isActive={state.currentView === 'quiz'}
                onClick={() => navigateToView('quiz')}
                isDark={isDarkMode}
              />
              <NavButton
                icon={<FileText size={18} />}
                label="Case Studies"
                isActive={state.currentView === 'casestudies'}
                onClick={() => navigateToView('casestudies')}
                isDark={isDarkMode}
              />
              <NavButton
                icon={<Trophy size={18} />}
                label="Certificates"
                isActive={state.currentView === 'certificates'}
                onClick={() => navigateToView('certificates')}
                isDark={isDarkMode}
              />
              <NavButton
                icon={<Briefcase size={18} />}
                label="Career"
                isActive={state.currentView === 'career'}
                onClick={() => navigateToView('career')}
                isDark={isDarkMode}
              />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main className={`max-w-7xl mx-auto px-4 py-8 ${isDarkMode ? 'text-white' : ''}`}>
        {renderView()}
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-islamic-green-900'} text-white py-8 mt-16`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Islamic Banking Learning Platform - Premium</p>
          <p className={isDarkMode ? 'text-gray-400' : 'text-islamic-green-200'}>
            Master Islamic Banking from Basics to Advanced
          </p>
          <p className={`text-sm mt-4 ${isDarkMode ? 'text-gray-500' : 'text-islamic-green-300'}`}>
            Learn • Practice • Master • Certify
          </p>
        </div>
      </footer>
    </div>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  isDark: boolean;
}

function NavButton({ icon, label, isActive, onClick, isDark }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
        isActive
          ? 'bg-islamic-green-600 text-white'
          : isDark
          ? 'text-gray-300 hover:bg-gray-700'
          : 'text-gray-700 hover:bg-islamic-green-50'
      }`}
    >
      {icon}
      <span className="hidden md:inline text-sm">{label}</span>
    </button>
  );
}

export default App;
