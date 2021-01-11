export default function ThemeSwitch({handler, current}) {
  return(
    <div className="">
      <label
        htmlFor="toggle-theme"
        className="text-xs text-gray-600 dark:text-gray-100 mr-2 cursor-pointer"
      >
        dark mode
      </label>
      <div
        className="relative inline-block w-10 align-middle select-none transform transition-transform duration-500 ease-in"
      >
        <input
          type="checkbox"
          name="toggle-theme"
          id="toggle-theme"
          onChange={handler}
          checked={current === "dark"}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-300"
        />
        <label 
          htmlFor="toggle-theme"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-colors duration-500"
        />
      </div>
    </div>
  )
}