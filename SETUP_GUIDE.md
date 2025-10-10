# Setup Guide - Personal Website

## What's Changed

Your 3D portfolio has been transformed into a comprehensive personal website with:

### New Sections
1. **Portfolio (Home)** - Your existing portfolio content
2. **Blog** - Share your thoughts and experiences
3. **Tutorials** - Step-by-step coding guides
4. **Footer** - Social links (GitHub, LinkedIn, Twitter, Email)

### New Files Created
```
src/pages/
  ├── Home.jsx           # Portfolio homepage
  ├── Blog.jsx           # Blog listing page
  ├── BlogPost.jsx       # Individual blog post
  ├── Tutorials.jsx      # Tutorials listing page
  └── TutorialPost.jsx   # Individual tutorial post

src/components/
  └── Footer.jsx         # Footer with social links

src/utils/
  └── ScrollToTop.jsx    # Smooth scroll utility
```

## Quick Customization

### 1. Update Your Social Links
Edit `src/constants/index.js` (lines 52-73):
```javascript
export const socialLinks = [
  { name: "GitHub", url: "YOUR_GITHUB_URL", icon: "github" },
  { name: "LinkedIn", url: "YOUR_LINKEDIN_URL", icon: "linkedin" },
  { name: "Twitter", url: "YOUR_TWITTER_URL", icon: "twitter" },
  { name: "Email", url: "YOUR_EMAIL", icon: "email" },
];
```

### 2. Add Your Blog Posts
Edit the `blogPosts` array in `src/constants/index.js` (starts at line 292):
- Add your own blog posts
- Use existing posts as templates
- Each post needs: title, slug, description, date, image, tags, content

### 3. Add Your Tutorials
Edit the `tutorials` array in `src/constants/index.js` (starts at line 387):
- Add your tutorials
- Set difficulty: "beginner", "intermediate", or "advanced"
- Include code blocks using triple backticks

### 4. Update Personal Info
- Edit `src/components/Navbar.jsx` (line 46-48) to change your name/title
- Update `src/components/Footer.jsx` (line 43) to change copyright
- Replace `src/assets/resume.pdf` with your resume

## Navigation

### Routes
- `/` - Portfolio homepage
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog post
- `/tutorials` - Tutorials listing
- `/tutorials/[slug]` - Individual tutorial

### Navbar Links
- **Portfolio** - Navigates to home
- **Blog** - Navigates to blog page
- **Tutorials** - Navigates to tutorials page  
- **About** - Scrolls to About section (home page only)
- **Contact** - Scrolls to Contact section (home page only)

## Performance Optimizations Applied

1. Reduced 3D particle count on mobile (3000 → 1500)
2. Optimized pixel ratios for better performance
3. Added proper memory cleanup for 3D scenes
4. Implemented smooth scroll restoration
5. Lazy loading for heavy components

## Running the Application

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Guidelines

### Blog Posts
- Keep descriptions under 150 characters
- Use markdown formatting in content
- Add relevant tags for categorization
- Include GitHub links for code-related posts

### Tutorials
- Start with prerequisites
- Include code examples
- Use `## Headings` for sections
- Wrap code in triple backticks
- Set appropriate difficulty level

### Images
- Place images in `src/assets/`
- Import them in `src/constants/index.js`
- Use existing project images as placeholders

## Deployment

This app is ready to deploy to:
- **Vercel** (recommended - zero config)
- **Netlify** (build: `npm run build`, publish: `dist`)
- **GitHub Pages** (with appropriate base URL config)

## Next Steps

1. ✅ Test the application: `npm run dev`
2. 📝 Update social links with your URLs
3. ✍️ Add your first blog post
4. 🎓 Create your first tutorial
5. 🎨 Customize colors in `tailwind.config.js` (optional)
6. 🚀 Deploy to your preferred platform

## Minimal Design Philosophy

The design remains minimal with:
- Clean typography
- Smooth animations
- Focus on content
- Professional aesthetic
- Fast loading times

## Support

If you need to add more features:
- More routes → Update `src/App.jsx`
- New sections → Create in `src/pages/`
- New components → Add to `src/components/`
- New data → Update `src/constants/index.js`

---

Your website is ready to launch! 🚀

