import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import '../styles/search.css'

export default function Search({ showExcerpt, size }) {

  const searchStore = useStaticQuery(graphql`
    {
      localSearchNotesIndex {
        index
        store
      }
    }
  `)

  const index = searchStore.localSearchNotesIndex.index
  const store = searchStore.localSearchNotesIndex.store

  const [query, setQuery] = React.useState('')
  const results = useFlexSearch(query, index, store)

  let inputClassName = 'input is-small'
  if (size === 'medium') {
    inputClassName = 'input is-medium'
  }

  return (
    <form className="search-form" action="/">
      <span>{searchStore.localSearchNotesIndex.publicStoreURL}</span>
      <input
        className={inputClassName}
        type="text"
        placeholder="Search by song, artist, or lyric."
        aria-label="Search..."
        name="filter"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {results.length ? (
        <div className="search-result">
          <button
            className="close-search button-link"
            onClick={() => setQuery('')}
          >
            CLOSE
          </button>
          <ul>
            {results.map(result => (
              <li key={result.slug}>
                <Link to={result.slug}>{result.title}</Link>
                {result.artist && <p>Artist: {result.artist}</p>}
                {console.log(result)}
                {/* {showExcerpt ? <p>{result.excerpt}</p> : null} */}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </form>
  )
}
