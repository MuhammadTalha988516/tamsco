
 import profile from '../../assets/P1.png';
  import ceiling from '../../assets/P2.png';
  import linear from '../../assets/P3.png';
  import tube from '../../assets/P4.png';
  import cov from '../../assets/P5.png';
  import highbay from '../../assets/P6.png';
  import flood from '../../assets/P7.png';
  import street from '../../assets/P8.png';
  import solar from '../../assets/P9.png';



//Testimonials
export const testimonials = [
    {
      name: 'Jane Doe',
      role: 'CEO, FutureCorp',
      text: 'Their professionalism and attention to detail exceeded our expectations. Truly transformative!',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'John Smith',
      role: 'CTO, TechNova',
      text: 'A fantastic team with innovative ideas and flawless execution. Highly recommended.',
      avatar: 'https://i.pravatar.cc/100?img=2',
    },
    {
      name: 'Emily Davis',
      role: 'Founder, GreenPath',
      text: 'They brought our vision to life with creativity, precision, and passion.',
      avatar: 'https://i.pravatar.cc/100?img=3',
    },
  ];
  
  // Values
  export const values = [
    {
      title: 'Integrity',
      desc: 'We act with honesty, transparency, and accountability in everything we do.',
    },
    {
      title: 'Innovation',
      desc: 'We constantly seek better solutions and embrace bold ideas.',
    },
    {
      title: 'Collaboration',
      desc: 'We thrive through teamwork and the sharing of diverse perspectives.',
    },
    {
      title: 'Excellence',
      desc: 'We aim for outstanding results and continuous improvement.',
    },
  ];
  
  // Mission
  export const mission = {
    title: 'Our Mission',
    text: `We aim to revolutionize the way people and businesses connect with technology —
    building elegant, scalable, and human-focused solutions that leave a lasting impact.
    We don’t just solve problems, we inspire possibilities.`,
  };
  
  // Vision
  export const vision = {
    title: 'Our Vision',
    text: `To shape a future where innovation and design merge seamlessly — creating experiences
    that are not only functional but deeply inspiring. We envision a world elevated by
    creativity, driven by purpose, and powered by people.`,
  };

 

  // data/lightingData.js
  export const indoorLighting = [
    { title: 'Profile Lights', image: profile, description: 'Elegant profile lights providing focused, adjustable illumination for modern spaces.' },
    { title: 'Ceiling Lights', image: ceiling, description: 'Sleek ceiling fixtures offering ambient lighting solutions for any room.' },
    { title: 'Linear Lights', image: linear, description: 'Versatile linear lighting systems perfect for task and accent lighting.' },
    { title: 'Tube Lights', image: tube, description: 'Efficient tube lights designed for longevity and energy savings.' },
    { title: 'COV Lights', image: cov, description: 'Cutting-edge COV lights delivering precise, bright illumination.' },
    { title: 'High Bay Lights', image: highbay, description: 'High-power, durable lights ideal for large industrial and commercial areas.' },
  ];

  export const outdoorLighting = [
    { title: 'Flood Lights', image: flood, description: 'Powerful flood lights ensuring safety and visibility in outdoor spaces.' },
    { title: 'Street Lights', image: street, description: 'Reliable street lighting solutions for urban and roadway environments.' },
    { title: 'Solar Street Lights', image: solar, description: 'Eco-friendly solar-powered lights combining sustainability with efficiency.' },
  ];

  //previous latest projects
  export const latestProjects = [
    {
      id: 'PAF Academy',
      title: 'Construction of 1 x Cadet Block Triple Storey (Site-II) at PAF Academy, Asghar Khan (MES)',
      image: 'https://images.unsplash.com/photo-1505692794403-34d4982c4638?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'DG W&CE (Army)',
      title: 'DG W&CE (Army) - Laying of SNGPL Pipeline Bahawalpur Cantt (MES)',
      image: 'https://images.unsplash.com/photo-1505692794403-34d4982c4638?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'Panjnad Rangers',
      title: 'Construction of Officer Quarters at Section Headquarters Panjnad Rangers, Islamabad.',
      image: 'https://images.unsplash.com/photo-1505692794403-34d4982c4638?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'PEECA',
      title: 'Punjab Energy Efficiency & Conservation Agency (PEECA) - Govt. of Punjab',
      image: 'https://images.unsplash.com/photo-1505692794403-34d4982c4638?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'Frontier Works Organization',
      title: 'Frontier Works Organization',
      image: 'https://images.unsplash.com/photo-1505692794403-34d4982c4638?q=80&w=1600&auto=format&fit=crop',
    },

  ];
  
  
  // Construction data
  export const renovationProjects = [
    {
      id: 'kitchen-modern',
      title: 'Warm modern kitchen',
      image: 'https://images.unsplash.com/photo-1505692794403-34d4982c4638?q=80&w=1600&auto=format&fit=crop',
      tag: 'Kitchen',
      description:
        'A warm, modern kitchen renovation featuring natural textures, matte cabinetry, and energy-efficient lighting.',
      highlights: ['Matte oak cabinetry', 'Quartz waterfall island', 'Integrated LED profiles'],
    },
    {
      id: 'living-open',
      title: 'Open living room',
      image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
      tag: 'Living',
      description:
        'An open-plan living area with seamless indoor-outdoor flow and minimalist detailing.',
      highlights: ['Wide-plank floors', 'Slimline sliders', 'Acoustic treatment'],
    },
    {
      id: 'bath-spa',
      title: 'Spa-inspired bathroom',
      image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d62?q=80&w=1600&auto=format&fit=crop',
      tag: 'Bathroom',
      description:
        'A tranquil spa bathroom with microcement walls, rain shower, and ambient lighting.',
      highlights: ['Microcement finish', 'Rain shower', 'Heated floors'],
    },
    {
      id: 'staircase-sculptural',
      title: 'Statement staircase',
      image: 'https://images.unsplash.com/photo-1616593960647-3712c2df6b0f?q=80&w=1600&auto=format&fit=crop',
      tag: 'Architectural',
      description:
        'A sculptural staircase anchoring the home with steel stringers and oak treads.',
      highlights: ['Floating treads', 'Glass balustrade', 'Concealed lighting'],
    },
    {
      id: 'bedroom-minimal',
      title: 'Minimalist bedroom',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
      tag: 'Bedroom',
      description:
        'A soothing bedroom sanctuary with layered textiles and blackout integration.',
      highlights: ['Layered textiles', 'Custom joinery', 'Blackout integration'],
    },
    {
      id: 'outdoor-living',
      title: 'Outdoor living',
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
      tag: 'Exterior',
      description:
        'An outdoor living space with pergola, kitchen, and weatherproof finishes.',
      highlights: ['Pergola', 'Built-in kitchen', 'Marine-grade fixtures'],
    },
  ];

  export const sportsProjects = [
    {
      id: 'football-stadium',
      title: 'Pro football field',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop',
      tag: 'Stadium',
      description:
        'Top-tier stadium build with broadcast-ready lighting and player-first amenities.',
      highlights: ['FIFA-grade turf', 'Broadcast lighting', 'Locker room complex'],
    },
    {
      id: 'indoor-basketball',
      title: 'Indoor basketball court',
      image: 'https://images.unsplash.com/photo-1521417531039-74a96e9a2e0a?q=80&w=1600&auto=format&fit=crop',
      tag: 'Arena',
      description:
        'A competition-ready court with sprung floors and spectator seating.',
      highlights: ['Sprung maple floor', 'Tiered seating', 'Acoustic ceiling'],
    },
    {
      id: 'olympic-pool',
      title: 'Olympic pool',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop',
      tag: 'Aquatics',
      description:
        'A world-class aquatics center engineered for precision and safety.',
      highlights: ['Timing system', 'Climate control', 'Anti-turbulence lanes'],
    },
    {
      id: 'track-field',
      title: 'Track and field',
      image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=1600&auto=format&fit=crop',
      tag: 'Track',
      description:
        'IAAF-spec track with advanced drainage and multi-event facilities.',
      highlights: ['IAAF surface', 'All-weather drainage', 'Throwing cages'],
    },
    {
      id: 'training-complex',
      title: 'Training complex',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
      tag: 'Facility',
      description:
        'High-performance center with gym, therapy, and analytics lab.',
      highlights: ['Performance gym', 'Recovery suite', 'Data analytics lab'],
    },
    {
      id: 'tennis-center',
      title: 'Tennis center',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
      tag: 'Courts',
      description:
        'Multi-court complex with lighting, seating, and pro shop.',
      highlights: ['LED court lighting', 'Grandstand', 'Pro shop'],
    },
  ];
