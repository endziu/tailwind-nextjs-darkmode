import { useState, useEffect, useContext } from "react";
import { useTheme } from 'next-themes'
import { Context } from "../context"

import Layout from '../components/Layout'
import EmojiCard from '../components/emojiCard'

function IndexPage() {
  const { state } = useContext(Context)

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

  return(
    <Layout>
      <EmojiCard theme={theme}/>
      <div className="text-3xl text-black dark:text-white">{JSON.stringify(state,null, 2)}</div>
    </Layout>
  )
}

export default IndexPage