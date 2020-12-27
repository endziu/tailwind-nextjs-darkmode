(function() {
  var storageKey = 'colorScheme'
  var classNameDark = 'dark'
  var classNameLight = 'light'

  var localStorageTheme = null

  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {
    console.log(err)
  }
  
  var localStorageExists = localStorageTheme !== null
  
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
    document.body.classList.add(localStorageTheme === classNameDark ? classNameDark : classNameLight)
    document.body.classList.remove(localStorageTheme === classNameLight ? classNameLight : classNameDark)
  } else {
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode ? classNameDark : classNameLight))
  }
})()
