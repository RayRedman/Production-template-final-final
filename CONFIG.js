// ==========================================
// SITE CONFIGURATION
// Splashy Bubbles Mobile Auto Detailing
// ==========================================

const CONFIG = {
    // ==========================================
    // BRAND IDENTITY
    // ==========================================
    brand: {
        name: "Splashy Bubbles",
        tagline: "Mobile Auto Detailing - We Come To You",
        phone: "(951) 708-6705",
        phoneRaw: "9517086705",
        email: "splashybubbles@email.com",
        address: "782 Suncup Cir, Hemet, CA 92543",
        license: "Fully Insured • Professional Service",
        logo: "logo.png",
        logoIcon: "car",
        yearEstablished: null,
    },

    // ==========================================
    // THEME & COLORS
    // ==========================================
    theme: {
        primaryColor: "#1a3a5c",
        primaryDark: "#0f2a42",
        primaryLight: "#2a5a8c",
        accentColor: "#f4c430",
        accentDark: "#d4a820",
        accentLight: "#ffe066",
        gold: "#f4c430",
        green: "#28A745",
        gradientPrimary: "linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 100%)",
        gradientAccent: "linear-gradient(135deg, #f4c430 0%, #ffe066 100%)",
        glassBg: "rgba(255, 255, 255, 0.95)",
        shadowSoft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        shadowStrong: "0 15px 50px rgba(0, 0, 0, 0.15)",
    },

    // ==========================================
    // NAVIGATION
    // ==========================================
    nav: [
        { label: "Home", href: "index.html" },
        { label: "About", href: "about.html" },
        { 
            label: "Services", 
            href: "services.html",
            children: [
                { label: "Exterior Detail", href: "services.html#exterior-detail" },
                { label: "Interior Detail", href: "services.html#interior-detail" },
                { label: "Full Detail", href: "services.html#full-detail" },
                { label: "Tesla Detailing", href: "services.html#tesla-detail" },
            ]
        },
        { 
            label: "Service Areas", 
            href: "service-area.html",
            children: [
                { label: "Hemet", href: "service-areas/hemet.html" },
                { label: "San Jacinto", href: "service-areas/san-jacinto.html" },
                { label: "Menifee", href: "service-areas/menifee.html" },
                { label: "Temecula", href: "service-areas/temecula.html" },
                { label: "Murrieta", href: "service-areas/murrieta.html" },
            ]
        },
        { label: "Contact", href: "contact.html" },
    ],

    // ==========================================
    // TOP BAR
    // ==========================================
    topBar: {
        emergencyText: "Mobile Service - We Come To You",
        showAddress: true,
        showHours: true,
        hours: "Mon-Sat: 8AM-6PM",
    },

    // ==========================================
    // PROMO BANNER
    // ==========================================
    promoBanner: {
        enabled: false,
        text: "",
        linkText: "",
        linkHref: "#quote",
    },

    // ==========================================
    // TRUST LOGOS
    // ==========================================
    trustLogos: {
        enabled: false,
        title: "Trusted & Certified",
        logos: [],
    },

    // ==========================================
    // SEO
    // ==========================================
    seo: {
        home: {
            title: "Splashy Bubbles Mobile Auto Detailing | Hemet, CA",
            description: "Professional mobile car detailing in Hemet, CA. We come to you! Interior, exterior, upholstery cleaning & Tesla detailing. 4.9★ on Google. Call (951) 708-6705",
        },
        about: {
            title: "About Us | Splashy Bubbles Mobile Auto Detailing",
            description: "Hemet's trusted mobile auto detailing service. We bring professional detailing to your home or office.",
        },
        services: {
            title: "Auto Detailing Services | Splashy Bubbles Hemet",
            description: "Full interior & exterior detailing, upholstery cleaning, Tesla detailing, ceramic coating. Mobile service in Hemet and surrounding areas.",
        },
        contact: {
            title: "Contact | Splashy Bubbles Mobile Auto Detailing",
            description: "Book your mobile detail today. Call (951) 708-6705 or request a free quote online.",
        },
        serviceArea: {
            title: "Service Areas | Splashy Bubbles Mobile Auto Detailing",
            description: "Mobile auto detailing in Hemet, San Jacinto, Menifee, Temecula, Murrieta and surrounding areas.",
        },
    },

    // ==========================================
    // IMAGES
    // ==========================================
    images: {
        hero: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1600&q=80",
        about: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        whyUs: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
        contact: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
        
        services: {
            "exterior-detail": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
            "interior-detail": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
            "full-detail": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "upholstery": "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80",
            "tesla-detail": "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
            "ceramic-coating": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
        },
        
        gallery: {
            enabled: true,
            title: "Our Work",
            subtitle: "See the quality and care we bring to every detail",
            items: [
                { src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80", alt: "Car detailing" },
                { src: "https://images.unsplash.com/photo-1605164599901-57e4f726c007?w=600&q=80", alt: "Interior cleaning" },
                { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80", alt: "Exterior shine" },
                { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", alt: "Dashboard detail" },
                { src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80", alt: "Tesla detailing" },
                { src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80", alt: "Paint protection" },
            ],
        },
        
        fallback: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    },

    // ==========================================
    // HERO
    // ==========================================
    hero: {
        label: "Mobile Detailing Experts",
        badge: "Hemet's Mobile Detailing Pros",
        headline: "Mobile Auto Detailing in",
        headlineAccent: "Hemet, CA",
        subhead: "We come to you. Professional interior and exterior detailing at your home or office.",
        backgroundImage: null,
        features: [
            "Mobile Service",
            "4.9 ★ Google Rating",
            "Interior & Exterior"
        ],
        guaranteeBadge: {
            enabled: false,
            text: "",
            subtext: "",
        },
        ctaPrimary: {
            text: "Get Free Quote",
            href: "#quote",
        },
        ctaSecondary: {
            text: "Call Now",
            href: "tel:9517086705",
        },
    },

    // ==========================================
    // LEAD CAPTURE FORM
    // ==========================================
    form: {
        title: "Get a Free Quote",
        subtitle: "",
        submitText: "Get My Free Quote",
        privacyText: "Your information is secure and never shared.",
        messagePlaceholder: "Tell us about your vehicle or any special requests...",
        consentText: "I agree to receive text messages and calls about my inquiry.",
        ghlWebhook: "",
        fields: [
            { name: "name", label: "Full Name", type: "text", placeholder: "John Smith", required: true },
            { name: "phone", label: "Phone", type: "tel", placeholder: "(951) 555-1234", required: true },
        ],
        showServiceDropdown: false,
        serviceOptions: [
            { value: "", label: "Select Service Needed" },
            { value: "exterior", label: "Exterior Detail" },
            { value: "interior", label: "Interior Detail" },
            { value: "full", label: "Full Detail Package" },
            { value: "other", label: "Other / Not Sure" },
        ],
        successMessage: "Thanks! We'll call you shortly to schedule your detail.",
    },

    // ==========================================
    // TRUST BADGES
    // ==========================================
    trustBadges: [
        { icon: "truck", text: "Mobile Service" },
        { icon: "star", text: "4.9 Star Rated" },
        { icon: "clock", text: "Flexible Scheduling" },
        { icon: "check", text: "Satisfaction Guaranteed" },
    ],

    // ==========================================
    // SERVICES
    // ==========================================
    services: {
        title: "Our Services",
        subtitle: "Professional detailing packages for every vehicle",
        viewAllText: "View All Services",
        viewAllLink: "services.html",
        learnMoreText: "Learn More",
        items: [
            {
                id: "exterior-detail",
                title: "Exterior Detailing",
                shortDesc: "Hand wash, clay bar, polish, and wax to restore your vehicle's shine and protect the paint.",
                fullDesc: "Complete exterior detailing including hand wash, clay bar treatment, paint decontamination, polish, and protective wax coating. We bring all equipment and water to your location.",
                icon: "car",
                image: null,
                features: [
                    "Hand Wash",
                    "Clay Bar Treatment",
                    "Polish & Wax",
                    "Tire Shine",
                ],
            },
            {
                id: "interior-detail",
                title: "Interior Detailing",
                shortDesc: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Fresh and spotless.",
                fullDesc: "Thorough interior cleaning including vacuuming, steam cleaning, leather conditioning, dashboard treatment, and complete sanitization.",
                icon: "sparkle",
                image: null,
                features: [
                    "Deep Vacuum",
                    "Steam Cleaning",
                    "Leather Care",
                    "Odor Removal",
                ],
            },
            {
                id: "full-detail",
                title: "Full Detail Package",
                shortDesc: "Complete interior and exterior detailing for a like-new finish inside and out.",
                fullDesc: "Our most popular package combining full interior and exterior detailing services for a complete transformation.",
                icon: "star",
                image: null,
                features: [
                    "Everything Included",
                    "Best Value",
                    "3-4 Hours",
                    "Like-New Results",
                ],
            },
            {
                id: "upholstery",
                title: "Upholstery Cleaning",
                shortDesc: "Professional cleaning and stain removal for cloth and leather seats and surfaces.",
                fullDesc: "Deep extraction cleaning for fabric seats, leather cleaning and conditioning, carpet shampooing, and stubborn stain removal.",
                icon: "home",
                image: null,
                features: [
                    "Stain Removal",
                    "Deep Extraction",
                    "Leather Conditioning",
                    "Carpet Shampoo",
                ],
            },
        ],
    },

    // ==========================================
    // PROCESS / HOW IT WORKS
    // ==========================================
    process: {
        title: "Simple & Easy Process",
        steps: [
            {
                number: "1",
                title: "Request a Quote",
                desc: "Fill out our quick form or give us a call to schedule your detail.",
            },
            {
                number: "2", 
                title: "We Come to You",
                desc: "Our team arrives at your location with all equipment and supplies.",
            },
            {
                number: "3",
                title: "Enjoy the Results",
                desc: "Sit back and enjoy your freshly detailed, showroom-clean vehicle.",
            },
        ],
    },

    // ==========================================
    // WHY CHOOSE US
    // ==========================================
    whyUs: {
        title: "Why Choose Splashy Bubbles",
        subtitle: "We bring professional auto detailing directly to your location. No drop-offs, no waiting - we come to you.",
        image: null,
        items: [
            {
                icon: "truck",
                title: "We Come To You",
                description: "Mobile service at your home, office, or anywhere in Hemet and surrounding areas.",
            },
            {
                icon: "star",
                title: "4.9 Star Rated",
                description: "45 five-star reviews on Google. Our customers love the results we deliver.",
            },
            {
                icon: "clock",
                title: "Flexible Scheduling",
                description: "We work around your schedule. Book a time that works for you.",
            },
            {
                icon: "check",
                title: "Satisfaction Guaranteed",
                description: "Not happy with the results? We'll make it right. That's our promise.",
            },
        ],
    },

    // ==========================================
    // OUR WORK / GALLERY
    // ==========================================
    ourWork: {
        title: "Recent Projects",
        subtitle: "See the quality and care we bring to every detail.",
        images: [
            { src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80", alt: "Exterior wash" },
            { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", alt: "Porsche detail" },
            { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80", alt: "Corvette detail" },
            { src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80", alt: "Interior clean" },
            { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80", alt: "Classic car" },
            { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80", alt: "Sports car" },
        ],
    },

    // ==========================================
    // STATISTICS
    // ==========================================
    stats: [
        { value: "500+", label: "Cars Detailed" },
        { value: "4.9", label: "Google Rating" },
        { value: "45", label: "5-Star Reviews" },
        { value: "100%", label: "Mobile Service" },
    ],

    // ==========================================
    // REVIEWS
    // ==========================================
    reviews: {
        title: "What Our Customers Say",
        subtitle: "Real reviews from real customers",
        google: {
            enabled: true,
            rating: 4.9,
            reviewCount: 45,
        },
        items: [
            {
                text: "Amazing service! They came right to my house and my truck looks brand new. Super convenient and the price was fair.",
                author: "Marcus T.",
                location: "Hemet, CA",
                rating: 5,
                avatar: null,
            },
            {
                text: "Had my Tesla detailed and they did an incredible job. They knew exactly how to handle the white interior. Highly recommend!",
                author: "Jennifer L.",
                location: "San Jacinto, CA",
                rating: 5,
                avatar: null,
            },
            {
                text: "Best mobile detailing in Hemet! The full detail package was worth every penny. My car hasn't looked this good since I bought it.",
                author: "Robert K.",
                location: "Menifee, CA",
                rating: 5,
                avatar: null,
            },
        ],
    },

    // ==========================================
    // CTA SECTION
    // ==========================================
    cta: {
        title: "Ready for a Showroom Shine?",
        subtitle: "Book your mobile detail today and we'll come to you.",
        buttonText: "Get Free Quote",
        buttonLink: "contact.html",
        showPhone: true,
    },

    // ==========================================
    // FAQ
    // ==========================================
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Got questions? We've got answers.",
        items: [
            {
                question: "How does mobile detailing work?",
                answer: "We come to your location with all the equipment and supplies needed. Just provide access to your vehicle and we handle everything. We bring our own water and power - you don't need to provide anything.",
            },
            {
                question: "How long does a detail take?",
                answer: "An exterior detail typically takes 1-2 hours. Interior detail is 1-2 hours. A full detail package takes 3-4 hours depending on vehicle size and condition.",
            },
            {
                question: "What areas do you serve?",
                answer: "We serve Hemet and surrounding areas including San Jacinto, Menifee, Temecula, Murrieta, Winchester, Sun City, and Perris. Contact us to confirm service in your area.",
            },
            {
                question: "Do I need to be home during the service?",
                answer: "Not necessarily. As long as we have access to your vehicle and a place to work, you can go about your day. Many customers have us detail their car while they're at work.",
            },
            {
                question: "What forms of payment do you accept?",
                answer: "We accept cash, all major credit cards, Venmo, Zelle, and Cash App for your convenience.",
            },
        ],
    },

    // ==========================================
    // FOOTER
    // ==========================================
    footer: {
        description: "Professional mobile auto detailing in Hemet, CA. We bring the shine to your driveway.",
        copyrightYear: new Date().getFullYear(),
        quickLinksTitle: "Quick Links",
        quickLinks: [
            { label: "Home", href: "index.html" },
            { label: "About Us", href: "about.html" },
            { label: "Services", href: "services.html" },
            { label: "Service Areas", href: "service-area.html" },
            { label: "Contact", href: "contact.html" },
        ],
        contactTitle: "Contact Us",
        socialTitle: "Follow Us",
        socialLinks: [
            { platform: "facebook", url: "#", icon: "facebook" },
            { platform: "instagram", url: "#", icon: "instagram" },
            { platform: "google", url: "#", icon: "google" },
        ],
    },

    // ==========================================
    // ABOUT PAGE
    // ==========================================
    about: {
        title: "About Splashy Bubbles",
        subtitle: "Mobile auto detailing in Hemet, CA",
        story: {
            title: "Our Story",
            image: null,
            paragraphs: [
                "Splashy Bubbles Mobile Auto Detailing was founded with a simple idea: professional car detailing shouldn't require you to give up your whole day.",
                "We bring the full detailing experience directly to your driveway, office parking lot, or wherever is most convenient for you. Based in Hemet, California, we serve the entire region including San Jacinto, Menifee, Temecula, and Murrieta.",
                "Our mobile setup means you get dealership-quality results without the hassle of dropping off your vehicle. With over 500 cars detailed and a 4.9-star rating on Google, we're proud to be Hemet's trusted choice for mobile auto detailing.",
            ],
        },
        values: {
            title: "Why We're Different",
            subtitle: "What sets Splashy Bubbles apart",
            items: [
                {
                    icon: "truck",
                    title: "Convenience",
                    description: "We come to you. No drop-offs, no waiting rooms, no picking up your car later.",
                },
                {
                    icon: "star",
                    title: "Quality",
                    description: "Professional-grade products and techniques for showroom results every time.",
                },
                {
                    icon: "check",
                    title: "Trust",
                    description: "4.9 stars on Google with 45+ reviews. Our reputation speaks for itself.",
                },
            ],
        },
        team: {
            title: "Meet Our Team",
            subtitle: "The experts behind our exceptional service",
            showTeam: false,
            members: [],
        },
    },

    // ==========================================
    // CONTACT PAGE
    // ==========================================
    contact: {
        title: "Contact Us",
        subtitle: "Ready to get your car detailed? Get in touch!",
        showMap: true,
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106065.96877829656!2d-117.0237!3d33.7475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6b3f7f3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sHemet%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890",
        infoTitle: "Get In Touch",
        infoSubtitle: "Have questions? We'd love to hear from you.",
        hoursTitle: "Business Hours",
        hours: [
            { days: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
            { days: "Saturday", time: "8:00 AM - 5:00 PM" },
            { days: "Sunday", time: "Closed" },
        ],
        emergencyNote: "Text or call anytime for scheduling",
        formTitle: "Request a Quote",
        formSubtitle: "We'll get back to you within 30 minutes",
        formFields: [
            { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
            { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
            { name: "vehicle", type: "text", placeholder: "Vehicle Year/Make/Model", required: false, halfWidth: false },
            { name: "message", type: "textarea", placeholder: "What services are you interested in?", required: false, halfWidth: false, rows: 4 },
        ],
        formSubmitText: "Request Quote",
    },

    // ==========================================
    // SERVICE AREA PAGE
    // ==========================================
    serviceArea: {
        title: "Areas We Serve",
        subtitle: "Mobile detailing throughout Hemet and surrounding areas",
        description: "We provide mobile auto detailing services throughout the Hemet area and surrounding communities. If you don't see your area listed, give us a call—we may still be able to help!",
        showMap: true,
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212525.75857236!2d-117.1!3d33.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6b3f7f3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sHemet%2C%20CA!5e0!3m2!1sen!2sus",
        primaryAreas: {
            title: "Primary Service Areas",
            subtitle: "Same-day service typically available",
            areas: [
                "Hemet",
                "San Jacinto",
                "Menifee",
                "Temecula",
                "Murrieta",
            ],
        },
        secondaryAreas: {
            title: "Extended Service Areas",
            subtitle: "Service available with advance scheduling",
            areas: [
                "Winchester",
                "Sun City",
                "Perris",
                "Lake Elsinore",
                "Canyon Lake",
                "Wildomar",
            ],
        },
        ctaTitle: "Not Sure If We Service Your Area?",
        ctaSubtitle: "Give us a call and we'll let you know!",
    },

    // ==========================================
    // INDIVIDUAL SERVICE AREA PAGES
    // ==========================================
    serviceAreas: [
        {
            id: "hemet",
            name: "Hemet",
            slug: "hemet",
            headline: "Mobile Auto Detailing in Hemet, CA",
            description: "Hemet's trusted mobile auto detailing service. We come to your home or office with all the equipment needed for a professional detail.",
            features: [
                "Same-day service available",
                "We come to your location",
                "All vehicle types welcome",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Downtown Hemet",
                "Four Seasons",
                "Valle Vista",
                "East Hemet",
            ],
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106065.96877829656!2d-117.0237!3d33.7475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6b3f7f3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sHemet%2C%20CA!5e0!3m2!1sen!2sus",
        },
        {
            id: "san-jacinto",
            name: "San Jacinto",
            slug: "san-jacinto",
            headline: "Mobile Auto Detailing in San Jacinto, CA",
            description: "Professional mobile detailing service in San Jacinto. We bring the detail shop to you!",
            features: [
                "Convenient mobile service",
                "Professional results",
                "Competitive pricing",
                "Flexible scheduling",
            ],
            neighborhoods: [
                "Downtown San Jacinto",
                "Soboba Springs",
            ],
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52965.37!2d-116.9667!3d33.7839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSan%20Jacinto%2C%20CA!5e0!3m2!1sen!2sus",
        },
        {
            id: "menifee",
            name: "Menifee",
            slug: "menifee",
            headline: "Mobile Auto Detailing in Menifee, CA",
            description: "Menifee residents trust Splashy Bubbles for professional mobile auto detailing. We come to you!",
            features: [
                "Serving all of Menifee",
                "Interior & exterior detailing",
                "Tesla specialists",
                "Same-day appointments",
            ],
            neighborhoods: [
                "Sun City",
                "Quail Valley",
                "Romoland",
            ],
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106065.96877829656!2d-117.185!3d33.6781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMenifee%2C%20CA!5e0!3m2!1sen!2sus",
        },
        {
            id: "temecula",
            name: "Temecula",
            slug: "temecula",
            headline: "Mobile Auto Detailing in Temecula, CA",
            description: "Professional mobile detailing service in Temecula. From wine country to your driveway, we bring the shine!",
            features: [
                "Full mobile service",
                "All detailing packages",
                "Ceramic coating available",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Old Town Temecula",
                "Redhawk",
                "Harveston",
                "Vail Ranch",
            ],
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106065.96877829656!2d-117.1484!3d33.4936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTemecula%2C%20CA!5e0!3m2!1sen!2sus",
        },
        {
            id: "murrieta",
            name: "Murrieta",
            slug: "murrieta",
            headline: "Mobile Auto Detailing in Murrieta, CA",
            description: "Murrieta's choice for mobile auto detailing. We come to your home or office!",
            features: [
                "Convenient mobile service",
                "Professional-grade products",
                "Competitive pricing",
                "Flexible hours",
            ],
            neighborhoods: [
                "Downtown Murrieta",
                "French Valley",
                "Los Alamos Hills",
            ],
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106065.96877829656!2d-117.2139!3d33.5539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMurrieta%2C%20CA!5e0!3m2!1sen!2sus",
        },
    ],

    // ==========================================
    // UI TEXT
    // ==========================================
    ui: {
        callNow: "Call Now",
        getQuote: "Get Quote",
        learnMore: "Learn More",
        viewAll: "View All",
        readMore: "Read More",
        submitForm: "Submit",
        loading: "Loading...",
        success: "Success!",
        error: "Something went wrong. Please try again.",
        required: "Required",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        followUs: "Follow Us",
        allRightsReserved: "All rights reserved.",
        emergencyService: "Mobile Service Available",
        freeEstimate: "Free Estimate",
        satisfactionGuarantee: "Satisfaction Guaranteed",
    },
};

// Make CONFIG globally available
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
