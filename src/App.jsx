import { useState } from "react"
import DesktopView from "./views/DesktopView";
import MobileView from "./views/MobileView";

function App() {

  const [isDesktop,setIsDesktop] = useState(true);

  return (
    <>
        {
          isDesktop ? <DesktopView setIsDesktop={setIsDesktop} /> : <MobileView setIsDesktop={setIsDesktop} />
        }
    </>
  )
}

export default App
