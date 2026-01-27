#!/usr/bin/env node
/**
 * Generate Service Pages
 * 
 * Reads CONFIG.js and generates individual HTML files for each service
 * in the /services/ directory.
 * 
 * Usage: node scripts/generate-services.js
 */

const fs = require('fs');
const path = require('path');

// Resolve paths relative to project root
const projectRoot = path.resolve(__dirname, '..');
const configPath = path.join(projectRoot, 'CONFIG.js');
const servicesDir = path.join(projectRoot, 'services');

// Read and evaluate CONFIG.js
const configContent = fs.readFileSync(configPath, 'utf8');

// Extract CONFIG object - CONFIG.js exports via window.CONFIG or module.exports
// We need to create a mock environment for it
const vm = require('vm');
const sandbox = { 
    CONFIG: null,
    window: {},
    module: { exports: {} }
};
vm.createContext(sandbox);
vm.runInContext(configContent, sandbox);

// Get CONFIG from whichever export method was used
const CONFIG = sandbox.CONFIG || sandbox.window.CONFIG || sandbox.module.exports;

if (!CONFIG || !CONFIG.services || !CONFIG.services.items) {
    console.error('Error: CONFIG.services.items not found in CONFIG.js');
    process.exit(1);
}

// Ensure services directory exists
if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
}

// Thin stub page template - loads canonical template engine
// Service slug is determined from pathname by _template.js
const servicePageTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="page-title">Service | Home Services</title>
    <meta name="description" id="meta-description" content="">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- Shared Styles -->
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <!-- PROMO BANNER -->
    <div class="promo-banner" id="promo-banner"></div>
    <!-- TOP BAR -->
    <div class="top-bar" id="top-bar"></div>
    <!-- HEADER -->
    <header class="header" id="header"></header>
    <!-- MOBILE MENU -->
    <div class="mobile-menu" id="mobile-menu"></div>
    <!-- HERO -->
    <section class="hero" id="hero"></section>
    <!-- QUOTE FORM SECTION -->
    <section class="quote-section" id="quote-section"></section>
    <!-- WHAT'S INCLUDED -->
    <section class="services" id="services"></section>
    <!-- PROCESS -->
    <section class="process" id="process"></section>
    <!-- WHY US -->
    <section class="why-us" id="why-us"></section>
    <!-- REVIEWS -->
    <section class="reviews" id="reviews"></section>
    <!-- CTA -->
    <section class="cta" id="cta"></section>
    <!-- FAQ -->
    <section class="faq" id="faq"></section>
    <!-- FOOTER -->
    <footer class="footer" id="footer"></footer>
    <!-- STICKY MOBILE CTA -->
    <div class="sticky-mobile-cta" id="sticky-mobile-cta"></div>

    <!-- Core Scripts -->
    <script src="/CONFIG.js"></script>
    <script src="/core.js"></script>
    <!-- Service Template Engine (single source of truth) -->
    <script src="/services/_template.js"></script>
</body>
</html>`;

// Generate a page for each service
const services = CONFIG.services.items;
let generatedCount = 0;

services.forEach(service => {
    // Use slug if available, otherwise use id
    const serviceSlug = service.slug || service.id;
    const filename = `${serviceSlug}.html`;
    const filepath = path.join(servicesDir, filename);
    
    fs.writeFileSync(filepath, servicePageTemplate, 'utf8');
    console.log(`Generated: /services/${filename}`);
    generatedCount++;
});

console.log(`\n✓ Generated ${generatedCount} service pages in /services/`);
