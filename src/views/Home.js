import React from 'react'
import { SearchHistoryConsumer } from '../SearchHistory'

const Home = props => {
  const [username, setUsername] = React.useState('')
  return (
    <SearchHistoryConsumer>
      {searchHistory => (
        <div className="centered column">
          <h1>GitHub Repository Fetcher</h1>
          <form
            onSubmit={evt => {
              evt.preventDefault()
              searchHistory.push(username)
              props.history.push(`/${username}`)
            }}
          >
            <input
              value={username}
              onChange={evt => setUsername(evt.target.value)}
              autoFocus
              placeholder="GitHub username"
            />
          </form>
          <>
            {searchHistory.items.map((item, index) => (
              <button
                key={index}
                onClick={() => setUsername(item)}
              >
                {item}
              </button>
            ))}
          </>
        </div>
      )}
    </SearchHistoryConsumer>
  )
}

export default Home
