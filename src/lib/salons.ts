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
    concept: "Klasik & Ä°htiram LÃ¼ks Balo Mimarisi",
    capacity: "1.200 KiÅŸi Kapasite",
    capacityNumber: 1200,
    area: "1.800 mÂ²",
    ceilingHeight: "7.8 Metre Kolonsuz",
    lead: "Venedik kristal avizeleri, sÃ¼tunsun geniÅŸ gÃ¶rÃ¼ÅŸ aÃ§Ä±sÄ± ve altÄ±n varaklÄ± FransÄ±z sÃ¼slemeleriyle gÃ¶rkemli dÃ¼ÄŸÃ¼nlerin zirvesi.",
    description: "Grand Royal Balo Salonu, kraliyet saraylarÄ±nÄ±n zarafetini en son sahne ve akustik teknolojisiyle birleÅŸtiren mimarisiyle bÃ¼yÃ¼ler. 1.800 metrekarelik tamamen kolonsuz alan, her masasÄ±ndan sahneye hakim gÃ¶rÃ¼ÅŸ konforu sunar. Otomasyonlu 16 bÃ¶lgeli mimari aydÄ±nlatma sistemi, ilk dansÄ±nÄ±zda yÃ¼ldÄ±z yaÄŸmuru ve sis efektleriyle unutulmaz bir atmosfer yaratÄ±r.",
    bestFor: "GÃ¶rkemli Balo DÃ¼ÄŸÃ¼nleri, BÃ¼yÃ¼k Protokol ve Kurumsal Gala Davetleri",
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "7.8 metre tamamen kolonsuz geniÅŸ ferah hacim",
      "El yapÄ±mÄ± Bohemya kristal avize sistemi (DMX kÄ±sÄ±labilir)",
      "40 mÂ² hidrolik yÃ¼kselebilen orkestra ve gÃ¶steri sahnesi",
      "D&B Audiotechnik profesyonel 3D surround ses sistemi",
      "Ã–zel VIP gelin ve damat dinlenme sÃ¼iti (jakuzili ve gÃ¼venlikli)",
      "Misafirler iÃ§in geniÅŸ karÅŸÄ±lama fuayesi ve hoÅŸgeldin kokteyl alanÄ±",
    ],
    specs: [
      { label: "Ziyafet DÃ¼zeni", value: "1.200 KiÅŸi" },
      { label: "Kokteyl DÃ¼zeni", value: "1.800 KiÅŸi" },
      { label: "Toplam Alan", value: "1.800 mÂ²" },
      { label: "Tavan YÃ¼ksekliÄŸi", value: "7.8 m (Kolonsuz)" },
      { label: "Dans Pisti", value: "220 mÂ² DoÄŸal Mermer" },
      { label: "Otopark & Vale", value: "Ãœcretsiz VIP Vale Hizmeti" },
    ],
    inclusions: [
      "VIP Gelin-Damat HazÄ±rlÄ±k SÃ¼iti ve KiÅŸiye Ã–zel Hostes",
      "Standart Masa & Sandalye Giydirme (5 FarklÄ± Konsept SeÃ§eneÄŸi)",
      "Ses, IÅŸÄ±k, Sis ve Volkan Åžov Efekt Paketi",
      "Sinevizyon ve Ã‡ift Dev LED Ekran YayÄ±nÄ±",
      "KarÅŸÄ±lama KemancÄ±sÄ± ve HoÅŸgeldin Ä°Ã§eceÄŸi (Mocktail/Punch)",
    ],
  },
  {
    id: "botanica-garden",
    slug: "botanica-kir-bahcesi",
    name: "Botanica KÄ±r BahÃ§esi",
    concept: "Bohem & Rustik MasalsÄ± AÃ§Ä±k Hava",
    capacity: "1.500 KiÅŸi Kapasite",
    capacityNumber: 1500,
    area: "3.500 mÂ²",
    ceilingHeight: "AÃ§Ä±k GÃ¶kyÃ¼zÃ¼ & Otomatik Pergola",
    lead: "AsÄ±rlÄ±k zeytin ve Ã§am aÄŸaÃ§larÄ± altÄ±nda, peri masalÄ± Ä±ÅŸÄ±ltÄ±larÄ±yla donatÄ±lmÄ±ÅŸ gÃ¶rkemli aÃ§Ä±k hava dÃ¼ÄŸÃ¼n bahÃ§esi.",
    description: "Botanica KÄ±r BahÃ§esi, doÄŸanÄ±n saf zarafetini modern lÃ¼ks ile harmanlÄ±yor. 3.500 metrekarelik yemyeÅŸil Ã§im zemin, Ã¶zel aÄŸaÃ§ aydÄ±nlatmalarÄ±, doÄŸal taÅŸtan gelin yÃ¼rÃ¼yÃ¼ÅŸ yolu ve gÃ¼l kemerleriyle sÃ¼slenmiÅŸ gazebo alanÄ±yla bÃ¼yÃ¼leyici fotoÄŸraf karelerine ev sahipliÄŸi yapar. Hava deÄŸiÅŸimlerine karÅŸÄ± 60 saniyede aÃ§Ä±lÄ±p kapanabilen Ã¶zel mimari bioklimatik koruma sistemi mevcuttur.",
    bestFor: "KÄ±r DÃ¼ÄŸÃ¼nleri, Yaz Kokteylleri, Romantik Masal NikahlarÄ±",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "DoÄŸal botanik peyzaj, asÄ±rlÄ±k zeytin aÄŸaÃ§larÄ± ve kokulu yaseminler",
      "10.000 adet peri ampulÃ¼ ile yÃ¼ksek atmosfer aydÄ±nlatmasÄ±",
      "GÃ¼l kemerli ahÅŸap nikah kÃ¼rsÃ¼sÃ¼ ve gazebosu",
      "YaÄŸmur riskine karÅŸÄ± anÄ±nda aktif olan bioklimatik pergolalar",
      "BahÃ§eye Ã¶zel aÃ§Ä±k hava kokteyl barÄ± ve baristalar",
      "GeniÅŸ rustik ahÅŸap dans pisti (180 mÂ²)",
    ],
    specs: [
      { label: "Yemekli DÃ¼zen", value: "1.500 KiÅŸi" },
      { label: "Kokteyl DÃ¼zeni", value: "2.200 KiÅŸi" },
      { label: "BahÃ§e AlanÄ±", value: "3.500 mÂ²" },
      { label: "Zemin", value: "DoÄŸal Rulo Ã‡im & DoÄŸaltaÅŸ Yollar" },
      { label: "Yedek KapalÄ± Alan", value: "600 KiÅŸilik KÄ±ÅŸ BahÃ§esi Garantisi" },
      { label: "Ã‡ocuk Oyun ParkÄ±", value: "AnimatÃ¶r EÅŸliÄŸinde Ã–zel GÃ¼venli BÃ¶lge" },
    ],
    inclusions: [
      "BahÃ§e Ä°Ã§i AhÅŸap Tiffany & Napolyon Sandalyeler",
      "Rustik Masa Dekoru ve KÃ¼tÃ¼k Åžamdan DetaylarÄ±",
      "AÃ§Ä±k Hava Akustik Ses Dengeleme ve CanlÄ± MÃ¼zik DesteÄŸi",
      "Gelin ve Damat Ä°Ã§in Botanik Bungalov HazÄ±rlÄ±k Evi",
      "AÃ§Ä±k Alanda Havai FiÅŸek ve Sis Ä°zni",
    ],
  },
  {
    id: "panorama-terrace",
    slug: "panorama-bogaz-teras",
    name: "Panorama BoÄŸaz Teras",
    concept: "Modern Lounge & Deniz ManzaralÄ± Teras",
    capacity: "600 KiÅŸi Kapasite",
    capacityNumber: 600,
    area: "900 mÂ²",
    ceilingHeight: "AÃ§Ä±lÄ±r KapanÄ±r Cam Tavan",
    lead: "GÃ¼n batÄ±mÄ±nda BoÄŸaz'Ä±n mavi sularÄ±na karÅŸÄ± kadeh kaldÄ±rÄ±lan, butik ve ultra modern teras atmosferi.",
    description: "Panorama BoÄŸaz Teras, seÃ§kin ve butik davetler iÃ§in tasarlanmÄ±ÅŸ son derece zarif bir deneyim sunar. Kesintisiz 360 derece deniz ve koru manzarasÄ±, gÃ¼n batÄ±mÄ±nda fotoÄŸraflar iÃ§in eÅŸsiz bir fon oluÅŸturur. AkÅŸamlarÄ± lounge barda mÃ¼zik ve kokteyl ritmi yÃ¼kselirken aÃ§Ä±lÄ±r tavan sayesinde yÄ±ldÄ±zlar altÄ±nda dans edebilirsiniz.",
    bestFor: "Butik DÃ¼ÄŸÃ¼nler, Nikah & Kokteyl Davetleri, KÄ±na Geceleri, After-Party",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Kesintisiz deniz ve ada manzarasÄ± eÅŸliÄŸinde teras",
      "Tamamen aÃ§Ä±labilir panaromik cam tavan ve rÃ¼zgar koruma panelleri",
      "Ã–zel miksolojistlerin gÃ¶rev yaptÄ±ÄŸÄ± 360 derece ada bar",
      "Son teknoloji line-array akustik ve lazer aydÄ±nlatma sistemi",
      "Gece saat 03:00'e kadar sÃ¼ren ses izolasyonlu After Party modu",
      "ManzaralÄ± VIP Lounge ve sigara terasÄ±",
    ],
    specs: [
      { label: "Yemekli Kapasite", value: "600 KiÅŸi" },
      { label: "Kokteyl / Parti", value: "900 KiÅŸi" },
      { label: "Toplam Alan", value: "900 mÂ²" },
      { label: "Tavan", value: "Otomatik AkÄ±llÄ± Cam Sistem" },
      { label: "Manzara", value: "Panoramik BoÄŸaz & Koru" },
      { label: "Ses KÄ±sÄ±tlamasÄ±", value: "KapalÄ± Modda Gece 03:00'e Kadar Serbest" },
    ],
    inclusions: [
      "Lounge Koltuk TakÄ±mlarÄ± ve Bistro Masa DÃ¼zenlemeleri",
      "GÃ¼n BatÄ±mÄ± Ä°kramlarÄ± ve KarÅŸÄ±lama ÅžampanyasÄ± (AlkolsÃ¼z/Normal)",
      "DJ PerformansÄ± ve Sahne Ses Sistemi Dahil",
      "Ã–zel IÅŸÄ±k GÃ¶sterisi ve Duman RobotlarÄ±",
      "Teras ManzaralÄ± Gelin HazÄ±rlÄ±k OdasÄ±",
    ],
  },
];

export function findSalon(slug: string): Salon | undefined {
  return salons.find((s) => s.slug === slug || s.id === slug);
}
