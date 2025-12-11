import { useState, useEffect } from 'react';
import { Book, CreditCard, Home, Award, GitCompare } from 'lucide-react';
import { AppState, ViewMode } from './types';
import ModuleGrid from './components/ModuleGrid';
import TopicView from './components/TopicView';
import FlashcardsView from './components/FlashcardsView';
import QuizView from './components/QuizView';
import GlossaryView from './components/GlossaryView';
import ComparisonView from './components/ComparisonView';
import Header from './components/Header';
import ProgressTracker from './components/ProgressTracker';

function App() {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('islamicBankingProgress');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      currentView: 'modules' as ViewMode,
      selectedModuleId: null,
      selectedTopicId: null,
      userProgress: {
        completedTopics: [],
        quizScores: {},
        lastVisited: new Date().toISOString(),
        studyStreak: 0,
      },
    };
  });

  useEffect(() => {
    localStorage.setItem('islamicBankingProgress', JSON.stringify(state));
  }, [state]);

  const navigateToView = (view: ViewMode, moduleId?: string, topicId?: string) => {
    setState((prev) => ({
      ...prev,
      currentView: view,
      selectedModuleId: moduleId || prev.selectedModuleId,
      selectedTopicId: topicId || prev.selectedTopicId,
    }));
  };

  const markTopicComplete = (topicId: string) => {
    setState((prev) => ({
      ...prev,
      userProgress: {
        ...prev.userProgress,
        completedTopics: prev.userProgress.completedTopics.includes(topicId)
          ? prev.userProgress.completedTopics
          : [...prev.userProgress.completedTopics, topicId],
      },
    }));
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
  };

  const renderView = () => {
    switch (state.currentView) {
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
            onBack={() => navigateToView('modules')}
          />
        );
      case 'quiz':
        return (
          <QuizView
            moduleId={state.selectedModuleId}
            onBack={() => navigateToView('modules')}
            onComplete={updateQuizScore}
          />
        );
      case 'glossary':
        return <GlossaryView onBack={() => navigateToView('modules')} />;
      case 'comparison':
        return <ComparisonView onBack={() => navigateToView('modules')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-green-50 via-white to-islamic-gold-50">
      <Header />

      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <button
              onClick={() => navigateToView('modules')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                state.currentView === 'modules'
                  ? 'bg-islamic-green-600 text-white'
                  : 'text-gray-700 hover:bg-islamic-green-50'
              }`}
            >
              <Home size={20} />
              <span className="hidden sm:inline">Modules</span>
            </button>
            <button
              onClick={() => navigateToView('flashcards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                state.currentView === 'flashcards'
                  ? 'bg-islamic-green-600 text-white'
                  : 'text-gray-700 hover:bg-islamic-green-50'
              }`}
            >
              <CreditCard size={20} />
              <span className="hidden sm:inline">Flashcards</span>
            </button>
            <button
              onClick={() => navigateToView('quiz')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                state.currentView === 'quiz'
                  ? 'bg-islamic-green-600 text-white'
                  : 'text-gray-700 hover:bg-islamic-green-50'
              }`}
            >
              <Award size={20} />
              <span className="hidden sm:inline">Quiz</span>
            </button>
            <button
              onClick={() => navigateToView('glossary')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                state.currentView === 'glossary'
                  ? 'bg-islamic-green-600 text-white'
                  : 'text-gray-700 hover:bg-islamic-green-50'
              }`}
            >
              <Book size={20} />
              <span className="hidden sm:inline">Glossary</span>
            </button>
            <button
              onClick={() => navigateToView('comparison')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                state.currentView === 'comparison'
                  ? 'bg-islamic-green-600 text-white'
                  : 'text-gray-700 hover:bg-islamic-green-50'
              }`}
            >
              <GitCompare size={20} />
              <span className="hidden sm:inline">Compare</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProgressTracker userProgress={state.userProgress} />
        {renderView()}
      </main>

      <footer className="bg-islamic-green-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Islamic Banking Learning Platform</p>
          <p className="text-islamic-green-200">Master Islamic Banking from Basics to Advanced</p>
          <p className="text-sm text-islamic-green-300 mt-4">
            Learn • Practice • Master
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
