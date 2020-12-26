import Nav from '../components/nav'
import Title from '../components/title'
import useStickyState from '../hooks/useStickyState.js'

export default function IndexPage() {
  const [darkMode, setDarkMode] = useStickyState("light", "mode")
  const handleColorScheme = (e) => setDarkMode(darkMode === "dark" ? "light" : "dark")

  return (
    <div className={darkMode}>
      <Nav toggleColorScheme={handleColorScheme} currentColorScheme={darkMode}/>
      <Title />
    </div>
  )
}
