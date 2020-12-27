import ThemeSwitch from './themeSwitch.js'

export default function Nav({toggleColorScheme, currentColorScheme}) {
  return (
    <nav className="dark:bg-gray-700 flex items-center justify-between p-4">
      <ThemeSwitch handler={toggleColorScheme} current={currentColorScheme}/>
    </nav>
  )
}
