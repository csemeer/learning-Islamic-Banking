import { flexcubeModules } from '../data/flexcubeData';
import { UserProgress } from '../types';
import { BookOpen, Code, Wrench, GraduationCap, ChevronRight } from 'lucide-react';

interface Props {
  userProgress: UserProgress;
  onModuleClick: (moduleId: string) => void;
  onLabsClick: () => void;
}

export default function FlexcubeDashboard({ onModuleClick, onLabsClick }: Props) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundation':
        return 'from-blue-600 to-blue-700';
      case 'Products':
        return 'from-islamic-green-600 to-islamic-green-700';
      case 'Financing':
        return 'from-purple-600 to-purple-700';
      case 'Advanced':
        return 'from-orange-600 to-orange-700';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur">
            <Code size={48} className="text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Oracle Flexcube UBS Solution Architect
            </h1>
            <p className="text-xl text-blue-100">
              Islamic Banking Implementation - Versions 11.3+
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold">4</div>
            <div className="text-sm text-blue-100">Core Modules</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold">20+</div>
            <div className="text-sm text-blue-100">Topics</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm text-blue-100">Hands-on Labs</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold">Real</div>
            <div className="text-sm text-blue-100">Implementation</div>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={onLabsClick}
          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white text-left hover:shadow-2xl transition-all transform hover:-translate-y-1"
        >
          <Wrench size={40} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Configuration Labs</h3>
          <p className="text-orange-100 mb-4">
            Hands-on exercises for product setup and configuration
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span>Start Labs</span>
            <ChevronRight size={16} />
          </div>
        </button>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <GraduationCap size={40} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Solution Architecture</h3>
          <p className="text-purple-100 mb-4">
            Design patterns, best practices, and integration strategies
          </p>
          <div className="text-sm font-semibold">Coming Soon</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white">
          <BookOpen size={40} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Islamic Modules</h3>
          <p className="text-green-100 mb-4">
            CASA, IC, CL, TD, PD implementation guides
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span>Explore Below</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      {/* Course Outline */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Modules</h2>

        <div className="grid grid-cols-1 gap-6">
          {flexcubeModules.map((module) => (
            <div
              key={module.id}
              onClick={() => onModuleClick(module.id)}
              className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className={`bg-gradient-to-r ${getLevelColor(module.level)} text-white p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{module.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{module.title}</h3>
                      <p className="text-sm opacity-90">{module.level} Level</p>
                    </div>
                  </div>
                  <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700 mb-4">{module.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {module.topics.length} Topics
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    View Topics
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Master</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="font-bold text-lg text-gray-800 mb-3">🏗️ Architecture & Components</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Flexcube UBS 3-tier architecture</li>
              <li>• Islamic banking modules (CASA, IC, CL, TD, PD)</li>
              <li>• Integration framework and APIs</li>
              <li>• Database schema and data model</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="font-bold text-lg text-gray-800 mb-3">🏦 Product Implementation</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Wadiah and Mudharabah CASA setup</li>
              <li>• Murabahah, Ijarah, Musharakah financing</li>
              <li>• Islamic cards and deposits configuration</li>
              <li>• GL mapping and accounting entries</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="font-bold text-lg text-gray-800 mb-3">📐 Solution Architecture</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Product design patterns</li>
              <li>• Integration architecture</li>
              <li>• Data migration strategies</li>
              <li>• Performance optimization techniques</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="font-bold text-lg text-gray-800 mb-3">🔧 Hands-On Skills</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Product configuration labs</li>
              <li>• API integration exercises</li>
              <li>• Profit distribution setup</li>
              <li>• Troubleshooting and testing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Oracle Flexcube', version: '11.3+', color: 'bg-red-100 text-red-800' },
            { name: 'Oracle Database', version: '12c+', color: 'bg-blue-100 text-blue-800' },
            { name: 'WebLogic Server', version: '12c+', color: 'bg-orange-100 text-orange-800' },
            { name: 'Oracle JET/ADF', version: 'Latest', color: 'bg-purple-100 text-purple-800' },
            { name: 'SOAP/REST', version: 'Web Services', color: 'bg-green-100 text-green-800' },
            { name: 'Java/J2EE', version: 'Enterprise', color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Oracle SOA', version: '12c', color: 'bg-indigo-100 text-indigo-800' },
            { name: 'SQL/PL-SQL', version: 'Advanced', color: 'bg-pink-100 text-pink-800' },
          ].map((tech) => (
            <div key={tech.name} className={`${tech.color} rounded-lg p-4`}>
              <div className="font-bold">{tech.name}</div>
              <div className="text-sm">{tech.version}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
