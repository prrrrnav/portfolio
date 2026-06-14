export const config = {
    developer: {
        name: "Pranav",
        fullName: "Pranav Tiwari",
        title: "Software Engineer",
        description: "Software Engineer building scalable backend systems and distributed services with Go and Node.js. Experienced in microservices, API gateways, and cloud deployment on AWS, with a strong foundation in data structures, algorithms, and system design."
    },
    social: {
        github: "https://github.com/prrrrnav",
        email: "d.officialpranav@gmail.com",
        location: "Bengaluru, India"
    },
    about: {
        title: "About Me",
        description: "I'm a Software Engineer focused on building scalable backend systems and distributed services using Go and Node.js. I have a strong foundation in data structures, algorithms, and system design, with hands-on experience designing microservices, API gateways, and deploying containerized services on AWS. I enjoy optimizing performance, reducing latency, and shipping production-ready systems in fast-paced, ambiguous environments. I'm currently pursuing my Master of Computer Applications at Presidency University, Bengaluru, and regularly practice algorithmic problem solving on LeetCode and GeeksforGeeks."
    },
    experiences: [
        {
            position: "Master of Computer Applications (MCA)",
            company: "Presidency University, Bengaluru",
            period: "2024 - Present",
            location: "Bengaluru, India",
            description: "Pursuing my MCA, graduating in July 2026, building on a Bachelor of Computer Applications from Integral University, Lucknow (Oct 2024) with a strong foundation in DSA, OOP, and system design.",
            responsibilities: [
                "Strengthening foundations in Data Structures, Algorithms, and System Design",
                "Regularly practicing problem solving on LeetCode and GeeksforGeeks",
                "Applying coursework to production-grade backend projects",
                "Completed AI for Engineers certification from IIT Kanpur"
            ],
            technologies: ["DSA", "OOP", "System Design", "Algorithms", "Computer Science Fundamentals"]
        },
        {
            position: "Stateless Auth & Rate-Limited API Service",
            company: "Personal Project",
            period: "2025 - 2026",
            location: "Bengaluru, India",
            description: "Designed and built a stateless distributed API gateway with JWT authentication and Redis-based rate limiting, improving throughput by 20% and reducing latency by ~15-20ms under concurrent load.",
            responsibilities: [
                "Built a stateless distributed API gateway with JWT auth and Redis-based sliding-window rate limiting",
                "Architected horizontally scalable microservices by decoupling session and persistent storage using Redis and PostgreSQL",
                "Deployed containerized services on AWS EC2 with CI/CD pipelines for consistent production environments"
            ],
            technologies: ["Go", "Redis", "PostgreSQL", "Docker", "AWS EC2", "JWT"]
        },
        {
            position: "NIDAR Drone Navigation",
            company: "NIDAR Drone Federation",
            period: "2025 - 2026",
            location: "Bengaluru, India",
            description: "Designed a real-time navigation pipeline integrating GPS and computer vision for autonomous mission execution under strict time constraints, leading a cross-functional team of 4 engineers.",
            responsibilities: [
                "Led a cross-functional team of 4 engineers, delivering a fully functional autonomous system",
                "Integrated GPS and OpenCV-based computer vision for real-time navigation",
                "Secured ₹4.5L funding and achieved Top 20 rank among 500+ teams"
            ],
            technologies: ["Python", "OpenCV", "Docker", "GPS"]
        },
        {
            position: "Applicant Tracking System (ATS) Platform",
            company: "Personal Project",
            period: "2025",
            location: "Bengaluru, India",
            description: "Built a scalable backend system for resume analysis with REST APIs and MongoDB, integrating external AI services to automate evaluation workflows for concurrent users.",
            responsibilities: [
                "Built REST APIs and MongoDB-backed services supporting concurrent users and async processing",
                "Integrated the OpenAI API to process and evaluate resumes for automated decision-making",
                "Designed system architecture to handle duplicate requests and ensure consistency"
            ],
            technologies: ["Node.js", "OpenAI API", "MongoDB", "Docker", "JWT", "MERN Stack"]
        },
        {
            position: "Backend Developer",
            company: "IoT Air Quality Monitoring System (Internship)",
            period: "2024 - 2025",
            location: "Bengaluru, India",
            description: "Designed and implemented an event-driven sensor ingestion pipeline processing real-time device data, reducing database writes by 92% and improving system efficiency under high-frequency inputs.",
            responsibilities: [
                "Built fault-tolerant backend systems ensuring idempotent processing and reliable data handling",
                "Reduced database writes by 92% with an event-driven ingestion pipeline",
                "Collaborated across hardware, firmware, and backend teams to deliver an end-to-end IIoT solution"
            ],
            technologies: ["Go", "Sensor Data Ingestion", "BLE", "Distributed Systems", "IIoT"]
        },
        {
            position: "Backend Developer",
            company: "Dr-LaBike (Freelance Client)",
            period: "2024",
            location: "Remote",
            description: "Developed and deployed a scalable backend system serving 1000+ monthly bookings and 200+ users, improving operational efficiency for rural healthcare services.",
            responsibilities: [
                "Designed optimized database schemas and queries, improving response time and data retrieval",
                "Implemented secure authentication and middleware to handle concurrent requests reliably",
                "Served 1000+ monthly bookings and 200+ users in production"
            ],
            technologies: ["Node.js", "REST APIs", "Authentication", "Middleware"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Stateless Auth & Rate-Limited API Service",
            category: "Backend / Distributed Systems",
            technologies: "Go, Redis, PostgreSQL, Docker, AWS EC2, JWT",
            image: "/images/project-1.webp",
            description: "A stateless distributed API gateway with JWT authentication and Redis-based rate limiting, improving throughput by 20% and reducing latency by ~15-20ms under concurrent load. Horizontally scalable microservices deployed on AWS EC2 with CI/CD."
        },
        {
            id: 2,
            title: "Applicant Tracking System (ATS) Platform",
            category: "Full Stack / AI",
            technologies: "Node.js, OpenAI API, MongoDB, Docker, JWT, MERN Stack",
            image: "/images/project-2.webp",
            description: "A scalable backend for resume analysis with REST APIs and MongoDB, supporting concurrent users and asynchronous processing. Integrates the OpenAI API to evaluate user inputs and automate decision-making workflows."
        },
        {
            id: 3,
            title: "NIDAR Drone Navigation",
            category: "Robotics / Computer Vision",
            technologies: "Python, OpenCV, Docker, GPS",
            image: "/images/project-3.webp",
            description: "A real-time navigation pipeline integrating GPS and computer vision for autonomous mission execution under strict time constraints. Led a team of 4 engineers, securing ₹4.5L funding and a Top 20 rank among 500+ teams."
        },
        {
            id: 4,
            title: "IoT Air Quality Monitoring System",
            category: "IIoT / Backend",
            technologies: "Go, Event-Driven Architecture, BLE, Sensor Data Pipelines",
            image: "/images/project-4.webp",
            description: "An event-driven sensor ingestion pipeline processing real-time device data, reducing database writes by 92% and improving efficiency under high-frequency inputs. Built fault-tolerant, idempotent processing across hardware, firmware, and backend teams."
        },
        {
            id: 5,
            title: "Dr-LaBike",
            category: "Backend / Healthcare Tech",
            technologies: "Node.js, REST APIs, Authentication, Database Design",
            image: "/images/project-5.webp",
            description: "A scalable backend system serving 1000+ monthly bookings and 200+ users, improving operational efficiency for rural healthcare services with optimized database schemas and secure middleware."
        }
    ],
    contact: {
        email: "d.officialpranav@gmail.com",
        github: "https://github.com/prrrrnav",
        linkedin: "https://www.linkedin.com/in/prrrranv"
    },
    skills: {
        develop: {
            title: "BACKEND ENGINEER",
            description: "Building scalable backend systems & distributed services",
            details: "Designing RESTful APIs, microservices, and API gateways with Go and Node.js. Experienced with JWT auth, sliding-window rate limiting, stateless architecture, and event-driven sensor ingestion pipelines for IIoT systems.",
            tools: ["Go", "Node.js", "REST APIs", "Microservices", "JWT Auth", "Rate Limiting", "TCP/IP", "BLE Networking"]
        },
        design: {
            title: "CLOUD & DATA",
            description: "Databases, DevOps, and cloud deployment",
            details: "Designing schemas and optimizing queries across PostgreSQL, MongoDB, and Redis. Deploying containerized services to AWS EC2 with Docker and CI/CD pipelines for consistent, horizontally scalable production environments.",
            tools: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS EC2", "CI/CD", "Linux", "Horizontal Scaling"]
        }
    }
};
