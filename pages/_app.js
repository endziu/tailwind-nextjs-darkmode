import '../styles/index.css'
import App from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Provider } from '../context'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default MyApp
