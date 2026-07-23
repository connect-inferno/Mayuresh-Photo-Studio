export const SERVICES = {
  portraits: {
    title: 'Portraits',
    desc: 'Timeless headshots and individual portraits that capture personality with precision.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
  },
  wedding: {
    title: 'Wedding & Bridal',
    desc: 'Emotional, documentary-style wedding photography capturing authentic moments of your big day.',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&h=500&q=80',
  },
  newborn: {
    title: 'Newborn & Family',
    desc: 'Gentle, patient newborn photography and warm family portraits to treasure forever.',
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&q=80',
  },
  commercial: {
    title: 'Commercial',
    desc: 'High-impact commercial photography for corporate headshots, branding, products, and events.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  }
};

export const MINOR_SERVICES = [
  { slug: 'headshots-and-portraits', label: 'Headshots & Portraits', genre: 'portraits', icon: '🎭', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'baby-photography', label: 'Baby Photography', genre: 'newborn', icon: '👶', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'bridal-photography', label: 'Bridal Photography', genre: 'wedding', icon: '💍', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'childrens-photography', label: "Children's Photography", genre: 'newborn', icon: '🎈', image: 'https://images.unsplash.com/photo-1471286174890-9c11241ce968?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'commercial-photography', label: 'Commercial Photography', genre: 'commercial', icon: '📸', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'events-and-parties', label: 'Events & Parties', genre: 'wedding', icon: '🎉', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'maternity-and-newborn', label: 'Maternity & Newborn', genre: 'newborn', icon: '🌸', image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'passport-photography', label: 'Passport Photography', genre: 'portraits', icon: '🪪', image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&w=1200&q=80' },
];

export const PORTFOLIO_ITEMS = [
  {
    category: 'PORTRAITS',
    title: 'Fine Art Headshot',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=900&q=80',
    class: 'tall'
  },
  {
    category: 'WEDDINGS',
    title: 'The Golden Hour Veil',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&h=500&q=80',
    class: 'wide'
  },
  {
    category: 'PORTRAITS',
    title: 'Studio Expression',
    image: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=600&h=600&q=80',
    class: ''
  },
  {
    category: 'FINE ART',
    title: 'Shadow & Soul',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=600&q=80',
    class: ''
  },
  {
    category: 'NEWBORN',
    title: 'Little Cozy Hands',
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=600&h=600&q=80',
    class: ''
  },
  {
    category: 'EDITORIAL',
    title: 'Windswept Motion',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&h=500&q=80',
    class: 'wide'
  }
];

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'weddings',
    title: 'Wedding & Bridal',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&h=500&q=80',
    postCount: 9,
    desc: 'Capturing eternal moments of love, joy, and emotional union on your special day.'
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Shoots',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=500&q=80',
    postCount: 9,
    desc: 'Romantic stories framed in dramatic landscapes and intimate portraits.'
  },
  {
    id: 'birthdays',
    title: 'Birthdays & Celebrations',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&h=600&q=80',
    postCount: 9,
    desc: 'Vibrant and candid memories of joyous celebrations and birthday parties.'
  },
  {
    id: 'portraits',
    title: 'Portraits & Headshots',
    image: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=800&h=500&q=80',
    postCount: 12,
    desc: 'Timeless studio headshots and high-end editorial portraits.'
  },
  {
    id: 'maternity',
    title: 'Maternity & Newborn',
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&h=500&q=80',
    postCount: 6,
    desc: 'Heartwarming maternity and gentle newborn photography sessions.'
  },
  {
    id: 'commercial',
    title: 'Commercial & Branding',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&h=500&q=80',
    postCount: 9,
    desc: 'High-impact commercial photography for brands, products, and corporate events.'
  }
];

export const TESTIMONIALS = [
  {
    stars: '★★★★★',
    text: '"Arjun captured our wedding perfectly! The lighting in the outdoor photos is breathtaking. He made us feel so comfortable throughout the day. Highly recommend their wedding packages!"',
    author: 'Amit & Neha K.',
    clientType: 'Wedding Photography Client'
  },
  {
    stars: '★★★★★',
    text: '"Best photography studio in Kolhapur. We did a baby photoshoot for our daughter and the patience showed by Arjun and team was incredible. The photos are absolute masterpieces."',
    author: 'Priyanka Patil',
    clientType: 'Newborn & Family Client'
  },
  {
    stars: '★★★★★',
    text: '"I needed professional headshots for my corporate profiles. The lighting design they created in the studio made a world of difference. Sleek, premium, and extremely quick turnaround."',
    author: 'Rajesh Deshmukh',
    clientType: 'Corporate Headshots Client'
  }
];

export const GALLERY_IMAGES = {
  weddings: [
    'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&h=600&q=80',
  ],
  'pre-wedding': [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1537907510278-fbe39a08e5cf?auto=format&fit=crop&w=600&h=600&q=80',
  ],
  birthdays: [
    'https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=600&h=600&q=80',
  ],
  portraits: [
    'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80',
  ],
  maternity: [
    'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&h=600&q=80',
  ],
  commercial: [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=600&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&h=600&q=80',
  ],
};
