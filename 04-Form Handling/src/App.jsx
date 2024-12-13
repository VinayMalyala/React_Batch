import React, { useState } from 'react'

const App = () => {

  const [username, setUserName] = useState("Ram");
  const [password, setPassword] = useState("123456");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);
    
  }

  return (
    <>
      <form onSubmit={handleLogin}>
          <h2>Name</h2>
          <input type="text" name="username" value={username} placeholder='name' onChange={(event) => {
            setUserName(event.target.value);
          }} />

          <br />

          <h2>Password</h2>
          <input type="password" name="password" value={password} placeholder='password' onChange={(event) => {
            setPassword(event.target.value);
          }} />

          <br />

          <input type="submit" value="Login" />
      </form>
      
    </>
  )
}

export default App