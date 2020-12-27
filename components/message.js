export default function Message({text = "https://home.page"}) {
  return(
    <div className="bg-gray-100 dark:bg-gray-800 flex" style={{"minHeight": "calc(100vh - 26px - 32px)"}}>
      <div className="bg-gray-100 dark:bg-gray-700 m-auto p-8 shadow-lg rounded-2xl text-gray-300 no-underline">
        <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl align-middle"> 🦄🎄🎅🎁</span>
      </div>
    </div>
  )
}