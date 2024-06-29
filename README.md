# The Remind Notation (TRN)

The Remind Notation (TRN) is a compact musical shorthand for quickly referencing chords, lyrics, and song structure without mid-song scrolling. It's a memory aid for musicians who already know their songs.

## Install

Fork the repo and run:

```bash
npm install
```

Then start the local server: 

```bash
gatsby develop
```

View the site at `http://localhost:8000` 
Explore GraphiQL at `http://localhost:8000/___graphql`

If you run into issues, first try: 

```bash
gatsby clean
```

and restart

## Tech Stack

### React

React handles rendering, providing a dynamic and responsive user experience.

### Gatsby

Gatsby uses React and GraphQL to generate fast, performant static sites. Perfect for TRN's needs.

### GraphQL

GraphQL efficiently fetches and manages data, ensuring everything runs smoothly.

### Markdown

Markdown makes it easy to write and format documentation, keeping things neat and readable.

## Background

TRN was born from the hassle of managing chords and lyrics during performances. The goal? A single-page solution to keep musicians focused on playing, not scrolling.

## Philosophy

Musicians play best from memory. TRN is a simple reminder, not a strict guide, letting you focus on the music's nuances.

## Features

- **Compact Format:** No more mid-song scrolling.
- **Developer-Friendly:** Easy integration and customization.
- **Extensible:** Built with React and Gatsby for flexibility.

## How to Use TRN

1. **Learn the Song:** Use sheet music, online tabs, and your ears.
2. **Use TRN:** Recall chords and lyrics while playing.
3. **Engage Your Audience:** Focus on the music, not the screen.

## How to Read TRN

- **Dash (-):** Separates song parts (e.g., Verse - Chorus - Bridge).
- **Caret (^):** Loops previous chords.
- **Parentheses ( ):** For transitions or optional chords.
- **Slash (/):** Alternates sections.

### Example

- **C G Am - F G C - Am F G:** Verse - Chorus - Bridge
- **Am Em^:** Am Em Am Em, etc.
- **C G ^ Am F:** C G C G Am F
- **C Am ^ (F G):** F and G are transition chords.
- **C(7):** Optional C7th chord.
- **G Em (Am C / D G):** Alternate sections.

## Developer Insights

### Modularity

React makes TRN easy to integrate and extend.

### Customization

Gatsby ensures TRN looks great on any device. Adjust CSS to fit your needs.

### Performance

Gatsby's static site generation means fast load times, even with poor connectivity.

## FAQs

**Is this the final product?**
No, it's a proof of concept for educational purposes.

**How is TRN different from other musical notation?**
It focuses on chord and structure reminders, omitting time and dynamic indicators.

**Can TRN handle complex progressions?**
It suits standard formats best. For complex songs, traditional notation might be needed.

**Are there plans for digital integration?**
Not currently, but it's a possibility for the future.

**How does TRN handle language barriers?**
TRN is language-agnostic, relying on symbols for chords and structure.

## Copyright Fair Use

TRN uses chord and lyric snippets for educational and transformative purposes, not as a substitute for original works. Support artists by purchasing their music and official sheet music.

---

## Usage

TRN is for musicians who know the song and need a compact reminder during performances or rehearsals.