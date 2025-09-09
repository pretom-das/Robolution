        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#00f0ff',
                        secondary: '#00ffaa',
                        dark: '#0a0a1a',
                        darker: '#050510',
                    },
                    fontFamily: {
                        sans: ['Rajdhani', 'sans-serif'],
                        heading: ['Orbitron', 'sans-serif'],
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-reverse': 'float-reverse 5s ease-in-out infinite',
                        'pulse-slow': 'pulse 5s infinite',
                        'bounce-slow': 'bounce 2s infinite',
                        'fadeIn': 'fadeIn 1s ease-out forwards',
                        'slideInLeft': 'slideInLeft 1s ease-out forwards',
                        'slideInRight': 'slideInRight 1s ease-out forwards',
                        'scaleIn': 'scaleIn 0.8s ease-out forwards',
                        'rotateIn': 'rotateIn 1s ease-out forwards',
                        'moveHorizontal': 'moveHorizontal 15s linear infinite',
                        'moveVertical': 'moveVertical 20s linear infinite',
                        'rotate': 'rotate 20s linear infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                        'pulse': 'pulse 3s ease-in-out infinite',
                        'zigzag': 'zigzag 10s linear infinite',
                        'wave': 'wave 15s linear infinite',
                        'fade-in': 'fadeIn 1s ease-out forwards',
                        'slide-in-left': 'slideInLeft 1s ease-out forwards',
                        'slide-in-right': 'slideInRight 1s ease-out forwards',
                        'fade-up': 'fadeUp 1s ease-out forwards',
                        'fade-down': 'fadeDown 1s ease-out forwards',
                        'stagger-in': 'staggerIn 0.5s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        'float-reverse': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(20px)' },
                        },
                        fadeIn: {
                            from: { opacity: 0, transform: 'translateY(20px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                        slideInLeft: {
                            from: { opacity: 0, transform: 'translateX(-50px)' },
                            to: { opacity: 1, transform: 'translateX(0)' },
                        },
                        slideInRight: {
                            from: { opacity: 0, transform: 'translateX(50px)' },
                            to: { opacity: 1, transform: 'translateX(0)' },
                        },
                        scaleIn: {
                            from: { opacity: 0, transform: 'scale(0.9)' },
                            to: { opacity: 1, transform: 'scale(1)' },
                        },
                        rotateIn: {
                            from: { opacity: 0, transform: 'rotate(-5deg)' },
                            to: { opacity: 1, transform: 'rotate(0)' },
                        },
                        moveHorizontal: {
                            '0%': { transform: 'translateX(-100%)' },
                            '100%': { transform: 'translateX(100vw)' },
                        },
                        moveVertical: {
                            '0%': { transform: 'translateY(-100%)' },
                            '100%': { transform: 'translateY(100vh)' },
                        },
                        rotate: {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                        },
                        glow: {
                            '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.5)' },
                            '100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.8)' },
                        },
                        pulse: {
                            '0%, 100%': { opacity: 1 },
                            '50%': { opacity: 0.5 },
                        },
                        zigzag: {
                            '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                            '25%': { transform: 'translate(100px, 100px) rotate(90deg)' },
                            '50%': { transform: 'translate(0, 200px) rotate(180deg)' },
                            '75%': { transform: 'translate(-100px, 100px) rotate(270deg)' },
                            '100%': { transform: 'translate(0, 0) rotate(360deg)' },
                        },
                        wave: {
                            '0%': { transform: 'translateX(0) translateY(0)' },
                            '25%': { transform: 'translateX(25px) translateY(-25px)' },
                            '50%': { transform: 'translateX(50px) translateY(0)' },
                            '75%': { transform: 'translateX(25px) translateY(25px)' },
                            '100%': { transform: 'translateX(0) translateY(0)' },
                        },
                        fadeUp: {
                            from: { opacity: 0, transform: 'translateY(30px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                        fadeDown: {
                            from: { opacity: 0, transform: 'translateY(-30px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                        staggerIn: {
                            from: { opacity: 0, transform: 'translateY(20px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                    }
                }
            }
        }