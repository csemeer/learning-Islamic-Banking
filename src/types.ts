export interface UserProgress {
  completedTopics: string[];
  quizScores: { [key: string]: number };
  lastVisited: string;
  studyStreak: number;
}

export type ViewMode = 'modules' | 'topic' | 'flashcards' | 'quiz' | 'glossary' | 'comparison';

export interface AppState {
  currentView: ViewMode;
  selectedModuleId: string | null;
  selectedTopicId: string | null;
  userProgress: UserProgress;
}
