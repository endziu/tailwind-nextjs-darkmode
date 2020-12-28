export default function EmojiCard({theme}) {
return(
  <div className="flex flex-col bg-gray-100 dark:bg-gray-700 m-auto p-8 shadow-lg rounded-2xl text-gray-300 no-underline">
    <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug">{theme === "dark" ? "🌘" : "☀️"}</span>
  </div>
  )
}