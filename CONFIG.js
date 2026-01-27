// ==========================================
// SITE CONFIGURATION
// Reliable Handyman Pros (Template)
// ==========================================

const CONFIG = {
  // ================================
  // BRAND IDENTITY
  // ================================
  brand: {
    name: "Reliable Handyman Pros",
    tagline: "Repairs, Installations & Small Remodels",
    phone: "(512) 555-0147",
    phoneRaw: "5125550147",
    email: "hello@reliablehandymanpros.com",
    address: "Austin, TX",
    hours: "Mon-Sat: 7AM - 7PM",
    license: "Licensed • Insured",
    logo: "logo.png",
    logoIcon: "tools",
    yearEstablished: 2018,
  },

  // ================================
  // THEME & COLORS
  // ================================
  theme: {
    primaryColor: "#1a3a5c",
    primaryDark: "#0f2a42",
    primaryLight: "#2a5a8c",
    accentColor: "#f4c430",
    accentDark: "#d4a820",
    accentLight: "#ffe066",
    gold: "#f4c430",
    green: "#28A745",
    gradientPrimary: "#1a3a5c",
    gradientAccent: "#f4c430",
    glassBg: "rgba(255, 255, 255, 1)",
    shadowSoft: "0 4px 20px rgba(0, 0, 0, 0.08)",
    shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowStrong: "0 15px 50px rgba(0, 0, 0, 0.15)",
  },

  // ================================
  // NAVIGATION
  // ================================
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Services", href: "services.html" },
    { label: "Service Areas", href: "service-area.html" },
    { label: "Contact", href: "contact.html" },
  ],

  // ================================
  // TOP BAR
  // ================================
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
    // TRUST LOGOS - Certifications bar under nav
    // ==========================================
    trustLogos: {
        enabled: true,
        title: "Trusted & Certified",
        logos: [
            { name: "Google", rating: "4.9" },
            { name: "BBB", rating: "A+" },
            { name: "HomeAdvisor", rating: null },
            { name: "Angi", rating: null },
        ],
    },

    // ==========================================
    // SEO
    // ==========================================
    seo: {
        home: {
            title: "Reliable Handyman Pros | Austin, TX",
            description: "Professional handyman services in Austin, TX. Repairs, installations, and small remodels. Licensed & insured. 4.9★ on Google. Call (512) 555-0147",
        },
        about: {
            title: "About Us | Reliable Handyman Pros",
            description: "Austin's trusted handyman service. We bring professional repairs and installations to your home or business.",
        },
        services: {
            title: "Handyman Services | Reliable Handyman Pros Austin",
            description: "Drywall repair, TV mounting, door repairs, fixture installation, furniture assembly, and general home repairs in Austin and surrounding areas.",
        },
        contact: {
            title: "Contact | Reliable Handyman Pros",
            description: "Book your handyman service today. Call (512) 555-0147 or request a free estimate online.",
        },
        serviceArea: {
            title: "Service Areas | Reliable Handyman Pros",
            description: "Handyman services in Austin, Cedar Park, Round Rock, Georgetown, Leander, Pflugerville and surrounding areas.",
        },
    },

    // ==========================================
    // IMAGES
    // ==========================================
    images: {
        basePath: "/assets/clients/active/",
        hero: "/assets/clients/active/hero.jpg",
        about: "/assets/clients/active/about.jpg",
        whyUs: "/assets/clients/active/why-us.jpg",
        contact: "/assets/clients/active/contact.jpg",
        
        services: {
            "drywall": "/assets/clients/active/services/drywall.jpg",
            "tv-mounting": "/assets/clients/active/services/tv-mount.jpg",
            "doors-locks": "/assets/clients/active/services/door.jpg",
            "fixtures": "/assets/clients/active/services/fixtures.jpg",
            "assembly": "/assets/clients/active/services/assembly.jpg",
            "general-repairs": "/assets/clients/active/services/repairs.jpg",
        },
        
        gallery: {
            enabled: true,
            title: "Recent Work",
            subtitle: "Real projects completed for homeowners and businesses",
            items: [
                { src: "/assets/clients/active/projects/01.jpg", alt: "Drywall repair project" },
                { src: "/assets/clients/active/projects/02.jpg", alt: "TV mounting installation" },
                { src: "/assets/clients/active/projects/03.jpg", alt: "Door repair" },
                { src: "/assets/clients/active/projects/04.jpg", alt: "Light fixture installation" },
                { src: "/assets/clients/active/projects/05.jpg", alt: "Furniture assembly" },
                { src: "/assets/clients/active/projects/06.jpg", alt: "General home repairs" }
            ],
        },
        fallback: "/assets/clients/active/fallback.jpg"
    },


    // ==========================================
    // HERO
    // ==========================================
    hero: {
        label: "Handyman Services",
        badge: "Licensed • Insured • Local",
        headline: "Handyman Services in",
        headlineAccent: "Austin, TX",
        subhead: "Repairs, installs, and small remodels — done right the first time. Fast scheduling and clear pricing.",
        backgroundImage: "/assets/clients/active/hero.jpg",
        features: [
            "Free Estimates",
            "Same-Day Service",
            "Satisfaction Guaranteed"
        ],
        trustStrip: {
            enabled: true,
            items: [
                "Licensed & Insured",
                "4.9 ★ Google Rating",
                "Same-Day Service",
                "Satisfaction Guaranteed",
                "Serving Austin Since 2018"
            ]
        },
        guaranteeBadge: {
            enabled: false,
            text: "",
            subtext: "",
        },
        ctaPrimary: {
            text: "Request Estimate",
            href: "#quote",
        },
        ctaSecondary: {
            text: "Call Now",
            href: "tel:5125550147",
        },
    },

    // ==========================================
    // LEAD CAPTURE FORM
    // ==========================================
    form: {
        title: "Request an Estimate",
        subtitle: "Tell us about your project and we'll provide a free, no-obligation estimate.",
        formTitle: "Get Your Free Quote",
        formSubtitle: "No spam, no hassle — just honest pricing",
        responseBadge: "We Respond Within 30 Minutes",
        phoneCtaLabel: "Prefer to talk? Call us now:",
        submitText: "Request Estimate",
        privacyText: "Your information is secure and never shared.",
        messagePlaceholder: "Describe the work you need done (rooms, materials, photos, timing)...",
        consentText: "I agree to receive text messages and calls about my inquiry.",
        ghlWebhook: "",
        fields: [
            { name: "name", label: "Full Name", type: "text", placeholder: "John Smith", required: true },
            { name: "phone", label: "Phone Number", type: "tel", placeholder: "(512) 555-0147", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: false },
        ],
        showServiceDropdown: true,
        serviceOptions: [
            { value: "", label: "Select Service Needed" },
            { value: "drywall", label: "Drywall Repair" },
            { value: "tv-mounting", label: "TV Mounting" },
            { value: "doors-locks", label: "Door & Lock Repair" },
            { value: "fixtures", label: "Fixture Installation" },
            { value: "assembly", label: "Furniture Assembly" },
            { value: "general-repairs", label: "General Home Repairs" },
            { value: "other", label: "Other / Not Sure" },
        ],
        features: [
            "Free Estimates",
            "Same-Day Service Available",
            "No Obligation",
            "Licensed & Insured"
        ],
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
        subtitle: "Professional repairs and installations for your home or business",
        viewAllText: "View All Services",
        viewAllLink: "services.html",
        learnMoreText: "Learn More",
        items: [
            {
                id: "drywall",
                title: "Drywall Repair",
                shortDesc: "Patching holes, cracks, and damaged walls.",
                fullDesc: "Professional drywall patching and repair for holes, cracks, water damage, and dents. We prep, patch, sand, and leave a clean finish ready for paint.",
                icon: "hammer",
                image: "/assets/clients/active/services/drywall.jpg",
                features: [
                    "Hole & Crack Repair",
                    "Water Damage Patching",
                    "Sanding & Prep",
                    "Clean Work Area"
                ],
            },
            {
                id: "tv-mounting",
                title: "TV Mounting",
                shortDesc: "Secure installation on drywall, brick, or concrete.",
                fullDesc: "Safe, level TV mounting with proper anchors and clean cable routing options. We bring the right hardware for your wall type and layout.",
                icon: "toolbox",
                image: "/assets/clients/active/services/tv-mount.jpg",
                features: [
                    "Stud Finding",
                    "Level Install",
                    "Hardware Included*",
                    "Optional Cable Management"
                ],
            },
            {
                id: "doors-locks",
                title: "Door & Lock Repair",
                shortDesc: "Fix sticking doors, broken hardware, and alignment issues.",
                fullDesc: "We repair and adjust interior and exterior doors, replace or repair locks and handles, and fix alignment issues so everything closes smoothly and securely.",
                icon: "shield",
                image: "/assets/clients/active/services/door.jpg",
                features: [
                    "Alignment & Hinges",
                    "Lock/Handle Replacement",
                    "Weatherstrip Adjustments",
                    "Secure Fit"
                ],
            },
            {
                id: "fixtures",
                title: "Fixture Installation",
                shortDesc: "Lights, fans, faucets, and hardware installs.",
                fullDesc: "Professional installation of common household fixtures and hardware. We follow manufacturer specs and leave a clean finish.",
                icon: "wrench",
                image: "/assets/clients/active/services/fixtures.jpg",
                features: [
                    "Light Fixtures",
                    "Ceiling Fans",
                    "Faucets & Hardware",
                    "Clean Finish"
                ],
            },
            {
                id: "assembly",
                title: "Furniture Assembly",
                shortDesc: "Beds, desks, shelving, and more.",
                fullDesc: "Fast, careful furniture assembly for common brands and custom pieces. We tighten, level, and ensure everything is safe and sturdy.",
                icon: "home",
                image: "/assets/clients/active/services/assembly.jpg",
                features: [
                    "Fast Assembly",
                    "Leveling & Tightening",
                    "Wall Anchors (as needed)",
                    "Cleanup"
                ],
            },
            {
                id: "general-repairs",
                title: "General Home Repairs",
                shortDesc: "Small fixes that keep your home running smoothly.",
                fullDesc: "From punch-list items to small repairs around the home, we handle the details so you don’t have to.",
                icon: "check-circle",
                image: "/assets/clients/active/services/repairs.jpg",
                features: [
                    "Punch List Work",
                    "Small Repairs",
                    "Installations",
                    "Reliable Scheduling"
                ],
            }
        ]
    },

    // ==========================================
    // PROCESS / HOW IT WORKS
    // ==========================================
    process: {
        label: "How It Works",
        title: "Simple & Easy Process",
        steps: [
            {
                number: "1",
                title: "Request a Quote",
                desc: "Fill out our quick form or give us a call to schedule your service.",
            },
            {
                number: "2", 
                title: "We Come to You",
                desc: "Our team arrives at your location with all equipment and supplies.",
            },
            {
                number: "3",
                title: "Enjoy the Results",
                desc: "Relax while we handle the repairs. Your home, handled.",
            },
        ],
    },

    // ==========================================
    // WHY CHOOSE US
    // ==========================================
    whyUs: {
        title: "Why Choose Reliable Handyman Pros",
        subtitle: "We bring professional repairs and installations directly to your home. No hassle, just results.",
        image: null,
        items: [
            {
                icon: "truck",
                title: "We Come To You",
                description: "Mobile service at your home, office, or anywhere in Austin and surrounding areas.",
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
        label: "Our Work",
        title: "Recent Projects",
        subtitle: "See the quality and care we bring to every job.",
        images: [
            { src: "/assets/clients/active/projects/01.jpg", alt: "Drywall repair project" },
            { src: "/assets/clients/active/projects/02.jpg", alt: "TV mounting installation" },
            { src: "/assets/clients/active/projects/03.jpg", alt: "Door repair" },
            { src: "/assets/clients/active/projects/04.jpg", alt: "Light fixture installation" },
            { src: "/assets/clients/active/projects/05.jpg", alt: "Furniture assembly" },
            { src: "/assets/clients/active/projects/06.jpg", alt: "General home repairs" },
        ],
    },

    // ==========================================
    // STATISTICS
    // ==========================================
    stats: [
        { value: "Licensed", label: "& Insured" },
        { value: "Free", label: "Estimates" },
        { value: "Same-Day", label: "Service" },
        { value: "100%", label: "Satisfaction" }
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
                text: "On time, explained the work clearly, and finished faster than expected.",
                author: "Mark R.",
                location: "Austin, TX",
                rating: 5,
                avatar: null,
            },
            {
                text: "Handled several small repairs in one visit. Clean work and fair pricing.",
                author: "Sarah L.",
                location: "Round Rock, TX",
                rating: 5,
                avatar: null,
            },
            {
                text: "Booked easily and showed up when they said they would. Would use again.",
                author: "Daniel P.",
                location: "Cedar Park, TX",
                rating: 5,
                avatar: null,
            }
        ],
    },

    // ==========================================
    // CTA SECTION
    // ==========================================
    cta: {
        title: "Ready to Get Started?",
        subtitle: "Book your handyman service today and we'll come to you.",
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
                question: "How do I request service?",
                answer: "Fill out our quick online form or call us directly. We typically respond within 30 minutes during business hours.",
            },
            {
                question: "How long does a typical job take?",
                answer: "Most small repairs take 1-2 hours. Larger projects like multiple repairs or installations may take half a day. We'll give you an estimate upfront.",
            },
            {
                question: "What areas do you serve?",
                answer: "We serve Austin and surrounding areas including Cedar Park, Round Rock, Georgetown, Leander, and Pflugerville. Contact us to confirm service in your area.",
            },
            {
                question: "Do I need to be home during the service?",
                answer: "We prefer you to be home for the initial walkthrough and final review, but we can work out arrangements if needed.",
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
        description: "Professional handyman services in Austin, TX. We bring quality repairs to your doorstep.",
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
        title: "About Reliable Handyman Pros",
        subtitle: "Professional handyman services in Austin, TX",
        story: {
            title: "Our Story",
            image: null,
            paragraphs: [
                "Reliable Handyman Pros was founded with a simple idea: getting small repairs and installations done shouldn't be a hassle.",
                "We bring professional handyman services directly to your home or business. Based in Austin, Texas, we serve the entire region including Cedar Park, Round Rock, Georgetown, Leander, and Pflugerville.",
                "Our focus on clear communication, fair pricing, and quality workmanship has earned us a 4.9-star rating on Google. We're proud to be Austin's trusted choice for repairs, installations, and small remodels.",
            ],
        },
        values: {
            title: "Why We're Different",
            subtitle: "What sets Reliable Handyman Pros apart",
            items: [
                {
                    icon: "truck",
                    title: "Convenience",
                    description: "We come to you. Fast scheduling, clear communication, and reliable service.",
                },
                {
                    icon: "star",
                    title: "Quality",
                    description: "Professional tools and techniques for results that last.",
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
        subtitle: "Ready to get your project started? Get in touch!",
        showMap: true,
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220984.39868430544!2d-97.9383!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890",
        infoTitle: "Get In Touch",
        infoSubtitle: "Have questions? We'd love to hear from you.",
        hoursTitle: "Business Hours",
        hours: [
            { days: "Monday - Friday", time: "7:00 AM - 7:00 PM" },
            { days: "Saturday", time: "7:00 AM - 7:00 PM" },
            { days: "Sunday", time: "Closed" },
        ],
        emergencyNote: "Text or call anytime for scheduling",
        formTitle: "Request a Quote",
        formSubtitle: "We'll get back to you within 30 minutes",
        formFields: [
            { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
            { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
            { name: "address", type: "text", placeholder: "Service Address", required: false, halfWidth: false },
            { name: "message", type: "textarea", placeholder: "Describe the work you need done...", required: false, halfWidth: false, rows: 4 },
        ],
        formSubmitText: "Request Quote",
    },

    // ==========================================
    // SERVICE AREA PAGE
    // ==========================================
    serviceArea: {
        title: "Areas We Serve",
        subtitle: "Handyman services throughout Austin and surrounding areas",
        description: "We provide professional handyman services throughout the Austin area and surrounding communities. If you don't see your area listed, give us a call—we may still be able to help!",
        showMap: true,
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220984.39868430544!2d-97.9383!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus",
        primaryAreas: {
            title: "Primary Service Areas",
            subtitle: "Same-day service typically available",
            areas: [
                "Austin",
                "Cedar Park",
                "Round Rock",
                "Georgetown",
                "Pflugerville",
            ],
        },
        secondaryAreas: {
            title: "Extended Service Areas",
            subtitle: "Service available with advance scheduling",
            areas: [
                "Leander",
                "Lakeway",
                "Bee Cave",
                "Dripping Springs",
                "Kyle",
                "Buda",
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
            id: "austin",
            name: "Austin",
            slug: "austin",
            headline: "Handyman Services in Austin, TX",
            description: "Reliable handyman services for repairs, installations, and small remodels in Austin. Fast scheduling, clear communication, and clean work.",
            features: [
                "Free estimates",
                "Same-day service available",
                "Licensed & insured",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Downtown",
                "South Austin",
                "East Austin",
                "North Austin",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Austin,+TX&output=embed",
        },
        {
            id: "cedar-park",
            name: "Cedar Park",
            slug: "cedar-park",
            headline: "Handyman Services in Cedar Park, TX",
            description: "Professional handyman repairs and installations in Cedar Park. From punch lists to fixture installs, we make it easy.",
            features: [
                "Free estimates",
                "On-time arrival",
                "Clean, professional work",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Buttercup Creek",
                "Ranch at Brushy Creek",
                "Twin Creeks",
                "Cedar Park Town Center",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Cedar+Park,+TX&output=embed",
        },
        {
            id: "round-rock",
            name: "Round Rock",
            slug: "round-rock",
            headline: "Handyman Services in Round Rock, TX",
            description: "Trusted handyman services in Round Rock for home repairs, mounting, assembly, and general maintenance.",
            features: [
                "Free estimates",
                "Fast scheduling",
                "Quality workmanship",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Downtown Round Rock",
                "Brushy Creek",
                "Forest Creek",
                "Teravista",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Round+Rock,+TX&output=embed",
        },
        {
            id: "georgetown",
            name: "Georgetown",
            slug: "georgetown",
            headline: "Handyman Services in Georgetown, TX",
            description: "Local handyman help in Georgetown for repairs and installations. Simple booking and dependable service.",
            features: [
                "Free estimates",
                "Licensed & insured",
                "Professional tools & setup",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Old Town",
                "Sun City",
                "Berry Creek",
                "Georgetown Village",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Georgetown,+TX&output=embed",
        },
        {
            id: "leander",
            name: "Leander",
            slug: "leander",
            headline: "Handyman Services in Leander, TX",
            description: "Handyman services in Leander for common home repairs, mounting, assembly, and installations.",
            features: [
                "Free estimates",
                "Clear communication",
                "Clean work area",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Crystal Falls",
                "Savannah Ranch",
                "Travisso",
                "Block House Creek",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Leander,+TX&output=embed",
        },
        {
            id: "pflugerville",
            name: "Pflugerville",
            slug: "pflugerville",
            headline: "Handyman Services in Pflugerville, TX",
            description: "Reliable handyman services in Pflugerville. We handle the small fixes and installs that keep your home running smoothly.",
            features: [
                "Free estimates",
                "Same-day service available",
                "Professional results",
                "Satisfaction guaranteed",
            ],
            neighborhoods: [
                "Stone Hill",
                "Falcon Pointe",
                "Wells Point",
                "Highland Park",
            ],
            mapEmbedUrl: "https://www.google.com/maps?q=Pflugerville,+TX&output=embed",
        }
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
        satisfactionGuarantee: "Satisfaction Guaranteed"
    }
};

// Make CONFIG globally available
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
