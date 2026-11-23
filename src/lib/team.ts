export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Murat Çelik",
    role: "Executive Head Chef",
    bio: "Le Cordon Bleu Paris mezunu olan Şef Murat, 18 yıllık Michelin deneyimli otel mutfağı tecrübesiyle davet salonumuzun gurme gastronomi konseptini yönetmektedir.",
    experience: "18 Yıl Tecrübe",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Selin Yılmaz",
    role: "Baş Düğün & Davet Koordinatörü",
    bio: "Bugüne kadar 600'den fazla lüks düğünün baştan sona planlamasını yönetti. Çiftlerimizin prova sürecinden pasta kesimine kadar her saniyeyi titizlikle koordine eder.",
    experience: "12 Yıl Tecrübe",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Emre Karahan",
    role: "Sanat Yönetmeni & Prodüksiyon Direktörü",
    bio: "D&B Audiotechnik ve mimari DMX ışıklandırma sertifikalarına sahip Emre, ilk dans efektlerinden ses dengesine kadar görsel bir şölen yaratır.",
    experience: "10 Yıl Tecrübe",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Buse Aksoy",
    role: "Çiçek & Konsept Tasarım Uzmanı",
    bio: "Hollanda ve İtalya'dan gelen taze çiçeklerle çiftlerin hayalindeki renk paletini ve tematik masa aksesuarlarını gerçeğe dönüştürür.",
    experience: "9 Yıl Tecrübe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];
