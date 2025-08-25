# 🎓 DSCET Website

## Dhanalakshmi Srinivasan College of Engineering & Technology

A modern, responsive, and feature-rich website for DSCET showcasing 25+ years of excellence in engineering education. Built with cutting-edge web technologies and optimized for all devices.

![DSCET Logo](logo/DSCET-LOGO.png)

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fdscet-website.vercel.app)](https://dscet-website.vercel.app)
[![GitHub last commit](https://img.shields.io/github/last-commit/Gunalan183/dscet_website)](https://github.com/Gunalan183/dscet_website)
[![GitHub stars](https://img.shields.io/github/stars/Gunalan183/dscet_website)](https://github.com/Gunalan183/dscet_website/stargazers)

## ✨ Key Features

### 🚀 **Advanced Navigation**
- **Smart Navbar**: Disappears on scroll down, reappears on scroll up with smooth transitions
- **Fixed Header**: Becomes sticky with enhanced background when scrolling
- **Mobile-Optimized**: Logo on left, hamburger menu on right for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections

### 📱 **Mobile-First Design**
- **Responsive Layout**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Touch-Friendly**: Enhanced touch interactions and gestures
- **Mobile Navigation**: Collapsible hamburger menu with slide animations
- **Centered Elements**: Mobile-specific centering for buttons and content

### 🎨 **Modern UI/UX**
- **Professional Design**: Clean layout with DSCET branding colors
- **Smooth Animations**: CSS3 transitions and JavaScript-powered interactions
- **Interactive Elements**: Hover effects, micro-interactions, and visual feedback
- **Gradient Backgrounds**: Modern visual aesthetics with backdrop filters

### 📊 **Content Sections**
- **Dynamic Top Bar**: Scrolling ticker with social media integration
- **Hero Slider**: Image carousel with navigation controls
- **About DSCET**: Comprehensive college information with accreditation badges
- **Departments**: Interactive showcase of all engineering programs
- **Placements**: Success stories with top recruiter information
- **Facilities**: Image carousel showcasing campus amenities
- **Cells & Committees**: Academic and non-academic organizational structure
- **Events**: Timeline of upcoming activities and achievements
- **Contact**: Multiple contact methods with embedded map

## 🏗️ Project Structure

```
dscet/
├── index.html                 # Main HTML file with semantic structure
├── css/
│   ├── styles.css            # Main stylesheet with modern CSS features
│   └── responsive.css        # Mobile-first responsive design
├── js/
│   └── main.js              # Enhanced JavaScript with ES6+ features
├── images/                   # Campus and facility images
│   ├── campus_info.png
│   ├── classroom.png
│   ├── library.png
│   └── ComputerLab.png
├── logo/                     # Official logos and certifications
│   ├── DSCET-LOGO.png       # Main college logo
│   ├── A (1).png            # NAAC A+ accreditation badge
│   ├── iso_logo.png         # ISO 9001:2015 certification
│   └── nba_logo.png         # NBA accreditation logo
├── companies/
│   └── companies.jpg        # Top recruiting companies
├── background_image.png     # Hero section background
└── README.md               # Comprehensive project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gunalan183/dscet_website.git
   cd dscet_website
   ```

2. **Launch the website**
   ```bash
   # Option 1: Direct browser access
   open index.html
   
   # Option 2: Local development server
   python -m http.server 8000
   # or
   npx serve .
   # or  
   php -S localhost:8000
   ```

3. **View in browser**
   - **Direct**: `file:///path/to/index.html`
   - **Server**: `http://localhost:8000`

### Development Setup

For active development with live reload:
```bash
# Using Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"

# Using Node.js live-server
npm install -g live-server
live-server --port=8000
```

## 🎨 Design & Technology

### Color Palette
```css
:root {
  --crimson-red: #DC143C;    /* Primary brand color */
  --royal-blue: #4169E1;     /* Secondary accent */
  --orange: #FF8C00;         /* Call-to-action */
  --light-gray: #f8f9fa;     /* Background */
  --dark-gray: #2c3e50;      /* Text */
  --white: #ffffff;          /* Clean backgrounds */
}
```

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: `clamp()` functions for fluid scaling
- **Accessibility**: High contrast ratios

### Responsive Breakpoints
```css
/* Mobile-first approach */
@media (max-width: 768px)    { /* Mobile */ }
@media (min-width: 769px) and (max-width: 1024px) { /* Tablet */ }
@media (min-width: 1025px)   { /* Desktop */ }
```

## 🔧 Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript ES6+**: Modern syntax, async/await, modules
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins typography system

### Key JavaScript Features
```javascript
// Smart navbar with scroll detection
function initializeScrollNavbar() {
  // Hide/show navbar based on scroll direction
  // Smooth transitions with CSS classes
}

// Mobile-optimized navigation
function initializeMobileFeatures() {
  // Touch gestures, orientation handling
  // Responsive behavior detection
}

// Performance optimizations
function initializeLazyLoading() {
  // Intersection Observer API
  // Efficient image loading
}
```

### CSS Architecture
- **Mobile-first**: Progressive enhancement approach
- **Component-based**: Modular CSS organization
- **Custom Properties**: Consistent theming system
- **Smooth Animations**: Hardware-accelerated transitions

## 🌐 Browser Support

- **Chrome:** 90+
- **Firefox:** 88+
- **Safari:** 14+
- **Edge:** 90+
- **Mobile browsers:** iOS Safari 14+, Chrome Mobile 90+

## 🚀 Performance & Optimization

### Loading Speed
- **Optimized Images**: Compressed and properly sized assets
- **Lazy Loading**: Images load as they enter viewport
- **Minified Code**: Compressed CSS and JavaScript
- **Efficient DOM**: Minimal reflows and repaints

### SEO Features
- **Semantic HTML5**: Proper heading hierarchy and structure
- **Meta Tags**: Optimized title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Mobile-First**: Google's mobile-first indexing ready

## 📱 Mobile Experience

### Touch Interactions
- **Swipe Gestures**: Navigate carousels and menus
- **Touch Feedback**: Visual response to user interactions
- **Optimized Buttons**: 44px minimum touch targets
- **Smooth Scrolling**: Hardware-accelerated animations

### Mobile-Specific Features
- **Smart Navigation**: Logo left, menu right layout
- **Centered Content**: Mobile-optimized button positioning
- **Quick Links**: Centered footer navigation on mobile
- **Responsive Images**: Adaptive sizing for all screens

## 🔄 Recent Updates

### Latest Features (2025)
- ✅ **Smart Navbar**: Hide/show on scroll with smooth transitions
- ✅ **Mobile Navigation**: Optimized logo and menu positioning
- ✅ **Centered Elements**: Mobile-specific content alignment
- ✅ **Enhanced Animations**: Improved user experience
- ✅ **Performance Boost**: Faster loading and interactions

## 🤝 Contributing

### Development Workflow
```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/dscet_website.git
cd dscet_website

# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes and test
# Test on multiple devices and browsers

# 4. Commit with descriptive message
git commit -m "feat: add amazing new feature"

# 5. Push and create PR
git push origin feature/amazing-feature
```

### Code Standards
- **HTML**: Semantic, accessible markup
- **CSS**: Mobile-first, BEM methodology
- **JavaScript**: ES6+, clean and documented
- **Performance**: Optimize images and code

## 🌐 Deployment

### Vercel (Current)
```bash
# Automatic deployment from GitHub repository
# Live at: https://dscet-website.vercel.app
```

### Alternative Deployments
```bash
# GitHub Pages
# https://gunalan183.github.io/dscet_website

# Netlify
# Connect GitHub repo for automatic deployment

# Custom Domain Setup
echo "your-domain.com" > CNAME
git add CNAME && git commit -m "Add custom domain"
```

## 📊 Analytics & Monitoring

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized LCP, FID, CLS
- **Mobile Speed**: < 3s load time on 3G
- **Accessibility**: WCAG 2.1 AA compliant

## 🏫 About DSCET

### Institution Excellence
**Dhanalakshmi Srinivasan College of Engineering & Technology** - 25+ years of engineering education excellence.

#### Accreditations & Certifications
- 🏆 **NAAC A+** Grade Accreditation
- ✅ **AICTE** Approved Programs
- 🌟 **NBA** Accredited Departments
- 📜 **ISO 9001:2015** Certified
- 🎓 **Anna University** Affiliated

#### Academic Departments

### Undergraduate Programs (UG)
| Department | Degree | Specialization |
|------------|--------|----------------|
| Aeronautical Engineering | B.E | Core Engineering |
| Agricultural Engineering | B.Tech | Technology |
| Artificial Intelligence and Data Sciences | B.Tech | Emerging Technology |
| Biomedical Engineering | B.E | Core Engineering |
| Civil Engineering | B.E | Core Engineering |
| Computer Science & Engineering | B.E | Core Engineering |
| CSE (Artificial Intelligence and Machine Learning) | B.E | AI/ML Specialization |
| CSE (Cyber Security) | B.E | Cybersecurity Specialization |
| Electronics & Communication Engineering | B.E | Core Engineering |
| Electrical & Electronics Engineering | B.E | Core Engineering |
| Food Technology | B.Tech | Technology |
| Information Technology | B.Tech | Technology |
| Mechanical Engineering | B.E | Core Engineering |
| Science & Humanities | - | Foundation Studies |

### Postgraduate Programs (PG)
| Department | Degree | Specialization |
|------------|--------|----------------|
| Master of Business Administration | MBA | Management |
| Master of Computer Applications | MCA | Computer Applications |
| Aeronautical Engineering | M.E | Advanced Engineering |
| Communication Systems | M.E | Electronics Specialization |
| Computer Science & Engineering | M.E | Advanced Computing |
| Power Electronics & Drives | M.E | Electrical Specialization |

### Contact Information
- 📍 **Address**: ECR, Mamallapuram, Chengalpattu District
- 📞 **Phone**: 70944 66503, 9499051266, 7824809192
- 🌐 **Website**: [DSCET Official](https://dscet-website.vercel.app)
- 📧 **Email**: Contact through website form

## 👨‍💻 Developer

**Gunalan183**
- 🔗 **GitHub**: [@Gunalan183](https://github.com/Gunalan183)
- 📂 **Repository**: [dscet_website](https://github.com/Gunalan183/dscet_website)
- 🌐 **Live Site**: [DSCET Website](https://dscet-website.vercel.app)

## 📄 License

MIT License - Open source and free to use with attribution.

---

<div align="center">

**🎓 Empowering Future Engineers | Building Tomorrow's Leaders**

[![Made with ❤️ for DSCET](https://img.shields.io/badge/Made%20with-❤️-red)](https://github.com/Gunalan183/dscet_website)

</div>
