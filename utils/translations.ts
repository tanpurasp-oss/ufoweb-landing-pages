import { Language } from '../types';

type TranslationKey = 
  | 'nav.services'
  | 'nav.work'
  | 'nav.offers'
  | 'nav.audit'
  | 'nav.contact_text'
  | 'nav.contact'
  | 'nav.contact_menu'
  | 'hero.title_1'
  | 'hero.title_2'
  | 'hero.intro'
  | 'hero.cta_primary'
  | 'hero.cta_secondary'
  | 'hero.cta_secondary_new'
  | 'marquee.top'
  | 'marquee.middle'
  | 'marquee.bottom'
  | 'marquee.sightings'
  | 'services.title'
  | 'services.strategy'
  | 'services.strategy.desc'
  | 'services.branding'
  | 'services.branding.desc'
  | 'services.webdev'
  | 'services.webdev.desc'
  | 'services.ecommerce'
  | 'services.ecommerce.desc'
  | 'services.seo'
  | 'services.seo.desc'
  | 'audit.title'
  | 'audit.subtitle'
  | 'audit.placeholder'
  | 'audit.placeholder_url'
  | 'audit.button'
  | 'audit.scanning'
  | 'audit.success'
  | 'contact_strip.title'
  | 'contact_strip.subtitle'
  | 'projects.title_1'
  | 'projects.title_2'
  | 'projects.description'
  | 'projects.view_case'
  | 'projects.visit_site'
  | 'project.ibas.desc'
  | 'project.clube.desc'
  | 'project.mari.desc'
  | 'project.paralamas.desc'
  | 'project.jazz.desc'
  | 'project.pequeno.desc'
  | 'project.blaue.desc'
  | 'project.thais.desc'
  | 'project.mac.desc'
  | 'project.straube.desc'
  | 'dataviz.title_1'
  | 'dataviz.title_2'
  | 'dataviz.description'
  | 'dataviz.cta'
  | 'dataviz.chart_title'
  | 'dataviz.label.pagespeed'
  | 'dataviz.label.seo_growth'
  | 'dataviz.label.conversion'
  | 'dataviz.label.retention'
  | 'dataviz.label.traffic'
  | 'testimonials.title'
  | 'testimonials.1.text'
  | 'testimonials.1.author'
  | 'testimonials.1.role'
  | 'testimonials.2.text'
  | 'testimonials.2.author'
  | 'testimonials.2.role'
  | 'testimonials.3.text'
  | 'testimonials.3.author'
  | 'testimonials.3.role'
  | 'pricing.warning'
  | 'pricing.title_1'
  | 'pricing.title_2'
  | 'pricing.description'
  | 'pricing.subtitle.onepage'
  | 'pricing.subtitle.corp'
  | 'pricing.subtitle.shop'
  | 'pricing.most_popular'
  | 'pricing.tier1.title'
  | 'pricing.tier1.desc'
  | 'pricing.tier1.price'
  | 'pricing.tier2.title'
  | 'pricing.tier2.desc'
  | 'pricing.tier2.price'
  | 'pricing.tier3.title'
  | 'pricing.tier3.desc'
  | 'pricing.tier3.price'
  | 'pricing.feature.t1.1'
  | 'pricing.feature.t1.2'
  | 'pricing.feature.t1.3'
  | 'pricing.feature.t1.4'
  | 'pricing.feature.t1.5'
  | 'pricing.feature.t2.1'
  | 'pricing.feature.t2.2'
  | 'pricing.feature.t2.3'
  | 'pricing.feature.t2.4'
  | 'pricing.feature.t2.5'
  | 'pricing.feature.t3.1'
  | 'pricing.feature.t3.2'
  | 'pricing.feature.t3.3'
  | 'pricing.feature.t3.4'
  | 'pricing.feature.t3.5'
  | 'pricing.cta'
  | 'pricing.load_more'
  | 'booking.title'
  | 'booking.subtitle'
  | 'booking.name'
  | 'booking.email'
  | 'booking.project_type'
  | 'booking.message'
  | 'booking.submit'
  | 'booking.success'
  | 'booking.select_date'
  | 'booking.date_instruction'
  | 'team.badge'
  | 'team.title_1'
  | 'team.title_2'
  | 'team.description'
  | 'team.agent_w.role'
  | 'team.agent_w.quote'
  | 'team.agent_w.status'
  | 'team.agent_z.role'
  | 'team.agent_z.quote'
  | 'team.agent_z.status'
  | 'team.neuralyzer'
  | 'footer.title_1'
  | 'footer.title_2'
  | 'footer.title_3'
  | 'footer.imprint'
  | 'footer.privacy'
  | 'exit.title'
  | 'exit.subtitle'
  | 'exit.discount'
  | 'exit.cta'
  | 'exit.urgency'
  | 'whatsapp.message';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'nav.services': 'Services',
    'nav.work': 'Portfolio',
    'nav.offers': 'Prices',
    'nav.audit': 'Get a FREE Redesign Preview',
    'nav.contact_text': 'Contact',
    'nav.contact': 'info@ufoweb.de',
    'nav.contact_menu': 'Contact',
    'hero.title_1': 'High-Conversion',
    'hero.title_2': 'Landing Pages',
    'hero.intro': 'We build high-performance sales machines for infoproducers and small businesses looking for immediate authority.',
    'hero.cta_primary': 'Websites from €599',
    'hero.cta_secondary': '',
    'hero.cta_secondary_new': 'Get FREE Design Preview',
    'marquee.top': 'SEO • RANKING • TRAFFIC • ANALYTICS • ',
    'marquee.middle': 'VISIBILITY • GOOGLE • PERFORMANCE • GROWTH • ',
    'marquee.bottom': 'KEYWORDS • CONTENT • STRATEGY • CONVERSION • ',
    'marquee.sightings': 'RECENT SIGHTINGS • ORGANIC GROWTH • PAGE 1 RESULTS • ',
    'whatsapp.message': 'Hello UFOWeb, I would like to make contact and know more about your services.',
    
    // SERVICES
    'services.title': 'More Services',
    'services.strategy': 'Digital Strategy',
    'services.strategy.desc': 'Market analysis and roadmap for total sector dominance.',
    'services.branding': 'Brand Identity',
    'services.branding.desc': 'Visual systems that command authority and trust.',
    'services.webdev': 'Web Development',
    'services.webdev.desc': 'Pixel-perfect engineering with bulletproof code.',
    'services.ecommerce': 'E-Commerce',
    'services.ecommerce.desc': 'High-conversion storefronts designed to scale.',
    'services.seo': 'SEO & Performance',
    'services.seo.desc': 'Technical optimization for maximum search visibility.',

    // AUDIT
    'audit.title': 'Free Website Redesign Preview',
    'audit.subtitle': 'We will create a custom design mockup of your new website for free. See the upgrade before you spend a cent. No risk, no obligation.',
    'audit.placeholder': 'Your Email Address',
    'audit.placeholder_url': 'Current Website URL',
    'audit.button': 'Request New Site Preview',
    'audit.scanning': 'Rendering Future...',
    'audit.success': 'Simulation Request Encrypted & Sent.',

    'contact_strip.title': 'We contact you',
    'contact_strip.subtitle': 'LEAVE YOUR DETAILS',

    'projects.title_1': 'Selected',
    'projects.title_2': 'Works',
    'projects.description': "Classified case files of websites we've built.",
    'projects.view_case': 'View Case Study',
    'projects.visit_site': 'Visit Site',
    'project.ibas.desc': 'Website created for an engineering company in Berlin.',
    'project.clube.desc': 'Digital platform for a renowned embroidery club.',
    'project.mari.desc': 'Portfolio for Brazilian artist Mari Martins.',
    'project.paralamas.desc': 'Official website for Os Paralamas do Sucesso, one of Brazil\'s biggest rock bands.',
    'project.jazz.desc': 'Jazz São Paulo. An event management company specializing in bands for corporate events.',
    'project.pequeno.desc': 'Website for an independent music label.',
    'project.blaue.desc': 'Specialty coffee roastery and shop.',
    'project.thais.desc': 'Whimsical site for children\'s book author Thaís Vilarinho.',
    'project.mac.desc': 'Official website for solo artist Mac Music.',
    'project.straube.desc': 'Straube Lawyers. Professional corporate legal identity.',
    
    // DATA VIZ
    'dataviz.title_1': 'Objective',
    'dataviz.title_2': 'Results',
    'dataviz.description': "We deal in absolutes. Faster load times, higher search rankings, and measurable growth. Our clients see the difference in black and white.",
    'dataviz.cta': 'Get Your Audit',
    'dataviz.chart_title': 'Performance Benchmarks',
    'dataviz.label.pagespeed': 'Google PageSpeed',
    'dataviz.label.seo_growth': 'SEO Traffic Growth',
    'dataviz.label.conversion': 'Conversion Rate',
    'dataviz.label.retention': 'User Retention',
    'dataviz.label.traffic': 'Mobile Traffic',
    
    // TESTIMONIALS
    'testimonials.title': '',
    'testimonials.1.text': '',
    'testimonials.1.author': '',
    'testimonials.1.role': '',
    'testimonials.2.text': '',
    'testimonials.2.author': '',
    'testimonials.2.role': '',
    'testimonials.3.text': '',
    'testimonials.3.author': '',
    'testimonials.3.role': '',

    // PRICING
    'pricing.warning': '⚠ EXCLUSIVE OFFER // LIMITED SLOTS THIS MONTH',
    'pricing.title_1': 'Landing Page',
    'pricing.title_2': 'High Conversion',
    'pricing.description': 'Stop losing sales with slow websites. We create your sales machine in record time.',
    
    'pricing.subtitle.onepage': 'Unique Offer',
    'pricing.subtitle.corp': '',
    'pricing.subtitle.shop': '',
    'pricing.most_popular': 'BEST VALUE',

    'pricing.tier1.title': 'Elite Landing Page',
    'pricing.tier1.desc': 'The ultimate solution for infoproducers and local businesses that want to sell more.',
    'pricing.tier1.price': '€599',
    'pricing.feature.t1.1': 'Premium & Responsive Design',
    'pricing.feature.t1.2': 'Persuasive Copywriting (Sales Focused)',
    'pricing.feature.t1.3': 'Speed Optimization (Instant Loading)',
    'pricing.feature.t1.4': 'WhatsApp & Email Marketing Integration',
    'pricing.feature.t1.5': 'Technical Support & Maintenance (15 days)',

    'pricing.tier2.title': 'Corporate Site',
    'pricing.tier2.desc': 'Full corporate identity and scalability.',
    'pricing.tier2.price': '€899',
    'pricing.feature.t2.1': 'Custom Design + Up to 10 Pages',
    'pricing.feature.t2.2': 'Advanced SEO + Newsletter',
    'pricing.feature.t2.3': '3 Months Free Maintenance',
    'pricing.feature.t2.4': 'Photo & Video Gallery',
    'pricing.feature.t2.5': '1 Year FREE Hosting',

    'pricing.tier3.title': 'Online Shop',
    'pricing.tier3.desc': 'Complete sales platform ready to launch.',
    'pricing.tier3.price': '€1299',
    'pricing.feature.t3.1': 'Custom Design + 15 Products',
    'pricing.feature.t3.2': 'Payments & Cart Integration',
    'pricing.feature.t3.3': '6 Months Free Maintenance',
    'pricing.feature.t3.4': 'Advanced SEO & Catalog',
    'pricing.feature.t3.5': '1 Year FREE Hosting',
    
    'pricing.cta': 'Secure Offer',
    'pricing.load_more': 'Load More Intelligence',

    // BOOKING
    'booking.title': 'Get More Sales',
    'booking.subtitle': 'Fill out the form and we will get in contact with you.',
    'booking.name': 'Your Name',
    'booking.email': 'Email Address',
    'booking.project_type': 'Phone Number (Optional)',
    'booking.message': 'Message / Project Details',
    'booking.submit': 'Send Request',
    'booking.success': 'Request Received.',
    'booking.select_date': 'Select Date',
    'booking.date_instruction': 'Select an ideal day for you. We will get in contact to set the time.',

    // TEAM
    'team.badge': '',
    'team.title_1': '',
    'team.title_2': '',
    'team.description': '',
    
    'team.agent_w.role': '',
    'team.agent_w.quote': '',
    'team.agent_w.status': '',
    
    'team.agent_z.role': '',
    'team.agent_z.quote': '',
    'team.agent_z.status': '',
    
    'team.neuralyzer': '',
    'footer.title_1': 'Take me to',
    'footer.title_2': 'your',
    'footer.title_3': 'leader.',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'exit.title': 'WAIT! DON\'T GO YET',
    'exit.subtitle': 'Get a professional design preview for your product.',
    'exit.discount': '20% OFF + FREE PREVIEW',
    'exit.cta': 'CLAIM MY DISCOUNT',
    'exit.urgency': 'Offer expires in 15 minutes!'
  },
  de: {
    'nav.services': 'Dienstleistungen',
    'nav.work': 'Portfolio',
    'nav.offers': 'Preise',
    'nav.audit': 'Gratis Design-Vorschau',
    'nav.contact_text': 'Kontakt',
    'nav.contact': 'info@ufoweb.de',
    'nav.contact_menu': 'Kontakt',
    'hero.title_1': 'Hochkonvertierende',
    'hero.title_2': 'Landing Pages',
    'hero.intro': 'Wir bauen digitale Hochleistungs-Verkaufsmaschinen für Infoproduzenten und kleine Unternehmen.',
    'hero.cta_primary': 'Websites ab 599€',
    'hero.cta_secondary': '',
    'hero.cta_secondary_new': 'GRATIS Design-Vorschau',
    'marquee.top': 'SEO • RANKING • TRAFFIC • ANALYTICS • ',
    'marquee.middle': 'SICHTBARKEIT • GOOGLE • PERFORMANCE • WACHSTUM • ',
    'marquee.bottom': 'KEYWORDS • CONTENT • STRATEGIE • CONVERSION • ',
    'marquee.sightings': 'AKTUELLE ERFOLGSGESCHICHTEN • ORGANISCHES WACHSTUM • SEITE 1 ERGEBNISSE • ',
    'whatsapp.message': 'Hallo UFOWeb, ich möchte Kontakt aufnehmen und mehr über Ihre Dienstleistungen erfahren.',

    // SERVICES
    'services.title': 'Mehr Services',
    'services.strategy': 'Digitale Strategie',
    'services.strategy.desc': 'Marktanalyse und Roadmap für totale Sektordominanz.',
    'services.branding': 'Markenidentität',
    'services.branding.desc': 'Visuelle Systeme, die Autorität und Vertrauen ausstrahlen.',
    'services.webdev': 'Web Entwicklung',
    'services.webdev.desc': 'Pixelgenaue Technik mit kugelsicherem Code.',
    'services.ecommerce': 'E-Commerce',
    'services.ecommerce.desc': 'Hochkonvertierende Shops, die skalierbar sind.',
    'services.seo': 'SEO & Performance',
    'services.seo.desc': 'Technische Optimierung für maximale Sichtbarkeit.',

    // AUDIT DE
    'audit.title': 'Kostenlose Design-Vorschau',
    'audit.subtitle': 'Wir erstellen kostenlos einen individuellen Design-Entwurf Ihrer neuen Website. Sehen Sie das Upgrade, bevor Sie einen Cent ausgeben. Kein Risiko, keine Verpflichtung.',
    'audit.placeholder': 'Ihre E-Mail Adresse',
    'audit.placeholder_url': 'Aktuelle Website URL',
    'audit.button': 'Gratis Design Anfordern',
    'audit.scanning': 'Rendere Zukunft...',
    'audit.success': 'Simulationsanfrage verschlüsselt gesendet.',

    'contact_strip.title': 'Wir kontaktieren Sie',
    'contact_strip.subtitle': 'HINTERLASSEN SIE IHRE DATEN',

    'projects.title_1': 'Aktuelle',
    'projects.title_2': 'Sichtungen',
    'projects.description': "Klassifizierte Fallakten von Websites, die wir erstellt haben.",
    'projects.view_case': 'Fallstudie ansehen',
    'projects.visit_site': 'Website besuchen',
    'project.ibas.desc': 'Website erstellt für ein Ingenieurunternehmen in Berlin.',
    'project.clube.desc': 'Digitale Plattform für einen renommierten Stickclub.',
    'project.mari.desc': 'Portfolio für die brasilianische Künstlerin Mari Martins.',
    'project.paralamas.desc': 'Offizielle Website für Os Paralamas do Sucesso, eine der größten Rockbands Brasiliens.',
    'project.jazz.desc': 'Jazz São Paulo. Ein Eventmanagement-Unternehmen, spezialisiert auf Bands für Firmenevents.',
    'project.pequeno.desc': 'Website für ein unabhängiges Musiklabel.',
    'project.blaue.desc': 'Spezialitätenkaffeerösterei und Geschäft.',
    'project.thais.desc': 'Verspielte Seite für die Kinderbuchautorin Thaís Vilarinho.',
    'project.mac.desc': 'Offizielle Website für den Solokünstler Mac Music.',
    'project.straube.desc': 'Straube Anwälte. Professionelle juristische Unternehmensidentität.',
    
    // DATA VIZ DE
    'dataviz.title_1': 'Objektive',
    'dataviz.title_2': 'Ergebnisse',
    'dataviz.description': "Wir raten nicht; wir analysieren. Schnellere Ladezeiten, höhere Suchrankings und messbares Wachstum.",
    'dataviz.cta': 'Audit Anfordern',
    'dataviz.chart_title': 'Performance Benchmarks',
    'dataviz.label.pagespeed': 'Google PageSpeed',
    'dataviz.label.seo_growth': 'SEO Traffic',
    'dataviz.label.conversion': 'Conversion Rate',
    'dataviz.label.retention': 'Nutzerbindung',
    'dataviz.label.traffic': 'Mobile Traffic',

    // TESTIMONIALS DE
    'testimonials.title': '',
    'testimonials.1.text': '',
    'testimonials.1.author': '',
    'testimonials.1.role': '',
    'testimonials.2.text': '',
    'testimonials.2.author': '',
    'testimonials.2.role': '',
    'testimonials.3.text': '',
    'testimonials.3.author': '',
    'testimonials.3.role': '',

    // PRICING DE
    'pricing.warning': '⚠ EXKLUSIVES ANGEBOT // BEGRENZTE PLÄTZE DIESEN MONAT',
    'pricing.title_1': 'Landing Page',
    'pricing.title_2': 'Hohe Konversion',
    'pricing.description': 'Hören Sie auf, Verkäufe mit langsamen Websites zu verlieren. Wir erstellen Ihre Verkaufsmaschine in Rekordzeit.',
    
    'pricing.subtitle.onepage': 'Einzigartiges Angebot',
    'pricing.subtitle.corp': '',
    'pricing.subtitle.shop': '',
    'pricing.most_popular': 'BESTER WERT',

    'pricing.tier1.title': 'Elite Landing Page',
    'pricing.tier1.desc': 'Die ultimative Lösung für Infoproduzenten und lokale Unternehmen, die mehr verkaufen wollen.',
    'pricing.tier1.price': '599€',
    'pricing.feature.t1.1': 'Premium & Responsives Design',
    'pricing.feature.t1.2': 'Überzeugendes Copywriting (Verkaufsorientiert)',
    'pricing.feature.t1.3': 'Geschwindigkeitsoptimierung (Sofortiges Laden)',
    'pricing.feature.t1.4': 'WhatsApp & E-Mail-Marketing Integration',
    'pricing.feature.t1.5': 'Technischer Support & Wartung (15 Tage)',

    'pricing.tier2.title': 'Unternehmenswebsite',
    'pricing.tier2.desc': 'Benutzerdefiniertes Design für Profis.',
    'pricing.tier2.price': '899€',
    'pricing.feature.t2.1': 'Custom Design + Bis zu 10 Seiten',
    'pricing.feature.t2.2': 'Erweiterte SEO + Newsletter',
    'pricing.feature.t2.3': '3 Monate kostenlose Wartung',
    'pricing.feature.t2.4': 'Foto- und Videogalerie',
    'pricing.feature.t2.5': '1 Jahr Hosting KOSTENLOS',

    'pricing.tier3.title': 'Online-Shop',
    'pricing.tier3.desc': 'Alles, was Sie zum Verkaufen brauchen.',
    'pricing.tier3.price': '1299€',
    'pricing.feature.t3.1': 'Custom Design + 15 Produkte',
    'pricing.feature.t3.2': 'Zahlungsgateway & Warenkorb',
    'pricing.feature.t3.3': '6 Monate kostenlose Wartung',
    'pricing.feature.t3.4': 'Erweiterte SEO & Katalog',
    'pricing.feature.t3.5': '1 Jahr Hosting KOSTENLOS',

    'pricing.cta': 'Angebot Sichern',
    'pricing.load_more': 'Mehr Intelligenz Laden',

    // BOOKING DE
    'booking.title': 'Mehr Umsatz Jetzt',
    'booking.subtitle': 'Füllen Sie das Formular aus und wir melden uns bei Ihnen.',
    'booking.name': 'Ihr Name',
    'booking.email': 'E-Mail Adresse',
    'booking.project_type': 'Telefonnummer (Optional)',
    'booking.message': 'Nachricht / Projektdetails',
    'booking.submit': 'Anfrage Senden',
    'booking.success': 'Anfrage Empfangen.',
    'booking.select_date': 'Datum Wählen',
    'booking.date_instruction': 'Wählen Sie einen idealen Tag für Sie. Wir werden uns melden, um die Zeit festzulegen.',

    // TEAM DE
    'team.badge': '',
    'team.title_1': '',
    'team.title_2': '',
    'team.description': '',
    
    'team.agent_w.role': '',
    'team.agent_w.quote': '',
    'team.agent_w.status': '',
    
    'team.agent_z.role': '',
    'team.agent_z.quote': '',
    'team.agent_z.status': '',
    
    'team.neuralyzer': '',
    'footer.title_1': 'Bring mich zu',
    'footer.title_2': 'deinem',
    'footer.title_3': 'Anführer.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'exit.title': 'HALT! NOCH NICHT GEHEN',
    'exit.subtitle': 'Holen Sie sich eine professionelle Designvorschau.',
    'exit.discount': '20% RABATT + GRATIS VORSCHAU',
    'exit.cta': 'RABATT SICHERN',
    'exit.urgency': 'Angebot läuft in 15 Minuten ab!'
  },
  pt: {
    'nav.services': 'Serviços',
    'nav.work': 'Portefólio',
    'nav.offers': 'Preços',
    'nav.audit': 'Prévia de Design GRÁTIS',
    'nav.contact_text': 'Contacto',
    'nav.contact': 'info@ufoweb.de',
    'nav.contact_menu': 'Contacto',
    'hero.title_1': 'Landing Pages',
    'hero.title_2': 'Que Vendem',
    'hero.intro': 'Criamos máquinas de vendas digitais para infoprodutores e pequenos empresários que desejam autoridade imediata.',
    'hero.cta_primary': 'Oferta Incrível: Sites a 599€',
    'hero.cta_secondary': 'Ver Inteligência',
    'hero.cta_secondary_new': 'GRÁTIS Prévia de Design',
    'marquee.top': 'SEO • RANKING • TRÁFEGO • ANALYTICS • ',
    'marquee.middle': 'VISIBILIDADE • GOOGLE • PERFORMANCE • CRESCIMENTO • ',
    'marquee.bottom': 'KEYWORDS • CONTEÚDO • ESTRATÉGIA • CONVERSÃO • ',
    'marquee.sightings': 'HISTÓRIAS DE SUCESSO • CRESCIMENTO ORGÂNICO • RESULTADOS PÁGINA 1 • ',
    'whatsapp.message': 'Olá UFOWeb, gostaria de saber mais sobre as vossas landing pages e ofertas.',

    // SERVICES
    'services.title': 'Mais Serviços',
    'services.strategy': 'Estratégia Digital',
    'services.strategy.desc': 'Análise de mercado e plano para o domínio do seu setor.',
    'services.branding': 'Identidade de Marca',
    'services.branding.desc': 'Sistemas visuais que impõem autoridade e confiança.',
    'services.webdev': 'Desenv. Web',
    'services.webdev.desc': 'Engenharia de precisão com código à prova de bala.',
    'services.ecommerce': 'E-Commerce',
    'services.ecommerce.desc': 'Lojas de alta conversão projetadas para escalar.',
    'services.seo': 'SEO & Performance',
    'services.seo.desc': 'Otimização técnica para visibilidade máxima.',

    // AUDIT PT
    'audit.title': 'Prévia de Redesign Grátis',
    'audit.subtitle': 'Criaremos um esboço de design personalizado do seu novo site gratuitamente. Veja a evolução antes de gastar um cêntimo. Sem risco.',
    'audit.placeholder': 'O seu Endereço de Email',
    'audit.placeholder_url': 'URL do Site Atual (se tiver)',
    'audit.button': 'Pedir Design Grátis',
    'audit.scanning': 'A Renderizar o Futuro...',
    'audit.success': 'Solicitação de Simulação Enviada.',

    'contact_strip.title': 'Nós contactamos você',
    'contact_strip.subtitle': 'DEIXE OS SEUS DETALHES',

    'projects.title_1': 'Projetos',
    'projects.title_2': 'Recentes',
    'projects.description': "Arquivos confidenciais de sites que construímos.",
    'projects.view_case': 'Ver Estudo',
    'projects.visit_site': 'Visitar Site',
    'project.ibas.desc': 'Site criado para uma empresa de engenharia em Berlim.',
    'project.clube.desc': 'Plataforma digital para um renomado clube de bordado.',
    'project.mari.desc': 'Portfólio para a artista brasileira Mari Martins.',
    'project.paralamas.desc': 'Site oficial do Os Paralamas do Sucesso, uma das maiores bandas de rock do Brasil.',
    'project.jazz.desc': 'Jazz São Paulo. Empresa de gestão de eventos especializada em bandas corporativas.',
    'project.pequeno.desc': 'Site para um selo musical independente.',
    'project.blaue.desc': 'Torrefação e loja de cafés especiais.',
    'project.thais.desc': 'Site lúdico para a autora infantil Thaís Vilarinho.',
    'project.mac.desc': 'Site oficial para o artista solo Mac Music.',
    'project.straube.desc': 'Straube Advogados. Identidade legal corporativa profissional.',
    
    // DATA VIZ PT
    'dataviz.title_1': 'Resultados',
    'dataviz.title_2': 'Objetivos',
    'dataviz.description': "Não adivinhamos; analisamos. Carregamento mais rápido, rankings mais altos e crescimento mensurável.",
    'dataviz.cta': 'Pedir Auditoria',
    'dataviz.chart_title': 'Benchmarks de Performance',
    'dataviz.label.pagespeed': 'Google PageSpeed',
    'dataviz.label.seo_growth': 'Crescimento SEO',
    'dataviz.label.conversion': 'Conversão',
    'dataviz.label.retention': 'Retenção',
    'dataviz.label.traffic': 'Tráfego Mobile',

    // TESTIMONIALS PT
    'testimonials.title': '',
    'testimonials.1.text': '',
    'testimonials.1.author': '',
    'testimonials.1.role': '',
    'testimonials.2.text': '',
    'testimonials.2.author': '',
    'testimonials.2.role': '',
    'testimonials.3.text': '',
    'testimonials.3.author': '',
    'testimonials.3.role': '',

    // PRICING PT
    'pricing.warning': '⚠ OFERTA EXCLUSIVA // VAGAS LIMITADAS ESTE MÊS',
    'pricing.title_1': 'Landing Page',
    'pricing.title_2': 'Alta Conversão',
    'pricing.description': 'Pare de perder vendas com sites lentos. Criamos a sua máquina de vendas em tempo recorde.',
    
    'pricing.subtitle.onepage': 'Oferta Única',
    'pricing.subtitle.corp': '',
    'pricing.subtitle.shop': '',
    'pricing.most_popular': 'MELHOR VALOR',

    'pricing.tier1.title': 'Landing Page de Elite',
    'pricing.tier1.desc': 'A solução definitiva para infoprodutores e negócios locais que querem vender mais.',
    'pricing.tier1.price': '599€',
    'pricing.feature.t1.1': 'Design Premium & Responsivo',
    'pricing.feature.t1.2': 'Copywriting Persuasivo (Focado em Vendas)',
    'pricing.feature.t1.3': 'Otimização de Velocidade (Carregamento Instantâneo)',
    'pricing.feature.t1.4': 'Integração com WhatsApp & E-mail Marketing',
    'pricing.feature.t1.5': 'Suporte Técnico & Manutenção (15 dias)',

    'pricing.tier2.title': 'Site de Autoridade',
    'pricing.tier2.desc': 'Identidade corporativa completa e escalável.',
    'pricing.tier2.price': '899€',
    'pricing.feature.t2.1': 'Design Custom + Até 10 Páginas',
    'pricing.feature.t2.2': 'SEO Avançado + Newsletter',
    'pricing.feature.t2.3': '3 Meses Manutenção Grátis',
    'pricing.feature.t2.4': 'Galeria de Foto & Vídeo',
    'pricing.feature.t2.5': '1 Ano Alojamento GRÁTIS',

    'pricing.tier3.title': 'Loja de Infoprodutos',
    'pricing.tier3.desc': 'Plataforma de vendas completa pronta para uso.',
    'pricing.tier3.price': '1299€',
    'pricing.feature.t3.1': 'Design Custom + 15 Produtos',
    'pricing.feature.t3.2': 'Integração Pagamentos & Checkout',
    'pricing.feature.t3.3': '6 Meses Manutenção Grátis',
    'pricing.feature.t3.4': 'SEO Avançado & Catálogo',
    'pricing.feature.t3.5': '1 Ano Alojamento GRÁTIS',

    'pricing.cta': 'Garantir Oferta',
    'pricing.load_more': 'Carregar Mais Inteligência',

    // BOOKING PT
    'booking.title': 'Quero Vender Mais',
    'booking.subtitle': 'Preencha o formulário e entraremos em contacto consigo.',
    'booking.name': 'O seu Nome',
    'booking.email': 'O seu Email',
    'booking.project_type': 'Telemóvel (Opcional)',
    'booking.message': 'Mensagem / Detalhes do Projeto',
    'booking.submit': 'Enviar Solicitação',
    'booking.success': 'Solicitação Recebida.',
    'booking.select_date': 'Selecionar Data',
    'booking.date_instruction': 'Escolha um dia ideal para si. Entraremos em contacto para definir o horário.',

    // TEAM PT
    'team.badge': '',
    'team.title_1': '',
    'team.title_2': '',
    'team.description': '',
    
    'team.agent_w.role': '',
    'team.agent_w.quote': '',
    'team.agent_w.status': '',
    
    'team.agent_z.role': '',
    'team.agent_z.quote': '',
    'team.agent_z.status': '',
    
    'team.neuralyzer': '',
    'footer.title_1': 'Leve-me ao',
    'footer.title_2': 'seu',
    'footer.title_3': 'líder.',
    'footer.imprint': 'Ficha Técnica',
    'footer.privacy': 'Política de Privacidade',
    'exit.title': 'ESPERE! NÃO SE VÁ JÁ',
    'exit.subtitle': 'Receba uma prévia de design profissional para o seu produto.',
    'exit.discount': '20% DE DESCONTO + PRÉVIA GRÁTIS',
    'exit.cta': 'RECLAMAR O MEU DESCONTO',
    'exit.urgency': 'A oferta expira em 15 minutos!'
  }
};