export type WorkCard = {
  title: string;
  description: string;
  tags: string[];
  company: string;
  startDate: string;
  endDate: string;
  type: "work";
};

export type ProjectCard = {
  title: string;
  description: string;
  tags: string[];
  type: "project";
};

const cards: { work: WorkCard[]; projects: ProjectCard[] } = {
  work: [
    {
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lobortis mauris dui suspendisse nunc sed egestas feugiat. Sit mattis et vel egestas ut.",
      tags: ["JavaScript", "TypeScript"],
      company: "Google",
      startDate: "Aug. 2022",
      endDate: "Present",
      type: "work",
    },
    {
      title: "Software Developer II",
      description:
        "I used technologies like Typescript, Cypress, Jest, Webpack, and more to build and maintain our web dashboard. Recently, I built an A/B testing system for our new login portal using AWS Lambda and built a toolkit to rapidly deploy React web apps.",
      tags: ["TypeScript", "React.js", "Cypress", "Jest", "AWS"],
      company: "Bandwidth",
      startDate: "Feb. 2021",
      endDate: "Aug. 2022",
      type: "work",
    },
  ],
  projects: [
    {
      title: "Hanji",
      description:
        "Conjugates Korean verbs/adjectives and displays them along with the word’s definition. Built a Node.js server, a Java web server, a MongoDB database, and a GraphQL layer to connect everything together. Hanji is available on the Google Play Store.",
      tags: [
        "JavaScript",
        "TypeScript",
        "GraphQL",
        "Android",
        "React Native",
        "Jest",
      ],
      type: "project",
    },
    {
      title: "Linguistic",
      description:
        "Utilizes NLP algorithms to help users converse in and learn foreign languages. Worked on the React Native app as well as the Node.js/GraphQL backend. Was also in charge of creating the Android app. More information can be found at https://golinguistic.com",
      tags: ["JavaScript", "GraphQL", "Android", "React Native"],
      type: "project",
    },
  ],
};

export default cards;
