import { BarChart3, Briefcase, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

const PRICE = '200.000 FCFA';

const categories = [
  {
    id: 'data-it',
    title: 'Data & IT',
    icon: BarChart3,
    accent: 'from-blue-500 to-cyan-500',
    badge: 'bg-blue-50 text-blue-700',
    courses: [
      { name: 'Data Analytics', description: 'Analyser les données pour piloter la décision.' },
      { name: 'Data Science', description: 'Modèles statistiques et machine learning appliqués.' },
      { name: 'Business Intelligence', description: 'Tableaux de bord et reporting stratégique.' },
      { name: 'Excel Avancé', description: 'Maîtrise des formules, TCD et automatisations.' },
      { name: 'Programmation (Python, SQL, Power BI)', description: 'Outils incontournables de l\'analyste moderne.' },
    ],
  },
  {
    id: 'gestion-projets',
    title: 'Gestion de projets',
    icon: Briefcase,
    accent: 'from-orange-500 to-amber-500',
    badge: 'bg-orange-50 text-orange-700',
    courses: [
      { name: 'Gestion de projets', description: 'Méthodes, outils et bonnes pratiques projet.' },
      { name: 'PMP', description: 'Préparation à la certification Project Management Professional.' },
      { name: 'CAPM', description: 'Certified Associate in Project Management.' },
      { name: 'Project DPro', description: 'Gestion de projets de développement (PMD Pro).' },
    ],
  },
  {
    id: 'programmes-ong',
    title: 'Programmes & ONG',
    icon: Globe2,
    accent: 'from-emerald-500 to-teal-500',
    badge: 'bg-emerald-50 text-emerald-700',
    courses: [
      { name: 'Program DPro', description: 'Gestion de programmes pour le secteur du développement.' },
      { name: 'Social Good DPro', description: 'Conduire des projets à impact social.' },
      { name: 'MEAL DPro', description: 'Suivi, évaluation, redevabilité et apprentissage.' },
      { name: 'Finance DPro', description: 'Gestion financière des projets et programmes ONG.' },
    ],
  },
  {
    id: 'audit-conformite',
    title: 'Audit & Conformité',
    icon: ShieldCheck,
    accent: 'from-purple-500 to-fuchsia-500',
    badge: 'bg-purple-50 text-purple-700',
    courses: [
      { name: 'CIA 1', description: 'Certified Internal Auditor - Partie 1.' },
      { name: 'CIA 2', description: 'Certified Internal Auditor - Partie 2.' },
      { name: 'CIA 3', description: 'Certified Internal Auditor - Partie 3.' },
      { name: 'CISA', description: 'Certified Information Systems Auditor.' },
      { name: 'CFE', description: 'Certified Fraud Examiner.' },
    ],
  },
];

export default function Courses() {
  return (
    <section id="formations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nos formations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Des formations pour chaque ambition
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un catalogue structuré par domaines, animé par des experts du secteur. Tarif unique pour toutes les formations.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.accent} flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-1 ${category.badge}`}>
                      Catégorie
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.courses.map((course) => (
                    <div
                      key={course.name}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover group p-6 flex flex-col"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.accent} flex items-center justify-center mb-4 shadow-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {course.name}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                        {course.description}
                      </p>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-baseline gap-1 mb-4">
                          <span className="text-2xl font-extrabold text-gray-900">{PRICE}</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group-hover:gap-3">
                          S'inscrire
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="#tarifs"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Voir toutes les formations
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
