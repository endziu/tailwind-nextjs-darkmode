import { useContext } from "react";
import { useTheme } from 'next-themes'
import { Context } from "../context"

import GithubLink from '../components/githubLink'
import MenuSwitch from '../components/menuSwitch'
import ThemeSwitch from '../components/themeSwitch'

function Layout({ children }) {
  const { theme, setTheme } = useTheme()
  const { state, dispatch } = useContext(Context)

  return (
    <div className={theme}>
      <header className="flex items-center justify-between dark:bg-gray-700 p-4 transition-colors duration-500">
        <MenuSwitch handler={() => dispatch({type: "TOGGLE_MENU", payload: !state.menu})} current={state.menu} />
        <ThemeSwitch handler={() => setTheme(theme==="dark" ? "light" : "dark")} current={theme}/>
      </header>

      <main
        style={{"minHeight": "calc(100vh - 58px - 56px)"}}
        className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center transition-colors duration-500"
      >
        {children}
      </main>
      
      <footer className="dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-500">
        <GithubLink />
      </footer>
    </div>
  )
}

export default Layout
