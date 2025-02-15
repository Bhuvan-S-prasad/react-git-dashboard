import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'


function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!username) return;

    setLoading(true)
    setError(null)

    try{
      const response = await fetch(`https://api.github.com/users/${username}`)
      if(!response.ok){
        throw new Error('User not found')
      }
      const data = await response.json()
      setUserData(data)
    }
    catch (error) {
      console.error(error)
      setUserData(null)
      setError(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>

    <div className="app-container">
      <header className="header">
        <h1>GitHub User Dashboard</h1>
      </header>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      
      {userData && <UserProfile data={userData} />}
    </div>



    </>
  )
}

export default App
