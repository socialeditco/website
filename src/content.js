const svgData = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
const cdn = (file) => ['https://assets.cdn.filesafe.space/E2BEbKIK8SvsJICq4vXY/media', file].join('/');

const fallbackCard = ({ title, line, note, bg = '#0b0b0b', fg = '#f7f3ed', accent = '#9f927f' }) =>
  svgData(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200">
      <rect width="900" height="1200" fill="${bg}"/>
      <circle cx="730" cy="180" r="230" fill="${accent}" opacity="0.16"/>
      <rect x="58" y="58" width="784" height="1084" fill="none" stroke="${fg}" stroke-opacity="0.16"/>
      <text x="74" y="112" fill="${fg}" font-family="Montserrat, Arial" font-size="20" letter-spacing="8">SOCIAL EDIT CO.</text>
      <text x="74" y="286" fill="${fg}" font-family="Georgia, serif" font-size="124" letter-spacing="10">${title}</text>
      <text x="74" y="420" fill="${fg}" font-family="Georgia, serif" font-size="124" letter-spacing="10">${line}</text>
      <line x1="74" y1="520" x2="420" y2="520" stroke="${accent}" stroke-width="3"/>
      <text x="74" y="606" fill="${fg}" font-family="Montserrat, Arial" font-size="24" letter-spacing="5">${note}</text>
      <text x="74" y="1040" fill="${accent}" font-family="Georgia, serif" font-size="74" font-style="italic">edited.</text>
      <text x="74" y="1104" fill="${fg}" opacity="0.62" font-family="Montserrat, Arial" font-size="18" letter-spacing="7">BRANDING · CONTENT · STRATEGY</text>
    </svg>
  `);

export const brand = {
  name: 'Social Edit Co.',
  tagline: 'Your socials, edited.',
  email: ['socialeditco.amy', 'gmail.com'].join('@'),
  phone: '',
  instagram: '#',
};

export const media = {
  portrait: cdn('69d2f52384c045c27476f1d1.webp'),
  logoMark: cdn('69d2fc6afa2dde97426193ca.svg'),
  heroVideo: cdn('69d3341284c045c274814fd2.mp4'),
  fallback: fallbackCard({ title: 'YOUR', line: 'SOCIALS', note: 'STRATEGIC CONTENT FOR BUSINESSES', bg: '#f7f3ed', fg: '#0b0b0b', accent: '#9f927f' }),
  portfolio: [
    {
      src: cdn('69d2f53b4cde4bbc2ae60994.jpg'),
      alt: 'Social Edit Co. original branded content sample',
      label: 'Brand mood',
    },
    {
      src: cdn('69d2f53b84c045c27476f824.jpg'),
      alt: 'Social Edit Co. original portfolio design sample',
      label: 'Portfolio',
    },
    {
      src: cdn('69d2f53b4cde4bbc2ae60993.jpg'),
      alt: 'Social Edit Co. original service design sample',
      label: 'Services',
    },
    {
      src: cdn('69d2f53bfa2dde9742606de3.jpg'),
      alt: 'Social Edit Co. original strategy content sample',
      label: 'Strategy',
    },
    {
      src: cdn('69d2f53b3d829c73b25452b7.jpg'),
      alt: 'Social Edit Co. original visual identity content sample',
      label: 'Visual identity',
    },
  ],
};

export const services = [
  'Captions + messaging',
  'Content planning',
  'Branded post design',
  'Marketing strategy',
  'Monthly scheduling',
  'Story content',
  'Brand consistency',
  'Content refreshes',
];

export const packages = [
  {
    name: 'The Signature Edit',
    price: '$495',
    cadence: '/ month',
    posts: '15 custom-designed posts monthly',
    tone: 'For businesses that need a consistent, polished presence without overcomplicating the process.',
    theme: 'dark',
    features: [
      'Captions',
      'Hashtag strategy',
      'Content planning + organization',
      'Brand consistency across your content',
      '1 round of revisions',
    ],
  },
  {
    name: 'The Full Edit',
    price: '$695',
    cadence: '/ month',
    posts: '24 custom-designed posts monthly',
    tone: 'For businesses ready to stay visible, consistent, and strategically active every month.',
    theme: 'light',
    featured: true,
    features: [
      'Strategic brand-aligned content',
      'Captions + messaging',
      'Marketing strategy',
      'Monthly content scheduling',
      'Content refreshes',
      'Story content',
      '1 round of revisions',
    ],
  },
];

export const proofPoints = [
  {
    title: 'Visibility',
    body: 'Consistent content keeps your business present while customers are deciding who to trust.',
  },
  {
    title: 'Direction',
    body: 'Every post should feel intentional — not random, rushed, or disconnected from the brand.',
  },
  {
    title: 'Polish',
    body: 'Design, captions, and content flow work together so your page feels complete.',
  },
];
