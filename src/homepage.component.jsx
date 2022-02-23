import React from 'react'

import './homepage.styles.scss'

const HomePage = () => {
  return (
      <div className="homepage">
          <div className="directory-menu">  
              <div className="menu-item">
                  <div className="content">
                      <h1 className="title">CONTROLLERS</h1>
                      <span className="subtitle">SHOP NOW</span>
                  </div>
              </div>

              <div className="menu-item">
                  <div className="content">
                      <h1 className="title">KEYBOARDS</h1>
                      <span className="subtitle">SHOP NOW</span>
                  </div>
              </div>
              
              <div className="menu-item">
                  <div className="content">
                      <h1 className="title">HEADSETS</h1>
                      <span className="subtitle">SHOP NOW</span>
                  </div>
              </div>

              <div className="menu-item">
                  <div className="content">
                      <h1 className="title">GAMES</h1>
                      <span className="subtitle">SHOP NOW</span>
                  </div>
              </div>

              <div className="menu-item">
                  <div className="content">
                      <h1 className="title">CONSOLES</h1>
                      <span className="subtitle">SHOP NOW</span>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default HomePage;