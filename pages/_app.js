import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import AppProvider from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
   <AppProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AppProvider>)
}

export default MyApp
