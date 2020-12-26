import { useState, useEffect } from 'react'
import Nav from '../components/nav'
import Title from '../components/title'

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function IndexPage() {
  const [darkMode, setDarkMode] = useStickyState("light", "mode")

  return (
    <div className={darkMode}>
      <Nav colorScheme={(e) => setDarkMode(darkMode !== "dark" ? "dark" : "light")} current={darkMode}/>
      <Title />
    </div>
  )
}
