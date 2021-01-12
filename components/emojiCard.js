export default function EmojiCard({theme}) {
  return(
    <div className="bg-gray-100 dark:bg-gray-700 p-8 shadow-lg rounded-2xl transition-colors duration-500">
      <span className="text-9xl leading-snug">{theme === "dark" ? "🌘" : "☀️"}</span>
    </div>
  )
}