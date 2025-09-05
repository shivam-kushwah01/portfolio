require("dotenv").config();

const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ri-menu-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            }
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.remove('ri-close-line');
                menuBtn.querySelector('i').classList.add('ri-menu-line');
            });
        });
        
        // Form submission
        document.getElementById('emailForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
           fetch(`${process.env.BACKEND_URL}/send-email`, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ name, email, message })
           })
           .then(res => res.json())
           .then(data => {
             alert(data.message);
             this.reset();
            })
            .catch(err => console.error(err));
        });

         // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate intro section
        gsap.from('.intro-text h1', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.intro-text p', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.profile-img', {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });
        
        // Animate section titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                },
                duration: 0.8,
                y: 30,
                opacity: 0,
                ease: 'power3.out'
            });
        });
        
        // Animate skill items
        gsap.utils.toArray('.skill-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                },
                duration: 0.5,
                y: 30,
                opacity: 0,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });
        
        // Animate project cards
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                delay: i * 0.2,
                ease: 'power3.out'
            });
        });