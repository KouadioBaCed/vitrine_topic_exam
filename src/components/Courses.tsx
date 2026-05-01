import { BarChart3, Briefcase, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

const domains = [
  {
    title: 'Data & IT',
    count: 5,
    description: 'Analytics, Data Science, BI, Excel, Programmation.',
    icon: BarChart3,
    accent: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Gestion de projets',
    count: 4,
    description: 'PMP, CAPM, Project DPro et fondamentaux.',
    icon: Briefcase,
    accent: 'from-orange-500 to-amber-500',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Programmes & ONG',
    count: 4,
    description: 'Program, Social Good, MEAL, Finance DPro.',
    icon: Globe2,
    accent: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Audit & Conformité',
    count: 5,
    description: 'CIA 1/2/3, CISA, CFE.',
    icon: ShieldCheck,
    accent: 'from-purple-500 to-fuchsia-500',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

export default function Courses() {
  return (
    <section id="formations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nos domaines
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            4 domaines d'expertise
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explorez nos domaines de formation. Tarif unique <span className="font-semibold text-gray-900">200.000 FCFA</span> par formation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.map((d) => {
            const Icon = d.icon;
            return (
              <a
                key={d.title}
                href="#tarifs"
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${d.accent}`} />

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${d.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${d.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                    {d.count} formations
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                  {d.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {d.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  Voir les formations
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
