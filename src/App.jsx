 import { CotizadorProvider } from "./context/CotizadorProvider"
 import AppSeguros from "./components/AppSeguros"


function App() { 
  return(
    <CotizadorProvider>
      <AppSeguros />
    </CotizadorProvider>
  )
 }

 export default App