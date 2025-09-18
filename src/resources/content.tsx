import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shubham",
  lastName: "Kapopara",
  name: `Shubham Kapopara`,
  role: "Data Analyst",
  avatar: "/images/avatar2.png", // 1:1 aspect ratio, preferbly 512x512px
  email: "kapoparashubham26@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ShubhamKapopara",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shubham-kapopara-18bb26244/",
  },
 
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Intelligent Solutions for a Digital World</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
//   subline: (
//     <>
//       I'm Selene, a design engineer at {" "}
//       <Logo
//         dark
//         icon="/trademarks/wordmark-dark.svg"
//         style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
//       />
//       , where I craft intuitive
//       <br /> user experiences. After hours, I build my own projects.
//     </>
//   ),
// };

subline: (
  <>
I'm Shubham Kapopara, a data and business analyst passionate about turning complex datasets into actionable insights. I analyze and interpret data, create clear visualizations, and manage databases to help organizations make smarter, data-driven decisions.  </>
),
}

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
 intro: {
  display: true,
  title: "Introduction",
  description: (
    <div className="about-text">
      <p>
        I am a Data Analyst and Business Analyst with strong hands-on experience and a passion 
        for transforming raw data into meaningful insights. I specialize in creating 
        advanced visualizations that empower organizations to make informed decisions and drive 
        sustainable business growth.
      </p>

      <p>
        Alongside my analytical expertise, I bring a solid background in 
        software engineering, enabling me to design and implement efficient, scalable solutions 
        that integrate seamlessly with business processes.
      </p>

      <p>
        I am driven by curiosity, problem-solving, and innovation, always seeking opportunities 
        to apply my technical and analytical skills to deliver measurable impact.
      </p>
    </div>
  ),
},

  // work: {
  //   display: true, // set to false to hide this section
  //   title: "Work Experience",
  //   experiences: [
  //     {
  //       company: "FLY",
  //       timeframe: "2022 - Present",
  //       role: "Senior Design Engineer",
  //       achievements: [
  //         <>
  //           Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
  //           engagement and 30% faster load times.
  //         </>,
  //         <>
  //           Spearheaded the integration of AI tools into design workflows, enabling designers to
  //           iterate 50% faster.
  //         </>,
  //       ],
  //       images: [
  //         // optional: leave the array empty if you don't want to display images
  //         {
  //           src: "/images/projects/project-01/cover-01.jpg",
  //           alt: "Once UI Project",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       company: "Creativ3",
  //       timeframe: "2018 - 2022",
  //       role: "Lead Designer",
  //       achievements: [
  //         <>
  //           Developed a design system that unified the brand across multiple platforms, improving
  //           design consistency by 40%.
  //         </>,
  //         <>
  //           Led a cross-functional team to launch a new product line, contributing to a 15% increase
  //           in overall company revenue.
  //         </>,
  //       ],
  //       images: [],
  //     },
  //   ],
  // },


  // ==>

work: {
  display: true, // set to false to hide this section
  title: "Work Experience",
  experiences: [
    {
      company: "Alpha Circuit LLC",
      location: "Chicago, IL",
      timeframe: "Feb 2025 – May 2025",
      role: "Data Analyst Intern",
      achievements: [
        <>
          Designed predictive analytics dashboards to track production metrics and identify defect risks.
        </>,
        <>
          Built and deployed machine learning models (Random Forest, Logistic Regression) to predict high-defect occurrences and improve product quality.
        </>,
        <>
          Conducted trend and time-series analysis on defect rates to recommend process improvements.
        </>,
        <>
          Automated data extraction, cleaning, and visualization workflows using Python, pandas, scikit-learn, Matplotlib, and Excel.
        </>,
        <>
          Collaborated with cross-functional teams to translate business needs into actionable, data-driven insights.
        </>,
      ],
      images: [],
    },
    {
      company: "Roosevelt University",
      location: "Chicago, IL",
      timeframe: "Sep 2024 – Present",
      role: "Stage Lighting Assistant",
      achievements: [
        <>
          Supported theatre productions by hanging, powering, and focusing stage lighting instruments.
        </>,
        <>
          Troubleshot technical issues to ensure safe, reliable, and timely setups.
        </>,
        <>
          Assisted in equipment maintenance, cataloguing, and repair, keeping systems performance-ready.
        </>,
        <>
          Collaborated with lighting designers, technical staff, and student crews in a fast-paced production environment.
        </>,
      ],
      images: [],
    },
    {
      company: "Gaura Web Technology",
      location: "Ahmedabad, India",
      timeframe: "Feb 2023 – Aug 2023",
      role: "MERN Stack Developer",
      achievements: [
        <>
          Designed and developed frontend web applications and integrated them with backend APIs.
        </>,
        <>
          Contributed to the “GuaraX” project and explored blockchain-based initiatives such as MetaXland, ArtNoMon, and MG-Wallet.
        </>,
        <>
          Conducted NFT market research to inform product strategy and enhance blockchain integration.
        </>,
        <>
          Collaborated in an Agile team environment, using MongoDB, React.js, Node.js, and Postman for API testing.
        </>,
        <>
          Achievement: Recognized as Emerging Employee of the Month for impactful contributions to projects and rapid learning.
        </>,
      ],
      images: [],
    },
  ],
},


  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Roosevelt University",
        description: <>Master of Science in Computer Science</>,
      },
      {
        name: "SAL Engineering and Technical Institute",
        description: <>Bachelor of Engineering in Computer Engineering</>,
      },
    ],
  },
  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Figma",
  //       description: (
  //         <>Able to prototype in Figma with Once UI with unnatural speed.</>
  //       ),
  //       tags: [
  //         {
  //           name: "Figma",
  //           icon: "figma",
  //         },
  //       ],
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-02.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //         {
  //           src: "/images/projects/project-01/cover-03.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: (
  //         <>Building next gen apps with Next.js + Once UI + Supabase.</>
  //       ),
  //       tags: [
  //         {
  //           name: "JavaScript",
  //           icon: "javascript",
  //         },
  //         {
  //           name: "Next.js",
  //           icon: "nextjs",
  //         },
  //         {
  //           name: "Supabase",
  //           icon: "supabase",
  //         },
  //       ],
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },  
  //   ],
  // },

  technical: {
  display: true, // set to false to hide this section
  title: "Technical Skills",
  skills: [
    {
      title: "Data Analysis & Visualization",
      description: (
        <>Skilled in transforming raw data into actionable insights and building dashboards to support strategic decision-making.</>
      ),
      tags: [
        { name: "Python", icon: "python" },
        { name: "SQL", icon: "sql" },
        { name: "Excel", icon: "excel" },
        { name: "Tableau", icon: "tableau" },
        { name: "Power BI", icon: "powerbi" },
        { name: "pandas", icon: "pandas" },
        { name: "Matplotlib", icon: "matplotlib" },
      ],
      images: [],
    },
    {
      title: "Software Engineering",
      description: (
        <>Experienced in designing, developing, and deploying scalable web applications with modern frameworks.</>
      ),
      tags: [
        { name: "JavaScript", icon: "javascript" },
        { name: "React.js", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Postman", icon: "postman" },
        { name: "Git", icon: "git" },
      ],
      images: [],
    },
    {
      title: "Machine Learning",
      description: (
        <>Hands-on experience in building, training, and evaluating machine learning models for predictive analytics and classification.</>
      ),
      tags: [
        { name: "scikit-learn", icon: "sklearn" },
        { name: "NumPy", icon: "numpy" },
        { name: "pandas", icon: "pandas" },
        { name: "Matplotlib", icon: "matplotlib" },
        { name: "Jupyter Notebook", icon: "jupyter" },
      ],
      images: [],
    },
    {
      title: "System Tools & Platforms",
      description: (
        <>Proficient in version control, Linux environments, and collaborative tools for seamless project execution.</>
      ),
      tags: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Linux", icon: "linux" },
        { name: "VS Code", icon: "vscode" },
        { name: "Google Suite", icon: "google" },
        { name: "MS Office", icon: "office" },
      ],
      images: [],
    },
  ],
},

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
