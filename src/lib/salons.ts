export interface Salon {
  id: string;
  slug: string;
  name: string;
  concept: string;
  capacity: string;
  capacityNumber: number;
  area: string;
  ceilingHeight: string;
  lead: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  inclusions: string[];
  coverImage: string;
  gallery: string[];
  bestFor: string;
}

export const salons: Salon[] = [
  {
    id: "grand-royal",
    slug: "grand-royal-balo-salonu",
    name: "Grand Royal Balo Salonu",
    concept: "Klasik & İhtişamlı Lüks Balo Mimarisi",
    capacity: "1.200 Kişi Kapasite",
    capacityNumber: 1200,
    area: "1.800 m²",
    ceilingHeight: "7.8 Metre Kolonsuz",
    lead: "Venedik kristal avizeleri, sütunsuz geniş görüş açısı ve altın varaklı Fransız süslemeleriyle görkemli düğünlerin zirvesi.",
    description: "Grand Royal Balo Salonu, kraliyet saraylarının zarafetini en son sahne ve akustik teknolojisiyle birleştiren mimarisiyle büyüler. 1.800 metrekarelik tamamen kolonsuz alan, her masasından sahneye hakim görüş konforu sunar. Otomasyonlu 16 bölgeli mimari aydınlatma sistemi, ilk dansınızda yıldız yağmuru ve sis efektleriyle unutulmaz bir atmosfer yaratır.",
    bestFor: "Görkemli Balo Düğünleri, Büyük Protokol ve Kurumsal Gala Davetleri",
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "7.8 metre tamamen kolonsuz geniş ve ferah hacim",
      "El yapımı Bohemya kristal avize sistemi (DMX kısılabilir)",
      "40 m² hidrolik yükselebilen orkestra ve gösteri sahnesi",
      "D&B Audiotechnik profesyonel 3D surround ses sistemi",
      "Özel VIP gelin ve damat dinlenme süiti (jakuzili ve güvenlikli)",
      "Misafirler için geniş karşılama fuayesi ve hoşgeldin kokteyl alanı",
    ],
    specs: [
      { label: "Ziyafet Düzeni", value: "1.200 Kişi" },
      { label: "Kokteyl Düzeni", value: "1.800 Kişi" },
      { label: "Toplam Alan", value: "1.800 m²" },
      { label: "Tavan Yüksekliği", value: "7.8 m (Kolonsuz)" },
      { label: "Dans Pisti", value: "220 m² Doğal Mermer" },
      { label: "Otopark & Vale", value: "Ücretsiz VIP Vale Hizmeti" },
    ],
    inclusions: [
      "VIP Gelin-Damat Hazırlık Süiti ve Kişiye Özel Hostes",
      "Standart Masa & Sandalye Giydirme (5 Farklı Konsept Seçeneği)",
      "Ses, Işık, Sis ve Volkan Şov Efekt Paketi",
      "Sinevizyon ve Çift Dev LED Ekran Yayını",
      "Karşılama Kemancısı ve Hoşgeldin İçeceği (Mocktail/Punch)",
    ],
  },
  {
    id: "botanica-garden",
    slug: "botanica-kir-bahcesi",
    name: "Botanica Kır Bahçesi",
    concept: "Bohem & Rustik Masalsı Açık Hava",
    capacity: "1.500 Kişi Kapasite",
    capacityNumber: 1500,
    area: "3.500 m²",
    ceilingHeight: "Açık Gökyüzü & Otomatik Pergola",
    lead: "Asırlık zeytin ve çam ağaçları altında, peri masalı ışıltılarıyla donatılmış görkemli açık hava düğün bahçesi.",
    description: "Botanica Kır Bahçesi, doğanın saf zarafetini modern lüks ile harmanlıyor. 3.500 metrekarelik yemyeşil çim zemin, özel ağaç aydınlatmaları, doğal taştan gelin yürüyüş yolu ve gül kemerleriyle süslenmiş gazebo alanıyla büyüleyici fotoğraf karelerine ev sahipliği yapar. Hava değişimlerine karşı 60 saniyede açılıp kapanabilen özel mimari bioklimatik koruma sistemi mevcuttur.",
    bestFor: "Kır Düğünleri, Yaz Kokteylleri, Romantik Masal Nikahları",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Doğal botanik peyzaj, asırlık zeytin ağaçları ve kokulu yaseminler",
      "10.000 adet peri ampulü ile yüksek atmosfer aydınlatması",
      "Gül kemerli ahşap nikah kürsüsü ve gazebosu",
      "Yağmur riskine karşı anında aktif olan bioklimatik pergolalar",
      "Bahçeye özel açık hava kokteyl barı ve baristalar",
      "Geniş rustik ahşap dans pisti (180 m²)",
    ],
    specs: [
      { label: "Yemekli Düzen", value: "1.500 Kişi" },
      { label: "Kokteyl Düzeni", value: "2.200 Kişi" },
      { label: "Bahçe Alanı", value: "3.500 m²" },
      { label: "Zemin", value: "Doğal Rulo Çim & Doğaltaş Yollar" },
      { label: "Yedek Kapalı Alan", value: "600 Kişilik Kış Bahçesi Garantisi" },
      { label: "Çocuk Oyun Parkı", value: "Animatör Eşliğinde Özel Güvenli Bölge" },
    ],
    inclusions: [
      "Bahçe İçi Ahşap Tiffany & Napolyon Sandalyeler",
      "Rustik Masa Dekoru ve Kütük Şamdan Detayları",
      "Açık Hava Akustik Ses Dengeleme ve Canlı Müzik Desteği",
      "Gelin ve Damat İçin Botanik Bungalov Hazırlık Evi",
      "Açık Alanda Havai Fişek ve Sis İzni",
    ],
  },
  {
    id: "panorama-terrace",
    slug: "panorama-bogaz-teras",
    name: "Panorama Teras Salonu",
    concept: "Modern Lounge & Panoramik Teras",
    capacity: "600 Kişi Kapasite",
    capacityNumber: 600,
    area: "900 m²",
    ceilingHeight: "Açılır Kapanır Cam Tavan",
    lead: "Gün batımında gökyüzünün eşsiz renklerine karşı kadeh kaldırılan, butik ve ultra modern teras atmosferi.",
    description: "Panorama Teras Salonu, seçkin ve butik davetler için tasarlanmış son derece zarif bir deneyim sunar. Kesintisiz 360 derece panoramik manzara, gün batımında fotoğraflar için eşsiz bir fon oluşturur. Akşamları lounge barda müzik ve kokteyl ritmi yükselirken açılır tavan sayesinde yıldızlar altında dans edebilirsiniz.",
    bestFor: "Butik Düğünler, Nikah & Kokteyl Davetleri, Kına Geceleri, After-Party",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Kesintisiz deniz ve ada manzarası eşliğinde teras",
      "Tamamen açılabilir panoramik cam tavan ve rüzgar koruma panelleri",
      "Özel miksolojistlerin görev yaptığı 360 derece ada bar",
      "Son teknoloji line-array akustik ve lazer aydınlatma sistemi",
      "Gece saat 03:00'e kadar süren ses izolasyonlu After Party modu",
      "Manzaralı VIP Lounge ve dinlenme terası",
    ],
    specs: [
      { label: "Yemekli Kapasite", value: "600 Kişi" },
      { label: "Kokteyl / Parti", value: "900 Kişi" },
      { label: "Toplam Alan", value: "900 m²" },
      { label: "Tavan", value: "Otomatik Akıllı Cam Sistem" },
      { label: "Manzara", value: "360° Panoramik Manzara" },
      { label: "Ses Kısıtlaması", value: "Kapalı Modda Gece 03:00'e Kadar Serbest" },
    ],
    inclusions: [
      "Lounge Koltuk Takımları ve Bistro Masa Düzenlemeleri",
      "Gün Batımı İkramları ve Karşılama İçeceği (Mocktail/Punch)",
      "DJ Performansı ve Sahne Ses Sistemi Dahil",
      "Özel Işık Gösterisi ve Duman Robotları",
      "Teras Manzaralı Gelin Hazırlık Odası",
    ],
  },
];

export function findSalon(slug: string): Salon | undefined {
  return salons.find((s) => s.slug === slug || s.id === slug);
}
