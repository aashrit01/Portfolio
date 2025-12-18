# 🌟 Personal Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations and a mobile-friendly interface.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Eye-catching animations and transitions
- **Interactive Navigation** - Smooth scrolling and active section highlighting
- **Modern UI** - Beautiful gradient colors and card-based layouts
- **Fast Loading** - Lightweight and optimized for performance
- **Easy to Customize** - Simple structure for quick personalization

## 🚀 Live Demo

Once deployed, your site will be available at: `https://aashrit01.github.io/Portfolio/`

## 📁 Project Structure

```
Portfolio/
├── index.html       # Main HTML file
├── styles.css       # All CSS styles
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## 🛠️ Customization Guide

### 1. Update Personal Information

**In `index.html`:**

- **Line 12:** Change the page title
- **Line 24:** Update your name in the logo
- **Line 38-39:** Modify your name and tagline
- **Line 40-43:** Update your introduction text
- **Lines 53-64:** Edit the About Me section
- **Lines 119-157:** Add your actual projects with links
- **Lines 166-177:** Update contact information and social links

### 2. Customize Colors

**In `styles.css` (lines 11-18):**

```css
:root {
    --primary-color: #6366f1;     /* Main theme color */
    --secondary-color: #8b5cf6;   /* Secondary color */
    --accent: #ec4899;            /* Accent color */
    /* ... other colors */
}
```

### 3. Add Your Skills

**In `index.html` (lines 71-108):**

Replace the existing skill cards with your own technologies. You can find icon codes at [Font Awesome](https://fontawesome.com/icons).

### 4. Add Your Projects

**In `index.html` (lines 119-157):**

Replace placeholder projects with your actual work:
- Add project titles and descriptions
- Link to GitHub repositories
- Add live demo links
- Consider adding project screenshots

### 5. Update Social Links

**In `index.html`:**
- **Line 170:** LinkedIn profile URL
- **Line 186:** LinkedIn footer link
- **Line 187:** Twitter/X profile link

## 🌐 Deploying to GitHub Pages

### Step 1: Push Your Code

```bash
# Stage all files
git add .

# Commit your changes
git commit -m "Initial portfolio setup"

# Push to GitHub
git push origin main
```

When you push, you'll be prompted to enter your GitHub credentials:
- **Username:** `aashrit01`
- **Password:** Use your **Personal Access Token** (not your GitHub password)

### Step 2: Enable GitHub Pages

1. Go to your repository: `https://github.com/aashrit01/Portfolio`
2. Click on **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 3: Access Your Site

Your portfolio will be live at: **`https://aashrit01.github.io/Portfolio/`**

*Note: It may take a few minutes for your site to become available.*

## 📝 Getting Your Personal Access Token

If you don't have a Personal Access Token:

1. Go to GitHub.com (logged in as aashrit01)
2. Click your profile picture → **Settings**
3. Scroll down → **Developer settings** (left sidebar)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name (e.g., "Portfolio Deploy")
7. Select expiration (e.g., 90 days)
8. Check the **repo** scope (full control)
9. Click **Generate token**
10. **Copy the token immediately** (you won't see it again!)
11. Use this token as your password when pushing to GitHub

## 🎨 Sections Overview

1. **Hero Section** - Eye-catching introduction with your name and tagline
2. **About Section** - Tell your story and background
3. **Skills Section** - Showcase your technical skills with icons
4. **Projects Section** - Display your best work with links
5. **Contact Section** - Make it easy for people to reach you
6. **Footer** - Social links and copyright

## 💡 Tips for Success

- **Keep it simple** - Focus on your best 3-5 projects
- **Use real content** - Replace all placeholder text with your actual information
- **Add images** - Consider adding a profile photo and project screenshots
- **Update regularly** - Keep your portfolio current with new projects
- **Test on mobile** - Most visitors will view on mobile devices
- **Get feedback** - Share with friends and iterate

## 🔧 Local Development

To view your portfolio locally:

1. Open `index.html` in your web browser, or
2. Use a local server:

```bash
# With Python 3
python -m http.server 8000

# With Node.js
npx serve
```

Then visit `http://localhost:8000` in your browser.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and create your own version!

## 📄 License

Free to use for personal projects.

## 🙋 Need Help?

If you run into any issues:
1. Check that all files are in the same directory
2. Make sure you've pushed to the `main` branch
3. Verify GitHub Pages is enabled in repository settings
4. Wait a few minutes after enabling GitHub Pages

---

**Built with ❤️ by Aashrit**

*Last updated: December 2025*

