// eslint-disable-next-line
import React ,{ useEffect, useState } from 'react'

const FetchRepositories = (props) => {
  const { username } = props
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&access_token=31676c62d4e04723f09b604df5d4f15339ebc910`,
    )
      .then(res => res.json())
      .then(repositories => {
        setLoading(false)
        setData(repositories)
        setError(null)
      })
      .catch(err => {
        setLoading(false)
        setData(null)
        setError(err.message)
      })
  }, [username])

  return (props.children({data, error, loading}));
}

export default FetchRepositories
