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

const cards: (WorkCard | ProjectCard)[] = [
  {
    title: "Software Engineer",
    description: "Check back later!",
    tags: ["JavaScript"],
    company: "Google",
    startDate: "Aug. 2022",
    endDate: "Present",
    type: "work",
  },
  {
    title: "Software Developer II",
    description:
      "I used technologies like Typescript, React, Cypress, Jest, and more to build and maintain our web dashboard. Recently, I built an A/B testing system for our new login portal using AWS Lambda and built a toolkit to rapidly deploy React web apps.",
    tags: ["JavaScript", "React.js", "Cypress", "Jest", "AWS"],
    company: "Bandwidth",
    startDate: "Feb. 2021",
    endDate: "Aug. 2022",
    type: "work",
  },
  {
    title: "Application Engineering Intern",
    description:
      "Worked with the application engineering team to automate their emergency services testing. Devised a way to automate VoIP calls using Python and Jenkins, as well as remotely control processes. Containerized the platform using Docker and Openshift.",
    tags: ["Python", "OpenShift", "Docker", "Jenkins"],
    company: "Bandwidth",
    startDate: "May 2020",
    endDate: "Aug 2020",
    type: "work",
  },
  {
    title: "Software Engineering Intern",
    description:
      "Joined the Backupify division and worked on the core code for backing up and restoring O365 and GSuite data. Also helped develop new features for the Backupify 2.0 platform. Worked in a Scrum team and developed code across the stack in Ruby, Scala, and Javascript. Also wrote scripts to update production servers, SQL databases. and Elasticsearch indices.",
    tags: ["JavaScript", "Ruby", "Scala"],
    company: "Datto",
    startDate: "May 2019",
    endDate: "Aug 2019",
    type: "work",
  },
  {
    title: "Research Intern",
    description:
      "Assisted senior research staff in testing SLAM systems using synthetic flight data. Built a flight simulator in Node.js to collect synthetic flight data and wrote scripts to automate data collection. Also modified an existing SLAM algorithm to work with the collected data.",
    tags: ["JavaScript"],
    company: "Oak Ridge National Laboratory",
    startDate: "Jun 2018",
    endDate: "Aug 2018",
    type: "work",
  },
  {
    title: "Software Engineering Intern",
    description:
      "Worked in a team of four to build a surveillance system that utilized facial recognition and tracking algorithms to provide real-time surveillance information in a easy and mobile format. Designed and developed an Android app which served as the user interface for the system. Setup video streaming for the cameras and connected them to the app using PHP and Python scripts. Built a web layer between the app and the backend mySQL database using PHP, Python, and an Apache web server.",
    tags: ["Android", "PHP"],
    company: "Booz Allen Hamilton",
    startDate: "Jun 2017",
    endDate: "Aug 2017",
    type: "work",
  },
  {
    title: "Hanji",
    description:
      "Conjugates Korean verbs/adjectives and displays them along with the word’s definition. Built a Node.js server, a Java web server, a MongoDB database, and a GraphQL layer to connect everything together. Hanji is available on the Google Play Store.",
    tags: [
      "JavaScript",
      "GraphQL",
      "MongoDB",
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
];

export default cards;
