export default function Title({message = "https://home.page"}) {
  const box = ["m-auto", "p-8", "bg-white", "dark:bg-gray-700", "shadow-lg", "rounded-2xl"]
  const text = ["text-green-300", "no-underline"]
  const transition = ["transform", "transition-transform", "duration-500"]
  const hover = ["hover:underline", "hover:scale-105"]
  const className = box.concat(text).concat(transition).concat(hover).join(" ")

  return(
    <div className="bg-gray-100 dark:bg-gray-800 flex" style={{"minHeight": "calc(100vh - 44px - 32px)"}}>
      <div className={className}>
        <span className="bg-gradient-to-r from-yellow-300 via-green-500 to-blue-500 text-4xl md:text-6xl lg:text-8xl xl:text-9xl cursor-pointer tracking-tighter align-middle font-bold text-transparent bg-clip-text">{message}</span>
        <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl align-middle">🎄🎅</span>
      </div>
    </div>
  )
}