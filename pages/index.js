import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import GithubLink from '../components/githubLink'
import EmojiCard from '../components/emojiCard'
import ThemeSwitch from '../components/themeSwitch'

export default function IndexPage() {
  const [ isMounted, setIsMounted ] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleColorScheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  const headerClass = "dark:bg-gray-700 p-4 transition-colors duration-500"
  const mainClass = "bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors duration-500"
  const footerClass = "dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-500"
  const footerStyle = {"minHeight": "calc(100vh - 56px - 56px)"}
  
  return (
    <div className={theme}>
      <header className={headerClass}>
        <ThemeSwitch handler={handleColorScheme} current={theme}/>
      </header>

      <main className={mainClass} style={footerStyle} >
        <EmojiCard theme={theme} />
      </main>
      
      <footer className={footerClass}>
        <GithubLink />
      </footer>
    </div>
  )
}
