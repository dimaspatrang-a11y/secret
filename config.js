/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Clariza Dewi Octavia",
  photo: "./img/123.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
 sections: [
    {
      type: "greeting",
      title: "Hai Gongju,",
      subtitle: "Hari ini hari paling spesial buat orang paling spesial di hidupku! ❤️",
    },
    {
      type: "countdown",
      from: 3,                      // Hitung mundur sebelum kejutan mulai
      goText: "🎉",                  // Teks setelah hitung mundur selesai
    },
    {
      type: "announcement",
      text: "Selamat ulang tahun yang ke-26, Gongju!! :D",
    },
    {
      type: "chatbox",
      message:
        "Happy 26th Birthday, Gongju! Semoga di usia yang ke-26 ini, semua impianmu tercapai, selalu diberi kesehatan, kebahagiaan, dan kita bisa terus merayakan banyak momen indah bersama ke depannya. neomu salanghaeyo!",
      buttonText: "Kirim Pelukan",
    },
    {
      type: "ideas",
      lines: [
        "Awalnya aku sempat bingung mau kasih kejutan apa...",
        "Tapi kemudian aku sadar.",
        "Aku pengen ngelakuin sesuatu yang <strong>benar-benar spesial</strong> buat kamu.",
        "Kenapa?",
        "Karena kamu sangat berarti di hidupku <span>❤️</span>",
      ],
      bigLetters: "26",
    },
    {
      type: "quote",
      text: "Menua bersama adalah petualangan terindah.",
      author: "Special For You",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy 26th Birthday!",
      wishText: "Semoga senyum manis ini tidak pernah luntur ya! ;)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Udah lihat semuanya kan? Sekarang pose seperti dipintu dulu dong! :*",
      replayText: "Atau klik di sini kalau mau nonton ulang kejutannya.",
    },
  ],
};
