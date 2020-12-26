import Nav from '../components/nav'
import Title from '../components/title'
import useStickyState from '../hooks/useStickyState.js'

//const useLocalDarkMode = useStickyState("colorScheme")

export default function IndexPage() {
  const [colorScheme, setColorScheme] = useStickyState("light")("colorScheme")
  const handleColorScheme = (e) => setColorScheme(colorScheme === "dark" ? "light" : "dark")

  return (
    <div className={colorScheme}>
      <Nav toggleColorScheme={handleColorScheme} currentColorScheme={colorScheme}/>
      <Title />
    </div>
  )
}
