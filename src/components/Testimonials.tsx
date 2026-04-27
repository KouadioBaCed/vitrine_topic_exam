import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aminata Diallo',
    role: 'Développeuse web, Dakar',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Grâce à EduAfrique, j\'ai acquis les compétences pour décrocher mon premier emploi en développement web. La qualité des cours est exceptionnelle et les formateurs sont très réactifs. Je recommande vivement !',
  },
  {
    name: 'Kofi Mensah',
    role: 'Entrepreneur digital, Accra',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'La formation en marketing digital a transformé mon business. J\'ai triplé ma clientèle en 3 mois après avoir appliqué les stratégies enseignées. Le meilleur investissement de ma carrière.',
  },
  {
    name: 'Fatou Ndiaye',
    role: 'Responsable RH, Abidjan',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Le programme de leadership m\'a donné une nouvelle vision du management. La flexibilité des cours me permettait d\'apprendre le soir après le travail. Mon équipe voit déjà la différence !',
  },
  {
    name: 'Moussa Traoré',
    role: 'Data Analyst, Bamako',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'La formation Data Science est vraiment complète et bien structurée. J\'ai pu décrocher une promotion 2 mois après l\'obtention de mon certificat. Merci EduAfrique pour cette opportunité.',
  },
];

export default function Testimonials() {
  return (
    <section id="témoignages" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ils ont transformé leur carrière
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Des milliers d'apprenants ont déjà changé leur vie grâce à nos formations. Voici quelques-uns de leurs témoignages.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover flex flex-col"
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-200 fill-blue-100" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-blue-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15 000+', label: 'Apprenants formés' },
              { value: '120+', label: 'Formations disponibles' },
              { value: '95%', label: 'Taux de satisfaction' },
              { value: '85%', label: 'Trouvent un emploi' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
