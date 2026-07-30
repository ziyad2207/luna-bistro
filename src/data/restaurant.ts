export type MenuCategory =
  | 'starters'
  | 'main-course'
  | 'desserts'
  | 'drinks'
  | 'veg'
  | 'non-veg';

export type DietType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  diet: DietType;
  image: string;
  signature?: boolean;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Hokkaido Scallop Crudo',
    description: 'Yuzu pearls, finger lime, white soy, micro shiso',
    price: 32,
    category: 'starters',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/22994309/pexels-photo-22994309.jpeg?auto=compress&cs=tinysrgb&w=800',
    signature: true,
  },
  {
    id: 's2',
    name: 'Wild Mushroom Velouté',
    description: 'Truffle foam, toasted hazelnut, aged parmesan crisp',
    price: 24,
    category: 'starters',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/1872903/pexels-photo-1872903.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 's3',
    name: 'Tuna Tataki',
    description: 'Seared yellowfin, ponzu, avocado mousse, crispy nori',
    price: 28,
    category: 'starters',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/925000/pexels-photo-925000.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 's4',
    name: 'Heirloom Tomato Carpaccio',
    description: 'Burrata, basil oil, aged balsamic, Maldon salt',
    price: 22,
    category: 'starters',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/27774175/pexels-photo-27774175.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // Main Course
  {
    id: 'm1',
    name: 'Wagyu Tenderloin',
    description: 'A5 Japanese wagyu, bone marrow jus, charred leek, smoked salt',
    price: 145,
    category: 'main-course',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/13322845/pexels-photo-13322845.jpeg?auto=compress&cs=tinysrgb&w=800',
    signature: true,
  },
  {
    id: 'm2',
    name: 'Branzino al Forno',
    description: 'Whole roasted Mediterranean sea bass, salsa verde, confit lemon',
    price: 68,
    category: 'main-course',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/7243881/pexels-photo-7243881.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'm3',
    name: 'Saffron Risotto',
    description: 'Carnaroli rice, aged parmesan, saffron, brown butter, gold leaf',
    price: 48,
    category: 'main-course',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/20545314/pexels-photo-20545314.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'm4',
    name: 'Duck à l\'Orange',
    description: 'Confit leg, seared breast, blood orange gastrique, fennel',
    price: 72,
    category: 'main-course',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/28705621/pexels-photo-28705621.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // Desserts
  {
    id: 'd1',
    name: 'Valrhona Chocolate Sphere',
    description: 'Molten centre, hazelnut praline, gold leaf, vanilla bean gelato',
    price: 28,
    category: 'desserts',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/35546720/pexels-photo-35546720.jpeg?auto=compress&cs=tinysrgb&w=800',
    signature: true,
  },
  {
    id: 'd2',
    name: 'Caramelised Banana',
    description: 'Caramelised banana, chocolate crisps, rum caramel, crème anglaise',
    price: 24,
    category: 'desserts',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/28438607/pexels-photo-28438607.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'd3',
    name: 'Cherry Panna Cotta',
    description: 'Vanilla bean cream, sour cherry, almond tuile, elderflower',
    price: 22,
    category: 'desserts',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/33033813/pexels-photo-33033813.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'd4',
    name: 'Berry & Cheese Plateau',
    description: 'Aged brie, mascarpone, seasonal berries, honeycomb, brioche',
    price: 26,
    category: 'desserts',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/15671425/pexels-photo-15671425.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Luna Gold Negroni',
    description: 'Gin, Campari, sweet vermouth, gold leaf, orange oil',
    price: 24,
    category: 'drinks',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/36366519/pexels-photo-36366519.jpeg?auto=compress&cs=tinysrgb&w=800',
    signature: true,
  },
  {
    id: 'dr2',
    name: 'Smoked Old Fashioned',
    description: 'Bourbon, demerara, aromatic bitters, applewood smoke',
    price: 26,
    category: 'drinks',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/36189454/pexels-photo-36189454.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'dr3',
    name: 'Sakura Spritz',
    description: 'Sake, yuzu, prosecco, cherry blossom, rose salt rim',
    price: 22,
    category: 'drinks',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/34989163/pexels-photo-34989163.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'dr4',
    name: 'Midnight Velvet',
    description: 'Mezcal, blackberry, lime, agave, activated charcoal, vanilla',
    price: 25,
    category: 'drinks',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/2946496/pexels-photo-2946496.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // Veg
  {
    id: 'v1',
    name: 'Charred Hispi Cabbage',
    description: 'Miso glaze, hazelnut dukkah, smoked yoghurt, chive oil',
    price: 26,
    category: 'veg',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/19409040/pexels-photo-19409040.jpeg?auto=compress&cs=tinysrgb&w=800',
    signature: true,
  },
  {
    id: 'v2',
    name: 'Beetroot Tartare',
    description: 'Heritage beets, capers, shallot, rye crumb, horseradish cream',
    price: 22,
    category: 'veg',
    diet: 'veg',
    image:
      'https://images.pexels.com/photos/27950501/pexels-photo-27950501.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // Non-Veg
  {
    id: 'nv1',
    name: 'Dry-Aged Ribeye',
    description: '45-day aged ribeye, bone marrow butter, triple-cooked chips',
    price: 95,
    category: 'non-veg',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/17849247/pexels-photo-17849247.jpeg?auto=compress&cs=tinysrgb&w=800',
    signature: true,
  },
  {
    id: 'nv2',
    name: 'Lobster Thermidor',
    description: 'Half lobster, cognac cream, gruyère, thermidor glaze',
    price: 88,
    category: 'non-veg',
    diet: 'non-veg',
    image:
      'https://images.pexels.com/photos/11194665/pexels-photo-11194665.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const categoryLabels: Record<MenuCategory, string> = {
  starters: 'Starters',
  'main-course': 'Main Course',
  desserts: 'Desserts',
  drinks: 'Drinks',
  veg: 'Veg',
  'non-veg': 'Non-Veg',
};

export const allCategories: MenuCategory[] = [
  'starters',
  'main-course',
  'desserts',
  'drinks',
  'veg',
  'non-veg',
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Isabella Moreau',
    role: 'Food Critic, The Standard',
    quote:
      'Luna Bistro is not merely a restaurant — it is a theatre of flavour. Each plate arrives like a curtain rising on an act you did not know you were waiting for.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'James Whitfield',
    role: 'Michelin Inspector',
    quote:
      'The precision is surgical, the warmth is unmistakable. Rarely does a kitchen balance ambition and soul so deftly. A genuine world-class experience.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Sophia Chen',
    role: 'Travel Editor, Condé Nast',
    quote:
      'From the first sip of the Gold Negroni to the final crumb of the chocolate sphere, Luna Bistro choreographs an evening you will replay in your mind for weeks.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Marcus Aldridge',
    role: 'Wine Sommelier',
    quote:
      'The pairing menu is a masterclass. Every glass felt chosen with the kind of care most restaurants reserve for their signature dish alone.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Amara Okafor',
    role: 'Lifestyle Writer, Vogue',
    quote:
      'I have dined in eleven countries this year. Nothing came close to the quiet drama of dinner at Luna Bistro. It is, simply, unforgettable.',
    rating: 5,
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Atmospheric candlelit table setting',
    span: 'tall',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/20184685/pexels-photo-20184685.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Luxurious restaurant interior',
    span: 'wide',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/27381535/pexels-photo-27381535.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Gourmet soup presentation',
    span: 'normal',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Elegant wine setting',
    span: 'normal',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Ambient candlelit restaurant interior',
    span: 'tall',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Romantic dinner table',
    span: 'normal',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Luxurious table with wine glasses',
    span: 'wide',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/15113069/pexels-photo-15113069.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Elegant restaurant setting with armchairs',
    span: 'normal',
  },
];
