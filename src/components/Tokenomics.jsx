import React from 'react'
import  image  from '../assets/tokenomics/tokonomics.png'
import '../css/Tokenomics.css'
function Tokenomics() {
  return (
    <div className=' tokonomics-container'>
    <div className='main-heading'><h1>Tokenomics of <span >AERUX</span></h1></div>
<div className='image-container'>
    <img src={image} className='img'></img>
</div>


    <div className="token-page">
      <div className="token-container">

        {/* First Row - 3 items */}
        <div className="token-row first">
          <div className="token-item">
            <div className="token-label">Token Name</div>
            <div className="divider"></div>
            <div className="token-value">AERUX Token</div>
          </div>

          <div className="token-item">
            <div className="token-label">Symbol</div>
            <div className="divider"></div>
            <div className="token-value">URX</div>
          </div>

          <div className="token-item">
            <div className="token-label">Network</div>
            <div className="divider"></div>
            <div className="token-value">BEP</div>
          </div>
        </div>

        {/* Second Row - 2 items */}
        <div className="token-row second">
          <div className="token-item">
            <div className="token-label">Total Supply</div>
            <div className="divider"></div>
            <div className="token-value">10 Billion</div>
          </div>

          <div className="token-item">
            <div className="token-label">Decimal</div>
            <div className="divider"></div>
            <div className="token-value">18</div>
          </div>
        </div>

      </div>
    </div>
  


</div>
  )
}



export default Tokenomics