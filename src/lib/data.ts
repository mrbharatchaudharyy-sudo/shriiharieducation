export interface University {
  name: string;
  location: string;
  ranking?: string;
  fees?: string;
  duration?: string;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  image: string;
  description: string;
  longDescription: string;
  universities: University[];
  benefits: string[];
  highlights?: { label: string; value: string }[];
}

export const COUNTRIES: Country[] = [
  {
    id: "russia",
    name: "Russia",
    code: "RU",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800",
    description: "One of the most popular destinations for MBBS abroad since decades.",
    longDescription: "Russia has been the preferred destination for Indian students for MBBS for many decades. Russian medical universities are world-renowned and provide high-quality education at affordable costs. The degrees are recognized by NMC (MCI) and WHO.",
    benefits: [
      "Low tuition fees and living costs",
      "No entrance exam (Only NEET qualified)",
      "MCI/WHO recognized degree",
      "English medium education",
      "High standard of living"
    ],
    highlights: [
      { label: "Official Language", value: "Russian (English also spoken)" },
      { label: "Popular Cities", value: "Moscow, Saint Petersburg, Kazan, Omsk, Volgograd" },
      { label: "Part-Time Work", value: "Legally allowed while studying" },
      { label: "Average Earning", value: "70,000 – 90,000 RUB" },
      { label: "Job Opportunities", value: "Restaurants, Warehouses, Delivery, Factory Helper, Stores, Malls, etc." },
      { label: "Living Expenses", value: "20,000 – 25,000 RUB per month (Accommodation)" },
      { label: "Income Type", value: "Rolling Income" },
      { label: "Offer Letter", value: "15 – 20 working days" },
      { label: "Visa Processing Time", value: "Around 45 working days" }
    ],
    universities: [
      { name: "Altai State Medical University", location: "Barnaul", fees: "$4,000/year" },
      { name: "Bashkir State Medical University", location: "Ufa", fees: "$4,500/year" },
      { name: "Chechen State University", location: "Grozny", fees: "$3,800/year" },
      { name: "Far Eastern Federal University", location: "Vladivostok", fees: "$5,000/year" },
      { name: "Kazan Federal University", location: "Kazan", ranking: "Top 5 in Russia", fees: "$5,500/year" },
      { name: "Kazan State Medical University", location: "Kazan", fees: "$5,800/year" },
      { name: "Kemerovo State Medical University", location: "Kemerovo", fees: "$4,200/year" },
      { name: "Kuban State Medical University", location: "Krasnodar", fees: "$4,500/year" },
      { name: "Omsk State Medical University", location: "Omsk", fees: "$4,300/year" },
      { name: "Orel State University", location: "Orel", fees: "$3,900/year" },
      { name: "Ryazan State Medical University", location: "Ryazan", fees: "$4,800/year" },
      { name: "Tver State Medical University", location: "Tver", fees: "$4,600/year" },
      { name: "Ural State Medical University", location: "Yekaterinburg", fees: "$4,700/year" },
      { name: "Yaroslavl State Medical University", location: "Yaroslavl", fees: "$4,400/year" }
    ]
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    code: "UZ",
    image: "https://images.unsplash.com/photo-1528514411516-299ce8286959?auto=format&fit=crop&q=80&w=800",
    description: "Emerging hub for medical studies with modern infrastructure.",
    longDescription: "Uzbekistan has rapidly become a hub for medical education in Central Asia. Its medical universities offer modern infrastructure, advanced laboratories, and a curriculum that aligns with global standards. The cost of education is very competitive.",
    benefits: [
      "Extremely affordable tuition fees",
      "Modern university facilities",
      "English medium curriculum",
      "Safe and welcoming environment",
      "Proximity to India"
    ],
    universities: [
      { name: "Tashkent Medical Academy", location: "Tashkent", fees: "$3,500/year" },
      { name: "Samarkand State Medical University", location: "Samarkand", fees: "$3,000/year" },
      { name: "Bukhara State Medical Institute", location: "Bukhara", fees: "$3,200/year" },
      { name: "Andijan State Medical Institute", location: "Andijan", fees: "$3,100/year" },
      { name: "Fergana Medical Institute of Public Health", location: "Fergana", fees: "$3,200/year" },
      { name: "Tashkent Pediatric Medical Institute", location: "Tashkent", fees: "$3,300/year" },
      { name: "Urgench State University (Medical Faculty)", location: "Urgench", fees: "$3,000/year" },
      { name: "Namangan State University (Medical Faculty)", location: "Namangan", fees: "$3,000/year" },
      { name: "Nukus State Medical Institute", location: "Nukus", fees: "$3,000/year" },
      { name: "Termez State University (Medical Faculty)", location: "Termez", fees: "$3,000/year" }
    ]
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    code: "KZ",
    image: "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=800",
    description: "Quality medical education with a strong focus on practical skills.",
    longDescription: "Kazakhstan offers top-tier medical education with a focus on producing highly skilled healthcare professionals. Its universities are known for their experimental research and state-of-the-art hospitals for clinical training.",
    benefits: [
      "World-class faculty",
      "Direct admission without donations",
      "NMC and WHO approved",
      "Multicultural environment",
      "Great clinical exposure"
    ],
    universities: [
      { name: "Al-Farabi Kazakh National University", location: "Almaty", fees: "$4,800/year" },
      { name: "Astana Medical University", location: "Astana", fees: "$4,200/year" },
      { name: "Semey State Medical University", location: "Semey", fees: "$3,800/year" },
      { name: "Karaganda State Medical University", location: "Karaganda", fees: "$3,900/year" },
      { name: "West Kazakhstan Marat Ospanov State Medical University", location: "Aktobe", fees: "$3,500/year" }
    ]
  },
  {
    id: "georgia",
    name: "Georgia",
    code: "GE",
    image: "https://images.unsplash.com/photo-1565008415402-0782bd0b6aa5?auto=format&fit=crop&q=80&w=800",
    description: "European standard of education with a beautiful culture.",
    longDescription: "Georgia offers a unique blend of European education standards and affordable living. Its medical programs are designed to meet international standards, making it easy for graduates to practice in the US, UK, and Europe after qualifying exams.",
    benefits: [
      "European standard of living",
      "No IELTS/TOEFL required",
      "High FMGE success rate",
      "Vibrant student life",
      "Globally recognized degrees"
    ],
    universities: [
      { name: "Tbilisi State Medical University", location: "Tbilisi", fees: "$7,000/year" },
      { name: "Avicenna Batumi Medical University", location: "Batumi", fees: "$5,500/year" },
      { name: "Ilia State University", location: "Tbilisi", fees: "$5,800/year" },
      { name: "Georgian National University SEU", location: "Tbilisi", fees: "$5,000/year" },
      { name: "David Tvildiani Medical University", location: "Tbilisi", fees: "$8,000/year" },
      { name: "Grigol Robakidze University", location: "Tbilisi", fees: "$5,500/year" },
      { name: "Alte University", location: "Tbilisi", fees: "$6,000/year" },
      { name: "Georgian American University (GAU)", location: "Tbilisi", fees: "$5,500/year" },
      { name: "European University Georgia", location: "Tbilisi", fees: "$5,000/year" },
      { name: "International Black Sea University", location: "Tbilisi", fees: "$5,000/year" },
      { name: "University of Georgia", location: "Tbilisi", fees: "$6,000/year" },
      { name: "New Vision University", location: "Tbilisi", fees: "$6,500/year" },
      { name: "Petre Shotadze Tbilisi Medical Academy", location: "Tbilisi", fees: "$6,000/year" },
      { name: "Batumi Shota Rustaveli State University", location: "Batumi", fees: "$5,500/year" }
    ]
  },
  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    code: "KG",
    image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&q=80&w=800",
    description: "Budget-friendly destination for medical students.",
    longDescription: "Kyrgyzstan is one of the most affordable countries for MBBS abroad. It hosts several MCI-recognized universities that offer a 6-year program in English medium.",
    benefits: ["Very low tuition fees", "English medium", "Simple admission process"],
    universities: []
  },
  {
    id: "philippines",
    name: "Philippines",
    code: "PH",
    image: "https://images.unsplash.com/photo-1518144591331-17a5dd71c477?auto=format&fit=crop&q=80&w=800",
    description: "American style curriculum with high FMGE passing rate.",
    longDescription: "The Philippines medical education follow the American curriculum, which is beneficial for students aiming for USMLE. The country has a very high FMGE success rate.",
    benefits: ["American curriculum", "English speaking population", "High FMGE success rate"],
    universities: []
  },
  {
    id: "nepal",
    name: "Nepal",
    code: "NP",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800",
    description: "Closest destination to India with similar education culture.",
    longDescription: "Nepal is the favorite destination for Indian students due to its proximity and similar clinical exposure. Many Indian professors teach in Nepalese medical colleges.",
    benefits: ["Proximity to India", "Similar climate and food", "No visa required for Indians"],
    universities: []
  },
  {
    id: "china",
    name: "China",
    code: "CN",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f74?auto=format&fit=crop&q=80&w=800",
    description: "Advanced infrastructure and top-ranked universities.",
    longDescription: "China offers some of the best medical infrastructure in the world. Its universities are consistently ranked high globally and offer modern clinical training facilities.",
    benefits: ["Advanced infrastructure", "Top global rankings", "Exposure to traditional Chinese medicine"],
    universities: []
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    code: "BD",
    image: "https://images.unsplash.com/photo-1585129777188-94600bc0b4b3?auto=format&fit=crop&q=80&w=800",
    description: "Highest FMGE passing percentage for Indian students.",
    longDescription: "Bangladesh maintains a very high standard of medical education. Indian students consistently achieve the highest passing rates in FMGE from Bangladesh universities.",
    benefits: ["Highest FMGE result", "Similar disease pattern as India", "Strict medical standards"],
    universities: []
  },
  {
    id: "armenia",
    name: "Armenia",
    code: "AM",
    image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=800",
    description: "Safe country with quality education in the heart of Eurasia.",
    longDescription: "Armenia is known for its safety and hospitality. Its medical universities offer quality education and are recognized by world medical bodies.",
    benefits: ["Extremely safe", "European culture", "Affordable living"],
    universities: []
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    image: "https://images.unsplash.com/photo-1525625293386-3fb0ad7c1ce6?auto=format&fit=crop&q=80&w=800",
    description: "World-class healthcare system and elite medical schools.",
    longDescription: "Singapore is a global leader in clinical research and healthcare. Studying medicine here provides exposure to some of the most advanced healthcare technologies.",
    benefits: ["Elite education", "Global healthcare hub", "State-of-the-art tech"],
    universities: []
  },
  {
    id: "barbados",
    name: "Barbados",
    code: "BB",
    image: "https://images.unsplash.com/photo-1505881502353-a198deabab3c?auto=format&fit=crop&q=80&w=800",
    description: "Study medicine in the Caribbean with US-based curriculum.",
    longDescription: "Barbados offers medical programs that are closely aligned with USMLE requirements, making it a great stepping stone for students wanting to practice in the USA.",
    benefits: ["US curriculum", "Tropical paradise", "USMLE focus"],
    universities: []
  },
  {
    id: "uk",
    name: "UK",
    code: "GB",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    description: "Prestigious education with global recognition.",
    longDescription: "The UK is home to some of the oldest and most prestigious medical schools in the world. A medical degree from the UK is held in high esteem globally.",
    benefits: ["Global prestige", "NHS clinical experience", "World-leading research"],
    universities: []
  },
  {
    id: "antigua",
    name: "Antigua",
    code: "AG",
    image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80&w=800",
    description: "Caribbean medical schools with clinical rotations in US/UK.",
    longDescription: "Antigua medical colleges offer clinical rotations in the US and UK, providing students with invaluable international clinical experience.",
    benefits: ["International rotations", "Fast-tracked pathways", "Beautiful environment"],
    universities: []
  },
  {
    id: "caribbean",
    name: "Caribbean",
    code: "VI",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800",
    description: "Gateway to medical residency in the USA.",
    longDescription: "The Caribbean islands host numerous medical schools designed specifically for international students aiming for medical residency in the United States.",
    benefits: ["Direct path to USMLE", "Holistic admission", "Cultural diversity"],
    universities: []
  },
  {
    id: "timor-leste",
    name: "Timor Leste",
    code: "TL",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800",
    description: "Emerging destination with unique clinical opportunities.",
    longDescription: "Timor Leste is an emerging destination offering unique healthcare challenges and learning opportunities for medical students.",
    benefits: ["Unique experience", "Hands-on learning", "Budget friendly"],
    universities: []
  },
  {
    id: "vietnam",
    name: "Vietnam",
    code: "VN",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
    description: "Quality education with a focus on community health.",
    longDescription: "Vietnam has highly specialized medical facilities and universities that offer excellent training in surgery and community health.",
    benefits: ["Affordable fees", "High clinical exposure", "Rich culture"],
    universities: []
  },
  {
    id: "malta",
    name: "Malta",
    code: "MT",
    image: "https://images.unsplash.com/photo-1516483601948-9bda060ee47b?auto=format&fit=crop&q=80&w=800",
    description: "Quality medical education in a beautiful Mediterranean setting.",
    longDescription: "Malta offers a unique opportunity to study medicine in a country with a rich medical history and high standards of healthcare.",
    benefits: ["English speaking", "EU member", "Beautiful location"],
    universities: []
  },
  {
    id: "mauritius",
    name: "Mauritius",
    code: "MU",
    image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=800",
    description: "Study medicine in a tropical paradise with high standards.",
    longDescription: "Mauritius provides a serene environment for medical studies with well-equipped hospitals and recognized medical programs.",
    benefits: ["Peaceful environment", "Recognized degrees", "Good clinical exposure"],
    universities: []
  },
  {
    id: "belarus",
    name: "Belarus",
    code: "BY",
    image: "https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?auto=format&fit=crop&q=80&w=800",
    description: "Affordable medical studies in Eastern Europe.",
    longDescription: "Belarus is known for its affordable and high-quality medical education, with several universities offering English-medium programs.",
    benefits: ["Low tuition fees", "High academic standards", "Recognized by WHO"],
    universities: []
  },
  {
    id: "cyprus",
    name: "Cyprus",
    code: "CY",
    image: "https://images.unsplash.com/photo-1518459031451-ad32d414a05d?auto=format&fit=crop&q=80&w=800",
    description: "Quality medical education in an EU island nation.",
    longDescription: "Cyprus offers modern medical education with highly qualified faculty and state-of-the-art facilities in a Mediterranean environment.",
    benefits: ["EU member state", "Modern facilities", "Pleasant climate"],
    universities: []
  }
];

export const SERVICES = [
  {
    title: "University Selection",
    description: "We help you choose the best-fit university based on your budget and academic goals.",
    icon: "GraduationCap"
  },
  {
    title: "Admission Assistance",
    description: "Expert guidance through the entire application and documentation process.",
    icon: "FileCheck"
  },
  {
    title: "Visa Processing",
    description: "Hassle-free visa application and documentation support with a high success rate.",
    icon: "Globe"
  },
  {
    title: "Pre-Departure Briefing",
    description: "Complete guidance on what to expect and how to prepare for your journey.",
    icon: "PlaneTakeoff"
  }
];
