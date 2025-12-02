import React from 'react';
import './AeruxInvestment.css';

const AeruxInvestment = () => {
  return (
    <div className="aerux-page-container">
      <div className="aerux-content-wrapper">
        <header className="aerux-header">
          <h2 className="aerux-header-title">READY TO BE AN **EARLY-STAGE**</h2>
          <h1 className="aerux-header-subtitle">INVESTOR</h1>
          <p className="aerux-header-text">
            Secure your position in the AERUX ecosystem before global listings.
          </p>
        </header>

        <main className="aerux-main-section">
          <div className="aerux-buy-panel">
            <div className="aerux-panel-title-box">
              <h2 className="aerux-panel-title">YOU CAN BUY WITH</h2>
            </div>

            <div className="aerux-currency-selector">
              <span className="aerux-currency-icon">💎</span>
              <span className="aerux-currency-text">USDT</span>
            </div>

            <div className="aerux-input-group">
              <label htmlFor="usdt-amount" className="aerux-input-label">
                Amount You Pay (**Balance = 0.00 USDT**)
              </label>
              <div className="aerux-input-field">
                <span className="aerux-input-icon">💎</span>
                <input
                  type="number"
                  id="usdt-amount"
                  placeholder="Enter USDT Amount"
                />
              </div>
            </div>

            <div className="aerux-input-group">
              <label htmlFor="aerux-amount" className="aerux-input-label">
                Amount You Get (**Balance = 0.00 Aerux**)
              </label>
              <div className="aerux-input-field">
                <span className="aerux-input-icon">
                  <div className="aerux-token-logo-placeholder">A</div>
                </span>
                <input
                  type="number"
                  id="aerux-amount"
                  placeholder="Enter Aerux Amount"
                />
              </div>
            </div>

            <div className="aerux-button-group">
              <button className="aerux-button connect-wallet-button">
                CONNECT WALLET
              </button>
              <button className="aerux-button buy-now-button">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="aerux-graphic-placeholder">
            {/* This is where a real application would use a high-resolution image 
              or a complex 3D rendering component (like using three.js/react-three-fiber) 
              to display the Aerux token graphic.
              For this CSS replica, we'll use an image tag (assuming the image is saved locally)
              or a descriptive tag.
            */}
                      </div>
        </main>
      </div>
    </div>
  );
};

export default AeruxInvestment;