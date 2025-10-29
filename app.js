// Personal Site Application - AngularJS-inspired vanilla JavaScript implementation
(function() {
    'use strict';

    // Application data model
    const appData = {
        hero: {
            greeting: 'Hi, I\'m Luan Ferreira',
            subtitle: 'Software Engineering Student',
            description: 'Passionate about building innovative solutions and creating exceptional digital experiences.'
        },
        about: {
            intro: 'I\'m a dedicated software engineering student with a passion for technology and problem-solving. My journey in software development has been driven by curiosity and a desire to create meaningful applications that make a difference.',
            passion: 'I thrive on learning new technologies and frameworks, constantly expanding my skill set to stay current with industry trends. From frontend to backend development, I enjoy the entire spectrum of software engineering.',
            goal: 'My goal is to become a well-rounded software engineer who can contribute to innovative projects and collaborate with talented teams to build products that users love.'
        },
        skills: [
            {
                icon: '💻',
                name: 'Web Development',
                description: 'Building responsive and dynamic web applications using modern frameworks and best practices.'
            },
            {
                icon: '⚡',
                name: 'AngularJS',
                description: 'Creating interactive single-page applications with AngularJS framework and MVC architecture.'
            },
            {
                icon: '🎨',
                name: 'UI/UX Design',
                description: 'Crafting beautiful and intuitive user interfaces with attention to detail and user experience.'
            },
            {
                icon: '🔧',
                name: 'Problem Solving',
                description: 'Analyzing complex problems and developing efficient, scalable solutions using algorithmic thinking.'
            },
            {
                icon: '📱',
                name: 'Responsive Design',
                description: 'Ensuring seamless experiences across all devices with mobile-first approach and adaptive layouts.'
            },
            {
                icon: '🚀',
                name: 'Software Engineering',
                description: 'Applying engineering principles to design, develop, test, and maintain software systems.'
            }
        ],
        projects: [
            {
                title: 'Personal Portfolio Website',
                description: 'A clean and modern portfolio website built with AngularJS, featuring smooth animations and Apple-inspired design aesthetics.',
                technologies: ['AngularJS', 'HTML5', 'CSS3', 'JavaScript']
            },
            {
                title: 'Task Management App',
                description: 'An intuitive task management application that helps users organize their daily activities and boost productivity.',
                technologies: ['JavaScript', 'AngularJS', 'Local Storage']
            },
            {
                title: 'Weather Dashboard',
                description: 'A real-time weather dashboard that provides current conditions and forecasts with a beautiful, user-friendly interface.',
                technologies: ['AngularJS', 'REST API', 'CSS3']
            }
        ],
        contact: {
            message: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.',
            email: 'luan.ferreira@example.com',
            github: 'https://github.com/luandeferreira',
            linkedin: 'https://linkedin.com/in/luanferreira'
        }
    };

    // Smooth scroll functionality
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Add scroll animation effects
    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe skill cards and project cards
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }

    // Navbar scroll effect
    function addNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
            } else {
                navbar.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }

    // Initialize application when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        smoothScroll();
        addScrollAnimations();
        addNavbarScrollEffect();
        
        console.log('Personal Site Application initialized with AngularJS-inspired architecture');
    });
})();
