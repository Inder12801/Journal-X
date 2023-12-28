const blogDummyData = [
  {
    slug: "introduction-to-graphql",
    title: "Introduction to GraphQL",
    content: `
      GraphQL is a powerful query language for APIs, developed by Facebook. It offers efficient and flexible data retrieval compared to traditional REST APIs. Clients can request specific data, reducing over-fetching and under-fetching.

      GraphQL supports real-time data with subscriptions, making it ideal for applications like chat and collaboration tools. Its type system defines data structure, including objects, scalars, enums, and interfaces.

      This introduction aims to provide a solid foundation in GraphQL, opening new possibilities for creating dynamic web applications.
    `,
    userId: "user-1",
    category: "Technology",
    image: "https://example.com/graphql-image.jpg",
  },
  {
    slug: "react-hooks-best-practices",
    title: "React Hooks Best Practices",
    content: `
      React Hooks revolutionized state and side effect management in React components. This blog explores best practices, emphasizing using Hooks at the top level, creating custom Hooks for reusable logic, and managing side effects with useEffect.

      Tips for optimizing performance with useMemo and useCallback are covered, ensuring clean and efficient React components.
    `,
    userId: "user-2",
    category: "Programming",
    image: "https://example.com/react-hooks-image.jpg",
  },
  {
    slug: "nodejs-express-tutorial",
    title: "Node.js Express Tutorial",
    content: `
      Node.js and Express.js are go-to choices for building scalable web applications. This tutorial guides you through creating a basic web server with Node.js and Express.js.

      Learn about routes, middleware, template engines, and handling static files. Gain insights into creating web servers, setting the stage for advanced web development projects.
    `,
    userId: "user-3",
    category: "Programming",
    image: "https://example.com/node-express-image.jpg",
  },
  {
    slug: "tips-for-effective-code-reviews",
    title: "Tips for Effective Code Reviews",
    content: `
      Code reviews are crucial for maintaining code quality. This post explores tips for conducting effective code reviews, including establishing a positive environment, setting clear expectations, and using review tools.

      Keep reviews small and focused, leverage checklists, and contribute to a culture of continuous improvement within your development team.
    `,
    userId: "user-4",
    category: "Software Engineering",
    image: "https://example.com/code-review-image.jpg",
  },
  {
    slug: "getting-started-with-docker",
    title: "Getting Started with Docker",
    content: `
      Docker has revolutionized how developers build, ship, and run applications. This guide provides a comprehensive introduction, covering fundamental concepts, creating Dockerfiles, and orchestrating multi-container applications with Docker Compose.

      Whether you're new to containerization or enhancing your Docker skills, this guide equips you with knowledge for incorporating Docker into your development workflow.
    `,
    userId: "user-5",
    category: "DevOps",
    image: "https://example.com/docker-image.jpg",
  },
  {
    slug: "css-flexbox-layout",
    title: "CSS Flexbox Layout",
    content: `
      Flexbox is a powerful layout model in CSS, simplifying the creation of flexible and responsive designs. This guide explores key concepts, including the flex container, flex items, and common layout patterns.

      Understand the fundamentals of CSS Flexbox and learn to create versatile and responsive layouts for web development projects.
    `,
    userId: "user-6",
    category: "Web Development",
    image: "https://example.com/flexbox-image.jpg",
  },
  {
    slug: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    content: `
      Machine learning empowers computers to learn from data without explicit programming. This blog explores fundamental concepts and algorithms, including supervised and unsupervised learning.

      Learn about key algorithms, feature engineering, model evaluation, and delve into advanced topics like ensemble methods and neural networks.
    `,
    userId: "user-7",
    category: "Data Science",
    image: "https://example.com/machine-learning-image.jpg",
  },
  {
    slug: "cybersecurity-basics",
    title: "Cybersecurity Basics",
    content: `
      In an era of digital transformation, cybersecurity is paramount for protecting applications, data, and user privacy. This blog post serves as a primer on essential concepts and best practices, covering the CIA triad, common threats, and security best practices.

      Stay informed about the latest threats and vulnerabilities to enhance cybersecurity awareness.
    `,
    userId: "user-8",
    category: "Security",
    image: "https://example.com/cybersecurity-image.jpg",
  },
];

export default blogDummyData;
