export interface FAQItem {
  q: string;
  a: string;
  category: "Rezervasyon" | "Mutfak & Menü" | "Teknik & Salon" | "Ödeme";
}

export const faqs: FAQItem[] = [
  {
    q: "Düğün öncesinde menü tadımı yapabiliyor muyuz?",
    a: "Evet! Kesin rezervasyonunu tamamlayan tüm çiftlerimizi, düğün tarihinden yaklaşık 1 ay önce aileleriyle birlikte (4 kişiye kadar ücretsiz) özel şef masamızda ağırlıyoruz. Menüdeki tüm başlangıç, ara sıcak, ana yemek ve pastaları tadıp isteklerinize göre damak tadınıza uyarlıyoruz.",
    category: "Mutfak & Menü",
  },
  {
    q: "Aynı anda birden fazla düğün olduğunda sesler karışır mı?",
    a: "Kesinlikle hayır. Grand Royal Balo Salonu, Botanica Kır Bahçesi ve Panorama Teras birbirinden tamamen bağımsız mimari binalarda ve akustik ses yalıtım perdeleriyle konumlandırılmıştır. Her salonun girişi, otopark kapısı, kulisi ve mutfağı ayrıdır.",
    category: "Teknik & Salon",
  },
  {
    q: "Kır bahçesinde yağmur yağarsa ne yapıyoruz?",
    a: "Botanica Kır Bahçesi'nde çiftlerimiz için %100 hava şartı garantisi sunuyoruz. Bahçemizde hem 60 saniyede otomatik kapanan mimari bioklimatik pergolalar mevcuttur, hem de aynı gün için tahsis edilmiş 600 kişilik yedek kış bahçesi daima hazır bekletilir.",
    category: "Teknik & Salon",
  },
  {
    q: "Ödeme koşulları ve taksitlendirme nasıl yapılıyor?",
    a: "Sözleşme aşamasında %30 kaparo ile tarihiniz bloke edilir. Kalan tutar düğün tarihine kadar çiftimizin bütçesine göre 2 veya 3 eşit taksite bölünür. Son bakiye düğünden 1 hafta önce kapatılır. Kredi kartına 6-9 aya varan taksit seçeneklerimiz mevcuttur.",
    category: "Ödeme",
  },
  {
    q: "Dışarıdan fotoğrafçı, orkestra veya organizasyon firması getirebilir miyiz?",
    a: "Bünyemizdeki 5 yıldızlı profesyonel ekipler her alanda tam hizmet sunmaktadır; ancak arzu eden çiftlerimiz sözleşme şartlarımıza uygunluk bildiren dış organizasyon firmaları veya sanatçılarla çalışmakta serbesttir.",
    category: "Rezervasyon",
  },
  {
    q: "Müzik yayını ve eğlence saat kaça kadar sürebilir?",
    a: "Açık hava Botanica bahçemizde canlı müzik yasal mevzuat gereği 24:00'e kadar sürmektedir. 24:00 sonrasında arzu eden misafirlerimizle kapalı ve ses yalıtımlı Panorama Teras veya Kuluçka Lounge alanımıza geçerek gece saat 03:00'e kadar After-Party ile eğlenceye devam edebiliyoruz.",
    category: "Teknik & Salon",
  },
];
