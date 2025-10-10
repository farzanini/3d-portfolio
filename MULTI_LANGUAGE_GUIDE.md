# Multi-Language Support Guide

Your website now supports **3 languages**: English (default), Farsi (فارسی), and Turkish (Türkçe)!

## 🌍 Features Implemented

### ✅ Language Switcher
- Beautiful dropdown in the navbar (desktop & mobile)
- Flags for each language (🇬🇧 🇮🇷 🇹🇷)
- Saves user's language preference in localStorage
- Auto-detects browser language on first visit

### ✅ Translated Pages
All pages are fully translated:
- Home (Landing page)
- Portfolio
- Blog & Blog Posts
- Tutorials & Tutorial Posts
- Navbar navigation
- Footer

### ✅ RTL Support for Farsi
- Automatic right-to-left text direction
- Properly aligned layouts
- Maintained visual consistency

## 📝 How to Add/Edit Translations

### Translation Files Location
```
src/i18n/locales/
  ├── en.json    (English)
  ├── fa.json    (Farsi/Persian)
  └── tr.json    (Turkish)
```

### Adding New Translations

**Step 1:** Add the key in English (`src/i18n/locales/en.json`)
```json
{
  "home": {
    "newKey": "Your English text here"
  }
}
```

**Step 2:** Add the same key in Farsi (`src/i18n/locales/fa.json`)
```json
{
  "home": {
    "newKey": "متن فارسی شما اینجا"
  }
}
```

**Step 3:** Add the same key in Turkish (`src/i18n/locales/tr.json`)
```json
{
  "home": {
    "newKey": "Türkçe metniniz burada"
  }
}
```

**Step 4:** Use in your component
```jsx
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <p>{t('home.newKey')}</p>;
};
```

## 📚 Adding Multi-Language Blog Posts

### Option 1: Separate Posts per Language
Create different posts for each language in `src/constants/index.js`:

```javascript
const blogPosts = [
  // English post
  {
    title: "Building with React",
    slug: "building-with-react",
    language: "en",
    // ... other fields
  },
  // Farsi post
  {
    title: "ساخت با React",
    slug: "building-with-react-fa",
    language: "fa",
    // ... other fields
  },
  // Turkish post
  {
    title: "React ile Geliştirme",
    slug: "building-with-react-tr",
    language: "tr",
    // ... other fields
  },
];
```

### Option 2: Single Post with Multiple Language Fields
```javascript
const blogPosts = [
  {
    title: {
      en: "Building with React",
      fa: "ساخت با React",
      tr: "React ile Geliştirme"
    },
    slug: "building-with-react",
    description: {
      en: "Learn React basics...",
      fa: "یادگیری مبانی React...",
      tr: "React temellerini öğrenin..."
    },
    content: {
      en: "Full English content...",
      fa: "محتوای کامل فارسی...",
      tr: "Tam Türkçe içerik..."
    },
    // ... other fields
  },
];
```

Then update the Blog component to use the current language:
```jsx
const Blog = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div>
      {blogPosts.map((post) => (
        <h3>{post.title[currentLang] || post.title.en}</h3>
      ))}
    </div>
  );
};
```

## 🎨 Translation Keys Structure

### Current Structure
```
nav.*              - Navigation links
home.*             - Home page content
portfolio.*        - Portfolio page content
blog.*             - Blog page content
tutorials.*        - Tutorials page content
footer.*           - Footer content
services.*         - Service titles
```

### Adding New Sections
```json
{
  "newSection": {
    "title": "Section Title",
    "subtitle": "Section Subtitle",
    "description": "Section Description"
  }
}
```

## 🔄 Changing Default Language

Edit `src/i18n/config.js`:
```javascript
.init({
  fallbackLng: "en",  // Change to "fa" or "tr"
  // ...
});
```

## 🌐 Adding More Languages

**Step 1:** Create new translation file
```
src/i18n/locales/de.json  // German example
```

**Step 2:** Import and add to config (`src/i18n/config.js`)
```javascript
import deTranslations from "./locales/de.json";

i18n.init({
  resources: {
    en: { translation: enTranslations },
    fa: { translation: faTranslations },
    tr: { translation: trTranslations },
    de: { translation: deTranslations },  // Add new language
  },
  // ...
});
```

**Step 3:** Add to Language Switcher (`src/components/LanguageSwitcher.jsx`)
```javascript
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },  // Add new language
];
```

## 🎯 Best Practices

### 1. Keep Keys Consistent
Always use the same key structure across all language files.

### 2. Use Descriptive Keys
```javascript
// Good
t('portfolio.contactForm.submitButton')

// Bad
t('btn1')
```

### 3. Handle Missing Translations
The system falls back to English if a translation is missing.

### 4. Test All Languages
Switch between languages to ensure:
- All text is translated
- Layout looks good (especially RTL)
- No broken keys showing

### 5. RTL Testing
When testing Farsi:
- Check text alignment
- Verify icon/button positioning
- Ensure images display correctly

## 🔧 Technical Details

### How Language Switching Works
1. User clicks language in switcher
2. i18next updates language state
3. React components re-render with new translations
4. Choice saved to localStorage
5. For Farsi: Document direction changes to RTL

### RTL Styling
Farsi automatically gets:
- `dir="rtl"` on `<html>`
- Right-aligned text
- Reversed flex directions
- Proper spacing adjustments

### Browser Detection
On first visit, the system:
1. Checks localStorage for previous choice
2. Falls back to browser language
3. Falls back to English if not supported

## 📱 Testing Multi-Language

### Manual Testing
1. Open http://localhost:5174
2. Click language switcher in navbar
3. Select each language and verify:
   - All text changes
   - Layouts remain intact
   - Farsi shows RTL correctly
   - localStorage saves choice

### Testing Farsi RTL
1. Switch to فارسی
2. Check:
   - Text aligns right
   - Navigation menu reverses
   - Scroll indicators flip
   - Forms display correctly

## 🚀 Deployment Notes

Multi-language support works out of the box on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

No server-side configuration needed!

## 💡 Tips & Tricks

### Quick Translation Workflow
1. Write content in English first
2. Use Google Translate as a starting point
3. Have native speakers review translations
4. Test thoroughly in each language

### Managing Large Translation Files
For large projects, consider splitting translations:
```
locales/en/
  ├── common.json
  ├── home.json
  ├── blog.json
  └── portfolio.json
```

### Dynamic Content
For user-generated content:
- Store in database with language field
- Filter by current language
- Or use translation API services

## 📊 Translation Progress

Track what's translated:
- ✅ Navigation (100%)
- ✅ Home Page (100%)
- ✅ Portfolio (Static UI - 100%)
- ✅ Blog (Static UI - 100%)
- ✅ Tutorials (Static UI - 100%)
- ✅ Footer (100%)
- ⚠️ Blog Posts (Content - Add your own)
- ⚠️ Tutorials (Content - Add your own)

## 🆘 Troubleshooting

### Translations Not Showing
- Check browser console for errors
- Verify JSON syntax in translation files
- Ensure keys match exactly across files

### RTL Not Working
- Check if `dir="rtl"` is set on `<html>`
- Verify Farsi language code is "fa"
- Check browser console for errors

### Language Not Persisting
- Check if localStorage is enabled
- Clear browser cache and try again
- Verify LanguageDetector is configured

---

Your website is now fully multilingual! 🎉

Users can seamlessly switch between English, Farsi, and Turkish, with automatic RTL support for Farsi.

