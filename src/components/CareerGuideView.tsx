import { useState } from 'react';
import { careerGuides } from '../data/enhancedData';
import { ArrowLeft, Briefcase, GraduationCap, HelpCircle, Award, TrendingUp } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function CareerGuideView({ onBack }: Props) {
  const [selectedGuide, setSelectedGuide] = useState(careerGuides[0]);

  const categoryIcons: { [key: string]: JSX.Element } = {
    roles: <Briefcase className="text-blue-600" size={24} />,
    skills: <GraduationCap className="text-islamic-green-600" size={24} />,
    interview: <HelpCircle className="text-purple-600" size={24} />,
    certifications: <Award className="text-islamic-gold-600" size={24} />,
    industry: <TrendingUp className="text-orange-600" size={24} />,
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-islamic-green-600 hover:text-islamic-green-700 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Career Resources</h3>
            <div className="space-y-2">
              {careerGuides.map((guide) => (
                <button
                  key={guide.id}
                  onClick={() => setSelectedGuide(guide)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedGuide.id === guide.id
                      ? 'bg-islamic-green-100 text-islamic-green-800 font-semibold'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {categoryIcons[guide.category]}
                    <span className="text-sm font-semibold">
                      {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-xs line-clamp-2">{guide.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              {categoryIcons[selectedGuide.category]}
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{selectedGuide.title}</h2>
                <p className="text-sm text-gray-600">
                  {selectedGuide.category.charAt(0).toUpperCase() +
                    selectedGuide.category.slice(1)}{' '}
                  Guide
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedGuide.content}
              </div>
            </div>

            {/* Related Topics */}
            {selectedGuide.relatedTopics.length > 0 && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📚 Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedGuide.relatedTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Additional Resources */}
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">💡 Pro Tips</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Build a strong foundation with this platform before applying</li>
              <li>• Network with professionals through LinkedIn and industry events</li>
              <li>• Consider professional certifications (CIFE, CIFP, AAOIFI)</li>
              <li>• Stay updated with Islamic finance news and developments</li>
              <li>• Practice explaining concepts clearly to demonstrate expertise</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
