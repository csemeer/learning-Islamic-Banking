import { modules } from '../data/islamicBankingData';
import { ArrowLeft, GitCompare } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function ComparisonView({ onBack }: Props) {
  const comparisons = modules.flatMap((module) =>
    module.topics
      .filter((topic) => topic.comparison)
      .map((topic) => ({
        title: topic.title,
        islamic: topic.comparison!.islamic,
        conventional: topic.comparison!.conventional,
        module: module.title,
        moduleIcon: module.icon,
      }))
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
        <div className="flex items-center gap-3 mb-2">
          <GitCompare className="text-islamic-green-600" size={36} />
          <h2 className="text-3xl font-bold text-gray-800">
            Islamic vs Conventional Banking
          </h2>
        </div>
        <p className="text-gray-600 mb-8">
          Side-by-side comparison of Islamic and conventional banking products and principles
        </p>

        <div className="space-y-6">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-islamic-green-300 transition-colors"
            >
              <div className="bg-gradient-to-r from-islamic-green-100 to-islamic-gold-100 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{comparison.moduleIcon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{comparison.title}</h3>
                    <p className="text-sm text-gray-600">{comparison.module}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 bg-islamic-green-50 border-r-2 border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-islamic-green-600 rounded-full"></div>
                    <h4 className="font-bold text-islamic-green-800">Islamic Banking</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comparison.islamic}</p>
                </div>

                <div className="p-6 bg-gray-50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <h4 className="font-bold text-gray-800">Conventional Banking</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comparison.conventional}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-islamic-green-50 to-islamic-gold-50 border-2 border-islamic-green-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-3 text-lg">Key Differences Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-islamic-green-700 mb-2">
                ✅ Islamic Banking Principles
              </h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• No interest (Riba) - profit-sharing instead</li>
                <li>• Asset-backed transactions</li>
                <li>• Risk-sharing between parties</li>
                <li>• Ethical investment screening</li>
                <li>• Shariah compliance oversight</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Conventional Banking</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Interest-based lending and deposits</li>
                <li>• Money-based transactions</li>
                <li>• Risk transferred to borrower</li>
                <li>• Profit-driven investment</li>
                <li>• Regulatory compliance only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
