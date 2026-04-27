import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '4 900',
    period: 'FCFA / mois',
    description: 'Idéal pour débuter votre parcours d\'apprentissage.',
    color: 'bg-white border-gray-200',
    badgeColor: '',
    buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
    popular: false,
    features: [
      'Accès à 10 formations',
      'Vidéos HD',
      'Exercices pratiques',
      'Forum de la communauté',
      'Certificat de participation',
      null,
      null,
    ],
  },
  {
    name: 'Standard',
    price: '9 900',
    period: 'FCFA / mois',
    description: 'Pour les apprenants qui veulent aller plus loin.',
    color: 'bg-white border-gray-200',
    badgeColor: '',
    buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
    popular: false,
    features: [
      'Accès à 50 formations',
      'Vidéos HD & ressources',
      'Exercices + projets réels',
      'Forum de la communauté',
      'Certificat officiel',
      'Support par email (48h)',
      null,
    ],
  },
  {
    name: 'Premium',
    price: '19 900',
    period: 'FCFA / mois',
    description: 'L\'offre complète pour les professionnels ambitieux.',
    color: 'bg-blue-700 border-blue-700',
    badgeColor: 'bg-orange-500 text-white',
    buttonStyle: 'bg-orange-500 hover:bg-orange-600 text-white',
    popular: true,
    features: [
      'Accès illimité aux formations',
      'Vidéos 4K & ressources exclusives',
      'Projets & cas pratiques avancés',
      'Communauté privée Premium',
      'Certificat officiel reconnu',
      'Mentorat personnalisé (2x/mois)',
      'Accès à vie au contenu',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Tarifs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Des offres adaptées à tous les budgets
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos objectifs. Sans engagement, résiliable à tout moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 flex flex-col card-hover ${plan.color} ${
                plan.popular ? 'shadow-2xl scale-105' : 'shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full shadow-md ${plan.badgeColor}`}>
                    <Zap className="w-3.5 h-3.5" />
                    RECOMMANDE
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) =>
                  feature ? (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-blue-500' : 'bg-green-100'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-green-600'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ) : (
                    <li key={i} className="flex items-start gap-3 opacity-30">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-blue-800' : 'bg-gray-100'
                      }`}>
                        <span className={`text-xs font-bold ${plan.popular ? 'text-blue-400' : 'text-gray-400'}`}>
                          —
                        </span>
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-blue-300' : 'text-gray-400'}`}>
                        Non inclus
                      </span>
                    </li>
                  )
                )}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${plan.buttonStyle}`}
              >
                S'inscrire maintenant
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Tous les prix incluent la TVA. Satisfait ou remboursé sous 7 jours.
        </p>
      </div>
    </section>
  );
}
