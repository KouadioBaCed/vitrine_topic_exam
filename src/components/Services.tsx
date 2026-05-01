import { useState, useEffect, FormEvent } from 'react';
import { Code2, Database, Check, ArrowRight, Sparkles, X, User, Phone, Mail, MessageSquare } from 'lucide-react';

type ServiceKey = 'dev' | 'data';

const services = [
  {
    key: 'dev' as ServiceKey,
    icon: Code2,
    title: 'Conception logiciel',
    subtitle: 'Développement sur mesure',
    description:
      'Nous concevons des applications web, mobiles et plateformes métiers adaptées à vos besoins, du prototype au déploiement.',
    features: [
      'Applications web & mobiles',
      'Logiciels de gestion sur mesure',
      'API et intégrations système',
      'UI/UX design & prototypage',
      'Maintenance & évolution',
    ],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-blue-600 to-cyan-500',
    overlay: 'from-blue-900/80 via-blue-900/40 to-transparent',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    badge: 'bg-white/95 text-blue-700',
    whatsapp: '2250716253873',
  },
  {
    key: 'data' as ServiceKey,
    icon: Database,
    title: 'Services Data',
    subtitle: 'Données & décisions',
    description:
      'Transformez vos données en levier de performance : analyse, visualisation et automatisation au service de vos décisions.',
    features: [
      'Tableaux de bord & reporting BI',
      'Analyse et exploration de données',
      'Pipelines & nettoyage de données',
      'Modèles prédictifs & data science',
      'Power BI, SQL, Python',
    ],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-emerald-600 to-teal-500',
    overlay: 'from-emerald-900/80 via-emerald-900/40 to-transparent',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    badge: 'bg-white/95 text-emerald-700',
    whatsapp: '2250747908185',
  },
];

export default function Services() {
  const [openService, setOpenService] = useState<typeof services[number] | null>(null);
  const [form, setForm] = useState({ prenom: '', nom: '', telephone: '', email: '', projet: '' });

  useEffect(() => {
    if (!openService) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenService(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openService]);

  const closeModal = () => {
    setOpenService(null);
    setForm({ prenom: '', nom: '', telephone: '', email: '', projet: '' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!openService) return;

    const message = [
      `*Demande de devis — ${openService.title}*`,
      '',
      `*Nom & prénom :* ${form.prenom} ${form.nom}`,
      `*Téléphone :* ${form.telephone}`,
      `*Email :* ${form.email}`,
      '',
      `*Description du projet :*`,
      form.projet,
    ].join('\n');

    const url = `https://wa.me/${openService.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Au-delà des formations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Nos services aux entreprises
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Nous accompagnons aussi vos projets de transformation digitale et d'exploitation
            de la donnée — au-delà de notre catalogue de formations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.overlay}`} />

                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm ${service.badge}`}>
                      {service.subtitle}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-xl ring-4 ring-white/20`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <div className={`w-5 h-5 rounded-full ${service.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 ${service.iconColor}`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setOpenService(service)}
                    className={`mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r ${service.accent} text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-xl group-hover:gap-3`}
                  >
                    Demander un devis
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {openService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative px-7 py-6 bg-gradient-to-r ${openService.accent} rounded-t-3xl`}>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fermer"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <openService.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">Devis · {openService.subtitle}</p>
                  <h3 className="text-xl font-bold text-white">{openService.title}</h3>
                </div>
              </div>
              <p className="text-white/90 text-sm mt-2">
                Remplissez ce formulaire, nous vous répondons sur WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field
                  icon={User}
                  label="Prénom"
                  type="text"
                  required
                  value={form.prenom}
                  onChange={(v) => setForm({ ...form, prenom: v })}
                  placeholder="Jean"
                />
                <Field
                  icon={User}
                  label="Nom"
                  type="text"
                  required
                  value={form.nom}
                  onChange={(v) => setForm({ ...form, nom: v })}
                  placeholder="Dupont"
                />
              </div>

              <Field
                icon={Phone}
                label="Téléphone"
                type="tel"
                required
                value={form.telephone}
                onChange={(v) => setForm({ ...form, telephone: v })}
                placeholder="+225 07 00 00 00 00"
              />

              <Field
                icon={Mail}
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="vous@exemple.com"
              />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Description du projet
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                  <textarea
                    required
                    rows={4}
                    value={form.projet}
                    onChange={(e) => setForm({ ...form, projet: e.target.value })}
                    placeholder="Décrivez votre projet, vos besoins, vos contraintes..."
                    className="w-full pl-10 pr-3 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className={`flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r ${openService.accent} text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg`}
                >
                  Envoyer sur WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

type FieldProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

function Field({ icon: Icon, label, type, required, value, onChange, placeholder }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-3 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>
    </div>
  );
}
