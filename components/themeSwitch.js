export default function ThemeSwitch({handler, current}) {
  return(
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
          onChange={handler}
          checked={current === "dark"}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label 
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        />
      </div>
    </div>
  )
}