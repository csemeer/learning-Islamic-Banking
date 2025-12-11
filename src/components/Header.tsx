import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-islamic-green-700 to-islamic-green-600 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <BookOpen size={40} className="text-islamic-gold-300" />
          <h1 className="text-4xl font-bold">Islamic Banking Academy</h1>
        </div>
        <p className="text-center text-islamic-green-100 text-lg">
          Complete Learning Platform: From Foundations to Advanced Concepts
        </p>
        <div className="flex justify-center gap-8 mt-4 text-sm text-islamic-green-100">
          <span>📚 4 Learning Levels</span>
          <span>💡 60+ Topics</span>
          <span>🎯 Interactive Quizzes</span>
          <span>🎴 Flashcards</span>
        </div>
      </div>
    </header>
  );
}
