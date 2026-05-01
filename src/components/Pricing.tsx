import { useState } from 'react';
import { BarChart3, Briefcase, Globe2, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';

const PRICE = '200.000 FCFA';

const categories = [
  {
    id: 'data',
    label: 'Data & IT',
    icon: BarChart3,
    accent: 'from-blue-500 to-cyan-500',
    badge: 'bg-blue-50 text-blue-700',
    ring: 'ring-blue-500',
    courses: [
      'Data Analytics',
      'Data Science',
      'Business Intelligence',
      'Excel Avancé',
      'Programmation (Python, SQL, Power BI)',
    ],
  },
  {
    id: 'projets',
    label: 'Gestion de projets',
    icon: Briefcase,
    accent: 'from-orange-500 to-amber-500',
    badge: 'bg-orange-50 text-orange-700',
    ring: 'ring-orange-500',
    courses: ['Gestion de projets', 'PMP', 'CAPM', 'Project DPro'],
  },
  {
    id: 'ong',
    label: 'Programmes & ONG',
    icon: Globe2,
    accent: 'from-emerald-500 to-teal-500',
    badge: 'bg-emerald-50 text-emerald-700',
    ring: 'ring-emerald-500',
    courses: ['Program DPro', 'Social Good DPro', 'MEAL DPro', 'Finance DPro'],
  },
  {
    id: 'audit',
    label: 'Audit & Conformité',
    icon: ShieldCheck,
    accent: 'from-purple-500 to-fuchsia-500',
    badge: 'bg-purple-50 text-purple-700',
    ring: 'ring-purple-500',
    courses: ['CIA 1', 'CIA 2', 'CIA 3', 'CISA', 'CFE'],
  },
];

const allFormations = categories.flatMap((c) =>
  c.courses.map((name) => ({ name, category: c }))
);

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const visible =
    activeTab === 'all'
      ? allFormations
      : allFormations.filter((f) => f.category.id === activeTab);

  return (
    <section id="tarifs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Tarif unique
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Toutes nos formations à <span className="text-blue-600">200.000 FCFA</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un prix clair et identique pour chaque formation — quel que soit le domaine ou le niveau.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Toutes ({allFormations.length})
          </button>
          {categories.map((c) => {
            const Icon = c.icon;
            const active = activeTab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((f) => {
            const Icon = f.category.icon;
            return (
              <div
                key={f.name}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-1 bg-gradient-to-r ${f.category.accent}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${f.category.accent} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${f.category.badge}`}>
                      {f.category.label}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug min-h-[3rem] group-hover:text-blue-600 transition-colors">
                    {f.name}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-2xl font-extrabold text-gray-900">200.000</span>
                      <span className="text-sm font-semibold text-gray-500">FCFA</span>
                    </div>
                    <a
                      href="https://topic-exam.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      S'inscrire
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between border border-gray-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Inclus dans chaque formation</p>
              <p className="text-sm text-gray-500">
                Support de cours, accompagnement formateur, certificat de participation et accès à la communauté.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Nous contacter
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
