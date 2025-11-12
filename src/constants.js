import showcaseLogo from './assets/work_logo/Showcase.png';
import neoLogo from './assets/work_logo/NeoElectronix.png';
import adminLogo from './assets/work_logo/Admin Dashboard.png';
import nikeLogo from './assets/work_logo/Nike.png';
import portfolioLogo from './assets/work_logo/Portfolio.png';
import RestaurantLogo from './assets/work_logo/Restaurant.png';
// import webverseLogo from './assets/company_logo/webverse_logo.png';


export const SkillsInfo = [
  {
    title: 'Frontend & Backend Technologies',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React JS' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Node.js' },
    ],
  },
  {
    title: 'State Management & API Handling',
    skills: [
      { name: 'Redux' },
      { name: 'Context API' },
      { name: 'Axios' },
      { name: 'Clerk' },
    ],
  },
  {
    title: 'Languages & Version Control',
    skills: [
      { name: 'Python' },
      { name: 'Java(Basics)' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'Development Tools & Platforms',
    skills: [
      { name: 'IntelliJ IDEA' },
      { name: 'Notepad++' },
      { name: 'VS Code' },
      { name: 'Vercel' },
      { name: 'Netlify' },
    ],
  },
];

// export const experiences = [
//     {
//       id: 0,
//       img: webverseLogo,
//       role: "Fullstack Developer",
//       company: "Webverse Digital",
//       date: "April 2024 - Present",
//       desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//       skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React JS",
//         "TypeScript",
//         "Node JS",
//         "Tailwind CSS",
//         "MongoDb",
//         "Redux",
//         " Next Js",
//       ],
//     },
//   ];



export const services = [
  {
    id: 0,
    role: "Custom Website Development",
    desc: "I offer professional website development services using HTML, CSS, and JavaScript to build responsive, fast, and visually appealing websites. Whether it's a personal portfolio, business website, or landing page, I ensure the site is clean, user-friendly, and optimized for all devices.",
  },
  {
    id: 1,
    role: "React.js Application Development",
    desc: "I develop modern, interactive web applications using React.js and TypeScript. By building reusable components and implementing best coding practices, I deliver high-performance, scalable single-page applications (SPAs) that enhance the user experience and are easy to maintain.",
  },
  {
    id: 2,
    role: "Responsive Design & UI Implementation",
    desc: "With expertise in Tailwind CSS, Bootstrap, and modern CSS techniques, I create responsive and attractive user interfaces. I bring UI/UX designs to life by converting Figma or design files into clean, pixel-perfect, and fully functional web pages that work seamlessly across all screen sizes.",
  },
];

export const education = [
  {
    id: 0,
    school: "Maharaja Agrasen Himalayan Garhwal University, Uttarakhand",
    date: "Jun 2022 - July 2025",
    grade: "CGPA: 8.15/10",
    desc: "I completed my BCA from MAHGU, Uttarakhand, where I gained a solid understanding of computer science and software development. I studied key subjects like Programming, DSA, Web Development, OS, and CN, and worked on projects that helped me apply my knowledge to real-world problems and improve my problem-solving skills.",
    degree: "Bachelor of Computer Application(BCA)"
  },
  {
    id: 1,
    school: "Rana Pratap Inter College, Uttarakhand",
    date: "2021 - 2022",
    grade: "Percentage: 74.9%",
    desc: "I completed my class 12 education from Rana Pratap Inter College, Udham Singh Nager, under the UK board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UK Board(XII) - PCM",
  },
  {
    id: 2,
    school: "Guru Nanak Senior Secondary School, Uttarakhand",
    date: "2019 - 2020",
    grade: "Percentage: 79%",
    desc: "I completed my class 10 education from Guru Nanak Senior Secondary School, Udham Singh Nager, under the UK board, where I studied Science with Mathematics.",
    degree: "UK Board(X), Science with Mathematics",
  },
];

export const projects = [
  {
    id: 0,
    title: "Neo Electronix",
    description:
      "NeoElectronix is a modern and responsive Electronics E-Commerce Website designed to provide users with a smooth and interactive shopping experience. Built using cutting-edge web technologies, this platform features real-time product data fetched from APIs and includes secure authentication, dynamic routing, and attractive UI components.",
    image: neoLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Js", "Clerk", "Axios", "Slick"],
    github: "https://github.com/pawan8705/NeoElectonix",
    webapp: "https://neo-electonix-l5ub.vercel.app/",
  },
  {
    id: 1,
    title: "Nike Shoes Website",
    description:
      "This is a Nike Shoes E-commerce Website built using HTML, CSS, JavaScript, React.js, and Tailwind CSS. The website provides a modern, sleek, and fully responsive user interface for exploring Nike shoes. It is designed to be both visually appealing and user-friendly, with smooth animations and seamless navigation.",
    image: nikeLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Js", "Farmer Motion", "React Icons", "Mouse-Follower"],
    github: "https://github.com/pawan8705/Nike",
    webapp: "https://nike-eta-beryl.vercel.app/",
  },
  {
    id: 2,
    title: "Project Showcase",
    description:
      "A powerful and user-friendly JavaScript application designed to showcase my all small Projects.",
    image: showcaseLogo,
    tags: ["HTML", "CSS", "JavaScript", " Bootstrap"],
    github: "https://github.com/pawan8705",
    webapp: "https://manyprojects.netlify.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A powerful and user-friendly JavaScript application designed to uncover and showcase my all small Projects.",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React Js"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://portfolio-sooty-alpha-g4ekieye96.vercel.app/",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    description:
      "This project is a responsive and user-friendly Admin Dashboard built using React.js, TypeScript, HTML, and CSS. It offers a clean and modern UI design with interactive data visualization components, making it ideal for managing users, products, orders, and other administrative functionalities.",
    image: adminLogo,
    tags: ["HTML", "CSS", "TypeScript", "Tailwind CSS", "React Js", "Chart Libraries", "React Router"],
    github: "https://github.com/pawan8705/React-Admin-Dashboard",
    webapp: "https://react-admin-dashboard-puce-psi.vercel.app/",
  },
  {
    id: 5,
    title: "Restaurant website",
    description:
      "This project is a modern and user-friendly Restaurant website built using React.js, TypeScript, Tailwind CSS, HTML, and CSS. It offers a clean and modern UI design with interactive data visualization components, making it ideal for managing users, products, orders, and other administrative functionalities.",
    image: RestaurantLogo,
    tags: ["HTML", "CSS", "TypeScript", "Tailwind CSS", "React Js", "Vite", "shadcn-ui"],
    github: "https://github.com/pawan8705/tasteful-themes-pro",
    webapp: "https://tasteful-themes-pro.lovable.app",
  },
];