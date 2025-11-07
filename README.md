# uitdev-portfolio

Simple portfolio for UIT (Uthman Sayedi). Bilingual English/Danish single-page site with information about services, projects and contact.

## Features
- 🌍 **Bilingual Support**: English & Danish with language toggle
- 📱 **Responsive Design**: Works on all devices
- ⚡ **Fast & Lightweight**: No external dependencies
- 💾 **Language Preference**: Saved in browser localStorage
- 🎨 **Modern Design**: Clean and professional styling

## Contents
- `index.html` - Bilingual portfolio page
- `styles.css` - Responsive styling
- `script.js` - Language switching functionality
- `README.md` - This file
- `LICENSE` (MIT)
- `CNAME` (optional, contains your domain: uitdev.com)

## Language Toggle
Click the "Dansk" / "English" button in the header to switch between languages. Your preference is automatically saved.

## How to Use

### Local Setup
```bash
git clone https://github.com/uthman-s/uitdev.git
cd uitdev
# Open index.html in your browser
```

### GitHub Pages
1. Go to your repository settings
2. Under "Pages", select "main" branch as the source
3. Your site will be available at `https://uthman-s.github.io/uitdev/`

### Custom Domain (one.com)
1. Login to one.com control panel
2. Point your domain to GitHub Pages or upload files via FTP
3. Enable SSL in one.com settings

## Customization

### Change Content
Edit the `data-en` and `data-da` attributes in `index.html` to update text in both languages.

Example:
```html
<h2 data-en="Hello" data-da="Hej">Hello</h2>
```

### Change Colors
Modify the CSS variables in `styles.css`:
```css
:root {
  --primary: #2b6cb0;  /* Main color */
  --accent: #2a9d8f;   /* Accent color */
}
```

## Contact
- **Email**: contact@uitdev.com
- **LinkedIn**: https://www.linkedin.com/in/uthman-sayedi-a48a2067/
- **Domain**: uitdev.com

## License
MIT License - See LICENSE file for details

---

**English Version / Engelsk Version:**

### Bilingual Portfolio Setup

This portfolio automatically detects the visitor's browser language (English or Danish) and displays content accordingly. Visitors can manually switch languages using the toggle button.

**Features:**
- Automatic language detection
- Local storage language preference
- All content in both English and Danish
- Professional contact information
- Responsive mobile design

### Quick Start
1. Clone or download this repository
2. Open `index.html` in your browser
3. Click "Dansk" or "English" to switch languages

---

**Dansk Version / Danish Version:**

### Flersproget Portfolio-opsætning

Dette portfolio registrerer automatisk besøgendes browserssprog (engelsk eller dansk) og viser indhold derfor. Besøgende kan manuelt skifte sprog ved hjælp af toggle-knappen.

**Funktioner:**
- Automatisk sproggenkendelse
- Lokal opbevaring af sprogsarkitektur
- Alt indhold på både engelsk og dansk
- Professionel kontaktinformation
- Responsivt mobildesign

### Hurtig start
1. Klon eller download dette lager
2. Åbn `index.html` i din browser
3. Klik "Dansk" eller "English" for at skifte sprog