import { useState } from 'react';
import { flashcards, modules } from '../data/islamicBankingData';
import { ArrowLeft, RotateCw, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

interface Props {
  moduleId: string | null;
  onBack: () => void;
}

export default function FlashcardsView({ moduleId, onBack }: Props) {
  const [selectedModule, setSelectedModule] = useState<string>(moduleId || 'foundations');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const moduleCards = flashcards.filter((card) => card.moduleId === selectedModule);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % moduleCards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + moduleCards.length) % moduleCards.length);
  };

  const handleShuffle = () => {
    setShuffled(!shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const displayCards = shuffled
    ? [...moduleCards].sort(() => Math.random() - 0.5)
    : moduleCards;

  const displayCard = displayCards[currentCardIndex];

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-islamic-green-600 hover:text-islamic-green-700 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Modules
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Flashcards</h2>
          <button
            onClick={handleShuffle}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              shuffled
                ? 'bg-islamic-gold-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Shuffle size={20} />
            Shuffle
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Module
          </label>
          <select
            value={selectedModule}
            onChange={(e) => {
              setSelectedModule(e.target.value);
              setCurrentCardIndex(0);
              setIsFlipped(false);
            }}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green-500 focus:outline-none"
          >
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.icon} {module.title}
              </option>
            ))}
          </select>
        </div>

        {displayCard ? (
          <>
            <div className="mb-4 text-center text-gray-600">
              Card {currentCardIndex + 1} of {displayCards.length}
            </div>

            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative h-96 mb-6 cursor-pointer perspective"
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
                }}
              >
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-islamic-green-500 to-islamic-green-600 rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-white text-center">
                    <p className="text-sm uppercase tracking-wide mb-4 opacity-80">
                      Question
                    </p>
                    <h3 className="text-3xl font-bold mb-4">{displayCard.front}</h3>
                    {displayCard.arabicTerm && (
                      <p className="text-4xl mt-6 text-islamic-gold-200">
                        {displayCard.arabicTerm}
                      </p>
                    )}
                  </div>
                  <div className="absolute bottom-6 flex items-center gap-2 text-white opacity-70">
                    <RotateCw size={20} />
                    <span className="text-sm">Click to flip</span>
                  </div>
                </div>

                <div
                  className="absolute w-full h-full bg-gradient-to-br from-islamic-gold-500 to-islamic-gold-600 rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 backface-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="text-white text-center">
                    <p className="text-sm uppercase tracking-wide mb-4 opacity-80">
                      Answer
                    </p>
                    <h3 className="text-2xl font-bold leading-relaxed">{displayCard.back}</h3>
                  </div>
                  <div className="absolute bottom-6 flex items-center gap-2 text-white opacity-70">
                    <RotateCw size={20} />
                    <span className="text-sm">Click to flip</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors"
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="flex items-center gap-2 px-6 py-3 bg-islamic-green-600 hover:bg-islamic-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                <RotateCw size={20} />
                Flip Card
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No flashcards available for this module yet.
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-2">💡 Study Tips</h3>
        <ul className="text-gray-700 space-y-1">
          <li>• Try to answer before flipping the card</li>
          <li>• Use the memory tips provided in each topic</li>
          <li>• Shuffle cards for better retention</li>
          <li>• Review cards multiple times for mastery</li>
        </ul>
      </div>
    </div>
  );
}
