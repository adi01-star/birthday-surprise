# 💌 A Little Birthday Surprise For Prachi (Cappuccino) ❤️

A handcrafted, romantic, interactive birthday surprise website built with love using React, Vite, and CSS 3D animations. Designed to feel like a digital romantic gift that takes her on an emotional journey through eight interactive surprise stages.

---

## 🌟 Surprise Experience Stages

1. **The Welcome Screen & 3D Envelope**: An elegant envelope with realistic triangular flap, heart wax seal, and gentle 3D opening animation with floating heart particles.
2. **The First Little Note**: A parchment letter emerging from the envelope with gentle progressive line reveals.
3. **The Birthday Celebration & Interactive Cake**: Celebratory screen with an interactive birthday cake! She can tap the cake to blow out the candles, make a wish, and see a spark of confetti. Includes an automatic countdown timer if visited before the big day.
4. **Our Little Memory Gallery**: A Polaroid-style scrapbook gallery featuring photo slots with dates, washi-tape decorations, tilt effects, and an interactive tap-to-enlarge lightbox modal. Comes with graceful illustrated fallbacks if photos aren't added yet (no broken images!).
5. **Little Reasons Why I Love You**: An interactive grid of 10 sweet heart cards that flip over when tapped to reveal personal reasons, complete with a "Reveal All Reasons 💖" button.
6. **The Main Birthday Letter**: The emotional centerpiece of the gift—a large, readable parchment letter with floral accents, comfortable typography, and a handwritten signature from Burrito.
7. **The Interactive Gift Box**: A wrapped 3D present with golden ribbons that unwrap on tap, popping confetti to reveal an "Unlimited Love & Hugs Coupon".
8. **The Grand Final Surprise**: A romantic finale with continuous confetti showers, glowing message card, replay button, and a return-to-letter option.

---

## 📁 Project Structure

```text
birthday-surprise/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated free GitHub Pages deployment
├── public/
│   ├── assets/
│   │   ├── images/             # Place your photos here (photo1.jpg - photo6.jpg)
│   │   └── music/              # Place your favorite song here (birthday-song.mp3)
│   ├── favicon.svg             # Romantic envelope & heart favicon
│   └── 404.html                # Single-page application redirect for GitHub Pages
├── src/
│   ├── components/
│   │   ├── Envelope.jsx            # 3D interactive envelope with folding flaps
│   │   ├── WelcomeScreen.jsx       # Landing stage with envelope interaction
│   │   ├── FirstLetter.jsx         # Progressive paper note reveal
│   │   ├── BirthdayCelebration.jsx # Interactive cake, candle blowing & countdown
│   │   ├── MemoryGallery.jsx       # Polaroid scrapbook & photo lightbox
│   │   ├── ReasonsCards.jsx        # 10 interactive flippable love cards
│   │   ├── BirthdayLetter.jsx      # Parchment birthday letter centerpiece
│   │   ├── GiftReveal.jsx          # Interactive unwrapping 3D gift box
│   │   ├── FinalSurprise.jsx       # Grand finale with confetti shower & replay
│   │   ├── MusicPlayer.jsx         # Persistent background music & audio fallback
│   │   ├── FloatingHearts.jsx      # Background drifting hearts & sparkles
│   │   └── ProgressIndicator.jsx   # Accessible stage dots & navigation
│   ├── data/
│   │   └── config.js           # ⚙️ CENTRALIZED PERSONALIZATION CONFIGURATION
│   ├── styles/
│   │   ├── global.css          # Color palette, buttons, cards & typography
│   │   ├── envelope.css        # Realistic 3D envelope transformations & flaps
│   │   ├── animations.css      # Floating hearts, candle flickers, gift unwraps
│   │   └── responsive.css      # Mobile, tablet, desktop & reduced-motion rules
│   ├── App.jsx                 # Stage navigation & state orchestrator
│   └── main.jsx                # Application root
├── index.html
├── vite.config.js              # Configured with relative base path ('./') for GitHub Pages
└── package.json
```

---

## 🛠️ Prerequisites

* **Node.js** (v18 or higher recommended; v24 installed)
* **Git** installed on your machine
* A modern web browser (Chrome, Safari, Edge, Firefox)

---

## 🚀 How to Run Locally

Open **PowerShell** in the project directory (`C:\Users\adity\.gemini\antigravity\scratch\birthday-surprise`):

```powershell
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Vite will start at `http://localhost:5173/`. Open that URL in your browser to experience the website!

To preview the production build locally:
```powershell
npm run build
npm run preview
```

---

## ⚙️ How to Customize (All in `src/data/config.js`)

You only ever need to edit **one file**: [`src/data/config.js`](./src/data/config.js).

### 1. Names and Nicknames
Open `src/data/config.js` and edit the `girlfriend` and `sender` sections:
```javascript
girlfriend: {
  name: "Prachi",
  nickname: "Cappuccino",
  title: "Birthday Girl",
},
sender: {
  name: "Aditya",
  nickname: "Burrito",
}
```

### 2. Changing the Birthday Date & Relationship Duration
```javascript
birthdayDate: "2004-10-10",       // Format: YYYY-MM-DD
relationshipDuration: "5 Years",
```

### 3. Adding Your Photos
1. Copy up to 6 of your favorite photos together into `public/assets/images/`:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`
   - `photo6.jpg`
   *(Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`)*
2. Customize the captions and dates in `src/data/config.js`:
```javascript
memories: [
  {
    id: 1,
    image: "assets/images/photo1.jpg",
    caption: "Our first trip together ❤️",
    date: "Summer 2021",
    tag: "Unforgettable"
  },
  // ...
]
```
> **Note**: If you don't add photos yet, the website displays illustrated romantic memory cards with cute badges instead of broken image icons.

### 4. Adding Your Background Song
1. Place your MP3 file into `public/assets/music/` and name it `birthday-song.mp3`.
2. In `src/data/config.js`:
```javascript
music: {
  audioSrc: "assets/music/birthday-song.mp3",
  title: "Our Favorite Song",
}
```
> **Note**: If no audio file is present, the website features a built-in soothing Web Audio API music-box chime synthesizer so background music always works smoothly!

### 5. Editing the Birthday Letter & Reasons
Inside `src/data/config.js`:
- Edit `firstLetter.content` to change the initial note.
- Edit `reasons` array to personalize the 10 sweet reasons why you love her.
- Edit `mainLetter.paragraphs` to rewrite the emotional birthday letter.
- Edit `gift.message` to customize the unlimited coupon.
- Edit `finalSurprise.finalMessage` to tweak the final romantic words.

---

## 🌐 How to Deploy to GitHub Pages for Free

The project is already pre-configured with relative asset paths (`base: './'`) and an automated GitHub Actions deployment workflow.

### Step-by-Step Instructions:

1. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Name it `birthday-surprise` (or any romantic name like `for-prachi`).
   - Leave it **Public** (or **Private** if you have GitHub Pro for private Pages).
   - Do **NOT** initialize with README or license.

2. **Push the project from your terminal**:
   ```powershell
   git remote add origin https://github.com/<your-username>/birthday-surprise.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site!

4. **Your Live Link**:
   - In 1–2 minutes, your website will be live at:
     `https://<your-username>.github.io/birthday-surprise/`

---

## 🔒 Privacy & Sharing Tips

* **Public URLs**: Anyone who has the GitHub Pages link can view the website. Only use photos and messages you are comfortable sharing via a public link.
* **No External Servers**: This website runs completely client-side. No user data, messages, or images are ever sent to third-party tracking servers or databases.

---

## 📋 Final Pre-Share Checklist

- [ ] Replaced any placeholder dates in `src/data/config.js`.
- [ ] Added your photos into `public/assets/images/` and verified captions.
- [ ] Added your favorite song to `public/assets/music/birthday-song.mp3`.
- [ ] Reviewed the emotional letter in `src/data/config.js` to ensure your signature is perfect.
- [ ] Tested on your mobile phone to experience how it looks in her hands!
- [ ] Replayed the surprise once to ensure every transition brings a smile! ❤️
