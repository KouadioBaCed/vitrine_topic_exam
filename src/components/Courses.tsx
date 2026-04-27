import { Clock, BarChart2, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Technologie',
    title: 'Développement Web Full Stack',
    description: 'Maîtrisez HTML, CSS, JavaScript, React et Node.js pour créer des applications modernes.',
    duration: '48h',
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    rating: 4.9,
    students: 3200,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Business',
    title: 'Marketing Digital & Réseaux Sociaux',
    description: 'Apprenez à créer des stratégies marketing efficaces pour développer votre activité en ligne.',
    duration: '32h',
    level: 'Intermédiaire',
    levelColor: 'bg-blue-100 text-blue-700',
    rating: 4.8,
    students: 2800,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Finance',
    title: 'Gestion Financière & Comptabilité',
    description: 'Comprenez les fondamentaux de la finance pour gérer et développer votre entreprise.',
    duration: '24h',
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    rating: 4.7,
    students: 1900,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Leadership',
    title: 'Management & Leadership',
    description: 'Développez vos compétences de manager pour inspirer et guider des équipes performantes.',
    duration: '20h',
    level: 'Avancé',
    levelColor: 'bg-orange-100 text-orange-700',
    rating: 4.9,
    students: 1500,
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Data',
    title: 'Data Science & Intelligence Artificielle',
    description: 'Plongez dans le monde des données, du machine learning et de l\'IA appliquée.',
    duration: '60h',
    level: 'Intermédiaire',
    levelColor: 'bg-blue-100 text-blue-700',
    rating: 4.8,
    students: 2100,
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Entrepreneuriat',
    title: 'Créer et Développer son Entreprise',
    description: 'De l\'idée au lancement : toutes les étapes pour devenir entrepreneur à succès.',
    duration: '28h',
    level: 'Débutant',
    levelColor: 'bg-green-100 text-green-700',
    rating: 4.9,
    students: 3600,
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
            Des cours conçus par des experts du secteur pour vous donner les compétences recherchées par les employeurs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.levelColor}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
                    <span>★</span>
                    <span>{course.rating}</span>
                    <span className="text-gray-400 font-normal">({course.students.toLocaleString()})</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{course.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart2 className="w-4 h-4" />
                      {course.level}
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
