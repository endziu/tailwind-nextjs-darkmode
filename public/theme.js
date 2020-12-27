(function() {
  const storageKey = 'colorScheme'
  const classNameDark = 'dark'
  const classNameLight = 'light'

  let localStorageTheme = null

  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {
    console.log(err)
  }
  
  if (localStorageTheme !== null) {
    localStorageTheme = JSON.parse(localStorageTheme)
    document.body.classList.add(localStorageTheme === classNameDark ? classNameDark : classNameLight)
  } else {
    console.log("no storage")
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode ? classNameDark : classNameLight))
  }

})()
