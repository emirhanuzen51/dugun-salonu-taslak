export interface EventConcept {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "Düğün & Nikah" | "Kına & Bekarlığa Veda" | "Nişan & Söz" | "Kurumsal & Gala" | "Özel Kutlama";
  tagline: string;
  lead: string;
  description: string;
  coverImage: string;
  gallery: string[];
  capacity: string;
  suitableSalons: string[];
  includedServices: string[];
  timeline: { time: string; title: string; desc: string }[];
  highlight: string;
}

export const eventConcepts: EventConcept[] = [
  {
    id: "saray-balo-dugunu",
    slug: "saray-balo-dugunu",
    title: "Kraliyet Saray Balo Düğünü",
    shortTitle: "Saray Balo Düğünü",
    category: "Düğün & Nikah",
    tagline: "Kristal Avizelerin Işıltısında Krallara Layık Bir Gece",
    lead: "8 metre kolonsuz tavan, Bohemya kristal avizeler, kırmızı halı protokol karşılaması ve senfoni yaylı grubuyla görkemli bir evlilik seremonisi.",
    description: "Saray Balo Düğünü konseptimiz, zarafet ve asaleti zirveye taşımak isteyen çiftler için tasarlandı. Altın varaklı suplalar, ithal taze çiçek aranjmanları, porselen ziyafet sunumları ve ilk dansınızda dans pistini kaplayan bulut sis efektiyle konuklarınız bir peri masalının parçası olacak.",
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "400 - 1.200 Kişi",
    suitableSalons: ["Grand Royal Balo Salonu"],
    includedServices: [
      "Karşılamada Arp, Çello ve Keman Üçlüsü Canlı Dinletisi",
      "Gelin ve Damat İçin Jakuzili VIP Kraliyet Süiti ve Özel Uşak",
      "5 Katlı Şeker Hamursuz Tasarım Düğün Pastası ve Şampanya Gösterisi",
      "4K Çift Drone & 6 Kameralı Sinematik Belgesel Çekimi",
      "Girişte Özel İsim Yazılı Kristal Karşılama Panosu ve Kırmızı Halı",
    ],
    timeline: [
      { time: "19:00", title: "Karşılama Kokteyli", desc: "Fuaye alanında yaylı çalgılar eşliğinde imza kokteyller ve kanepeler." },
      { time: "20:00", title: "Görkemli Giriş & Nikah", desc: "Volkan ve sis şovları eşliğinde gelin-damat sahne yürüyüşü ve resmi nikah töreni." },
      { time: "20:30", title: "Ziyafet & Canlı Orkestra", desc: "Gurme ana yemek servisi ve 8 kişilik dev pop orkestrası performansı." },
      { time: "22:30", title: "Pasta Seremonisi & Dans", desc: "Görsel şölen eşliğinde pasta kesimi ve tüm davetlilerle kesintisiz dans." },
    ],
    highlight: "Görkem, protokol ağırlama ve klasik saray ihtişamı arayan çiftlerin tercihi.",
  },
  {
    id: "botanik-kir-dugunu",
    slug: "botanik-kir-dugunu",
    title: "Masalsı Botanik Kır Düğünü",
    shortTitle: "Botanik Kır Düğünü",
    category: "Düğün & Nikah",
    tagline: "Asırlık Çamlar ve Yıldızlar Altında Doğal Aşk Masalı",
    lead: "Doğal çim zemin, 10.000 peri ışığı, gül kemerli ahşap gazebo ve açık havanın büyüleyici romantizmi.",
    description: "Botanica Kır Bahçesi'nde gerçekleşen bu konsept, doğallığı lüks detaylarla buluşturur. Ahşap masalar, kütük şamdanlar, taze okaliptüs ve şakayık çiçekleri, açık hava kokteyl barı ve akustik müzikle romantizmin en saf hali yaşanır. Olası hava değişimlerine karşı otomatik bioklimatik koruma mevcuttur.",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "300 - 1.500 Kişi",
    suitableSalons: ["Botanica Kır Bahçesi"],
    includedServices: [
      "Rustik Ahşap Gazebo ve Canlı Çiçek Kemeri Nikah Alanı",
      "Ağaçlara Asılı 10.000 Peri Ampulü ve Işık Tüneli",
      "Açık Hava Kokteyl Barı ve Taze Meyveli İmza İçecekler",
      "Gelin & Damat İçin Bahçe İçi Müstakil Bungalov Hazırlık Evi",
      "Kötü Hava Şartına Karşı Otomatik Kapanan Bioklimatik Tavan & Yedek Salon",
    ],
    timeline: [
      { time: "18:30", title: "Gün Batımı Bahçe Karşılaması", desc: "Zeytin ağaçları altında caz üçlüsü eşliğinde hoşgeldin ikramları." },
      { time: "19:30", title: "Gazebo Seremonisi", desc: "Çiçek kemerleri arasında açık hava nikah akdi." },
      { time: "20:15", title: "Bahçe Ziyafeti & Müzik", desc: "Barbekü & gurme tabaklar eşliğinde canlı sahne." },
      { time: "22:00", title: "Açık Hava Dansı & After Party", desc: "Yıldızlar altında DJ performansı ve gece ikramları." },
    ],
    highlight: "Romantik, samimi, bohem ve doğayla iç içe bir düğün hayal edenler için kusursuz.",
  },
  {
    id: "bogaz-teras-kokteyl",
    slug: "bogaz-teras-kokteyl-dugunu",
    title: "Boğaz Manzaralı Teras & After Party",
    shortTitle: "Boğaz Teras Düğünü",
    category: "Düğün & Nikah",
    tagline: "Panoramik Deniz Manzarası, Gün Batımı ve Gece Boyu Parti",
    lead: "Boğaz'ın mavi sularına nazır açılır cam tavanlı modern teras, lounge bistro düzeni ve saat 03:00'e kadar süren kesintisiz eğlence.",
    description: "Modern, dinamik ve eğlence odaklı çiftlerin bir numaralı tercihi olan Boğaz Teras konsepti, gün batımında nefes kesen manzarayla başlar. Zengin finger-food lezzetler, kokteyl prolonge ikramları ve gece ilerledikçe festival havasına bürünen DJ lazer şovuyla unutulmaz bir partiye dönüşür.",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "150 - 600 Kişi",
    suitableSalons: ["Panorama Boğaz Teras"],
    includedServices: [
      "Panoramik Deniz Manzaralı 360 Derece Ada Bar ve Barmen Şovları",
      "Açılır Kapanır Akıllı Cam Tavan ve Deniz Esintisi",
      "Gece 03:00'e Kadar Ses İzolasyonlu After Party Modu",
      "Lazer, Sis Robotları ve Club Tipi Akustik Ses Sistemi",
      "Teras Manzaralı VIP Dinlenme Lounge'u",
    ],
    timeline: [
      { time: "19:00", title: "Sunset Karşılama", desc: "Gün batımı kadehleri eşliğinde bistro sohbetleri." },
      { time: "20:00", title: "Modern Nikah Seremonisi", desc: "Deniz manzaralı sonsuzluk takında nikah töreni." },
      { time: "20:30", title: "Kokteyl Prolonge & Gurme Büfe", desc: "Sıcak ve soğuk lezzet geçişleri." },
      { time: "22:00", title: "After Party Modu (Gece 03:00'e Kadar)", desc: "Açılır tavan altında DJ ile kulüp atmosferinde dans." },
    ],
    highlight: "Klasik oturmalı düğün yerine enerjik, modern ve manzaralı parti arayanlar için.",
  },
  {
    id: "saray-kina-gecesi",
    slug: "geleneksel-saray-kina-gecesi",
    title: "Geleneksel & Modern Saray Kına Gecesi",
    shortTitle: "Saray Kına Gecesi",
    category: "Kına & Bekarlığa Veda",
    tagline: "Bordo & Altın Kadife Zarafetinde Masalsı Kına Seremonisi",
    lead: "Özel kadife kına tahtı, 6 kişilik profesyonel nedime dans ekibi, tef & bendir gösterisi ve sultanlara layık bir gelin gecesi.",
    description: "Kına gecenizi sıradanlıktan çıkarıp unutulmaz bir şölene dönüştürüyoruz. Gelin hanımın görkemli tahtla salona girişi, özel koreografilerle hazırlanan nedime dans gösterileri, Hint kınacısı, Osmanlı şerbetçisi ve Türk kahvesi köşesiyle geleneksel kültürümüz en lüks dokunuşlarla hayat bulur.",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "150 - 500 Kişi",
    suitableSalons: ["Panorama Boğaz Teras", "Grand Royal Balo Salonu"],
    includedServices: [
      "Özel İthal Kadife Kaplama Çift Kişilik Kına Tahtı ve Cibinlik",
      "6 Kişilik Profesyonel Kadın Dans & Nedime Ekibi (Kostümlü)",
      "Tef, Kına Mumları, Kuru Kına ve Dağıtmalık Hediyelikler",
      "Hint Kınacısı İstasyonu ve Canlı El Boyama",
      "Gelin Hanım İçin Bindallı / Kaftan Seçenekleri",
    ],
    timeline: [
      { time: "19:30", title: "Lokum & Şerbetle Karşılama", desc: "Geleneksel kıyafetli hosteslerle misafirlerin ağırlanması." },
      { time: "20:30", title: "Kraliçe Girişi & Taht Töreni", desc: "Tefler ve volkanlar eşliğinde gelinin salona girişi." },
      { time: "21:30", title: "Geleneksel Kına Yakma Ritüeli", desc: "Hüzün ve neşenin buluştuğu kına türküleri ve seremonisi." },
      { time: "22:15", title: "Ritim & Dans Şovu", desc: "Oyun havaları, halaylar ve DJ ile sınırsız eğlence." },
    ],
    highlight: "Eksiksiz organizasyon, nedime gösterileri ve prestijli kına ritüelleri.",
  },
  {
    id: "nisan-ve-soz-toreni",
    slug: "zarif-nisan-ve-soz-toreni",
    title: "Zarif Nişan & Söz Daveti",
    shortTitle: "Zarif Nişan & Söz",
    category: "Nişan & Söz",
    tagline: "Evliliğe İlk Adımda Butik, Samimi ve Kusursuz Zarafet",
    lead: "Özel tasarım çiçekli nişan masası, kişiselleştirilmiş yüzük tepsisi, karşılama ikramları ve aile sıcaklığında gala düzeni.",
    description: "Söz ve nişan davetleri, iki ailenin bir araya geldiği en özel ilk resmi adımdır. Çiftin tarzına göre hazırlanan pastel tonlu çiçek takları, modern pleksi detaylar, zarif bistro düzeni veya oturmalı yemekli menülerle hem samimi hem de son derece asil bir atmosfer yaratılır.",
    coverImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519225424984-6330058b731d?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "100 - 450 Kişi",
    suitableSalons: ["Panorama Boğaz Teras", "Botanica Kır Bahçesi"],
    includedServices: [
      "Kişiye Özel İsim Yazılı Pleksi & Taze Çiçekli Nişan Masası Tasarımı",
      "Özel Tasarım Nişan Tepsisi, Makas ve Yüzük Yükselticileri",
      "Karşılama Kokteyli ve Gurme Kanepe Sunumları",
      "Fotoğraf & Video Çekimi (Tüm Tören Aşamaları Dahil)",
      "Akustik Canlı Trio veya Fon Müziği Koordinasyonu",
    ],
    timeline: [
      { time: "19:00", title: "Aile & Konuk Karşılaması", desc: "Zarif kokteyl sunumları eşliğinde ailelerin tanışması." },
      { time: "20:00", title: "Yüzük Takma & Kurdele Kesim Töreni", desc: "Özel müzik eşliğinde aile büyükleriyle yüzük takdimi." },
      { time: "20:30", title: "Yemek & Kutlama", desc: "Özel seçilmiş menü servisi ve ilk nişan dansı." },
    ],
    highlight: "Ailelerin kaynaştığı, zarif ve fotojenik butik davetler.",
  },
  {
    id: "kurumsal-gala-ve-lansman",
    slug: "kurumsal-gala-ve-lansman",
    title: "Kurumsal Gala, Ödül Töreni & Lansman",
    shortTitle: "Kurumsal Gala & Lansman",
    category: "Kurumsal & Gala",
    tagline: "Markanıza Prestij Katan Kusursuz Protokol Organizasyonları",
    lead: "1.500 kişiye varan ziyafet kapasitesi, dev LED ekranlar, simultane tercüme odaları, profesyonel ses mühendisliği ve VIP karşılama.",
    description: "Şirketinizin yıl sonu galası, ürün lansmanı, bayii toplantısı veya uluslararası kongre davetlerinde en üst düzey kurumsal standartlar sunuyoruz. Tamamı kolonsuz mimari, yüksek tavan, güçlü jeneratör altyapısı ve 250 araçlık kapalı otoparkımızla misafirlerinize prestijli bir ev sahipliği yapın.",
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "200 - 1.800 Kişi",
    suitableSalons: ["Grand Royal Balo Salonu", "Panorama Boğaz Teras"],
    includedServices: [
      "40 m² Sahne, P3 HD Çift Dev LED Ekran ve Truss Işık Sistemi",
      "Simultane Tercüme ve Basın Odası Altyapısı",
      "Protokol Girişi, Karşılama Hostesleri ve VIP Vale Hizmeti",
      "5 Yıldızlı Otel Standartlarında 3 veya 4 Çeşit Gala Ziyafet Menüsü",
      "Sanatçı ve Konuşmacı Kulisleri",
    ],
    timeline: [
      { time: "18:30", title: "Kayıt & Hoşgeldin Kokteyli", desc: "Fuaye alanında dijital kayıt ve networking." },
      { time: "19:30", title: "Açılış & Protokol Konuşmaları", desc: "Ana sahnede LED ekran sunumları ve vizyon konuşmaları." },
      { time: "20:30", title: "Gala Yemeği & Ödül Takdimi", desc: "Müzik dinletisi eşliğinde gurme ziyafet ve ödül töreni." },
    ],
    highlight: "Kurumsal markaların güvenle tercih ettiği A+ protokol altyapısı.",
  },
  {
    id: "sunnet-dugunu-soleni",
    slug: "sunnet-dugunu-ve-aile-soleni",
    title: "Görkemli Sünnet Düğünü & Aile Şöleni",
    shortTitle: "Sünnet Şöleni",
    category: "Özel Kutlama",
    tagline: "Küçük Prens İçin Masalsı Bir Hatıra, Aile İçin Büyük Gurur",
    lead: "Mehteran veya yeniçeri karşılama, taht üzerinde görkemli salon girişi, palyaço & sihirbaz şovları ve çocuklar için özel eğlence dünyası.",
    description: "Evladınızın ilk mürüvvetini kraliyet ihtişamıyla kutlayın. Özel sünnet tahtı, mehter takımı veya bando karşılama, çocuklara özel animasyon alanı, pamuk şeker arabası ve yetişkinler için zengin Türk ziyafet sofralarıyla nesiller boyu hatırlanacak bir gün.",
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "250 - 1.200 Kişi",
    suitableSalons: ["Grand Royal Balo Salonu", "Botanica Kır Bahçesi"],
    includedServices: [
      "Altın Varaklı Sünnet Tahtı ve Kostümlü Yeniçeri Taşıyıcı Ekip",
      "Mehteran Takımı veya Canlı Bando Karşılama Gösterisi",
      "Çocuklar İçin Palyaço, Yüz Boyama, İllüzyonist ve Şişme Oyun Alanı",
      "Pamuk Şeker ve Patlamış Mısır Nostalji Arabaları",
      "Geleneksel Ziyafet Menüsü ve Kat Kat Sünnet Pastası",
    ],
    timeline: [
      { time: "18:00", title: "Mehteran Karşılaması", desc: "Konukların kapıda canlı marşlarla karşılanması." },
      { time: "19:00", title: "Taht Seremonisi ile Salona Giriş", desc: "Küçük prensin taht üzerinde alkışlarla gelişi." },
      { time: "19:45", title: "Çocuk Animasyon Şovu & Yemek", desc: "İllüzyon gösterisi ve çocuklara özel menü servisi." },
      { time: "21:00", title: "Pasta Kesimi & Aile Halayı", desc: "Dev pasta töreni ve ailece coşkulu kutlama." },
    ],
    highlight: "Geleneksel değerlerimiz ile çocukların doyasıya eğlendiği modern aile şöleni.",
  },
];

export function findConcept(slug: string): EventConcept | undefined {
  return eventConcepts.find((c) => c.slug === slug || c.id === slug);
}
