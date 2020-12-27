import { useState } from 'react'
import Link from 'next/link'
import ThemeSwitch from './themeSwitch.js'

export default function Nav({toggleColorScheme, currentColorScheme}) {
  const [menu, setMenu] = useState(false)

  return (
    <nav className="relative dark:bg-gray-700 flex items-center justify-between p-4">
      <button className="no-underline btn-blue" onClick={()=>setMenu(!menu)}>
        {menu ? "thing" : "nothing"}
      </button>
      <ThemeSwitch handler={toggleColorScheme} current={currentColorScheme}/>
      {menu && <div style={{"bottom": "-8.75rem"}}className="absolute bg-white dark:bg-gray-300 border dark:text-gray-700 list-none w-48 p-4 rounded-md shadow-lg">
        <li>1.</li>
        <li>2.</li>
        <li>3.</li>
        <li>to jest próba mikrofonu</li>
      </div>}
    </nav>
  )
}
