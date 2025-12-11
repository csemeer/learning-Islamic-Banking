import { useState } from 'react';
import { modules } from '../data/islamicBankingData';
import { ArrowLeft, Search } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function GlossaryView({ onBack }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const allTerms = modules.flatMap((module) =>
    module.topics
      .filter((topic) => topic.arabicTerm)
      .map((topic) => ({
        term: topic.title,
        arabic: topic.arabicTerm!,
        definition: topic.description,
        module: module.title,
        moduleIcon: module.icon,
      }))
  );

  const filteredTerms = allTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Islamic Banking Glossary</h2>
        <p className="text-gray-600 mb-6">
          Comprehensive list of Islamic banking terms with Arabic names and definitions
        </p>

        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((term, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-islamic-green-50 rounded-lg p-6 border-2 border-islamic-green-200 hover:border-islamic-green-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{term.term}</h3>
                  <p className="text-2xl text-islamic-gold-600 mt-1">{term.arabic}</p>
                </div>
                <span className="text-2xl">{term.moduleIcon}</span>
              </div>
              <p className="text-gray-700 mb-3">{term.definition}</p>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {term.module}
              </div>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No terms found matching "{searchTerm}"
          </div>
        )}

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">Quick Reference</h3>
          <p className="text-gray-700 mb-2">
            This glossary contains all key Islamic banking terms covered in the modules.
          </p>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Each term includes the Arabic transliteration</li>
            <li>• Definitions are concise yet comprehensive</li>
            <li>• Terms are organized by their source module</li>
            <li>• Use the search to quickly find specific terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
