import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Diamond,
  DoorOpen,
  Drill,
  Gem,
  Hammer,
  Home,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Ruler,
  Send,
  Ship,
  Sparkles,
} from "lucide-react";

export const icons = {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Diamond,
  DoorOpen,
  Drill,
  Gem,
  Hammer,
  Home,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Ruler,
  Send,
  Ship,
  Sparkles,
};

export const images = {
  hero: "/assets/atelier-07.jpg",
  studioDetail: "/assets/atelier-17.jpg",
  kitchenDark: "/assets/atelier-09.jpg",
  kitchenWarm: "/assets/atelier-06.jpg",
  wardrobe: "/assets/atelier-16.jpg",
  closet: "/assets/atelier-02.jpg",
  yacht: "/assets/atelier-08.jpg",
  yachtDetail: "/assets/atelier-11.jpg",
  living: "/assets/atelier-04.jpg",
  villa: "/assets/atelier-05.jpg",
  athensKitchen: "/assets/atelier-10.jpg",
  office: "/assets/atelier-15.jpg",
  wood: "/assets/atelier-18.jpg",
  stone: "/assets/atelier-14.jpg",
  brass: "/assets/atelier-13.jpg",
};

export const socialLinks = [
  {
    label: "WhatsApp",
    short: "WA",
    href: "https://wa.me/302100000000",
    icon: icons.MessageCircle,
  },
  {
    label: "Telegram",
    short: "TG",
    href: "https://t.me/archestudio",
    icon: icons.Send,
  },
  {
    label: "Viber",
    short: "VB",
    href: "viber://chat?number=%2B302100000000",
    icon: icons.Phone,
  },
  {
    label: "Instagram",
    short: "IG",
    href: "https://instagram.com/arche.studio",
    icon: icons.Instagram,
  },
  {
    label: "TikTok",
    short: "TT",
    href: "https://www.tiktok.com/@archestudio",
    icon: icons.Music2,
  },
];

const en = {
  meta: {
    title: "ARCHÉ STUDIO | Bespoke Carpentry & Furniture",
    description:
      "ARCHÉ STUDIO designs, crafts and installs bespoke luxury kitchens, wardrobes, private residence furniture across Greece and yacht interiors.",
  },
  brandAria: "ARCHÉ STUDIO home",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Studio", href: "#studio" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  headerCta: "Inquire",
  languageLabel: "Language",
  mobile: {
    socialChannels: "Social channels",
    cta: "Request a Private Consultation",
  },
  hero: {
    eyebrow: "Bespoke carpentry atelier",
    title: "Luxury Furniture for Greek Villas, Homes & Yachts",
    copy:
      "We design, craft and install premium kitchens, wardrobes and interior furniture across Greece, with dedicated bespoke joinery for yachts.",
    primaryCta: "Request a Consultation",
    secondaryCta: "View Projects",
    bottom: ["Greek villas", "Custom kitchens", "Yacht joinery"],
    directLine: "Direct line",
  },
  studio: {
    eyebrow: "The studio",
    title: "Quiet precision, refined materials and architectural restraint.",
    text:
      "ARCHÉ STUDIO is a bespoke carpentry and furniture atelier specializing in high-end custom interiors. We create furniture that feels tailored, permanent and deeply personal.",
  },
  stats: [
    { value: "18+", label: "years of private commissions" },
    { value: "240", label: "bespoke interiors delivered" },
    { value: "1 mm", label: "installation tolerance" },
  ],
  servicesIntro: {
    eyebrow: "Our Services",
    title: "Services shaped for demanding spaces.",
    text:
      "For villas, apartments, private residences and offices across Greece, plus specialist yacht interiors for marine projects.",
  },
  services: [
    {
      title: "Premium Kitchens",
      text:
        "Custom-made kitchens for villas, apartments and private residences across Greece, built around stone, timber and concealed systems.",
      image: images.kitchenWarm,
      icon: icons.Home,
    },
    {
      title: "Custom Wardrobes",
      text:
        "Elegant wardrobe systems for Greek villas and city apartments, with premium finishes, integrated lighting and hidden hardware.",
      image: images.wardrobe,
      icon: icons.DoorOpen,
    },
    {
      title: "Walk-in Closets",
      text:
        "Tailor-made dressing rooms for private homes in Greece, designed as calm boutiques with glass, leather, brass and warm oak.",
      image: images.closet,
      icon: icons.Diamond,
    },
    {
      title: "Yacht Furniture",
      text:
        "Marine-grade bespoke furniture for cabins, salons and superyacht interiors, engineered for lightness and durability.",
      image: images.yacht,
      icon: icons.Ship,
    },
    {
      title: "Luxury Interior Furniture",
      text:
        "Sculptural furniture for living rooms, bedrooms, offices and full private residence fit-outs throughout Greece.",
      image: images.living,
      icon: icons.Gem,
    },
    {
      title: "Bespoke Woodwork",
      text:
        "Wall panels, doors, shelving and architectural details for Greek villas, apartments and offices, crafted in matched veneers and solid wood.",
      image: images.studioDetail,
      icon: icons.Hammer,
    },
  ],
  projectsIntro: {
    eyebrow: "Our Work",
    title: "Our work in Greece and yacht commissions.",
    text: "Most residential and commercial projects are designed for Greece; yacht interiors remain a dedicated international discipline.",
    all: "All",
  },
  projects: [
    {
      title: "Villa Kitchen",
      location: "Athens Riviera",
      category: "Villa",
      image: images.athensKitchen,
      text: "Custom oak kitchen for a Greek villa with marble island, brass detailing and seamless hidden storage.",
    },
    {
      title: "M/Y Stella Maris",
      location: "Monaco",
      category: "Yacht",
      image: images.yachtDetail,
      text: "Lightweight yacht joinery finished in high-gloss Macassar ebony and aged brass.",
    },
    {
      title: "Private Wardrobe",
      location: "Mykonos",
      category: "Residence",
      image: images.wardrobe,
      text: "Full-height walnut wardrobe for a private residence in Greece, with glass-fronted display and ambient lighting.",
    },
    {
      title: "Executive Office",
      location: "Athens",
      category: "Office",
      image: images.office,
      text: "A quiet graphite office in Athens with a custom desk, wall storage and leather-lined drawers.",
    },
  ],
  craft: {
    eyebrow: "Craftsmanship",
    title: "Crafted with precision. Finished to perfection.",
    text:
      "Every surface, joint and detail is carefully considered. Traditional craftsmanship meets modern production technology to create furniture that is timeless, precise and quiet in its confidence.",
    link: "See the process",
  },
  materials: [
    {
      title: "Matched Wood",
      text: "Walnut, oak and rare veneers selected for depth, grain and calm continuity.",
      image: images.wood,
    },
    {
      title: "Natural Stone",
      text: "Marble and quartzite specified as monolithic surfaces and sculptural accents.",
      image: images.stone,
    },
    {
      title: "Aged Metal",
      text: "Brass, bronze and burnished steel used as subtle points of warmth and precision.",
      image: images.brass,
    },
  ],
  processIntro: {
    eyebrow: "Process",
    title: "A calm path from first idea to final installation.",
    text:
      "The process is structured, discreet and transparent, with every decision documented before production begins.",
  },
  processSteps: [
    {
      title: "Private Consultation",
      text: "We discuss the space, lifestyle, requirements and desired aesthetic.",
      icon: icons.Sparkles,
    },
    {
      title: "Design & Measurements",
      text: "Precise measurements and a tailored design concept define the future interior.",
      icon: icons.Ruler,
    },
    {
      title: "Material Selection",
      text: "We select premium wood, stone, hardware, lighting and finishing details.",
      icon: icons.Layers3,
    },
    {
      title: "Production",
      text: "Every element is crafted in the workshop with carefully controlled tolerances.",
      icon: icons.Drill,
    },
    {
      title: "Installation",
      text: "Our team installs the furniture cleanly, quietly and with architectural precision.",
      icon: icons.Building2,
    },
    {
      title: "Final Perfection",
      text: "Every line, surface and joint is checked before the project is handed over.",
      icon: icons.BadgeCheck,
    },
  ],
  benefitsIntro: {
    eyebrow: "Why clients choose us",
    title: "Built for Greek homes, villas, offices and yacht interiors that require exactness.",
  },
  benefits: [
    "Premium materials",
    "Tailor-made design",
    "Handcrafted precision",
    "Luxury finishes",
    "Full project management",
    "Architect and designer collaboration",
    "Installation across Greece and yacht projects",
    "Long-lasting quality",
  ],
  contact: {
    eyebrow: "Private consultation",
    title: "Let's create your bespoke interior.",
    text:
      "Share a few details about the project and the studio will prepare the next step for a private consultation.",
    directMessage: "Message us directly",
  },
  form: {
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "+30 ...",
    email: "Email",
    emailPlaceholder: "name@example.com",
    projectType: "Project Type",
    projectPlaceholder: "Select project type",
    projectOptions: [
      "Premium Kitchen",
      "Custom Wardrobe",
      "Walk-in Closet",
      "Yacht Interior",
      "Office Furniture",
      "Private Residence",
    ],
    message: "Message",
    messagePlaceholder: "Tell us about the space, timeline and materials.",
    contactMethod: "Preferred Contact Method",
    contactOptions: ["WhatsApp", "Phone", "Email"],
    submit: "Send Request",
  },
  footerRights: "© 2026 ARCHÉ Bespoke Carpentry. All rights reserved.",
};

const ru = {
  meta: {
    title: "ARCHÉ STUDIO | Премиальная мебель и столярные изделия",
    description:
      "ARCHÉ STUDIO проектирует, изготавливает и устанавливает премиальные кухни, гардеробные, мебель для резиденций в Греции и яхтенные интерьеры.",
  },
  brandAria: "ARCHÉ STUDIO главная",
  navItems: [
    { label: "Главная", href: "#home" },
    { label: "Студия", href: "#studio" },
    { label: "Услуги", href: "#services" },
    { label: "Проекты", href: "#projects" },
    { label: "Процесс", href: "#process" },
    { label: "Контакты", href: "#contact" },
  ],
  headerCta: "Запрос",
  languageLabel: "Язык",
  mobile: {
    socialChannels: "Социальные сети",
    cta: "Запросить частную консультацию",
  },
  hero: {
    eyebrow: "Столярное ателье на заказ",
    title: "Премиальная мебель для вилл, домов и яхт в Греции",
    copy:
      "Мы проектируем, изготавливаем и устанавливаем премиальные кухни, гардеробные и интерьерную мебель по всей Греции, а также делаем столярные решения для яхт.",
    primaryCta: "Запросить консультацию",
    secondaryCta: "Смотреть проекты",
    bottom: ["Виллы в Греции", "Кухни на заказ", "Яхтенные интерьеры"],
    directLine: "Связаться напрямую",
  },
  studio: {
    eyebrow: "Студия",
    title: "Тихая точность, благородные материалы и архитектурная сдержанность.",
    text:
      "ARCHÉ STUDIO — столярное и мебельное ателье, специализирующееся на интерьерах высокого класса. Мы создаём мебель, которая ощущается индивидуальной, долговечной и глубоко персональной.",
  },
  stats: [
    { value: "18+", label: "лет частных проектов" },
    { value: "240", label: "интерьеров на заказ" },
    { value: "1 мм", label: "точность установки" },
  ],
  servicesIntro: {
    eyebrow: "Наши услуги",
    title: "Наши услуги для пространств с высокими требованиями.",
    text:
      "Виллы, квартиры, частные резиденции и офисы мы в основном делаем в Греции; яхтенные интерьеры — отдельное специализированное направление.",
  },
  services: [
    {
      title: "Премиальные кухни",
      text:
        "Кухни на заказ для вилл, апартаментов и частных резиденций по всей Греции, построенные вокруг камня, дерева и скрытых систем.",
      image: images.kitchenWarm,
      icon: icons.Home,
    },
    {
      title: "Шкафы на заказ",
      text:
        "Элегантные системы хранения для вилл и городских апартаментов в Греции: премиальные отделки, встроенная подсветка и скрытая фурнитура.",
      image: images.wardrobe,
      icon: icons.DoorOpen,
    },
    {
      title: "Гардеробные",
      text:
        "Индивидуальные гардеробные для частных домов в Греции: спокойные boutique-пространства со стеклом, кожей, латунью и тёплым дубом.",
      image: images.closet,
      icon: icons.Diamond,
    },
    {
      title: "Мебель для яхт",
      text:
        "Мебель marine-grade для кают, салонов и superyacht-интерьеров: лёгкая, прочная и без компромиссов в эстетике.",
      image: images.yacht,
      icon: icons.Ship,
    },
    {
      title: "Интерьерная мебель",
      text:
        "Скульптурная мебель для гостиных, спален, кабинетов и комплексного оснащения частных резиденций в Греции.",
      image: images.living,
      icon: icons.Gem,
    },
    {
      title: "Столярные изделия",
      text:
        "Панели, двери, стеллажи, акцентная столярка и архитектурные детали для греческих вилл, квартир и офисов.",
      image: images.studioDetail,
      icon: icons.Hammer,
    },
  ],
  projectsIntro: {
    eyebrow: "Наши работы",
    title: "Наши работы в Греции и яхтенные проекты.",
    text: "Жилые и коммерческие интерьеры мы показываем как проекты для Греции; яхты оставлены отдельным международным направлением.",
    all: "Все",
  },
  projects: [
    {
      title: "Кухня для виллы",
      location: "Афинская Ривьера",
      category: "Вилла",
      image: images.athensKitchen,
      text: "Кухня из дуба для виллы в Греции с мраморным островом, латунными деталями и скрытым хранением.",
    },
    {
      title: "M/Y Stella Maris",
      location: "Монако",
      category: "Яхта",
      image: images.yachtDetail,
      text: "Лёгкая яхтенная столярка в глянцевом макассарском эбене и состаренной латуни.",
    },
    {
      title: "Частная гардеробная",
      location: "Миконос",
      category: "Резиденция",
      image: images.wardrobe,
      text: "Гардеробная из ореха для частной резиденции в Греции с витринами из стекла и встроенной подсветкой.",
    },
    {
      title: "Кабинет руководителя",
      location: "Афины",
      category: "Офис",
      image: images.office,
      text: "Спокойный графитовый кабинет в Афинах с мебелью на заказ, стеновым хранением и ящиками с кожаной отделкой.",
    },
  ],
  craft: {
    eyebrow: "Мастерство",
    title: "Создано с точностью. Доведено до совершенства.",
    text:
      "Каждая поверхность, стык и деталь продуманы заранее. Традиционное мастерство соединяется с современным производством, чтобы мебель ощущалась вне времени.",
    link: "Смотреть процесс",
  },
  materials: [
    {
      title: "Подобранное дерево",
      text: "Орех, дуб и редкий шпон, выбранные по глубине, рисунку и спокойной непрерывности.",
      image: images.wood,
    },
    {
      title: "Натуральный камень",
      text: "Мрамор и кварцит как монолитные поверхности и скульптурные акценты.",
      image: images.stone,
    },
    {
      title: "Состаренный металл",
      text: "Латунь, бронза и воронёная сталь как тёплые акценты точности.",
      image: images.brass,
    },
  ],
  processIntro: {
    eyebrow: "Процесс",
    title: "Спокойный путь от первой идеи до финальной установки.",
    text:
      "Процесс структурирован, деликатен и прозрачен: каждое решение фиксируется до начала производства.",
  },
  processSteps: [
    {
      title: "Частная консультация",
      text: "Обсуждаем пространство, образ жизни, задачи и желаемую эстетику.",
      icon: icons.Sparkles,
    },
    {
      title: "Дизайн и замеры",
      text: "Точные замеры и индивидуальная концепция определяют будущий интерьер.",
      icon: icons.Ruler,
    },
    {
      title: "Выбор материалов",
      text: "Подбираем дерево, камень, фурнитуру, подсветку и детали отделки.",
      icon: icons.Layers3,
    },
    {
      title: "Производство",
      text: "Каждый элемент изготавливается в мастерской с контролем допусков.",
      icon: icons.Drill,
    },
    {
      title: "Установка",
      text: "Команда устанавливает мебель чисто, спокойно и с архитектурной точностью.",
      icon: icons.Building2,
    },
    {
      title: "Финальная проверка",
      text: "Каждая линия, поверхность и стык проверяются перед передачей проекта.",
      icon: icons.BadgeCheck,
    },
  ],
  benefitsIntro: {
    eyebrow: "Почему выбирают нас",
    title: "Для домов, вилл, офисов в Греции и яхт, где нужна абсолютная точность.",
  },
  benefits: [
    "Премиальные материалы",
    "Индивидуальный дизайн",
    "Ручная точность",
    "Luxury-отделки",
    "Полное управление проектом",
    "Работа с архитекторами и дизайнерами",
    "Установка по Греции и яхтенные проекты",
    "Долговечное качество",
  ],
  contact: {
    eyebrow: "Частная консультация",
    title: "Создадим ваш интерьер на заказ.",
    text:
      "Расскажите немного о проекте, и студия подготовит следующий шаг для частной консультации.",
    directMessage: "Напишите нам напрямую",
  },
  form: {
    name: "Имя",
    namePlaceholder: "Ваше имя",
    phone: "Телефон / WhatsApp",
    phonePlaceholder: "+30 ...",
    email: "Email",
    emailPlaceholder: "name@example.com",
    projectType: "Тип проекта",
    projectPlaceholder: "Выберите тип проекта",
    projectOptions: [
      "Премиальная кухня",
      "Шкаф на заказ",
      "Гардеробная",
      "Яхтенный интерьер",
      "Мебель для офиса",
      "Частная резиденция",
    ],
    message: "Сообщение",
    messagePlaceholder: "Расскажите о пространстве, сроках и материалах.",
    contactMethod: "Предпочтительный способ связи",
    contactOptions: ["WhatsApp", "Телефон", "Email"],
    submit: "Отправить запрос",
  },
  footerRights: "© 2026 ARCHÉ Bespoke Carpentry. Все права защищены.",
};

const el = {
  meta: {
    title: "ARCHÉ STUDIO | Πολυτελή ξυλουργικά και έπιπλα",
    description:
      "Η ARCHÉ STUDIO σχεδιάζει, κατασκευάζει και εγκαθιστά premium κουζίνες, ντουλάπες, έπιπλα κατοικιών στην Ελλάδα και εσωτερικά γιοτ.",
  },
  brandAria: "ARCHÉ STUDIO αρχική",
  navItems: [
    { label: "Αρχική", href: "#home" },
    { label: "Στούντιο", href: "#studio" },
    { label: "Υπηρεσίες", href: "#services" },
    { label: "Έργα", href: "#projects" },
    { label: "Διαδικασία", href: "#process" },
    { label: "Επικοινωνία", href: "#contact" },
  ],
  headerCta: "Ερώτηση",
  languageLabel: "Γλώσσα",
  mobile: {
    socialChannels: "Κοινωνικά δίκτυα",
    cta: "Ζητήστε ιδιωτική συμβουλευτική",
  },
  hero: {
    eyebrow: "Ξυλουργικό atelier κατά παραγγελία",
    title: "Πολυτελή έπιπλα για βίλες, σπίτια και γιοτ",
    copy:
      "Σχεδιάζουμε, κατασκευάζουμε και εγκαθιστούμε premium κουζίνες, ντουλάπες και έπιπλα εσωτερικού σε όλη την Ελλάδα, με ειδική ξυλουργική για γιοτ.",
    primaryCta: "Ζητήστε συμβουλευτική",
    secondaryCta: "Δείτε τα έργα",
    bottom: ["Βίλες στην Ελλάδα", "Κουζίνες κατά παραγγελία", "Ξυλουργικά γιοτ"],
    directLine: "Άμεση επικοινωνία",
  },
  studio: {
    eyebrow: "Το στούντιο",
    title: "Ήρεμη ακρίβεια, εκλεπτυσμένα υλικά και αρχιτεκτονική λιτότητα.",
    text:
      "Η ARCHÉ STUDIO είναι atelier ξυλουργικής και επίπλου που ειδικεύεται σε υψηλής αισθητικής custom εσωτερικούς χώρους. Δημιουργούμε έπιπλα με προσωπικότητα, διάρκεια και βαθιά αίσθηση λεπτομέρειας.",
  },
  stats: [
    { value: "18+", label: "χρόνια ιδιωτικών έργων" },
    { value: "240", label: "εσωτερικοί χώροι κατά παραγγελία" },
    { value: "1 mm", label: "ανοχή εγκατάστασης" },
  ],
  servicesIntro: {
    eyebrow: "Οι υπηρεσίες μας",
    title: "Υπηρεσίες σχεδιασμένες για απαιτητικούς χώρους.",
    text:
      "Βίλες, διαμερίσματα, ιδιωτικές κατοικίες και γραφεία υλοποιούνται κυρίως στην Ελλάδα· τα εσωτερικά γιοτ είναι ξεχωριστή εξειδίκευση.",
  },
  services: [
    {
      title: "Πολυτελείς κουζίνες",
      text:
        "Κουζίνες κατά παραγγελία για βίλες, διαμερίσματα και ιδιωτικές κατοικίες σε όλη την Ελλάδα, με πέτρα, ξύλο και κρυφά συστήματα.",
      image: images.kitchenWarm,
      icon: icons.Home,
    },
    {
      title: "Ντουλάπες κατά παραγγελία",
      text:
        "Κομψά συστήματα ντουλάπας για ελληνικές βίλες και διαμερίσματα, με premium φινιρίσματα, φωτισμό και κρυφούς μηχανισμούς.",
      image: images.wardrobe,
      icon: icons.DoorOpen,
    },
    {
      title: "Walk-in γκαρνταρόμπες",
      text:
        "Ιδιωτικοί χώροι ένδυσης για κατοικίες στην Ελλάδα, σαν ήρεμες boutiques με γυαλί, δέρμα, ορείχαλκο και ζεστό ξύλο.",
      image: images.closet,
      icon: icons.Diamond,
    },
    {
      title: "Έπιπλα γιοτ",
      text:
        "Marine-grade έπιπλα για καμπίνες, σαλόνια και superyacht interiors, σχεδιασμένα για ελαφρότητα και αντοχή.",
      image: images.yacht,
      icon: icons.Ship,
    },
    {
      title: "Πολυτελή έπιπλα εσωτερικού",
      text:
        "Γλυπτικές φόρμες για σαλόνια, υπνοδωμάτια, γραφεία και πλήρεις ιδιωτικές κατοικίες σε όλη την Ελλάδα.",
      image: images.living,
      icon: icons.Gem,
    },
    {
      title: "Ξυλουργικές κατασκευές",
      text:
        "Επενδύσεις τοίχων, πόρτες, ράφια και αρχιτεκτονικές λεπτομέρειες για ελληνικές βίλες, διαμερίσματα και γραφεία.",
      image: images.studioDetail,
      icon: icons.Hammer,
    },
  ],
  projectsIntro: {
    eyebrow: "Τα έργα μας",
    title: "Τα έργα μας στην Ελλάδα και αναθέσεις γιοτ.",
    text: "Οι κατοικίες και οι επαγγελματικοί χώροι παρουσιάζονται κυρίως ως έργα για την Ελλάδα· τα γιοτ παραμένουν ξεχωριστός διεθνής τομέας.",
    all: "Όλα",
  },
  projects: [
    {
      title: "Κουζίνα βίλας",
      location: "Αθηναϊκή Ριβιέρα",
      category: "Βίλα",
      image: images.athensKitchen,
      text: "Κουζίνα από δρυ για ελληνική βίλα με μαρμάρινη νησίδα, λεπτομέρειες ορείχαλκου και κρυφούς αποθηκευτικούς χώρους.",
    },
    {
      title: "M/Y Stella Maris",
      location: "Μονακό",
      category: "Γιοτ",
      image: images.yachtDetail,
      text: "Ελαφριά ξυλουργική γιοτ με γυαλιστερό Macassar ebony και παλαιωμένο ορείχαλκο.",
    },
    {
      title: "Ιδιωτική γκαρνταρόμπα",
      location: "Μύκονος",
      category: "Κατοικία",
      image: images.wardrobe,
      text: "Ντουλάπα πλήρους ύψους για ιδιωτική κατοικία στην Ελλάδα, με γυάλινες βιτρίνες και ενσωματωμένο φωτισμό.",
    },
    {
      title: "Executive γραφείο",
      location: "Αθήνα",
      category: "Γραφείο",
      image: images.office,
      text: "Ήσυχο γραφείο στην Αθήνα σε graphite τόνους, με custom έπιπλο, αποθήκευση τοίχου και συρτάρια με δέρμα.",
    },
  ],
  craft: {
    eyebrow: "Δεξιοτεχνία",
    title: "Κατασκευασμένο με ακρίβεια. Τελειωμένο στην εντέλεια.",
    text:
      "Κάθε επιφάνεια, ένωση και λεπτομέρεια εξετάζεται προσεκτικά. Η παραδοσιακή δεξιοτεχνία συναντά τη σύγχρονη παραγωγή για έπιπλα διαχρονικά και ακριβή.",
    link: "Δείτε τη διαδικασία",
  },
  materials: [
    {
      title: "Επιλεγμένο ξύλο",
      text: "Καρυδιά, δρυς και σπάνιοι καπλαμάδες επιλεγμένοι για βάθος, νερά και ήρεμη συνέχεια.",
      image: images.wood,
    },
    {
      title: "Φυσική πέτρα",
      text: "Μάρμαρο και quartzite ως μονολιθικές επιφάνειες και γλυπτικές πινελιές.",
      image: images.stone,
    },
    {
      title: "Παλαιωμένο μέταλλο",
      text: "Ορείχαλκος, μπρούντζος και burnished steel ως ζεστές λεπτομέρειες ακρίβειας.",
      image: images.brass,
    },
  ],
  processIntro: {
    eyebrow: "Διαδικασία",
    title: "Μια ήρεμη πορεία από την πρώτη ιδέα έως την τελική εγκατάσταση.",
    text:
      "Η διαδικασία είναι οργανωμένη, διακριτική και διαφανής, με κάθε απόφαση καταγεγραμμένη πριν ξεκινήσει η παραγωγή.",
  },
  processSteps: [
    {
      title: "Ιδιωτική συμβουλευτική",
      text: "Συζητάμε τον χώρο, τον τρόπο ζωής, τις ανάγκες και την επιθυμητή αισθητική.",
      icon: icons.Sparkles,
    },
    {
      title: "Σχεδιασμός & μετρήσεις",
      text: "Ακριβείς μετρήσεις και εξατομικευμένη ιδέα ορίζουν το μελλοντικό εσωτερικό.",
      icon: icons.Ruler,
    },
    {
      title: "Επιλογή υλικών",
      text: "Επιλέγουμε premium ξύλο, πέτρα, μηχανισμούς, φωτισμό και λεπτομέρειες φινιρίσματος.",
      icon: icons.Layers3,
    },
    {
      title: "Παραγωγή",
      text: "Κάθε στοιχείο κατασκευάζεται στο εργαστήριο με ελεγχόμενες ανοχές.",
      icon: icons.Drill,
    },
    {
      title: "Εγκατάσταση",
      text: "Η ομάδα εγκαθιστά τα έπιπλα καθαρά, ήρεμα και με αρχιτεκτονική ακρίβεια.",
      icon: icons.Building2,
    },
    {
      title: "Τελικός έλεγχος",
      text: "Κάθε γραμμή, επιφάνεια και ένωση ελέγχεται πριν παραδοθεί το έργο.",
      icon: icons.BadgeCheck,
    },
  ],
  benefitsIntro: {
    eyebrow: "Γιατί μας επιλέγουν",
    title: "Για κατοικίες, βίλες, γραφεία στην Ελλάδα και γιοτ που απαιτούν ακρίβεια.",
  },
  benefits: [
    "Premium υλικά",
    "Σχεδιασμός κατά παραγγελία",
    "Χειροποίητη ακρίβεια",
    "Πολυτελή φινιρίσματα",
    "Πλήρης διαχείριση έργου",
    "Συνεργασία με αρχιτέκτονες και designers",
    "Εγκατάσταση σε όλη την Ελλάδα και έργα γιοτ",
    "Ποιότητα με διάρκεια",
  ],
  contact: {
    eyebrow: "Ιδιωτική συμβουλευτική",
    title: "Ας δημιουργήσουμε το bespoke εσωτερικό σας.",
    text:
      "Μοιραστείτε λίγες πληροφορίες για το έργο και το στούντιο θα προετοιμάσει το επόμενο βήμα για ιδιωτική συμβουλευτική.",
    directMessage: "Στείλτε μας μήνυμα",
  },
  form: {
    name: "Όνομα",
    namePlaceholder: "Το όνομά σας",
    phone: "Τηλέφωνο / WhatsApp",
    phonePlaceholder: "+30 ...",
    email: "Email",
    emailPlaceholder: "name@example.com",
    projectType: "Τύπος έργου",
    projectPlaceholder: "Επιλέξτε τύπο έργου",
    projectOptions: [
      "Premium κουζίνα",
      "Ντουλάπα κατά παραγγελία",
      "Walk-in γκαρνταρόμπα",
      "Εσωτερικό γιοτ",
      "Έπιπλα γραφείου",
      "Ιδιωτική κατοικία",
    ],
    message: "Μήνυμα",
    messagePlaceholder: "Πείτε μας για τον χώρο, το χρονοδιάγραμμα και τα υλικά.",
    contactMethod: "Προτιμώμενος τρόπος επικοινωνίας",
    contactOptions: ["WhatsApp", "Τηλέφωνο", "Email"],
    submit: "Αποστολή αιτήματος",
  },
  footerRights: "© 2026 ARCHÉ Bespoke Carpentry. Με επιφύλαξη παντός δικαιώματος.",
};

export const contentByLanguage = { en, ru, el };

export const supportedLanguages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "el", label: "EL" },
];
