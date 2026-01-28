"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Plane,
  Hotel,
  Car,
  Utensils,
  Camera,
  Clock,
  Users,
  ChevronDown,
  ChevronUp,
  MapPin,
  Star,
  Check,
} from "lucide-react"

type TierKey = "essential" | "premium" | "sovereign"

interface TierPricing {
  essential: string
  premium: string
  sovereign: string
}

interface DayItinerary {
  day: number
  title: string
  activities: string[]
  meals: string
  overnight: string
}

interface Package {
  id: number
  destination: string
  title: string
  duration: string
  bestFor: string
  image: string
  description: string
  pricing: TierPricing
  stays: {
    essential: string[]
    premium: string[]
    sovereign: string[]
  }
  transport: {
    essential: string[]
    premium: string[]
    sovereign: string[]
  }
  meals: {
    essential: string
    premium: string
    sovereign: string
  }
  highlights: string[]
  itinerary: DayItinerary[]
  inclusions: string[]
  exclusions: string[]
}

const packages: Package[] = [
  {
    id: 1,
    destination: "Rajasthan, India",
    title: "Royal Rajasthan Heritage Trail",
    duration: "7 Nights / 8 Days",
    bestFor: "Families, Couples, History Lovers",
    image: "/rajasthan-palace.jpg",
    description:
      "Immerse yourself in the grandeur of royal Rajasthan. From the Pink City of Jaipur to the romantic lakes of Udaipur, experience magnificent forts, vibrant bazaars, and timeless traditions.",
    pricing: {
      essential: "₹45,000 - ₹75,000",
      premium: "₹1,25,000 - ₹2,50,000",
      sovereign: "₹5,00,000 - ₹12,00,000",
    },
    stays: {
      essential: [
        "3-star heritage hotels",
        "Clean AC rooms with breakfast",
        "Central locations near attractions",
        "Properties: Hotel Pearl Palace, Zostel Heritage, OYO Heritage Select",
      ],
      premium: [
        "4-5 star heritage properties",
        "Pool-view or courtyard rooms",
        "Full board or half board",
        "Properties: Taj Jai Mahal, The Oberoi Udaivilas, Umaid Bhawan Palace",
      ],
      sovereign: [
        "Royal suite at heritage palaces",
        "Private villa with butler service",
        "All meals + in-room dining",
        "Properties: Rambagh Palace, Lake Palace, Sujan Rajmahal Palace",
      ],
    },
    transport: {
      essential: [
        "AC sedan (Swift Dzire/Etios)",
        "Train tickets (AC 3-tier/2-tier)",
        "Airport/station transfers",
        "Shared sightseeing vehicles",
      ],
      premium: [
        "AC SUV (Innova Crysta)",
        "Private driver throughout",
        "Flight tickets where needed",
        "Hotel pickup for all tours",
      ],
      sovereign: [
        "Luxury vehicle (Mercedes/BMW)",
        "Private chauffeur + guide",
        "Chartered flights/helicopter",
        "Palace of Wheels train option",
      ],
    },
    meals: {
      essential: "Daily breakfast included. Lunch/dinner recommendations provided.",
      premium: "Breakfast + select dinners at heritage restaurants. Curated food walk included.",
      sovereign: "All meals at palace restaurants, private dining experiences, cooking class with royal chef.",
    },
    highlights: [
      "Amber Fort elephant/jeep ride",
      "Hawa Mahal & City Palace, Jaipur",
      "Mehrangarh Fort, Jodhpur",
      "Lake Pichola sunset cruise, Udaipur",
      "Traditional Rajasthani cultural evening",
      "Local handicraft shopping tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur - The Pink City",
        activities: [
          "Airport pickup and hotel check-in",
          "Evening visit to Birla Mandir at sunset",
          "Orientation walk through MI Road market",
          "Welcome dinner at hotel",
        ],
        meals: "Dinner",
        overnight: "Jaipur",
      },
      {
        day: 2,
        title: "Jaipur - Forts & Palaces",
        activities: [
          "Early morning Amber Fort visit (avoid crowds)",
          "Elephant or jeep ride to fort entrance",
          "Explore Sheesh Mahal (Mirror Palace)",
          "Lunch at 1135 AD restaurant",
          "Afternoon: Hawa Mahal & City Palace tour",
          "Evening: Light & sound show at Amber Fort",
        ],
        meals: "Breakfast, Lunch",
        overnight: "Jaipur",
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur - Blue City Journey",
        activities: [
          "Morning drive to Jodhpur (5-6 hours)",
          "Stop at Ajmer Sharif Dargah (optional)",
          "Arrive Jodhpur, check-in and rest",
          "Evening: Walk through blue bylanes of old city",
          "Dinner on rooftop overlooking Mehrangarh",
        ],
        meals: "Breakfast, Dinner",
        overnight: "Jodhpur",
      },
      {
        day: 4,
        title: "Jodhpur - The Sun City",
        activities: [
          "Morning: Mehrangarh Fort (3-4 hours)",
          "Audio guide tour of museum galleries",
          "Zip-lining across fort walls (optional)",
          "Lunch at Hanwant Mahal",
          "Afternoon: Jaswant Thada & Umaid Bhawan Palace",
          "Evening: Clock Tower market exploration",
        ],
        meals: "Breakfast, Lunch",
        overnight: "Jodhpur",
      },
      {
        day: 5,
        title: "Jodhpur to Udaipur - Through Aravalli Hills",
        activities: [
          "Drive to Udaipur via Ranakpur Jain Temple",
          "Explore intricately carved 1444 pillars",
          "Lunch at village restaurant",
          "Arrive Udaipur by evening",
          "Check-in with lake view room",
          "Evening: Bagore Ki Haveli cultural show",
        ],
        meals: "Breakfast",
        overnight: "Udaipur",
      },
      {
        day: 6,
        title: "Udaipur - City of Lakes",
        activities: [
          "Morning: City Palace complex tour",
          "Crystal Gallery visit",
          "Boat ride on Lake Pichola",
          "Visit Jag Mandir island palace",
          "Lunch at Ambrai Ghat restaurant",
          "Afternoon: Saheliyon Ki Bari garden",
          "Sunset: Monsoon Palace viewpoint",
        ],
        meals: "Breakfast, Lunch",
        overnight: "Udaipur",
      },
      {
        day: 7,
        title: "Udaipur - Leisure & Experiences",
        activities: [
          "Morning at leisure or spa treatment",
          "Optional: Cooking class (Rajasthani cuisine)",
          "Optional: Village safari to Shilpgram",
          "Afternoon: Free for shopping - silver, miniature paintings",
          "Farewell dinner at rooftop restaurant",
        ],
        meals: "Breakfast, Dinner",
        overnight: "Udaipur",
      },
      {
        day: 8,
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Last-minute shopping assistance",
          "Transfer to Udaipur airport/station",
          "Trip ends with fond memories",
        ],
        meals: "Breakfast",
        overnight: "-",
      },
    ],
    inclusions: [
      "Accommodation as per selected tier",
      "Meals as specified in itinerary",
      "All transfers and sightseeing",
      "Monument entrance fees",
      "English-speaking guide",
      "Boat ride in Udaipur",
      "Cultural show tickets",
      "All applicable taxes",
    ],
    exclusions: [
      "Airfare to/from Jaipur & Udaipur",
      "Personal expenses & tips",
      "Travel insurance",
      "Optional activities (zip-lining, spa, etc.)",
      "Meals not mentioned",
      "Camera fees at monuments",
    ],
  },
  {
    id: 2,
    destination: "Goa, India",
    title: "Goan Beach Bliss & Heritage",
    duration: "5 Nights / 6 Days",
    bestFor: "Couples, Friends, Beach Lovers",
    image: "/santorini-luxury.jpg",
    description:
      "Sun, sand, and serenity await in Goa. Combine pristine beaches with Portuguese heritage, water sports, vibrant nightlife, and the famous Goan cuisine in this perfect tropical getaway.",
    pricing: {
      essential: "₹25,000 - ₹45,000",
      premium: "₹75,000 - ₹1,50,000",
      sovereign: "₹3,00,000 - ₹8,00,000",
    },
    stays: {
      essential: [
        "Beach-side guesthouses & hostels",
        "AC rooms, 5-10 min walk to beach",
        "Properties: Zostel Goa, OYO Beach View, La Gulls Court",
      ],
      premium: [
        "4-star beach resorts",
        "Pool access, beach view rooms",
        "Properties: Novotel Goa, Alila Diwa, Taj Fort Aguada",
      ],
      sovereign: [
        "Private beach villa with pool",
        "Butler service, private chef",
        "Properties: Ahilya by the Sea, W Goa, The Leela Palace",
      ],
    },
    transport: {
      essential: [
        "Airport transfers by shared taxi",
        "Self-ride scooter rental (3 days)",
        "Local buses for sightseeing",
      ],
      premium: [
        "Private AC car for all days",
        "Scooter for independent exploring",
        "Boat cruise tickets included",
      ],
      sovereign: [
        "Luxury SUV with chauffeur",
        "Private yacht charter available",
        "Helicopter sightseeing option",
      ],
    },
    meals: {
      essential: "Breakfast at hotel. Beach shack dining recommendations.",
      premium: "Breakfast + 2 curated dinners at top restaurants.",
      sovereign: "All meals, private beach dinners, wine pairing experiences.",
    },
    highlights: [
      "North Goa beaches - Baga, Calangute, Anjuna",
      "South Goa tranquility - Palolem, Agonda",
      "Old Goa churches (UNESCO site)",
      "Dudhsagar Waterfalls excursion",
      "Water sports package",
      "Sunset cruise on Mandovi River",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        activities: [
          "Airport pickup",
          "Hotel check-in, beach area",
          "Evening beach walk at Calangute",
          "Dinner at Britto's beach shack",
        ],
        meals: "Dinner",
        overnight: "North Goa",
      },
      {
        day: 2,
        title: "North Goa Beach Hopping",
        activities: [
          "Breakfast, then Baga Beach water sports",
          "Lunch at Thalassa Greek restaurant",
          "Anjuna Flea Market (Wednesdays)",
          "Sunset at Vagator Beach, Chapora Fort",
          "Night: Tito's Lane nightlife",
        ],
        meals: "Breakfast, Lunch",
        overnight: "North Goa",
      },
      {
        day: 3,
        title: "Heritage & Culture Day",
        activities: [
          "Morning: Old Goa churches tour",
          "Se Cathedral, Basilica of Bom Jesus",
          "Lunch at Mum's Kitchen (Goan cuisine)",
          "Afternoon: Fontainhas Latin Quarter walk",
          "Evening: Mandovi River sunset cruise",
        ],
        meals: "Breakfast, Lunch",
        overnight: "North Goa",
      },
      {
        day: 4,
        title: "Adventure Day",
        activities: [
          "Full-day Dudhsagar Falls excursion",
          "Jeep ride through Bhagwan Mahavir sanctuary",
          "Swimming at waterfall base",
          "Spice plantation lunch with tour",
          "Return by evening, rest",
        ],
        meals: "Breakfast, Lunch",
        overnight: "North Goa",
      },
      {
        day: 5,
        title: "South Goa Serenity",
        activities: [
          "Drive to South Goa",
          "Palolem Beach morning swim",
          "Lunch at Magic Italy",
          "Kayaking or boat to Butterfly Island",
          "Agonda Beach sunset",
          "Farewell seafood dinner",
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "South Goa",
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Leisurely breakfast",
          "Beach time or souvenir shopping",
          "Transfer to airport",
        ],
        meals: "Breakfast",
        overnight: "-",
      },
    ],
    inclusions: [
      "Accommodation as per tier",
      "Meals as specified",
      "Airport transfers",
      "Sightseeing as per itinerary",
      "Boat cruise tickets",
      "Dudhsagar jeep & entry",
      "Spice plantation entry",
    ],
    exclusions: [
      "Flights to/from Goa",
      "Water sports at beaches",
      "Nightclub entries & drinks",
      "Personal expenses",
      "Tips & gratuities",
    ],
  },
  {
    id: 3,
    destination: "Kerala, India",
    title: "God's Own Country Experience",
    duration: "6 Nights / 7 Days",
    bestFor: "Families, Nature Lovers, Honeymooners",
    image: "/wellness-spa.jpg",
    description:
      "Discover the emerald paradise of Kerala - from misty hill stations and tea gardens to serene backwaters and pristine beaches. A perfect blend of nature, culture, and Ayurvedic wellness.",
    pricing: {
      essential: "₹35,000 - ₹60,000",
      premium: "₹1,00,000 - ₹2,00,000",
      sovereign: "₹4,00,000 - ₹10,00,000",
    },
    stays: {
      essential: [
        "Homestays & 3-star hotels",
        "AC rooms with breakfast",
        "Standard houseboat (1 night)",
        "Properties: KTDC, Fragrant Nature, local homestays",
      ],
      premium: [
        "4-star resorts & boutique stays",
        "Premium houseboat with AC",
        "Treehouse in Munnar",
        "Properties: Spice Village, Coconut Lagoon, Marari Beach Resort",
      ],
      sovereign: [
        "Luxury lakeside resorts",
        "Private houseboat with chef",
        "Presidential suites throughout",
        "Properties: Kumarakom Lake Resort, Taj Bekal, The Leela Kovalam",
      ],
    },
    transport: {
      essential: [
        "AC sedan (Dzire/Etios)",
        "Shared houseboat",
        "Local ferry rides",
      ],
      premium: [
        "AC SUV (Innova Crysta)",
        "Private houseboat cruise",
        "Shikara boat rides",
      ],
      sovereign: [
        "Luxury vehicle (Mercedes)",
        "Private houseboat with upper deck",
        "Helicopter to Munnar option",
        "Private speedboat transfers",
      ],
    },
    meals: {
      essential: "Breakfast daily. Kerala Sadhya lunch on houseboat.",
      premium: "Breakfast + select meals. Cooking class included.",
      sovereign: "All meals, private dining, Ayurvedic cuisine experiences.",
    },
    highlights: [
      "Munnar tea gardens & Eravikulam Park",
      "Alleppey backwater houseboat stay",
      "Periyar Wildlife Sanctuary",
      "Kovalam/Varkala beach relaxation",
      "Kathakali dance performance",
      "Ayurvedic spa treatment",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        activities: [
          "Airport pickup",
          "Fort Kochi heritage walk",
          "Chinese Fishing Nets at sunset",
          "Dinner at Fusion Bay or local cafe",
        ],
        meals: "Dinner",
        overnight: "Kochi",
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        activities: [
          "Drive to Munnar (4-5 hours)",
          "Stop at Cheeyappara Waterfalls",
          "Tea garden views en route",
          "Arrive Munnar, hotel check-in",
          "Evening walk in tea estate",
        ],
        meals: "Breakfast",
        overnight: "Munnar",
      },
      {
        day: 3,
        title: "Munnar Exploration",
        activities: [
          "Eravikulam National Park (Nilgiri Tahr)",
          "Mattupetty Dam & Echo Point",
          "Tea Museum visit & tasting",
          "Lunch with valley views",
          "Top Station sunset (if open)",
        ],
        meals: "Breakfast, Lunch",
        overnight: "Munnar",
      },
      {
        day: 4,
        title: "Munnar to Thekkady",
        activities: [
          "Drive to Thekkady (3-4 hours)",
          "Spice plantation tour",
          "Periyar Lake boat ride (afternoon)",
          "Evening: Kathakali performance",
          "Optional: Tribal village visit",
        ],
        meals: "Breakfast",
        overnight: "Thekkady",
      },
      {
        day: 5,
        title: "Thekkady to Alleppey Houseboat",
        activities: [
          "Drive to Alleppey (4 hours)",
          "Board houseboat at noon",
          "Cruise through backwaters",
          "Village life observation",
          "Kerala Sadhya lunch on boat",
          "Sunset from houseboat deck",
          "Overnight on backwaters",
        ],
        meals: "Breakfast, Lunch, Dinner",
        overnight: "Houseboat",
      },
      {
        day: 6,
        title: "Alleppey to Kovalam",
        activities: [
          "Wake up on backwaters",
          "Breakfast, then disembark",
          "Drive to Kovalam Beach (4 hours)",
          "Beach time & relaxation",
          "Ayurvedic massage treatment",
          "Sunset at Kovalam lighthouse",
        ],
        meals: "Breakfast",
        overnight: "Kovalam",
      },
      {
        day: 7,
        title: "Departure from Trivandrum",
        activities: [
          "Morning beach time",
          "Transfer to Trivandrum airport",
          "Trip concludes",
        ],
        meals: "Breakfast",
        overnight: "-",
      },
    ],
    inclusions: [
      "Accommodation as per tier",
      "Meals as specified",
      "Houseboat with all meals",
      "All transfers & sightseeing",
      "Periyar boat ride",
      "Spice plantation tour",
      "Kathakali show tickets",
      "1 Ayurvedic massage",
    ],
    exclusions: [
      "Flights to Kochi/from Trivandrum",
      "Entry fees at some sites",
      "Personal expenses",
      "Travel insurance",
      "Tips",
    ],
  },
  {
    id: 4,
    destination: "Himachal Pradesh, India",
    title: "Himalayan Heights Adventure",
    duration: "8 Nights / 9 Days",
    bestFor: "Adventure Seekers, Families, Nature Enthusiasts",
    image: "/swiss-alps-chalet.jpg",
    description:
      "Journey through the majestic Himalayas - from the colonial charm of Shimla to the adventure capital Manali, and the serene valleys of Spiti. Snow peaks, pine forests, and mountain magic await.",
    pricing: {
      essential: "₹40,000 - ₹70,000",
      premium: "₹1,20,000 - ₹2,25,000",
      sovereign: "₹4,50,000 - ₹12,00,000",
    },
    stays: {
      essential: [
        "Budget hotels & guesthouses",
        "Clean rooms with hot water",
        "Central Mall Road locations",
        "Properties: Hotel Combermere, Johnson Lodge, local guesthouses",
      ],
      premium: [
        "4-star resorts with valley views",
        "Heritage properties",
        "Properties: Wildflower Hall, Manuallaya Resort, Span Resort",
      ],
      sovereign: [
        "Luxury mountain lodges",
        "Private chalets with fireplace",
        "Properties: The Oberoi Cecil, Grand Hyatt Kufri, Chapslee Palace",
      ],
    },
    transport: {
      essential: [
        "AC sedan (roads permitting)",
        "Volvo bus for some sectors",
        "Local taxi for sightseeing",
      ],
      premium: [
        "AC SUV (Innova/Fortuner)",
        "Private driver full trip",
        "Toy train ride included",
      ],
      sovereign: [
        "Luxury 4x4 vehicles",
        "Private helicopter transfers",
        "Premium Volvo for Spiti sector",
      ],
    },
    meals: {
      essential: "Breakfast at hotels. Local dhaba recommendations.",
      premium: "Breakfast + select dinners. Bonfire dinner in Manali.",
      sovereign: "All meals, private mountain picnics, chef services.",
    },
    highlights: [
      "Shimla Mall Road & Ridge",
      "Toy Train heritage ride",
      "Solang Valley adventure sports",
      "Rohtang Pass snow point",
      "Hadimba Temple & Old Manali",
      "River rafting on Beas",
      "Spiti Valley moonscape (seasonal)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        activities: [
          "Pickup from Chandigarh/Shimla",
          "Drive to Shimla (if from Chandigarh: 5 hrs)",
          "Hotel check-in, rest",
          "Evening Mall Road walk",
          "Dinner at Wake & Bake cafe",
        ],
        meals: "Dinner",
        overnight: "Shimla",
      },
      {
        day: 2,
        title: "Shimla & Kufri",
        activities: [
          "Morning: The Ridge & Christ Church",
          "Viceregal Lodge (Indian Institute of Advanced Study)",
          "Drive to Kufri (1 hr)",
          "Horse riding & Himalayan views",
          "Return Shimla for evening",
        ],
        meals: "Breakfast",
        overnight: "Shimla",
      },
      {
        day: 3,
        title: "Shimla to Manali via Toy Train",
        activities: [
          "Heritage Toy Train: Shimla to Kalka",
          "UNESCO World Heritage experience",
          "Drive from Kalka to Manali",
          "Or direct drive (8 hours scenic route)",
          "Arrive Manali late evening",
        ],
        meals: "Breakfast, Lunch",
        overnight: "Manali",
      },
      {
        day: 4,
        title: "Manali Local Sightseeing",
        activities: [
          "Hadimba Temple visit",
          "Manu Temple & Old Manali walk",
          "Club House & Tibetan Monastery",
          "Lunch in Old Manali cafe",
          "Vashisht hot water springs",
          "Evening at Mall Road",
        ],
        meals: "Breakfast",
        overnight: "Manali",
      },
      {
        day: 5,
        title: "Solang Valley Adventure",
        activities: [
          "Full day at Solang Valley",
          "Paragliding (seasonal)",
          "Zorbing & quad biking",
          "Ropeway to Patalsu Peak",
          "Snow activities (winter)",
          "Return for bonfire dinner",
        ],
        meals: "Breakfast, Dinner",
        overnight: "Manali",
      },
      {
        day: 6,
        title: "Rohtang Pass / Atal Tunnel",
        activities: [
          "Early start to Rohtang Pass",
          "(Permit required, seasonal)",
          "Snow point activities",
          "Or visit Atal Tunnel & Sissu Valley",
          "Lahaul Valley exploration",
          "Return by evening",
        ],
        meals: "Breakfast, Lunch",
        overnight: "Manali",
      },
      {
        day: 7,
        title: "River Rafting & Leisure",
        activities: [
          "Morning river rafting on Beas (Grade 2-3)",
          "Lunch at Lazy Dog Lounge",
          "Afternoon free for shopping",
          "Kashmiri shawls, wooden items",
          "Spa or rest at hotel",
        ],
        meals: "Breakfast",
        overnight: "Manali",
      },
      {
        day: 8,
        title: "Manali to Chandigarh",
        activities: [
          "Leisurely breakfast",
          "Drive to Chandigarh (8-9 hours)",
          "Stop at Kullu for fruit shopping",
          "Visit Pandoh Dam en route",
          "Arrive Chandigarh by evening",
        ],
        meals: "Breakfast",
        overnight: "Chandigarh",
      },
      {
        day: 9,
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Transfer to Chandigarh airport/station",
          "Trip ends",
        ],
        meals: "Breakfast",
        overnight: "-",
      },
    ],
    inclusions: [
      "Accommodation as per tier",
      "Meals as specified",
      "All transfers & sightseeing",
      "Toy train tickets (if chosen)",
      "Rohtang permit assistance",
      "River rafting (Grade 2-3)",
      "Solang Valley entry",
    ],
    exclusions: [
      "Flights to Chandigarh",
      "Adventure activity costs",
      "Rohtang Pass permit fees",
      "Personal expenses",
      "Travel insurance",
      "Tips & porterage",
    ],
  },
]

export function DetailedPackages() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(1)
  const [selectedTier, setSelectedTier] = useState<TierKey>("premium")

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="packages" className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Detailed Itineraries</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance text-foreground">
            Complete Travel
            <span className="italic"> Packages</span>
          </h2>
          <p className="text-base text-muted-foreground text-balance leading-relaxed">
            Transparent pricing with detailed breakdowns. Choose your tier and see exactly what is
            included - from stays and transport to meals and experiences.
          </p>
        </div>

        {/* Tier Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card border border-border p-1">
            {(["essential", "premium", "sovereign"] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all ${
                  selectedTier === tier
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className="space-y-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-card border border-border overflow-hidden">
              {/* Package Header */}
              <div
                className="flex flex-col md:flex-row cursor-pointer"
                onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
              >
                {/* Image */}
                <div className="md:w-72 h-48 md:h-auto shrink-0">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Summary */}
                <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        {pkg.destination}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">{pkg.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {pkg.bestFor}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">
                        {selectedTier} Tier
                      </p>
                      <p className="font-serif text-xl text-foreground">{pkg.pricing[selectedTier]}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border border-border">
                      {expandedPackage === pkg.id ? (
                        <ChevronUp className="h-5 w-5 text-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-foreground" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedPackage === pkg.id && (
                <div className="border-t border-border">
                  <div className="p-6 md:p-8 lg:p-10 space-y-10">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed max-w-4xl">
                      {pkg.description}
                    </p>

                    {/* Quick Info Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Stays */}
                      <div className="bg-secondary/30 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Hotel className="h-5 w-5 text-primary" />
                          <h4 className="font-serif text-lg text-foreground">Accommodation</h4>
                        </div>
                        <ul className="space-y-2">
                          {pkg.stays[selectedTier].map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Transport */}
                      <div className="bg-secondary/30 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Car className="h-5 w-5 text-primary" />
                          <h4 className="font-serif text-lg text-foreground">Transport</h4>
                        </div>
                        <ul className="space-y-2">
                          {pkg.transport[selectedTier].map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Meals */}
                      <div className="bg-secondary/30 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Utensils className="h-5 w-5 text-primary" />
                          <h4 className="font-serif text-lg text-foreground">Meals</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{pkg.meals[selectedTier]}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Camera className="h-5 w-5 text-primary" />
                        <h4 className="font-serif text-lg text-foreground">Trip Highlights</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {pkg.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-secondary text-sm text-foreground/80"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Day-by-Day Itinerary */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Clock className="h-5 w-5 text-primary" />
                        <h4 className="font-serif text-lg text-foreground">Day-by-Day Itinerary</h4>
                      </div>
                      <div className="space-y-4">
                        {pkg.itinerary.map((day) => (
                          <div key={day.day} className="border-l-2 border-primary/30 pl-6 pb-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="w-8 h-8 bg-primary text-primary-foreground text-sm flex items-center justify-center">
                                {day.day}
                              </span>
                              <h5 className="font-serif text-foreground">{day.title}</h5>
                            </div>
                            <ul className="space-y-1 mb-3">
                              {day.activities.map((activity, i) => (
                                <li key={i} className="text-sm text-muted-foreground">
                                  {activity}
                                </li>
                              ))}
                            </ul>
                            <div className="flex gap-4 text-xs text-muted-foreground">
                              <span>
                                <strong className="text-foreground/70">Meals:</strong> {day.meals}
                              </span>
                              <span>
                                <strong className="text-foreground/70">Overnight:</strong>{" "}
                                {day.overnight}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inclusions & Exclusions */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-secondary/30 p-6">
                        <h4 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          Inclusions
                        </h4>
                        <ul className="space-y-2">
                          {pkg.inclusions.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-secondary/30 p-6">
                        <h4 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                          <span className="w-5 h-5 flex items-center justify-center text-red-400">
                            x
                          </span>
                          Exclusions
                        </h4>
                        <ul className="space-y-2">
                          {pkg.exclusions.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-red-400 shrink-0">-</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                      <Button
                        onClick={scrollToContact}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-xs tracking-[0.15em] uppercase group"
                      >
                        Book This Package
                        <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        className="px-8 py-6 text-xs tracking-[0.15em] uppercase border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
                      >
                        Customize This Trip
                      </Button>
                      <Button
                        variant="outline"
                        className="px-8 py-6 text-xs tracking-[0.15em] uppercase border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
                      >
                        <Plane className="mr-2 h-4 w-4" />
                        Get Flight Quotes
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center p-6 bg-card border border-border">
          <p className="text-sm text-muted-foreground">
            <Star className="h-4 w-4 inline-block text-primary mr-2" />
            All prices are per person on twin-sharing basis. Single occupancy supplements apply.
            <br />
            <span className="text-foreground/70">
              Prices may vary based on travel dates, availability, and customizations. Contact us for
              exact quotes.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
