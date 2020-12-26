import Nav from '../components/nav'
import Title from '../components/title'
import useStickyState from '../hooks/useStickyState.js'

const storeColorScheme = useStickyState("colorScheme")

export default function IndexPage() {
  const [colorScheme, setColorScheme] = storeColorScheme("light")
  const handleColorScheme = (e) => setColorScheme(e.currentTarget.checked ? "dark" : "light")

  return (
    <div className={colorScheme}>
      <Nav toggleColorScheme={handleColorScheme} currentColorScheme={colorScheme}/>
      <Title />
    </div>
  )
}
