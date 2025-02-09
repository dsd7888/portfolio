const PROJECTS_DATA = [
  {
    title: "Fake Stack Overflow",
    description: "A web-based Q&A platform inspired by Stack Overflow.",
    about:
      "Fake Stack Overflow is a fully functional Q&A platform that replicates the core functionalities of Stack Overflow. It features user authentication, question management, voting, and commenting systems. The application is built with React for the frontend, Node.js and Express for the backend, and MongoDB as the database. It includes secure password storage using bcrypt and a responsive, user-friendly interface.",
    link: "https://github.com/sbu-ckane-s24-cse316-pa04org/pa04-team-vadapav", // Replace with your live demo or GitHub repo link
    imageUrl: "/img/Stack.png", // Replace with your project's image or screenshot
    github: "https://github.com/myusername/fake-stack-overflow", // Replace with your GitHub repo link
    type: ["project", "full-stack", "open-source"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Bcrypt",
      "CSS",
    ],
  },
  {
    title: "HealthByte",
    description:
      "Transforming patient mobile health app data pre- and post-operation into anonymized databases for statistical analysis.",
    about:
      "HealthByte is a mobile and web-based application designed to simplify the collection and analysis of health data from patients using Apple's Health app. It streamlines pre- and post-operative monitoring for doctors by securely transmitting anonymized patient data for statistical analysis. The project includes backend systems for data processing, a user-friendly interface, and Excel/Xcode integration.",
    link: "https://github.com/AnujDakhara7888/XCodeBackEnd-main", // Replace with your GitHub repo or live demo link
    imageUrl: "/img/Xcode.png", // Ensure the image is placed in `public/img/`
    github: "https://github.com/AnujDakhara7888/XCodeBackEnd-main", // Replace with your GitHub repo link
    type: ["project", "health-tech", "data-analysis"],
    technologies: [
      "Xcode",
      "Excel",
      "Apple HealthKit",
      "React Native",
      "Node.js",
      "Microsoft Excel",
      "Python",
    ],
  },
  {
    title: "Premier League Player Data Dashboard",
    description:
      "An interactive dashboard for analyzing Premier League player data using advanced visualization techniques.",
    about:
      "This project involved building an interactive dashboard to explore and analyze Premier League player data. It features dynamic visualizations such as PCA Biplots, Parallel Coordinates, Chord Diagrams, and histograms. The dashboard enhances data exploration through interactive features that allow users to highlight correlated points, bars, and lines. Complex datasets were processed and visualized using Python and D3.js, delivering actionable insights.",
    link: "https://github.com/AnujDakhara7888/D3.js", // Replace with your GitHub repo or live demo link
    imageUrl: "/img/Premier.png", // Ensure the image is placed in `public/img/`
    github: "https://github.com/AnujDakhara7888/D3.js", // Replace with your GitHub repo link
    type: ["project", "data-visualization", "sports-analytics"],
    technologies: ["D3.js", "Python", "Pandas", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "TextSense: Semantic Text Analysis and Named Entity Recognition",
    description:
      "An advanced NLP project leveraging Word2Vec and logistic regression for semantic similarity and entity recognition.",
    about:
      "TextSense is an NLP-powered application designed to analyze semantic relationships in text and identify named entities. It uses Word2Vec for semantic similarity, logistic regression for word analogy tasks, and fine-tuned sentence embeddings to enhance the accuracy of semantic textual similarity (STS). The project also implements named entity recognition (NER) using spaCy and NLTK to classify entities such as persons and locations. Real-world text tasks were used to evaluate and refine model performance.",
    link: "https://github.com/AnujDakhara7888", // Replace with your GitHub repo or live demo link
    imageUrl: "/img/NLP.png", // Ensure the image is placed in `public/img/`
    github: "https://github.com/AnujDakhara7888", // Replace with your GitHub repo link
    type: ["project", "machine-learning", "NLP"],
    technologies: [
      "Word2Vec",
      "spaCy",
      "NLTK",
      "Logistic Regression",
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
  },
];

export default PROJECTS_DATA;
