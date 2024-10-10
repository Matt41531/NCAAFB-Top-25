// import { useState } from 'react'
import '../CFB-Item.css'
import PropTypes from 'prop-types'

function CfbItem({schoolName, rank, schoolLogo, mascot, record}) {
  // const [count, setCount] = useState(0)

  return (
    <div className="school">
      <h2>Rank: { rank } <br/> </h2>
      <img src= {schoolLogo} /> <br />
      School: { schoolName } { mascot }<br/>
      Record: { record } <br/>
    </div>
  )
}

CfbItem.propTypes = {
  schoolName: PropTypes.string,
  rank: PropTypes.number,
  schoolLogo: PropTypes.string,
  mascot: PropTypes.string,
  record: PropTypes.string
}

export default CfbItem