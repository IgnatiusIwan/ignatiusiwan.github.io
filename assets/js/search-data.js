// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Complete and up-to-date list of publications can be accessed via Google Scholar",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-portofolio",
          title: "Portofolio",
          description: "A nostalgic collection of the things that I worked on (Work in Progress ... 😊)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-fedcllm-federated-client-selection-assisted-large-language-model-utilizing-domain-description-published-at-elsevier-internet-of-things",
          title: 'Our paper FedCLLM: Federated client selection assisted large language model utilizing domain description...',
          description: "",
          section: "News",},{id: "news-our-paper-mixture-of-global-and-personalized-model-for-human-activity-recognition-in-federated-learning-achieved-the-excellent-paper-award-at-activity-and-behavior-computing-2025-abu-dhabi",
          title: 'Our paper Mixture of Global and Personalized Model for Human Activity Recognition in...',
          description: "",
          section: "News",},{id: "news-i-defended-my-ph-d-thesis-on-8-december-2025-and-will-receive-my-degree-on-20-february-2026",
          title: 'I defended my Ph.D thesis on 8 December 2025 🎓 and will receive...',
          description: "",
          section: "News",},{id: "news-i-received-my-doctoral-degree-on-20-february-2026-and-currently-looking-for-another-opportunities",
          title: 'I received my doctoral degree on 20 February 2026 🎓 and currently looking...',
          description: "",
          section: "News",},{id: "projects-fedcllm",
          title: 'FedCLLM',
          description: "Federated client selection assisted large language model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-pysft-bearing-simulation",
          title: 'Pysft Bearing Simulation',
          description: "Simulation of Pysft framework in Bearing dataset",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-autoencoder-anomaly-detection",
          title: 'Autoencoder Anomaly Detection',
          description: "Utilization of autoencoder reconstruction error to detect anomalies and simulation of training in federated learning environment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-federated-har-transfer-learning",
          title: 'Federated HAR transfer learning',
          description: "Coding implementation of Federated HAR transfer learning (FedHealth)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://drive.google.com/file/d/1gx8-6PmCciM138FRzJ1pjHy9qVyJsDes/view?usp=sharing", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%6E%69%61%30%38%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/iwan087", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ignatiusiwan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=w_tMryAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
