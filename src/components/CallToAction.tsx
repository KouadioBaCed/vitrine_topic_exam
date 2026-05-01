import { ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 rounded-3xl overflow-hidden px-8 py-16 text-center shadow-2xl">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400 opacity-15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-400 opacity-10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Rejoignez-nous dès aujourd'hui
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Rejoignez des centaines{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                d'apprenants
              </span>{' '}
              dès aujourd'hui
            </h2>

            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
              Commencez votre formation maintenant. Choisissez votre domaine, progressez à votre rythme
              et obtenez un certificat reconnu. Votre avenir commence ici.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://topic-exams.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 text-lg"
              >
                S'inscrire maintenant
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#formations"
                className="inline-flex items-center justify-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-8 py-4 rounded-xl border border-white border-opacity-20 transition-all duration-200 text-lg"
              >
                Parcourir les formations
              </a>
            </div>

            <p className="text-blue-300 text-sm mt-6">
              Aucun engagement. Essai gratuit de 7 jours sur les offres Standard et Premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
