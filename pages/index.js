import { useState } from 'react'
import Nav from '../components/nav'
import Title from '../components/title'

export default function IndexPage() {
  const [darkMode, setDarkMode] = useState("light")
  const handleDarkMode = (e) => setDarkMode(darkMode !== "dark" ? "dark" : "light")

  return (
    <div className={darkMode}>
      <Nav toggleDarkMode={handleDarkMode}/>
      <Title />
    </div>
  )
}
