import { UserProgress } from '../types';
import { modules } from '../data/islamicBankingData';
import { ArrowLeft, Download, CheckCircle, Lock } from 'lucide-react';

interface Props {
  onBack: () => void;
  userProgress: UserProgress;
}

export default function CertificatesView({ onBack, userProgress }: Props) {
  const totalTopics = modules.reduce((sum, module) => sum + module.topics.length, 0);
  const completedCount = userProgress.completedTopics.length;
  const completionPercentage = Math.round((completedCount / totalTopics) * 100);

  const certificates = [
    {
      id: 'foundation-cert',
      title: 'Islamic Banking Foundations',
      description: 'Master the core principles of Islamic finance',
      moduleId: 'foundations',
      icon: '🕌',
      requirement: 'Complete all Foundation topics',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'products-cert',
      title: 'Islamic Banking Products Specialist',
      description: 'Expert in CASA and deposit products',
      moduleId: 'casa',
      icon: '🏦',
      requirement: 'Complete CASA and Deposits modules',
      color: 'from-islamic-green-500 to-islamic-green-600',
    },
    {
      id: 'financing-cert',
      title: 'Islamic Financing Professional',
      description: 'Certified in Islamic financing mechanisms',
      moduleId: 'financing-products',
      icon: '🏠',
      requirement: 'Complete all Financing topics',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'advanced-cert',
      title: 'Advanced Islamic Finance Practitioner',
      description: 'Mastery of Sukuk, Takaful, and Governance',
      moduleId: 'advanced-concepts',
      icon: '📈',
      requirement: 'Complete all Advanced topics',
      color: 'from-islamic-gold-500 to-islamic-gold-600',
    },
    {
      id: 'master-cert',
      title: 'Islamic Banking Master',
      description: 'Complete mastery of all Islamic Banking concepts',
      moduleId: 'all',
      icon: '👑',
      requirement: 'Complete 100% of all modules',
      color: 'from-red-500 to-pink-600',
    },
  ];

  const isModuleComplete = (moduleId: string) => {
    if (moduleId === 'all') {
      return completionPercentage === 100;
    }
    const module = modules.find((m) => m.id === moduleId);
    if (!module) return false;
    return module.topics.every((topic) => userProgress.completedTopics.includes(topic.id));
  };

  const handleDownload = (certTitle: string) => {
    // In a real app, this would generate a PDF certificate
    alert(`Certificate "${certTitle}" download feature will be implemented with PDF generation.`);
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

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Professional Certificates</h2>
          <p className="text-gray-600">
            Earn certificates to showcase your Islamic Banking expertise
          </p>
        </div>

        {/* Overall Progress */}
        <div className="mb-8 p-6 bg-gradient-to-r from-islamic-green-100 to-islamic-gold-100 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-800">Your Progress</h3>
            <span className="text-3xl font-bold text-islamic-green-700">
              {completionPercentage}%
            </span>
          </div>
          <div className="bg-white rounded-full h-4 shadow-inner">
            <div
              className="bg-gradient-to-r from-islamic-green-600 to-islamic-gold-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-700 mt-2">
            {completedCount} of {totalTopics} topics completed
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="space-y-6">
          {certificates.map((cert) => {
            const isComplete = isModuleComplete(cert.moduleId);

            return (
              <div
                key={cert.id}
                className={`border-2 rounded-xl overflow-hidden transition-all ${
                  isComplete
                    ? 'border-islamic-green-400 shadow-lg'
                    : 'border-gray-200 opacity-75'
                }`}
              >
                <div className={`bg-gradient-to-r ${cert.color} text-white p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{cert.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{cert.title}</h3>
                        <p className="text-white opacity-90">{cert.description}</p>
                      </div>
                    </div>
                    {isComplete ? (
                      <CheckCircle size={48} className="text-white" />
                    ) : (
                      <Lock size={48} className="text-white opacity-50" />
                    )}
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Requirement:
                      </p>
                      <p className="text-gray-600">{cert.requirement}</p>
                    </div>
                    {isComplete ? (
                      <button
                        onClick={() => handleDownload(cert.title)}
                        className="flex items-center gap-2 px-6 py-3 bg-islamic-green-600 hover:bg-islamic-green-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        <Download size={20} />
                        Download Certificate
                      </button>
                    ) : (
                      <div className="text-center">
                        <div className="px-6 py-3 bg-gray-200 text-gray-600 rounded-lg font-semibold">
                          <Lock size={20} className="inline mr-2" />
                          Locked
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Complete requirements to unlock
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">📜 About Certificates</h3>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Certificates are earned by completing module requirements</li>
            <li>• Download as PDF to share on LinkedIn and your resume</li>
            <li>• Each certificate validates your mastery of specific topics</li>
            <li>• The Master certificate requires 100% completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
