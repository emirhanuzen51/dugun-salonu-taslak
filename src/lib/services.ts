export interface WeddingService {
  id: string;
  slug: string;
  title: string;
  category: string;
  lead: string;
  description: string;
  iconName: string;
  image: string;
  highlights: string[];
  process: { step: string; title: string; desc: string }[];
}

export const services: WeddingService[] = [
  {
    id: "gastronomi-ve-catering",
    slug: "gastronomi-ve-catering",
    title: "Gurme Gastronomi & Catering",
    category: "Mutfak & Lezzet",
    lead: "Ödüllü executive şeflerimizin elinden çıkan, yerel lezzetleri modern dünya mutfağı teknikleriyle harmanlayan ziyafet sofraları.",
    description: "Düğün gününüzde davetlilerinizin hafızasında kalacak en özel anlardan biri kusursuz bir yemek deneyimidir. Bünyemizde yer alan 500 m² endüstriyel hijyenik ana mutfağımızda, tüm yemekler davet saatinize dakikalar kala taze olarak hazırlanır ve porselen sunum tabaklarında sıcak servis edilir. Menü tadımı, özel alerjen ve çocuk menüleri standart paketimize dahildir.",
    iconName: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Çiftlerimiz için ücretsiz 4 kişilik önceden menü tadımı",
      "Kırmızı et, beyaz et, deniz mahsulleri ve kokteyl prolonge alternatifleri",
      "Çölyak, diyabet, vegan ve vejetaryen özel menü hazırlığı",
      "Fransız pasta şefimiz tarafından canlı hazırlanan çok katlı düğün pastası",
      "Gece sonu ikramları (İşkembe çorbası, ıslak hamburger veya kokoreç arabası)",
    ],
    process: [
      { step: "01", title: "Damak Zevki & Konsept Belirleme", desc: "Davetinizin tarzına en uygun lezzet profilini ve menü temasını seçiyoruz." },
      { step: "02", title: "Özel Tadım Randevusu", desc: "Şefimiz eşliğinde tüm menüyü ve tatlıları düğünden 1 ay önce birebir tadıyorsunuz." },
      { step: "03", title: "Kusursuz Tabaklama & Servis", desc: "Düğün gecesi her masa başına 1 profesyonel garson düşecek şekilde anında servis." },
    ],
  },
  {
    id: "orkestra-ve-muzik",
    slug: "orkestra-ve-canli-muzik",
    title: "Orkestra & Canlı Sahne Performansı",
    category: "Eğlence & Atmosfer",
    lead: "Akustik yaylı çalgılarla karşılama, 8 kişilik dev pop orkestrası ve gece sonu için enerjik DJ After Party performansı.",
    description: "Müzik, bir düğünün ruhunu belirler. Türkiye'nin en seçkin müzisyenlerinden oluşan orkestramız, geniş repertuarı ve sahne enerjisiyle tüm konuklarınızı dans pistine çeker. İlk dans şarkınızdan pasta kesim müziğine kadar her tını sizin hikayenize göre özel olarak prova edilir.",
    iconName: "Music",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Kokteyl alanında canlı piyano, arp ve çello karşılama üçlüsü",
      "Geniş Türkçe pop, yabancı caz, nostalji ve yöresel repertuvar",
      "Düğün öncesi çiftimizle yüz yüze müzik koordinasyon toplantısı",
      "D&B Audiotechnik profesyonel line-array ses mühendisliği",
      "Gecenin devamında son teknoloji lazerlerle desteklenen DJ performansı",
    ],
    process: [
      { step: "01", title: "Müzik Tarzı & Kara Liste", desc: "Çalınmasını istediğiniz ve istemediğiniz türleri önceden belirliyoruz." },
      { step: "02", title: "Özel Dans Müziği Düzenlemesi", desc: "İlk dans parçanızın temposu ve giriş zamanlaması prova edilir." },
      { step: "03", title: "Kesintisiz Eğlence Akışı", desc: "Misafirlerin nabzını tutan profesyonel sahne yönetimi." },
    ],
  },
  {
    id: "fotograf-ve-prodüksiyon",
    slug: "fotograf-ve-4k-prodiksiyon",
    title: "Sinematik Prodüksiyon & 4K Drone",
    category: "Medya & Hatıralar",
    lead: "Ödüllü düğün belgeselcilerimiz tarafından hazırlanan sinematik film, 4K çift drone çekimi ve anlık baskı fotoğraf stüdyosu.",
    description: "En mutlu gününüzün her karesi bir sanat eserine dönüşsün. 6 kişilik profesyonel prodüksiyon ekibimiz, sabah hazırlık anlarından gece dansına kadar hiçbir anı kaçırmaz. 4K HDR sinema kameraları ve gimbal sabitleyicilerle çekilen görüntüler, düğün sonrası montajlanarak ömür boyu saklayacağınız bir film haline getirilir.",
    iconName: "Camera",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "4K sinematik düğün hikayesi (5-7 dakikalık özel teaser ve 90 dakikalık film)",
      "Açık hava ve salon çekimleri için 2 adet lisanslı 4K drone operatörü",
      "Çiftimize özel lüks deri kapaklı panoramik düğün albümü ve aile albümleri",
      "Aynı gün montajlanan 'Same Day Edit' ile pasta kesiminde dev ekranda ilk video gösterimi",
      "Misafirler için anında manyetik hatıra fotoğraf baskısı köşesi",
    ],
    process: [
      { step: "01", title: "Çekim Senaryosu & Işık Planı", desc: "Düğün gününüzün saat saat çekim akışını ve fotoğraf noktalarını planlıyoruz." },
      { step: "02", title: "Tüm Gün Kesintisiz Takip", desc: "Kuaförden başlayıp salon kapanışına kadar 6 kameraman yanınızda." },
      { step: "03", title: "Renk & Ses Post-Prodüksiyonu", desc: "Hollywood standartlarında renk düzenlemesi (Color Grading) ile teslim." },
    ],
  },
  {
    id: "dekor-ve-konsept",
    slug: "cicek-ve-konsept-tasarim",
    title: "Özel Çiçek & Masa Konsept Tasarımı",
    category: "Tasarım & Ambiyans",
    lead: "Hollanda'dan ithal taze çiçekler, kristal şamdanlar, özel dokuma masa örtüleri ve tamamen çifte özel tematik dekorasyon.",
    description: "Her çiftin hayalindeki düğün teması farklıdır. İç mimar ve tasarım ekibimiz; Bohem, Klasik Barok, Modern Minimalist ya da Romantik Bahçe konseptlerinden hangisini arzu ediyorsanız salonu sıfırdan o konsepte göre dönüştürür. Çiçeklerin kokusu, mum ışığının zarafeti ve altın detaylar gecenizi masalsı kılar.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1519225424984-6330058b731d?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Canlı şakayık, gül, okaliptüs ve orkide aranjmanları",
      "5 farklı sandalye seçeneği (Napolyon, Tiffany, Şeffaf Ghost, Ahşap Rustik, Barok)",
      "İsme özel lazer kesim pleksi masa numaraları ve karşılama panoları",
      "Kristal şamdan, ayna supla ve altın varak kadeh detayları",
      "Gelin yolu ve nikah masasında özel çiçekli tünel ve tak tasarımları",
    ],
    process: [
      { step: "01", title: "Moodboard & Konsept Seçimi", desc: "Renk paletinizi ve çiçek türlerini 3D görselleştirme ile belirliyoruz." },
      { step: "02", title: "Örnek Masa Kurulumu", desc: "Düğün öncesi salonda size özel 1 masayı eksiksiz kurup onayınızı alıyoruz." },
      { step: "03", title: "Sabah Erken Canlı Çiçek Teslimi", desc: "Düğün sabahı çiçekler taze açılarak yerleştirilir." },
    ],
  },
  {
    id: "gelin-damat-suiti",
    slug: "vip-gelin-damat-suiti",
    title: "VIP Gelin & Damat Hazırlık Süiti",
    category: "Konfor & Ayrıcalık",
    lead: "80 m² özel jakuzili, dinlenme lounge'lu, özel makyaj aynalı ve kişisel uşak servisli lüks hazırlık alanı.",
    description: "Düğün gününün tatlı telaşını stresten arınarak en konforlu şekilde yaşamanız için hazırlanan VIP süitimiz, salondan bağımsız özel bir girişe sahiptir. Gelin ve damadın nedimeleri ve aileleriyle rahatça vakit geçirebileceği ferah bir oturma grubu, profesyonel ışıklı makyaj istasyonu ve gün boyu lezzetli ikramlar emrinizdedir.",
    iconName: "Crown",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "80 m² jakuzili dinlenme ve giyinme süiti",
      "Kişiye özel atanmış nedime ve uşak asistanı (tüm gece hizmet verir)",
      "Şampanya, gurme kanepeler ve taze meyve sepeti ikramı",
      "Kuaför ve makyaj ekibi için profesyonel ergonomik ışıklı istasyon",
      "Düğün salonunu canlı izleyebileceğiniz özel güvenlikli monitör sistemi",
    ],
    process: [
      { step: "01", title: "Sabah Erken Giriş", desc: "Düğünden 6 saat önce süitiniz hazır şekilde sizi karşılar." },
      { step: "02", title: "Kişisel Asistan Hizmeti", desc: "Gelinlik giydirme, su, kahve ve acil ihtiyaçlar için asistanınız hazır bekler." },
      { step: "03", title: "Gece Sonu Dinlenme", desc: "Düğün bitiminde eşyalarınız toparlanır, rahatça dinlenebilirsiniz." },
    ],
  },
  {
    id: "vale-ve-guvenlik",
    slug: "protokol-ve-vale-hizmeti",
    title: "Protokol & 250 Araçlık VIP Vale",
    category: "Hizmet & Lojistik",
    lead: "Kapalı ve açık otopark, üniformalı profesyonel vale ekibi, 7/24 özel güvenlik ve engelli dostu erişim altyapısı.",
    description: "Davetlilerinizin kapıda karşılanma anından uğurlanma anına kadar en üst düzey protokol standartları uygulanır. Yağmurlu havalarda şemsiyeli karşılama, kapalı otoparkta güvenli araç muhafazası ve hızlı teslimat sistemi sayesinde misafirleriniz hiçbir zaman park stresi yaşamaz.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "250 araçlık kameralı kapalı otopark ve 150 araçlık açık misafir alanı",
      "Barkodlu ve SMS bildirimli akıllı vale çağırma sistemi",
      "Özel eğitimli üniformalı güvenlik personeli ve x-ray geçiş protokolü",
      "Tekerlekli sandalye ve bebek arabası için %100 rampalı engelsiz erişim",
      "Protokol ve sanatçı araçları için tahsis edilmiş özel kordon bölgesi",
    ],
    process: [
      { step: "01", title: "Kapıda Şık Karşılama", desc: "Misafirleriniz kırmızı halı girişinde vale personeli tarafından karşılanır." },
      { step: "02", title: "Dijital Fiş Sistemi", desc: "Aracın teslim alındığına dair SMS ile dijital fiş gönderilir." },
      { step: "03", title: "Önceden Araç Çağırma", desc: "Misafir salon çıkışında ekrandan veya telefondan aracını çağırıp kapıda teslim alır." },
    ],
  },
];

export function findService(slug: string): WeddingService | undefined {
  return services.find((s) => s.slug === slug || s.id === slug);
}
