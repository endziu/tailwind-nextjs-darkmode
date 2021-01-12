import { useEffect, useContext } from "react";
import { useTheme } from 'next-themes'
import { Context } from "../context"

import Layout from '../components/Layout'

function IndexPage() {
  const { state } = useContext(Context)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme)
  }, []);

  return(
    <Layout>
      <main
        style={{"height": "calc(100vh - 58px - 56px)"}}
        className="flex flex-col md:flex-row transition-colors duration-500"
      >

        <div className={`block md:hidden ${state.menu ? 'h-1/3' : 'h-0'} w-full md:h-full md:w-1/3 bg-gray-200 dark:bg-gray-900 border-b border-gray-400 md:border-r md:border-b-0 text-3xl text-gray-900 dark:text-gray-100 transition-translate duration-500`}>
          menu
        </div>
        <div className={`hidden md:block h-1/3 w-full md:h-full ${state.menu ? 'md:w-1/3' : 'md:w-0'} bg-gray-200 dark:bg-gray-900 border-b border-gray-400 md:border-r md:border-b-0 text-3xl text-gray-900 dark:text-gray-100 transition-translate duration-500`}>
          menu
        </div>

        <div className={`${state.menu ? 'h-2/3' : 'h-full'} md:h-full ${state.menu ? 'md:w-2/3' : 'md:w-full'} text-3xl bg-gray-200 dark:bg-gray-900 border-b border-gray-400 md:border-r md:border-b-0 text-gray-900 dark:text-gray-100 transition-translate duration-500`}>
          main
        </div>

      </main>
    </Layout>
  )
}

export default IndexPage
