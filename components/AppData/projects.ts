const PROJECTS_DATA = [
  {
    title: "ImageMind: Advanced Image Indexing and Retrieval System",
    description:
      "A high-performance AI-powered image indexing and retrieval system using deep learning techniques.",
    about:
      "ImageMind is an advanced image indexing and retrieval system built using Python, Flask, PyTorch, and FAISS. It features a custom MobileNetV3-based neural network, significantly enhancing feature extraction efficiency. The system enables large-scale image dataset processing with optimized performance through a RESTful API, multi-threading, and state management. The project integrates attention mechanisms to improve image search accuracy and retrieval speed.",
    link: "https://github.com/dsd7888/ImageMind",
    imageUrl: "/img/ImageMind.png",
    github: "https://github.com/dsd7888/ImageMind",
    type: ["project", "AI", "computer-vision"],
    technologies: [
      "Python",
      "Flask",
      "PyTorch",
      "FAISS",
      "MobileNetV3",
      "REST API",
      "Computer Vision",
    ],
  },
  {
    title: "NEO Tracker",
    description:
      "A real-time application for retrieving Near Earth Object (NEO) data from NASA’s API.",
    about:
      "NEO Tracker is an interactive web application designed to fetch and analyze real-time Near Earth Object (NEO) data from NASA’s API. The project features advanced data structures and BigData’s JSON parsing techniques for efficient analysis. Users can visualize live NEO data with an interactive UI, built using D3.js for intuitive data representation. Performance optimizations include multi-threading and caching mechanisms in Java to ensure smooth data retrieval and visualization.",
    link: "https://github.com/dsd7888/NEO-Tracker",
    imageUrl: "/img/NEOTracker.png",
    github: "https://github.com/dsd7888/NEO-Tracker",
    type: ["project", "data-analysis", "space-tech"],
    technologies: [
      "Java",
      "BigData",
      "D3.js",
      "JSON Parsing",
      "Multi-threading",
      "Caching",
    ],
  },
  {
    title: "KnowledgeNest: A Language Learning App",
    description:
      "An interactive web-based language learning platform for enhanced user engagement.",
    about:
      "KnowledgeNest is a language learning app designed with a responsive and user-friendly interface. It enables seamless course sales while ensuring an immersive learning experience. Built using HTML, JavaScript, and CSS, the platform enhances accessibility across devices, ensuring a smooth and engaging learning journey.",
    link: "https://github.com/dsd7888/KnowledgeNest",
    imageUrl: "/img/KnowledgeNest.png",
    github: "https://github.com/dsd7888/KnowledgeNest",
    type: ["project", "education-tech", "web-development"],
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Eye-Controlled Mouse",
    description:
      "A Python-based project enabling hands-free mouse control using eye movements.",
    about:
      "Eye-Controlled Mouse is an accessibility-focused project that allows users to control their computer's cursor using only their eyes. By leveraging OpenCV and MediaPipe for real-time face tracking, this application enables smooth cursor movement and click actions through blinking or winking, enhancing accessibility and human-computer interaction.",
    link: "https://github.com/dsd7888/eye-controlled-mouse",
    imageUrl: "/img/EyeMouse.png",
    github: "https://github.com/dsd7888/eye-controlled-mouse",
    type: ["project", "AI", "computer-vision", "accessibility"],
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "PyAutoGUI",
      "NumPy",
      "Computer Vision",
    ],
  },
];

export default PROJECTS_DATA;
