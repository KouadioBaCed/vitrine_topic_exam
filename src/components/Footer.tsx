import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  Formations: [
    'Développement Web',
    'Marketing Digital',
    'Data Science',
    'Finance & Compta',
    'Leadership',
    'Entrepreneuriat',
  ],
  Entreprise: [
    'À propos',
    'Notre équipe',
    'Carrières',
    'Presse',
    'Partenaires',
    'Affiliés',
  ],
  Support: [
    'Centre d\'aide',
    'Documentation',
    'Contact',
    'FAQ',
    'Statut du service',
    'Retours & Remboursements',
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <img
                src="/logo/zouzou_image.png"
                alt="FinMark"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              La plateforme de formation en ligne de référence en Afrique. Développez vos compétences,
              obtenez des certifications reconnues et transformez votre carrière.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>contact@eduafrique.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+221 77 000 00 00</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Dakar, Sénégal — Abidjan, Côte d'Ivoire</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-10 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Restez informé</h4>
              <p className="text-gray-400 text-sm">Recevez nos dernières formations et offres exclusives.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 md:w-72 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors flex-shrink-0">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 EduAfrique. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {['Politique de confidentialité', 'Conditions d\'utilisation', 'Cookies', 'Mentions légales'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
