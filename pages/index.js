import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

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
      <header className="dark:bg-gray-700 p-4 transition-colors duration-500">
        <ThemeSwitch handler={handleColorScheme} current={theme}/>
      </header>
      <main
        style={{"minHeight": "calc(100vh - 58px - 56px)"}}
        className="bg-gray-100 dark:bg-gray-800 flex transition-colors duration-500"
      >
        <EmojiCard />
      </main>
      <footer className="dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-500">
        <a href="https://github.com/endziu/tailwind-nextjs-darkmode" className="flex flex-row-reverse p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="currentColor" fill="currentColor" className="ml-2 w-6 h-6">
            <path d="M31.995.005c-17.672 0-32 14.687-32 32.806 0 14.494 9.17 26.79 21.886 31.13 1.602.3 2.185-.714 2.185-1.584 0-.777-.027-2.841-.043-5.578-8.902 1.981-10.78-4.399-10.78-4.399-1.456-3.788-3.554-4.797-3.554-4.797-2.906-2.036.22-1.995.22-1.995 3.212.233 4.902 3.38 4.902 3.38 2.854 5.014 7.49 3.566 9.314 2.728.29-2.12 1.116-3.567 2.031-4.387-7.106-.827-14.577-3.643-14.577-16.213 0-3.581 1.247-6.51 3.295-8.803-.33-.83-1.429-4.165.312-8.682 0 0 2.688-.882 8.801 3.363 2.552-.727 5.291-1.091 8.012-1.104 2.717.013 5.456.377 8.012 1.104 6.11-4.245 8.792-3.363 8.792-3.363 1.746 4.517.648 7.852.318 8.682 2.05 2.294 3.29 5.222 3.29 8.803 0 12.603-7.483 15.376-14.612 16.187 1.149 1.013 2.173 3.015 2.173 6.076 0 4.384-.04 7.923-.04 8.998 0 .878.576 1.9 2.2 1.58C54.84 59.587 64.002 47.3 64.002 32.81 64 14.692 49.67.005 31.995.005"/>
          </svg>
          <span className="">github</span>
        </a>        
      </footer>
    </div>
  )
}

function ThemeSwitch({handler, current}) {
  return(
    <>
      <label
        htmlFor="toggle"
        className="text-xs text-gray-600 dark:text-gray-100 mr-2 cursor-pointer"
      >
        dark mode
      </label>
      <div
        className="relative inline-block w-10 align-middle select-none transform transition-transform duration-500 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          onChange={handler}
          checked={current === "dark"}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-300"
        />
        <label 
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-colors duration-500"
        />
      </div>
    </>
  )
}

function EmojiCard() {
  return(
    <div className="flex flex-col bg-gray-100 dark:bg-gray-700 m-auto p-8 shadow-lg rounded-2xl text-gray-300 no-underline">
      <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug"> 🧭🗺️🦄🎄🎅🎁</span>
      <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug"> ❄️❤️✨🍪🚧⏳</span>
    </div>
  )
}