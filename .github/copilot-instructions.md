# Copilot Instructions for Personal Site

## Project Overview
This is a personal portfolio website showcasing skills, projects, and contact information. The site uses vanilla JavaScript with an AngularJS-inspired architecture and Apple-inspired design aesthetics.

## Technology Stack
- **HTML5**: Semantic markup for content structure
- **CSS3**: Apple-inspired design system with custom properties
- **Vanilla JavaScript**: AngularJS-inspired architecture with IIFE pattern
- **No build tools**: Static site with no compilation or bundling required

## Code Style Guidelines

### JavaScript
- Use IIFE (Immediately Invoked Function Expression) pattern to encapsulate code
- Use `'use strict'` mode
- Prefer `const` for immutable values, `let` for variables
- Use descriptive variable names (e.g., `appData`, `observerOptions`)
- Follow the AngularJS-inspired data model pattern with centralized `appData` object
- Use ES6+ features where appropriate (arrow functions, template literals, destructuring)
- Add smooth animations and transitions for better UX

### CSS
- Use CSS custom properties (variables) defined in `:root` for theming
- Follow Apple-inspired design principles: clean, minimal, elegant
- Use the existing color palette:
  - Primary: `--primary-color: #007AFF`
  - Secondary: `--secondary-color: #5856D6`
  - Text: `--text-primary` and `--text-secondary`
- Maintain responsive design with mobile-first approach
- Use flexbox and modern layout techniques
- Apply smooth transitions: `var(--transition)` for interactive elements
- Preserve backdrop blur effects for glassmorphism

### HTML
- Use semantic HTML5 elements (`<nav>`, `<section>`, `<header>`, etc.)
- Maintain consistent ID naming for navigation anchors
- Keep class names descriptive and BEM-like where appropriate
- Ensure all sections have proper IDs for smooth scrolling

## Architecture Patterns

### Data Model
- Centralize all content in the `appData` object at the top of `app.js`
- Structure data by sections: `hero`, `about`, `skills`, `projects`, `contact`
- Keep data separate from DOM manipulation logic

### Animations
- Use Intersection Observer API for scroll-triggered animations
- Apply fade-in and translate effects for cards
- Maintain smooth scroll functionality for navigation links
- Add navbar scroll effects for enhanced UX

### File Organization
- `index.html`: Main HTML structure with all sections
- `styles.css`: All styles following Apple design system
- `app.js`: All JavaScript functionality with data model
- Keep files focused and avoid splitting unless necessary

## Best Practices
1. **Performance**: Minimize DOM queries; cache selectors when possible
2. **Accessibility**: Ensure semantic HTML and proper ARIA labels where needed
3. **Browser Compatibility**: Use modern features with broad support
4. **Maintainability**: Keep code DRY and well-commented only when necessary
5. **Design Consistency**: Follow Apple's design language throughout
6. **Responsive Design**: Test on mobile, tablet, and desktop viewports

## Common Tasks

### Adding a New Skill
1. Add entry to `appData.skills` array in `app.js`
2. Include `icon`, `name`, and `description` properties
3. The skill card will be automatically rendered

### Adding a New Project
1. Add entry to `appData.projects` array in `app.js`
2. Include `title`, `description`, and `technologies` array
3. The project card will be automatically rendered

### Modifying Content
- All text content should be updated in the `appData` object
- Keep the data model synchronized with the HTML structure
- Maintain consistency between data and initial HTML content

## Design System Reference
- **Typography**: San Francisco font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`)
- **Spacing**: Follow 8px grid system
- **Border Radius**: Use subtle rounded corners for cards
- **Shadows**: Subtle shadows with `var(--shadow)`
- **Transitions**: Use `var(--transition)` for consistent timing
- **Colors**: Stick to the defined color palette in CSS variables

## Testing
- Test all interactive elements manually in the browser
- Verify smooth scrolling functionality works correctly
- Check responsive behavior on different screen sizes
- Ensure animations trigger properly on scroll

## Notes
- This is a static site with no server-side components
- No build process or package manager is required
- Keep dependencies minimal (currently zero external dependencies)
- Focus on clean, maintainable, and performant vanilla JavaScript
