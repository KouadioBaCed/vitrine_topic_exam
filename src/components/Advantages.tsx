import { Clock, Users, Award, Headphones as HeadphonesIcon, Globe, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    color: 'bg-blue-100 text-blue-600',
    title: 'Accès 24h/24, 7j/7',
    description: 'Apprenez à votre rythme, à toute heure, depuis votre smartphone, tablette ou ordinateur.',
  },
  {
    icon: Users,
    color: 'bg-orange-100 text-orange-600',
    title: 'Formateurs experts',
    description: 'Nos formateurs sont des professionnels reconnus avec des années d\'expérience terrain.',
  },
  {
    icon: Award,
    color: 'bg-green-100 text-green-600',
    title: 'Certificat reconnu',
    description: 'Obtenez un certificat de complétion valorisé par les recruteurs et employeurs africains et internationaux.',
  },
  {
    icon: HeadphonesIcon,
    color: 'bg-cyan-100 text-cyan-600',
    title: 'Support dédié',
    description: 'Notre équipe vous accompagne à chaque étape : questions, corrections, orientation personnalisée.',
  },
  {
    icon: Globe,
    color: 'bg-pink-100 text-pink-600',
    title: 'Communauté globale',
    description: 'Rejoignez une communauté d\'apprenants engagés, partagez, collaborez et progressez ensemble.',
  },
  {
    icon: TrendingUp,
    color: 'bg-yellow-100 text-yellow-600',
    title: 'Progression mesurable',
    description: 'Suivez votre avancement en temps réel grâce à des tableaux de bord clairs et motivants.',
  },
];

export default function Advantages() {
  return (
    <section id="avantages" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 opacity-40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 opacity-40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Étudiant en ligne"
                className="rounded-2xl w-full object-cover h-[560px] shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Taux de réussite</p>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
                <p className="text-xs text-gray-400 mt-2">Parmi nos apprenants certifiés</p>
              </div>
            </div>
          </div>

          {/* Right: advantages */}
          <div>
            <div className="mb-12">
              <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Pourquoi nous choisir
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Tout ce dont vous avez besoin pour réussir
              </h2>
              <p className="text-lg text-gray-500">
                EduAfrique a été conçu pour répondre aux besoins réels des apprenants africains et de la diaspora.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
