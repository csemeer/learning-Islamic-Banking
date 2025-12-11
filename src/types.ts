export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'topics' | 'quiz' | 'streak' | 'points' | 'special';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  earnedDate?: string;
}

export interface Note {
  topicId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Bookmark {
  topicId: string;
  moduleId: string;
  addedAt: string;
}

export interface DailyChallenge {
  id: string;
  date: string;
  type: 'flashcard' | 'quiz' | 'topic';
  targetModuleId: string;
  completed: boolean;
  points: number;
}

export interface UserProgress {
  completedTopics: string[];
  quizScores: { [key: string]: number };
  lastVisited: string;
  studyStreak: number;
  totalPoints: number;
  earnedBadges: string[];
  achievements: Achievement[];
  notes: Note[];
  bookmarks: Bookmark[];
  dailyChallenges: DailyChallenge[];
  lastChallengeDate: string;
  reviewQueue: string[];
  darkMode: boolean;
  certificates: string[];
}

export type ViewMode = 'modules' | 'topic' | 'flashcards' | 'quiz' | 'glossary' | 'comparison' | 'dashboard' | 'certificates' | 'casestudies' | 'practice' | 'career';

export interface AppState {
  currentView: ViewMode;
  selectedModuleId: string | null;
  selectedTopicId: string | null;
  userProgress: UserProgress;
}
