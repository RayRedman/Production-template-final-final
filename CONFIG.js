// ==========================================
// SITE CONFIGURATION
// Reliable Handyman Pros (Template)
// ==========================================

const CONFIG = {
    // ==========================================
    // BRAND IDENTITY
    // ==========================================
    brand: {
        name: "Reliable Handyman Pros",
        tagline: "Repairs, Installations & Small Remodels",
        phone: "(512) 555-0147",
        phoneRaw: "5125550147",
        email: "hello@reliablehandymanpros.com",
        address: "Austin, TX",
        license: "Licensed • Insured",
        logo: "logo.png",
        logoIcon: "tools",
        yearEstablished: 2018,
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
        gradientPrimary: "#1a3a5c",
        gradientAccent: "#f4c430",
        glassBg: "rgba(255, 255, 255, 1)",
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
                { label: "Drywall Repair", href: "services.html#drywall" },
                { label: "TV Mounting", href: "services.html#tv-mounting" },
                { label: "Door & Lock Repair", href: "services.html#doors-locks" },
                { label: "Fixture Installation", href: "services.html#fixtures" },
                { label: "Furniture Assembly", href: "services.html#assembly" },
                { label: "General Repairs", href: "services.html#general-repairs" }
            ]
        },
        {
            label: "Service Areas",
            href: "service-area.html",
            children: [
                { label: "Austin", href: "service-areas/austin.html" },
                { label: "Cedar Park", href: "service-areas/cedar-park.html" },
                { label: "Round Rock", href: "service-areas/round-rock.html" },
                { label: "Georgetown", href: "service-areas/georgetown.html" },
                { label: "Leander", href: "service-areas/leander.html" },
                { label: "Pflugerville", href: "service-areas/pflugerville.html" }
            ]
        },
        { label: "Contact", href: "contact.html" }
    ]

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
            title: "Recent Work",
            subtitle: "Real projects completed for homeowners and businesses",
            items: [
                { src: "/assets/clients/active/projects/01.jpg", alt: "Recent project 1" },
                { src: "/assets/clients/active/projects/02.jpg", alt: "Recent project 2" },
                { src: "/assets/clients/active/projects/03.jpg", alt: "Recent project 3" },
                { src: "/assets/clients/active/projects/04.jpg", alt: "Recent project 4" },
                { src: "/assets/clients/active/projects/05.jpg", alt: "Recent project 5" },
                { src: "/assets/clients/active/projects/06.jpg", alt: "Recent project 6" }
            ],
        }
        
        fallback: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
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
    }

    // ==========================================
    // LEAD CAPTURE FORM
    // ==========================================
    form: {
        title: "Request an Estimate",
        subtitle: "Tell us a bit about the work you need done.",
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
    }

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
    }

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
        { value: "Licensed", label: "& Insured" },
        { value: "Free", label: "Estimates" },
        { value: "Same-Day", label: "Service" },
        { value: "100%", label: "Satisfaction" }
    ]

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
    }

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
    ]

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
