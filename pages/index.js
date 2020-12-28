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
      <nav className="dark:bg-gray-700 flex items-center justify-between p-4 transition-colors duration-500">
        <div>
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
              onChange={handleColorScheme}
              checked={theme === "dark"}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-300"
            />
            <label 
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-colors duration-500"
            />
          </div>
        </div>
      </nav>
      <div className="bg-gray-100 dark:bg-gray-800 flex transition-colors duration-500" style={{"minHeight": "calc(100vh - 26px - 32px)"}}>
        <div className="flex flex-col bg-gray-100 dark:bg-gray-700 m-auto p-8 shadow-lg rounded-2xl text-gray-300 no-underline">
          <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug"> 🧭🗺️🦄🎄🎅🎁</span>
          <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug"> ❄️❤️✨🍪🚧⏳</span>
        </div>
      </div>
    </div>
  )
}
