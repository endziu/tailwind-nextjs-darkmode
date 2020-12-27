import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

import Nav from '../components/nav'
import Message from '../components/message'


export default function IndexPage() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleColorScheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  return (
    <div className={theme}>
      <Nav toggleColorScheme={handleColorScheme} currentColorScheme={theme}/>
      <Message text="merry X-mass"/>
    </div>
  )
}
