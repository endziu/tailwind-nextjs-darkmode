import Link from 'next/link'
import ThemeSwitch from './themeSwitch.js'

export default function Nav({colorScheme, current}) {
  return (
    <nav className="dark:bg-gray-700 flex items-center justify-between p-4">
      <Link href="/">
        <a className="no-underline btn-blue">
          menu
        </a>
      </Link>
      <ThemeSwitch handler={colorScheme} current={current}/>
    </nav>
  )
}
