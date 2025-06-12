const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 4, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/Node.js_logo.svg",
  },
  {
    imgPath: "/images/logos/git.svg",
  },
  {
    imgPath: "/images/logos/redis-plain-wordmark.svg",
  },
  {
    imgPath: "/images/logos/angular.png",
  },
  {
    imgPath: "/images/logos/MDB_BIG.D.svg",
  },
  {
    imgPath: "/images/logos/icons8-aws.svg",
  },
  {
    imgPath: "/images/logos/JavaScript.svg",
  }
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Angular Developer",
    modelPath: "/models/angular_brand.glb",
    scale: 3,
    rotation: [0, Math.PI, 0],
  },
  {
    name: "Cloud Support Engineer",
    modelPath: "/models/aws_logo.glb",
    scale: 0.3,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/javascript_1.glb",
    scale: 0.18,
    rotation: [2, 1.5, 6],
  },
  {
    name: "Software Engineer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Tarun brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/ben.jpeg" ,
    imgName: "BEN BASIL TOMY",
    designation: "Software Engineer",
    logoPath: "/images/logos/JavaScript.svg",
    title: "Software Engineer",
    date: "📅October 2022 - Present",
    responsibilities: [
        "Developed and maintained user-facing features for the Cavli Hubble Platform.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
    ],
  },
  {
    review: "Tarun’s contributions to Cavli Hubble Console have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/nidesh.png",
    imgName: "NIDESH KK",
    designation: "Lead - Full Stack Developer",
    logoPath: "/images/logos/angular.png",
    title: "",
    date: "",
    responsibilities: [
      "Improved app performance and user experience through code optimization and testing.",
      "Participated in sprint planning, code reviews, and agile ceremonies, providing constructive feedback and aligning development efforts with product goals.",
      "Maintained comprehensive documentation for components and workflows to assist team onboarding and improve long-term codebase manageability.",
      "Built and maintained RESTful APIs using Node.js and Express, supporting core platform features such as user authentication, device provisioning, and analytics.",
      "Implemented JWT-based authentication and role-based access control, enhancing platform security.",
    ],
  },
  {
    review: "Tarun’s work on Cavli Hubble Admin brought a high level of quality and efficiency. He delivered solutions that enhanced our user experience & meet our product goals.",
    imgPath: "/images/bensin.jpeg",
    imgName: "BENSIN BABY",
    designation: "Lead - Backend Developer",
    logoPath: "/images/logos/node.png",
    title: "",
    date: "",
    responsibilities: [
      "Optimized API response times and server load through query optimization, caching mechanisms, and asynchronous processing",
      "Contributed to documentation for APIs, architecture decisions, and development guidelines.",
      "Mentored junior developers and contributed to onboarding processes, improving team productivity.",
      "Integrated complex frontend interfaces with backend APIs and WebSocket services for real-time data visualization and interaction."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/tarun-santhosh-4651a51b4/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
