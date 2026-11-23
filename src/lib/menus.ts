export interface MenuPackage {
  id: string;
  name: string;
  tagline: string;
  pricePerPerson: number;
  badge?: string;
  courses: { title: string; items: string[] }[];
  beverage: string;
  cake: string;
  recommendedFor: string;
}

export const menuPackages: MenuPackage[] = [
  {
    id: "silver-gala",
    name: "Silver Gala Ziyafet Menüsü",
    tagline: "Geleneksel Türk Misafirperverliği ve Zengin Ziyafet Sofrası",
    pricePerPerson: 1850,
    courses: [
      {
        title: "Hoşgeldin & Ordövr Tabağı",
        items: [
          "Zeytinyağlı Enginar Kalbi ve Kuşkonmaz",
          "Ezine Peynirli Çörekotlu Haydari",
          "Cevizli Muhammara ve Humus",
          "Fesleğenli Nar Ekşili Kısır",
          "Rozbif Dilimleri ve Fıstıklı Macar Salamı",
        ],
      },
      {
        title: "Ara Sıcak",
        items: [
          "Paçanga Böreği (Köz Biberli ve Pastırmalı)",
          "Mantar Soslu Kıymalı Vol-au-Vent",
        ],
      },
      {
        title: "Ana Yemek",
        items: [
          "Fırınlanmış Dana Antrikot (Demi-Glace Sos Eşliğinde)",
          "Safranlı ve Bademli İç Pilav",
          "Karamelize Arpacık Soğan ve Izgara Sebze Buketi",
        ],
      },
    ],
    beverage: "Limitsiz Meşrubat, Taze Sıkılmış Meyve Suları, Çay & Filtre Kahve İkramı",
    cake: "Orman Meyveli ve Belçika Çikolatalı 5 Katlı Gösteri Düğün Pastası",
    recommendedFor: "Klasik ve kalabalık ziyafet düğünleri için en dengeli ve sevilen menü.",
  },
  {
    id: "imperial-gold",
    name: "Imperial Gold VIP Gurme Menü",
    tagline: "Dünya Mutfaklarından Seçkin Tabaklar ve Master Şef İmzası",
    pricePerPerson: 2650,
    badge: "En Çok Tercih Edilen",
    courses: [
      {
        title: "Amuse-Bouche & Gurme Başlangıç",
        items: [
          "Trüf Yağlı Avokado Püresi Üzerinde Somon Füme Rulo",
          "Manda Burrata Peyniri (Köz Kiraz Domates ve İncir Balzamik)",
          "Dana Carpaccio (Parmigiano Reggiano ve Roka)",
          "Vişneli Yaprak Sarma ve Enginar Carpaccio",
        ],
      },
      {
        title: "Sıcak Başlangıç",
        items: [
          "Porçini Mantarlı ve Trüflü Ev Yapımı Ravioli",
          "Gümüş Dereotu Soslu Deniz Levreği Lokumu",
        ],
      },
      {
        title: "Ana Yemek",
        items: [
          "Ağır Ateşte Pişmiş Dana İncik & Izgara Bonfile İkilisi",
          "Trüflü Patates Püresi & Glaze Kuşkonmaz",
          "Biberiyeli Kırmızı Şarap Redüksiyon Sosu",
        ],
      },
    ],
    beverage: "Limitsiz Premium Alkolsüz Kokteyller, Detox Meyve Suları, Espresso Barı",
    cake: "Özel Tasarım Canlı Çiçeklerle Süslenmiş Şeker Hamursuz Naked Cake (Antep Fıstığı & Ahududu)",
    recommendedFor: "Damak zevkine ve prestijli tabak sunumlarına önem veren çiftler için VIP menü.",
  },
  {
    id: "botanica-cocktail",
    name: "Botanica Kokteyl Prolonge",
    tagline: "Ayakta Dinamik Sohbet, Şık Bistro Sunumları ve Zengin Finger-Food",
    pricePerPerson: 1350,
    courses: [
      {
        title: "Soğuk Finger-Food Geçişleri",
        items: [
          "Guacamole Soslu Karides Çıtırları",
          "Bruschetta Trio (Domates-Fesleğen, Rokfor-Ceviz, Mantar)",
          "Somon Tartar Kaşık İkramı",
          "Mini Mozzarella ve Çeri Şişleri (Pesto Soslu)",
        ],
      },
      {
        title: "Sıcak Finger-Food & Şişler",
        items: [
          "Tempura Karides ve Tatlı Ekşi Sos",
          "Mini Dana Kuzu Kebap Şişleri (Lavaş Cipsleri)",
          "Keçi Peynirli ve Çam Fıstıklı Çıtır Börekler",
          "Cheddarlı Gurme Mini Slider Burgerler",
        ],
      },
    ],
    beverage: "3 Farklı İmza Mocktail, Taze Limonata & Nane İstasyonu, Sıcak İçecekler",
    cake: "Macaron Kulesi Eşliğinde Çikolata Şelalesi ve 4 Katlı Butik Düğün Pastası",
    recommendedFor: "Kır bahçesi nikahları, teras partileri ve dinamik modern davetler için ideal.",
  },
];
