# GitHub Copilot Instructions for Personal Site

## Project Overview
This is a personal portfolio website for Luan Ferreira, a Software Engineering Student. The site showcases skills, projects, and contact information using a clean, Apple-inspired design system.

## Technology Stack
- **Frontend**: Vanilla JavaScript (AngularJS-inspired architecture)
- **Styling**: CSS with custom properties (CSS variables)
- **Structure**: HTML5 with semantic markup
- **No build tools or frameworks**: Pure HTML, CSS, and JavaScript

## Code Style and Standards

### JavaScript
- Use vanilla JavaScript with an AngularJS-inspired approach
- Follow the existing IIFE (Immediately Invoked Function Expression) pattern
- Use strict mode: `'use strict';`
- Maintain the MVC-like structure with data models
- Use camelCase for variable and function names
- Use const for data that doesn't change, let for variables
- Add descriptive comments for complex logic

### HTML
- Use semantic HTML5 elements (nav, section, article, etc.)
- Maintain consistent class naming with BEM-like conventions
- Use kebab-case for class names (e.g., `hero-title`, `skill-card`)
- Include proper ARIA labels for accessibility
- Keep the structure organized with clear section comments

### CSS
- Use CSS custom properties (CSS variables) defined in `:root`
- Follow the Apple-inspired design system
- Use the existing color palette defined in CSS variables
- Maintain responsive design with mobile-first approach
- Use flexbox and grid for layouts
- Follow the naming convention: component-modifier pattern

## Design System
The site uses an Apple-inspired design system with:
- Primary color: `#007AFF`
- Secondary color: `#5856D6`
- Font: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI'...`)
- Smooth transitions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Glassmorphism effects with backdrop-filter
- Clean, minimalist aesthetic

## File Organization
- `index.html` - Main HTML structure
- `styles.css` - All styling rules
- `app.js` - Application logic and data models
- Keep all files in the root directory (no complex folder structure)

## Best Practices
- Maintain accessibility standards (ARIA labels, semantic HTML)
- Ensure responsive design across all devices
- Keep code clean and well-commented
- Follow existing patterns and conventions
- Test visual changes in multiple browsers
- Maintain consistent spacing and indentation (4 spaces)
- Preserve the existing animation and transition effects

## When Making Changes
- Preserve the Apple-inspired design aesthetic
- Maintain consistency with existing code style
- Test responsive behavior on different screen sizes
- Ensure smooth animations and transitions
- Keep the user experience clean and professional
- Update all three files (HTML, CSS, JS) consistently if needed
