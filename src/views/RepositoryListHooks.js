import React from 'react'
// import FetchRepositories from '../components/FetchRepositories'
import useFetchRepositories from '../components/FetchRepositoriesHooks'
import Spinner from '../components/Spinner'

const Repository = ({repository}) => {
  return (
    <li>
      <a href={repository.html_url}>{repository.full_name}</a>
    </li>
  )
}

const RepositoryList = ({match}) => {
  const username = match.params.username
  const [amount, setAmount] = React.useState('5')
  const {data, loading, error} = useFetchRepositories(username)

  return (
    <div>
      <div>
        Show
        <select value={amount} onChange={evt => setAmount(evt.target.value)}>
          <option value="5">5 repos</option>
          <option value="10">10 repos</option>
        </select>
      </div>
      {data && (
        <div>
          <h2>@{username}'s repositories</h2>
          {data.slice(0, Number(amount)).map((repository, index) => (
            <Repository key={repository.id} repository={repository} />
          ))}
        </div>
      )}
      {loading && <Spinner />}
      {error && <div>{error}</div>}
    </div>
  )
}

export default RepositoryList
