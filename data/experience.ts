export type ExperienceRole = {
  id: string;
  title: string;
  dateRange: string;
  duration: string;
  location: string;
  workMode?: string;
  description?: string;
  skills: string[];
  highlightCount?: number;
};

export type ExperienceSingle = {
  kind: "single";
  id: string;
  logo?: string;
  title: string;
  company: string;
  employmentType: string;
  dateRange: string;
  duration: string;
  location: string;
  workMode?: string;
  description?: string;
  skills: string[];
  highlightCount?: number;
};

export type ExperienceCompanyGroup = {
  kind: "companyGroup";
  id: string;
  logo?: string;
  company: string;
  employmentSummary: string;
  roles: ExperienceRole[];
};

export type ExperienceItem = ExperienceSingle | ExperienceCompanyGroup;

export const experienceItems: ExperienceItem[] = [
  {
    kind: "companyGroup",
    id: "synechron",
    logo: "/synechron_logo.jpg",
    company: "Synechron",
    employmentSummary: "Full-time · Apr 2024 – Present · 2 yrs 2 mos",
    roles: [
      {
        id: "synechron-lead",
        title: "Lead Technology",
        dateRange: "Apr 2024 – Present",
        duration: "2 yrs 2 mos",
        location: "India",
        workMode: "Hybrid",
        description:
          `• Led engineering initiatives across cloud-native platforms, enhancing scalability and performance.
• Mentored teams on modern frontend stacks and robust API design, ensuring best practices.
• Drove the adoption of innovative technologies for enterprise clients, improving overall project outcomes.`,
        skills: [
          "React",
          "Node.js",
          "AWS",
          "System Design",
          "Team Leadership",
          "TypeScript",
        ],
        highlightCount: 2,
      },
    ],
  },
  {
    kind: "companyGroup",
    id: "compumatrice",
    logo: "/compumatrice_logo.jpg",
    company: "CompuMatrice",
    employmentSummary: "Full-time · 8 yrs 1 mo",
    roles: [
      {
        id: "leadengineer-fullstack",
        title: "Lead Software Engineer – Fullstack",
        dateRange: "May 2023 – Apr 2024",
        duration: "1 yr",
        location: "Pune, Maharashtra, India",
        workMode: "Hybrid",
        description:
          `Leadership and Team Management:
Guiding and leading a team of developers in the design, development, and delivery of high-quality web and mobile applications in the Healthcare domain.
Providing technical direction, mentoring team members, and fostering a collaborative and growth-oriented work environment.
Setting clear goals, assigning tasks, and managing resources effectively to ensure successful project outcomes.
Promoting innovation, encouraging creative problem-solving, and inspiring the team to achieve excellence.
Full Stack Development and Technical Expertise:
Utilizing a broad range of technical skills and knowledge to architect, design, and develop scalable web and mobile applications.
Applying domain-specific knowledge and best practices in the Healthcare industry to develop secure, compliant, and user-friendly applications.
Ensuring the implementation of robust API design, efficient data processing, and seamless integration with external systems.
Project Management and Delivery:
Collaborating closely with stakeholders, product owners, and cross-functional teams to define project requirements and prioritize features.
Employing agile methodologies, such as Scrum or Kanban, to plan and execute project timelines, monitor progress, and deliver high-quality software solutions on schedule.
Managing risks, resolving issues, and adapting to changing project needs while maintaining a focus on quality and customer satisfaction.
Conducting regular code reviews, ensuring adherence to coding standards, and promoting the use of best practices in software development.
Domain Knowledge and Compliance:
Ensuring compliance with HIPAA (Health Insurance Portability and Accountability Act) and other relevant regulations.
Collaborating with healthcare professionals, data analysts, and domain experts to translate complex requirements into effective technical solutions.`,
        skills: [
          "Web Application Development",
          "Auth0",
          "Unit Testing",
          "Back-End Web Development",
          "React.js",
          "Responsive Web Design",
          "Security",
          "Engineering",
          "Leadership",
          "Front-End Development",
          "Full-Stack Development"
        ],
        highlightCount: 2,
      },
      {
        id: "seniorengineer-fullstack",
        title: "Senior Software Engineer – Fullstack",
        dateRange: "Apr 2019 – May 2023",
        duration: "4 yrs 2 mos",
        location: "Pune",
        description:
          "As a Senior Software Engineer, my contributions encompassed building scalable web and mobile applications, leveraging a range of technologies, mentoring fellow developers, fostering a collaborative Agile environment, and consistently driving the project toward success in the healthcare domain.",
        skills: ["MySQL", "JavaScript", "Continuous Integration and Continuous Delivery (CI/CD)", "Ionic Framework", "Unit Testing", "Back-End Web Development", "Angular", "React.js", "Responsive Web Design", "Hybrid App", "Angular Command Line Interface (CLI)", "Git", "Node.js", "Front-End Development", "TypeScript"],
        highlightCount: 2,
      },
      {
        id: "software-engineer",
        title: "Software Engineer – Frontend",
        dateRange: "Apr 2017 – Mar 2019",
        duration: "2 yr",
        location: "Pune",
        description: "Overall, my role as a Software Engineer | Full Stack Developer involved designing robust APIs, enhancing application security, optimizing performance, creating compelling data visualizations in Tableau, ensuring comprehensive test coverage, and contributing to agile team processes to drive impactful results for CRM products.",
        skills: ["JavaScript", "AngularJS", "Bootstrap", "Git"],
        highlightCount: 2,
      },
      {
        id: "jrsoftwareengineer",
        title: "Jr Software Engineer",
        dateRange: "Apr 2016 – Mar 2017",
        duration: "1 yr",
        location: "Pune",
        description: `• Created Excel report from records in the database through Web-API C# library on Front End.
• Created MS-SQL store procedures.
• Worked on front End AngularJS features like UI`,
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS", "SQL"],
        highlightCount: 2,
      },
    ],
  },
];
