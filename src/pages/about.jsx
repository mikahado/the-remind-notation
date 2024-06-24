import React from 'react'
import Layout from '../layout/layout'
import '../styles/index.css'

const About = () => {
  return (
    <Layout>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <main>
              <div className="note-area note-page-section">
                <p>
                  The Remind Notation (TRN) is a streamlined musical shorthand
                  designed to help musicians quickly reference chords, lyrics,
                  and song structure without the need for mid-song scrolling.
                  It’s a quick memory-aiding tool for those who already know the
                  songs.
                  <small>
                    TRN serves an educational and informative purpose. All lyrics and chords remain the property of their respective artists.
                  </small>
                </p>

                <div className="logo-container-2">
                  <a href="https://shorturl.at/qkgbS" target="_blank">
                    <img
                      className="trn-lead-logo-main"
                      src="img/logo-1.svg"
                      alt="Logo"
                    />
                  </a>
                </div>

                <h3>How to Use TRN</h3>
                <ol>
                  <li>Learn a song by heart. Use official sheet music or online lablature. And your ears! </li>
                  <li>Graduate to The Remind Notation. While you play, use TRN (pronounced 'turn') to recall chords and lyrics</li>
                  <li>Focus on the music instead of the page. Engage your audience, not the screen. </li>
                </ol>

                <h3>How to Read TRN</h3>
                <p>Key symbols include dash, slash, parenthesis, and caret.</p>

                <h3>Glossary</h3>
                <p>
                  " - " = dash separates <strong>parts</strong> of a song:
                </p>
                <blockquote>
                  <p>
                    <strong>C G Am - F G C - Am F G</strong>
                    <br />
                    = Verse - Chorus - Bridge
                  </p>
                </blockquote>

                <p>
                  " ^ " = caret (up arrow) reminds you to <strong>loop</strong>{' '}
                  previous chords a number of times:
                </p>
                <blockquote>
                  <p>
                    <strong>Am Em^</strong>
                    <br />
                    = Am Em Am Em Am Em, etc.
                  </p>
                  <p>
                    <strong>C G ^ Am F</strong>
                    <br />= C G C G Am F
                  </p>
                </blockquote>

                <p>
                  " ( ) " = parenthesis reminds you of{' '}
                  <strong>transitions, fills,</strong> or{' '}
                  <strong>alterations</strong>:
                </p>
                <blockquote>
                  <p>
                    <strong>C Am ^ (F G)</strong>
                    <br />= F and G are transition chords, played only once.
                  </p>
                  <p>
                    <strong>C(7)</strong>
                    <br />
                    = Playing C7th is optional, or played occasionally.
                  </p>
                </blockquote>

                <p>
                  " / " = slash reminds you of <strong>alternations</strong>{' '}
                  between sections:
                </p>
                <blockquote>
                  <p>
                    <strong>G Em (Am C / D G )</strong>
                    <br />
                    = First time through: G Em Am C<br />
                    = Second time through: G Em D G
                  </p>
                </blockquote>

                <em>
                  Note: TRN is short-hand notation for a wide variety of chord
                  progressions, but of course, not all songs will fit perfectly
                  within its rules, so... Use. Your. Memory!
                </em>
<br/><br/>
                <h2>Philosophy</h2>
                <p>
                  Musicians play best from memory and heart. The Remind Notation
                  is a simple reminder for songs already well known. It doesn't
                  capture every nuance of a song -- just the essentials to keep
                  everyone on track.
                </p>

                <h2>What TRN is for:</h2>
                <p>
                  It's a reference for musicians who already know the song. Its
                  compact format eliminates mid-song scrolling, facilitating
                  consistent and accurate performances.
                </p>

                <h2>What TRN is not for:</h2>
                <p>
                  TRN encourages memory-based performances. By design, it does{' '}
                  <em>not</em> provide:
                </p>
                <ul>
                  <li>No dynamics/articulation</li>
                  <li>No tempo/metre/bars</li>
                  <li>No technique instructions</li>
                  <li>No repetition counts</li>
                  <li>No tablature</li>
                </ul>

                

                <h2>Author Background</h2>
                <p>
                  Hi! I'm Maika, the creator of The Remind Notation. TRN emerged
                  from my frustration with online chord lookups. Interrupting
                  play to scroll was a hassle, and auto-scroll rarely worked. I
                  wanted a better online option, where a song's chords fit on
                  one page. Whether performing live, rehearsing, or jamming,
                  that's all I needed. So, I created TRN.
                </p>

                <h2>FAQs</h2>
                <p>
                  <strong>Q: Is this the final product?</strong>
                </p>
                <p>
                  A: No, this is a proof of concept for educational purposes.
                </p>

                <p>
                  <strong>
                    Q: How is TRN different from other musical notation?
                  </strong>
                </p>
                <p>
                  A: TRN omits time and dynamic indicators, focusing on chord
                  and structure reminders. It encourages personal interpretation,
                  making it ideal for jam sessions.
                </p>

                <p>
                  <strong>
                    Q: Can TRN be used for complex chord progressions or
                    unconventional song structures?
                  </strong>
                </p>
                <p>
                  A: TRN is versatile but may not cover every intricate
                  progression. It suits standard formats best. For complex
                  compositions, explicit notation may be needed.
                </p>

                <p>
                  <strong>
                    Q: Are there plans to integrate TRN with digital platforms?
                  </strong>
                </p>
                <p>
                  A: Not currently, but future developments might explore
                  digital integration.
                </p>

                <p>
                  <strong>
                    Q: How does TRN address language barriers for multilingual
                    musicians?
                  </strong>
                </p>
                <p>
                  A: TRN is language-agnostic, relying on symbols for chords and
                  structure, making it accessible regardless of language.
                </p>

                <h4>Copyright Fair Use Argument</h4>
                <p>
                  This site, The Remind Notation, employs chord and lyric
                  snippets from various artists. These are used solely for
                  educational, informative, and transformative purposes, not as a substitute
                  for the original works. By providing a brief, simplified
                  reference, TRN enhances learning and memory retention for
                  musicians, aligning with fair use principles under copyright
                  law. We acknowledge the original creators and encourage
                  supporting their work by purchasing their music and official
                  sheet music.
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
