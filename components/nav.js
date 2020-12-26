import Link from 'next/link'

export default function Nav({toggleDarkMode}) {
  return (
    <nav className="dark:bg-gray-700">
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="no-underline btn-blue">
              Home
            </a>
          </Link>
        </li>
        <li>
          <label htmlFor="toggle" className="text-xs text-gray-600 dark:text-gray-100 mr-2 cursor-pointer">dark mode</label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-700 ease-in">
            <input type="checkbox" name="toggle" id="toggle" onClick={toggleDarkMode} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
          </div>
        </li>
      </ul>
    </nav>
  )
}
