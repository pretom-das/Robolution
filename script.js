        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const body = document.body;
        
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on overlay
        mobileMenuOverlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Back to top button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Countdown timer
        function updateCountdown() {
            const eventDate = new Date('November 27, 2025 09:00:00').getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            // If the countdown is over, display a message
            if (distance < 0) {
                document.getElementById('countdown').innerHTML = '<div class="text-2xl font-bold text-primary">Event has started!</div>';
            }
        }
        
        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
        
        // Stats counter animation - Fixed to properly animate
        function animateCounters() {
            const counters = document.querySelectorAll('.stats-number');
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current).toLocaleString();
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                
                updateCounter();
            });
        }
        
        // Intersection Observer for stats counter
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const statsSection = document.getElementById('stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
        
        // Events data
        const eventsData = [
            {
                title: "Poster Competition",
                description: "Showcase your innovative robotics ideas through creative poster presentations. Participants will present their research and concepts to a panel of judges.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Solo", "Presentation"],
                day: "day1",
                conductor: "Dr. Fatima Rahman",
                fbId: "fatima.rahman",
                registerUrl: "https://example.com/register/poster",
                rulebookUrl: "https://example.com/rulebooks/poster"
            },
            {
                title: "Project Showcasing",
                description: "Display your completed robotics projects to judges and attendees. This is a platform to demonstrate your technical skills and innovation.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Team", "Hardware"],
                day: "day2",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/project",
                rulebookUrl: "https://example.com/rulebooks/project"
            },
            {
                title: "Soccer Bot",
                description: "Autonomous robots compete in a mini soccer match with strategic gameplay. Teams must design and program robots that can play soccer autonomously.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Team", "Robotics"],
                day: "day1",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/soccer",
                rulebookUrl: "https://example.com/rulebooks/soccer"
            },
            {
                title: "Line Following Race",
                description: "Robots navigate a complex track by following a line in the shortest time. This competition tests the precision and speed of autonomous robots.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Solo", "Robotics"],
                day: "day1",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/line",
                rulebookUrl: "https://example.com/rulebooks/line"
            },
            {
                title: "Battle of Bots",
                description: "Combat robotics competition where machines battle for supremacy. Teams design and build remote-controlled robots that fight in an arena.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Team", "Combat"],
                day: "day1",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/battleogbots",
                rulebookUrl: "https://drive.google.com/file/d/10_Y1fL5fv1ZwIBfdFuY9yfI58n9xzrGJ/view?usp=sharing"
            },
            {
                title: "Arduino Code Challenge",
                description: "Programming competition focusing on efficient Arduino code solutions. Participants solve real-world problems using Arduino programming.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Solo", "Software"],
                day: "day1",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/arduino",
                rulebookUrl: "https://example.com/rulebooks/arduino"
            },
            {
                title: "Robo Olympiad",
                description: "Junior category competition testing fundamental robotics knowledge. This event is designed for school and college students.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Junior", "Robotics"],
                day: "day1",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/olympiad",
                rulebookUrl: "https://example.com/rulebooks/olympiad"
            },
            {
                title: "Cosmo Clench Challenge",
                description: "Robots designed to collect and transport objects in a simulated space environment. This competition tests the precision and efficiency of robotic arms.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Team", "Mechanism"],
                day: "day2",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/cosmo",
                rulebookUrl: "https://example.com/rulebooks/cosmo"
            },
            {
                title: "Drone Race Competition",
                description: "High-speed drone racing through an obstacle course. Pilots navigate their drones through a challenging track as fast as possible.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["Team", "Aerial"],
                day: "day2",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/drone",
                rulebookUrl: "https://example.com/rulebooks/drone"
            },
            {
                title: "VLSI Competition",
                description: "Apply your knowledge of chip design and electronics to solve practical VLSI related challenges.",
                time: "Will be announced later",
                venue: "Will be announced later",
                prize: "Will be announced later",
                tags: ["VLSI", "Team"],
                day: "day2",
                conductor: "Will be announced later",
                fbId: "Will be announced later",
                registerUrl: "https://example.com/register/VLSICompetition",
                rulebookUrl: "https://example.com/rulebooks/VLSICompetition"
            }
        ];
        
        // Render events
        function renderEvents(events) {
            const container = document.getElementById('events-container');
            container.innerHTML = '';
            
            events.forEach((event, index) => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card animate-fadeIn stagger-item';
                eventCard.style.animationDelay = `${index * 0.1}s`;
                eventCard.innerHTML = `
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-info">
                        <i class="far fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.venue}</span>
                    </div>
                    <div class="event-prize">Prize: ${event.prize}</div>
                    <button class="btn-outline w-full mt-4 py-2 rounded-lg text-sm font-medium view-details-btn" data-event-id="${index}">
                        View Details
                    </button>
                `;
                container.appendChild(eventCard);
            });
            
            // Add event listeners to view details buttons
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const eventId = this.getAttribute('data-event-id');
                    openEventModal(eventsData[eventId]);
                });
            });
        }
        
        // Open event modal
        function openEventModal(event) {
            const modal = document.getElementById('eventModal');
            const modalContent = document.getElementById('eventModalContent');
            
            modalContent.innerHTML = `
                <h3 class="text-2xl font-bold text-white mb-4">${event.title}</h3>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="event-info">
                        <i class="far fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.venue}</span>
                    </div>
                </div>
                <div class="event-prize mb-4">Prize: ${event.prize}</div>
                <p class="text-gray-300 mb-6">${event.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${event.tags.map(tag => `<span class="tag px-3 py-1 rounded-full text-xs">#${tag}</span>`).join('')}
                </div>
                <div class="event-conductor">
                    <h4 class="text-white font-medium mb-2">Event Conductor</h4>
                    <p class="text-gray-300 mb-2">${event.conductor}</p>
                    <a href="https://facebook.com/${event.fbId}" target="_blank" class="text-primary hover:underline">
                        <i class="fab fa-facebook-f mr-1"></i> Facebook Profile
                    </a>
                </div>
                <div class="flex flex-wrap gap-4 mt-6">
                    <a href="${event.registerUrl}" target="_blank" class="btn-primary px-6 py-3 rounded-lg font-medium flex-1 text-center">
                        Register Now
                    </a>
                    <a href="${event.rulebookUrl}" target="_blank" class="btn-outline px-6 py-3 rounded-lg font-medium flex-1 text-center">
                        Download Rulebook
                    </a>
                </div>
            `;
            
            modal.classList.add('active');
        }
        
        // Close event modal
        document.getElementById('eventModalClose').addEventListener('click', () => {
            document.getElementById('eventModal').classList.remove('active');
        });
        
        document.getElementById('eventModal').addEventListener('click', (e) => {
            if (e.target.id === 'eventModal') {
                document.getElementById('eventModal').classList.remove('active');
            }
        });
        
        // Initial render
        renderEvents(eventsData);
        
        // Filter events
        document.querySelectorAll('[data-filter]').forEach(button => {
            button.addEventListener('click', function() {
                // Update active state
                document.querySelectorAll('[data-filter]').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                let filteredEvents = eventsData;
                
                if (filter !== 'all') {
                    if (filter === 'day1' || filter === 'day2') {
                        filteredEvents = eventsData.filter(event => event.day === filter);
                    } else {
                        filteredEvents = eventsData.filter(event => 
                            event.tags.some(tag => tag.toLowerCase() === filter)
                        );
                    }
                }
                
                renderEvents(filteredEvents);
            });
        });
        
        // Search events
        document.querySelector('input[type="text"]').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredEvents = eventsData.filter(event => 
                event.title.toLowerCase().includes(searchTerm) || 
                event.description.toLowerCase().includes(searchTerm) ||
                event.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            renderEvents(filteredEvents);
        });
        
        // Gallery carousel
        const galleryTrack = document.getElementById('galleryTrack');
        const galleryDots = document.querySelectorAll('.gallery-dot');
        const galleryPrev = document.querySelector('.gallery-prev');
        const galleryNext = document.querySelector('.gallery-next');
        let currentSlide = 0;
        const totalSlides = galleryDots.length;
        
        function updateGallerySlide() {
            galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            galleryDots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        galleryDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateGallerySlide();
            });
        });
        
        galleryPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateGallerySlide();
        });
        
        galleryNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateGallerySlide();
        });
        
        // Auto-rotate gallery
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateGallerySlide();
        }, 5000);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (anchor.getAttribute('href') === '#') return;
            
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        mobileMenuOverlay.classList.remove('active');
                        body.classList.remove('menu-open');
                    }
                }
            });
        });
        
        // Create particles for hero section
        function createParticles() {
            const container = document.querySelector('#home');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random size between 2px and 6px
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random color (primary or secondary)
                const usePrimary = Math.random() > 0.5;
                if (usePrimary) {
                    particle.style.background = `rgba(0, 240, 255, ${Math.random() * 0.5 + 0.2})`;
                } else {
                    particle.style.background = `rgba(0, 255, 170, ${Math.random() * 0.5 + 0.2})`;
                }
                
                // Random animation
                const animationType = Math.random() > 0.5 ? 'float' : 'float-reverse';
                const duration = Math.random() * 5 + 5;
                particle.style.animation = `${animationType} ${duration}s ease-in-out infinite`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                container.appendChild(particle);
            }
        }
        
        // Section scroll animations
        function initScrollAnimations() {
            const sections = document.querySelectorAll('.animate-section');
            
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });
            
            sections.forEach(section => {
                sectionObserver.observe(section);
            });
        }
        
        // Timeline scroll animations
        function initTimelineAnimations() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            const timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, { threshold: 0.1 });
            
            timelineItems.forEach(item => {
                timelineObserver.observe(item);
            });
        }
        
        // Additional scroll animations
        function initAdditionalScrollAnimations() {
            const scrollElements = document.querySelectorAll('.scroll-animate');
            
            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });
            
            scrollElements.forEach(element => {
                scrollObserver.observe(element);
            });
        }
        
        // Staggered animations
        function initStaggerAnimations() {
            const staggerElements = document.querySelectorAll('.stagger-item');
            
            const staggerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });
            
            staggerElements.forEach(element => {
                staggerObserver.observe(element);
            });
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            initScrollAnimations();
            initTimelineAnimations();
            initAdditionalScrollAnimations();
            initStaggerAnimations();
            
            // Initialize stats counters with a small delay to ensure DOM is fully loaded
            setTimeout(() => {
                const counters = document.querySelectorAll('.stats-number');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    if (count === 0) {
                        counter.innerText = '0';
                    }
                });
            }, 100);
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            const successMessage = document.getElementById('formSuccessMessage');
            const errorMessage = document.getElementById('formErrorMessage');
            const errorText = document.getElementById('errorText');
            
            // Google Apps Script URL
            const googleScriptURL = 'https://script.google.com/macros/s/AKfycbwicCrEp3LgMwW1oTyxwo6UjcEwoRyaHmjUBqw_C7KTK49cSLQi2-dqzQeK8Uc434U-/exec';
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form data
                    const formData = {
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        subject: document.getElementById('subject').value,
                        message: document.getElementById('message').value
                    };
                    
                    // Validate required fields
                    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                        errorText.textContent = 'Please fill in all required fields.';
                        errorMessage.classList.remove('hidden');
                        return;
                    }
                    
                    // Show loading state
                    const submitButton = contactForm.querySelector('button[type="submit"]');
                    const originalButtonText = submitButton.innerHTML;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
                    submitButton.disabled = true;
                    
                    // Hide previous messages
                    successMessage.classList.add('hidden');
                    errorMessage.classList.add('hidden');
                    
                    // Send data to Google Apps Script
                    fetch(googleScriptURL, {
                        method: 'POST',
                        mode: 'no-cors', // Important for Google Apps Script
                        body: JSON.stringify(formData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(() => {
                        // For no-cors mode, we assume success if no error
                        // Show success message
                        successMessage.classList.remove('hidden');
                        // Reset form
                        contactForm.reset();
                    })
                    .catch(error => {
                        // Show error message
                        errorText.textContent = 'Network error. Please check your connection and try again.';
                        errorMessage.classList.remove('hidden');
                        console.error('Form submission error:', error);
                    })
                    .finally(() => {
                        // Reset button state
                        submitButton.innerHTML = originalButtonText;
                        submitButton.disabled = false;
                    });
                });
            }
        });