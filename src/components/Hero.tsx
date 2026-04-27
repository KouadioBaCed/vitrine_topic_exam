import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-400 opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-60 border border-blue-700 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            Plateforme #1 de formation en Afrique
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Développez vos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              compétences
            </span>{' '}
            avec des formations de qualité
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            Accédez à des formations certifiantes dispensées par des experts reconnus.
            Apprenez à votre rythme, depuis n'importe où, et boostez votre carrière.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#formations"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#formations"
              className="inline-flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-7 py-4 rounded-xl border border-white border-opacity-20 transition-all duration-200"
            >
              <Play className="w-5 h-5" />
              Voir les formations
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-bold text-white">15k+</p>
              <p className="text-gray-400 text-sm mt-1">Apprenants actifs</p>
            </div>
            <div className="border-l border-white border-opacity-20 pl-8">
              <p className="text-3xl font-bold text-white">120+</p>
              <p className="text-gray-400 text-sm mt-1">Formations disponibles</p>
            </div>
            <div className="border-l border-white border-opacity-20 pl-8">
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-gray-400 text-sm mt-1">Taux de satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Content — visual card */}
        <div className="relative hidden lg:block">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Étudiants apprenant en ligne"
              className="rounded-2xl w-full object-cover h-[500px] shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Certification</p>
                <p className="text-sm font-bold text-gray-900">Reconnue mondialement</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Communauté active</p>
                <p className="text-sm font-bold text-gray-900">+15 000 apprenants</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
