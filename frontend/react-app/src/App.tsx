import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Phase from "./Phase";

function App() {
  const [phaseData, setPhaseData] = useState<string | null>("");

  return (
    <div className="top-level-box">
      <div className="main-box">
        {[...Array(5)].map((_, i) => (
          <Phase key={i+1} input={i+1} setPhaseData={setPhaseData}/>
        ))}
      </div>

      {phaseData && (
          <div>
            <h3>Jetztige Phase: {phaseData}</h3>
          </div>
        )}
    </div>
  )
}

export default App
