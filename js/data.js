const portfolioData = {
    name: "Bhavan Kumar A",
    email: "abhavankumar@gmail.com",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/bhavan-kumar-333575244",
    github: "https://github.com/bhavan-06",

    projects: [
        {
            id: "deepfake-detection",
            title: "Deepfake Image & Video Detection",
            category: "ai",
            categoryLabel: "AI & Computer Vision",
            description: "Built a deepfake detection system using SigLIP Vision Transformer and MediaPipe facial landmark analysis.",
            image: "assets/images/project-deepfake.jpg",
            video: "assets/videos/project-deepfake.webm",
            technologies: "Python, SigLIP Vision Transformer, MediaPipe, Deep Learning, PyTorch, OpenCV",
            github: "https://github.com/bhavan-06/Deepfake-Image-and-Video-detection",
            detailedDescription: "A dual-stream deepfake detection framework engineered to detect sophisticated facial manipulations in both still images and streaming video. The architecture leverages the SigLIP (Sigmoid Loss for Language-Image Pre-training) Vision Transformer to extract deep spatial artifact representations, combined with MediaPipe facial landmark analysis tracking 468 3D geometric points. This enables the model to detect subtle biological inconsistencies—such as unnatural eye blinking rates, boundary blending discrepancies, and facial motion irregularities—with exceptional precision.",
            highlights: [
                "SigLIP Vision Transformer (ViT-B/16)",
                "MediaPipe 468 3D Facial Landmarks",
                "Dual-Stream Spatial & Geometric Pipeline",
                "Real-Time Video Stream Frame Inference"
            ],
            features: [
                "Biometric facial mesh tracking across 468 landmark coordinates",
                "Patch-based vision transformer attention for seamless boundary artifacts",
                "Real-time video inference with frame-by-frame authenticity scoring",
                "Visual telemetry HUD displaying confidence probabilities and heatmap analysis"
            ]
        },

        {
            id: "social-media-nlp",
            title: "Social Media Text Classification",
            category: "data",
            categoryLabel: "Natural Language Processing",
            description: "Analyzed and classified social media posts using web scraping, API access, tokenization and visualization techniques.",
            image: "assets/images/project-social.jpg",
            video: "assets/videos/project-social.webm",
            technologies: "Python, NLP, Scikit-learn, NLTK, Web Scraping, Matplotlib, WordClouds",
            github: "https://github.com/bhavan-06/NM-project-2",
            detailedDescription: "An end-to-end Natural Language Processing and text classification system engineered to analyze sentiment dynamics and topic distributions across social media posts. The pipeline automates data ingestion via web scrapers and API connectors, applies text preprocessing (tokenization, stop-word elimination, lemmatization, and TF-IDF feature extraction), and evaluates multi-class machine learning classifiers. The platform provides real-time sentiment polarity analytics, interactive word clouds, and categorical confidence metrics.",
            highlights: [
                "Automated Data Ingestion & Web Scraping",
                "TF-IDF & Lemmatization Pipeline",
                "Multi-Class Sentiment Classification",
                "Interactive Word Cloud & Cluster Visualization"
            ],
            features: [
                "Automated social post extraction, sanitization, and structured indexing",
                "Entity and keyword extraction with custom NLP heuristics",
                "Real-time sentiment polarity tracking (Positive, Negative, Neutral)",
                "Comprehensive classification report with precision, recall, and F1-score benchmarks"
            ]
        },

        {
            id: "weather-app",
            title: "Weather Application",
            category: "web",
            categoryLabel: "Web Development & APIs",
            description: "Developed a responsive weather application providing real-time weather updates using API integration.",
            image: "assets/images/project-weather.jpg",
            video: "assets/videos/project-weather.webm",
            technologies: "HTML5, CSS3, JavaScript (ES6+), OpenWeather API, Glassmorphism UI",
            github: "https://github.com/bhavan-06/NM-project-1",
            detailedDescription: "A modern, responsive meteorological web application delivering real-time atmospheric telemetry and multi-day weather forecasts. Built with a sleek glassmorphism aesthetic, the application integrates RESTful weather APIs to provide live temperature, humidity, atmospheric pressure, wind velocities, and UV index monitoring. Dynamic interface elements automatically adapt based on local weather conditions, accompanied by responsive forecast curves and meteorological radar previews.",
            highlights: [
                "Real-Time REST API Telemetry Integration",
                "Dynamic Atmospheric Precipitation Radar",
                "7-Day Interactive Temperature Curve",
                "Adaptive Glassmorphic Dark UI Interface"
            ],
            features: [
                "Live weather telemetry for any searched city or geolocated coordinates",
                "Dynamic weather animations adapting to atmospheric conditions",
                "Detailed air quality, pressure, dew point, and wind velocity metrics",
                "Fully responsive layout optimized across mobile, tablet, and desktop viewports"
            ]
        }
    ]
};