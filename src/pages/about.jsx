import React from 'react'
import Layout from '../layout/layout'
import '../styles/index.css'

const About = () => {
  return (
    <Layout>
      <section class="section">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <main>
              <div className="note-area note-page-section">
                <p>
                  The Remind Notation (TRN) is a streamlined musical shorthand
                  to learn chords and lyrics, and song structure in a single
                  line, designed to eliminate mid-song scrolling and serve as a
                  quick, memory-aiding reference for musicians.
                  <small>
                    TRN serves an educational purpose, and all the lyrics and
                    chords belong to their respected artists.
                  </small>
                </p>

                <div className="logo-container-2">
                  <a href="https://shorturl.at/qkgbS" target="_blank">
                    <img
                      className="trn-lead-logo-main"
                      src="img/logo-1.png"
                      alt="Logo"
                    />
                  </a>
                </div>

                <h3>How to Read TRN</h3>
                <p>Key symbols include dash, slash, parenthesis, caret.</p>

                <h3>Glossary</h3>
                <p>
                  " - " = dash separates <strong>parts</strong> of a song:
                </p>
                <blockquote>
                  <p>
                    <strong>C G Am - F G C - Am F G</strong>
                    <br />
                    Verse - Chorus - Bridge
                  </p>
                </blockquote>

                <p>
                  " ^ " = caret (up arrow) reminds you to <strong>loop</strong>{' '}
                  previous chords a number of times:
                </p>
                <blockquote>
                  <p>
                    <strong>Am Em</strong>
                    <br />
                    Am Em Am Em Am Em, etc.
                  </p>
                  <p>
                    <strong>C G ^ Am F</strong>
                    <br />C G C G Am F
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
                    <br />F and G are transition chords, played only once.
                  </p>
                  <p>
                    <strong>C(7)</strong>
                    <br />
                    Playing C7th is optional, or played occasionally.
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
                    First time through: G Em Am C<br />
                    Second time through: G Em D G
                  </p>
                </blockquote>

                <em>
                  Note: TRN is short-hand notation for a wide variety of chord
                  progressions, but of course, not all songs will fit perfectly
                  within its rules, so... Use. Your. Memory!
                </em>

                <h2>Philosophy</h2>
                <p>
                  I believe musicians play better when they play from their
                  heart and from memory. The Remind Notation is simply a
                  reminder for songs you already know well enough. The nuances
                  of the song -- the structure, dynamics, riffs, solos, etc.,
                  are not included in TRN. It's only a reminder, to keep
                  everyone on track in a compact, live-friendly format.
                </p>

                <h2>What TRN is for:</h2>
                <p>
                  Serves as a reference for musicians who have already learned a
                  song. Compact notation format eliminates the need for
                  scrolling mid-song. Facilitates consistent and accurate
                  performances.
                </p>

                <h2>What TRN is not for:</h2>
                <p>
                  TRN encourages memory-based performances. By design, it does{' '}
                  <em>not</em> provide the following musical information:
                </p>
                <ul>
                  <li>No dynamics/articulation (how hard or soft to play)</li>
                  <li>No tempo/metre/bars</li>
                  <li>
                    No technique (like which fingers to use, whether to strum or
                    fingerpick, etc.)
                  </li>
                  <li>
                    No repetition count (of how many times a section is
                    repeated)
                  </li>
                  <li>No tablature</li>
                </ul>

                <h2>FAQs</h2>
                <p>
                  <strong>Q: Is this the final product?</strong>
                </p>
                <p>
                  A: Nope! Actually, this is a proof of concept. It's made for
                  educational purposes -- a tool for learning.
                </p>

                <p>
                  <strong>
                    Q: How is TRN different from other musical notation?
                  </strong>
                </p>
                <p>
                  A: TRN omits time and dynamic indicators, focusing solely on
                  chord and structure reminders. It encourages musicians to
                  inject their personal interpretation into the performance,
                  making it ideal for jam sessions.
                </p>

                <p>
                  <strong>
                    Q: Can TRN be used for complex chord progressions or
                    unconventional song structures?
                  </strong>
                </p>
                <p>
                  A: While TRN's shorthand notation is versatile, it may not
                  cover every intricate chord progression or unconventional
                  structure. It's best suited for standard song formats and
                  common chord progressions. For more complex compositions,
                  explicit notation may be required.
                </p>

                <p>
                  <strong>
                    Q: Are there any plans to integrate TRN with digital
                    platforms or music software?
                  </strong>
                </p>
                <p>
                  A: Currently, there are no plans for digital integration, but
                  future developments could explore possibilities for
                  integrating TRN with digital platforms or music software to
                  enhance accessibility and usability for musicians.
                </p>

                <p>
                  <strong>
                    Q: How does TRN address language barriers for multilingual
                    musicians?
                  </strong>
                </p>
                <p>
                  A: TRN's notation system is language-agnostic, primarily
                  relying on symbols and shorthand notation for chords and
                  structure. This makes it accessible to musicians regardless of
                  language proficiency, as long as they understand the symbolic
                  representation of chords and song structure.
                </p>

                <h2>Author Background</h2>
                <p>
                  Hi! I'm Maika, the creator of The Remind Notation. TRN was
                  born out of a frustration I had with looking up chords online.
                  Someone would always have to interrupt their playing to scroll
                  down a page, and auto-scroll never worked well for me. Also,
                  the lyrics with chords on top simply looked messy. Like many
                  musicians, I'd sometimes have a "cheat sheet" with
                  super-condensed chords for songs to serve simply as a reminder
                  of the song. Whether performing live, rehearsing, or jamming
                  with friends, that's usually all I would need, if at all. So I
                  wanted to create a better option online, where any average
                  length song could be seen and played on less than a single
                  page.
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
