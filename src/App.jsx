import { useEffect, useState } from 'react'
import './App.css'
import CfbItem from './components/CFB-Item'
import axios from 'axios'

function App() {
  const [rankedTeams, setRankedTeams] = useState([])

  useEffect(() => {
    loadCFBList()
  }, [])

  const loadCFBList = () => {
    axios.get('https://api.sportsdata.io/v3/cfb/scores/json/Teams?key=f185abbab3a5472894a0e3c291e2f4aa')
    .then(function (response) {
      setRankedTeams(response.data.filter((team) => team.ApRank != null).sort((a, b) => a.ApRank - b.ApRank))
    })
  }

  return (
      <>
        <h1>College Football AP Rankings</h1>
        <div > 
          {
            rankedTeams.map((data) => {
              return(
                <CfbItem 
                key={data.TeamID}
                schoolName={data.School}
                mascot={data.Name}
                rank={data.ApRank}
                schoolLogo={data.TeamLogoUrl}
                record={data.Wins + ' - ' + data.Losses}
              />
              )
            }
          )
          }

        </div>
      </>
    )
}

export default App
