/**
 * ====================================================================
 * 💌 PERSONALIZATION CONFIGURATION FILE
 * ====================================================================
 * Edit this single file to customize names, dates, messages, photos,
 * memories, and music for the birthday surprise website.
 *
 * All placeholders have beautiful defaults and automatic fallback
 * cleaning, so no raw brackets or "[UNDEFINED]" will ever leak to the visitor.
 */

export const config = {
  // ── 1. PERSONAL DETAILS ──────────────────────────────────────────────
  girlfriend: {
    // Her real name
    name: "Prachi",
    // Her cute nickname used throughout the surprise
    nickname: "Cappuccino",
    // Pronouns / greeting tags
    title: "Birthday Girl",
  },

  sender: {
    // Your real name
    name: "Aditya",
    // Your cute nickname used to sign letters & messages
    nickname: "Burrito",
  },

  // ── 2. DATES & TIMELINES ─────────────────────────────────────────────
  // Format: YYYY-MM-DD or MM/DD/YYYY
  birthdayDate: "2004-10-10",
  // How long you've been together
  relationshipDuration: "5 Years",

  // ── 3. MUSIC CONFIGURATION ───────────────────────────────────────────
  music: {
    // Relative path to local audio file in public/assets/music/
    audioSrc: "assets/music/birthday-song.mp3",
    // Displayed song title in the floating music player badge
    title: "Our Favorite Romantic Melody",
    artist: "With Love",
    // Autoplay policy: starts paused until first click, or plays gentle lofi chime synthesizer if audio file isn't present
    enableSynthesizerFallback: true,
  },

  // ── 4. STAGE 1: WELCOME SCREEN ────────────────────────────────────────
  welcome: {
    topTag: "A little something made just for you...",
    heading: "Your Birthday Surprise Awaits 💌",
    subtitle: "Because the sweetest person deserves a little extra magic today.",
    tapPrompt: "Tap the envelope to begin ✨",
    openButtonText: "Open Your Surprise 💗",
  },

  // ── 5. STAGE 2: THE FIRST LITTLE LETTER ──────────────────────────────
  firstLetter: {
    title: "Before we begin...",
    content: [
      "Hey, my favorite person... 🥹❤️",
      "Before you open anything else, I just want you to know that someone put a little extra love into making this special for you.",
      "Today is all about you, your beautiful smile, your happiness, and all the little things that make you so incredibly special to me.",
      "So take your time, birthday girl. There are a few little surprises waiting for you. 💌"
    ],
    buttonText: "Continue, birthday girl 💗",
  },

  // ── 6. STAGE 3: BIRTHDAY CELEBRATION / COUNTDOWN ────────────────────
  celebration: {
    celebrationTitle: "Today, the world celebrates someone very special... 🎂",
    revealText: "That's YOU! 🥹❤️",
    subtext: "Another year brighter, sweeter, and more wonderful. Make a wish and blow out your candles! ✨",
    countdownTitle: "Counting down to your special day... ⏳💖",
    wishPrompt: "Tap the cake to blow out the candles and make a wish! 🕯️✨",
    wishedText: "May every single wish you make come true today! 🌟💖",
    buttonText: "See Our Memories Next →",
  },

  // ── 7. STAGE 4: MEMORY GALLERY (POLAROID SCRAPBOOK) ───────────────────
  // Place your photos in public/assets/images/ (e.g. photo1.jpg, photo2.jpg)
  // If an image doesn't exist yet, a gorgeous illustrated romantic placeholder is rendered automatically!
  memories: [
    {
      id: 1,
      image: "assets/images/photo1.jpg",
      caption: "That smile I could never get tired of 🥹❤️",
      date: "Looking stunning as always",
      rotation: -2.5,
      tag: "Gorgeous"
    },
    {
      id: 2,
      image: "assets/images/photo2.jpg",
      caption: "You looking as magical as always ✨🌸",
      date: "Pure grace & peace",
      rotation: 2.5,
      tag: "My Angel"
    },
    {
      id: 3,
      image: "assets/images/photo3.jpg",
      caption: "A moment I wish I could relive ✨",
      date: "Magic moments",
      rotation: -2,
      tag: "Always Cherished"
    },
    {
      id: 4,
      image: "assets/images/photo4.jpg",
      caption: "My favorite person, always. 🫶",
      date: "Every single day",
      rotation: 3,
      tag: "My Home"
    },
    {
      id: 5,
      image: "assets/images/photo5.jpg",
      caption: "Us being our silly little selves 😂",
      date: "Nonstop laughter",
      rotation: -1.5,
      tag: "Best Partner in Crime"
    },
    {
      id: 6,
      image: "assets/images/photo6.jpg",
      caption: "A memory I will always keep close 💗",
      date: "Forever in my heart",
      rotation: 2,
      tag: "Endless Love"
    }
  ],
  galleryButtonText: "Next Surprise →",

  // ── 8. STAGE 5: LITTLE REASONS WHY I LOVE YOU ────────────────────────
  reasons: [
    {
      id: 1,
      emoji: "🌸",
      title: "Your Warm Smile",
      text: "Your smile can make an ordinary day feel special. ❤️"
    },
    {
      id: 2,
      emoji: "😂",
      title: "Your Humor",
      text: "I love how you can make me laugh without even trying. 😂"
    },
    {
      id: 3,
      emoji: "☕",
      title: "Our Conversations",
      text: "I love talking to you, even when we're talking about absolutely nothing. 🥹"
    },
    {
      id: 4,
      emoji: "✨",
      title: "The Little Moments",
      text: "You make the little moments feel meaningful. ✨"
    },
    {
      id: 5,
      emoji: "🌷",
      title: "Your Ambition",
      text: "I love the way you chase your dreams. 🌷"
    },
    {
      id: 6,
      emoji: "💗",
      title: "My Whole Heart",
      text: "You have a place in my heart that nobody else could fill. 💗"
    },
    {
      id: 7,
      emoji: "🤭",
      title: "Our Inside Jokes",
      text: "I love our silly conversations and inside jokes. 🤭"
    },
    {
      id: 8,
      emoji: "🫶",
      title: "Endless Smiles",
      text: "You give me so many reasons to smile. 🫶"
    },
    {
      id: 9,
      emoji: "💕",
      title: "The Unique You",
      text: "I love the little things about you that you might not even notice yourself. 💕"
    },
    {
      id: 10,
      emoji: "❤️",
      title: "Simply You",
      text: "Because, at the end of the day, you're you — and that means so much to me. ❤️"
    }
  ],
  reasonsPrompt: "Tap each heart card to reveal what I adore about you 💌",
  reasonsButtonText: "Read My Birthday Letter 💌",

  // ── 9. STAGE 6: THE MAIN BIRTHDAY LETTER ──────────────────────────────
  mainLetter: {
    salutation: "Happy Birthday, my love. ❤️🎂",
    paragraphs: [
      "If I could give you one thing today, it would be the ability to see yourself through my eyes, even for just a moment. Then you would understand how incredibly special you are to me.",
      "I wish I could put every little feeling into words, but sometimes even the longest letters feel too small for everything I want to say.",
      "Thank you for the smiles, the laughter, the conversations, the silly moments, and all the little things that make being with you so special.",
      "I hope this new year of your life brings you happiness that stays, dreams that come true, beautiful opportunities, peaceful days, and countless reasons to smile.",
      "On the days when things feel difficult, I hope you remember how capable, wonderful, and deserving of happiness you are.",
      "I may not always find the perfect words, and I may not always know the perfect thing to do, but I hope you never have to wonder whether you matter to me.",
      "You do. More than a little. More than these words can explain.",
      "Today, I hope you feel loved, appreciated, celebrated, and reminded of just how much you mean to me.",
      "Keep smiling, keep dreaming, keep being your adorable self, and please keep saving some of those silly jokes for me. 😂❤️",
      "Happy Birthday, my favorite person. I hope this year is as beautiful as the happiness you bring into my life."
    ],
    closing: "With all my love,",
    signature: "Burrito ❤️",
    buttonText: "There's a Gift for You 🎁",
  },

  // ── 10. STAGE 7: A SMALL INTERACTIVE GIFT ──────────────────────────────
  gift: {
    teaserText: "Okay, birthday girl... one last little gift before the final surprise. 🎁",
    tapInstruction: "Tap the present to unwrap 🎀",
    unwrappedTitle: "Your Unlimited Love Coupon 🎫💝",
    message: [
      "If hugs could travel through screens, you would be getting the biggest one right now. 🫂❤️",
      "Consider this your unlimited coupon for hugs, cuddles, silly conversations, and being reminded that you're loved. Redeemable whenever you want. No expiry date. 😌💗"
    ],
    buttonText: "One Last Surprise ❤️",
  },

  // ── 11. STAGE 8: THE FINAL SURPRISE ──────────────────────────────────
  finalSurprise: {
    teaserTitle: "Wait... there's one more thing. 👀💌",
    revealButtonText: "One Last Surprise ❤️",
    finalMessage: [
      "If I could give you one thing today, I would give you the ability to see yourself through my eyes.",
      "Then you would finally understand how incredibly special you are to me. ❤️",
      "No matter how far apart we may be at a particular moment, I hope this little corner of the internet reminds you that you are thought of, appreciated, and loved.",
      "Happy Birthday, my beautiful girl. 🎂💗"
    ],
    highlightGreeting: "HAPPY BIRTHDAY, CAPPUCCINO! ❤️🎂",
    finalSignature: "Made with all my love, just for you. 💌",
    footerText: "A little piece of my heart, made just for you. ❤️",
    replayButtonText: "Replay Experience From Start ↺",
    readLetterAgainText: "Read Birthday Letter Again 📜",
  }
};

/**
 * Safe accessor helper to strip any unintended bracket formatting
 * like "[PRACHI ]" -> "Prachi"
 */
export const sanitizeText = (text, fallback = "") => {
  if (!text) return fallback;
  const cleaned = String(text).replace(/^\[\s*/, '').replace(/\s*\]$/, '').trim();
  return cleaned || fallback;
};
