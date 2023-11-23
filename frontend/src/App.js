// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.css';
import attireLogo from './images/attirelogo.png';

import backgroundAvif from './images/background.png';

// Import the images for overlap
import image1 from './images/lady.jpeg';
import image2 from './images/mann.jpg';
import image3 from './images/kidsss.jpeg';

// Import the Women's section component
import WomenSection from './WomenSection';
import MenSection from './MenSection';
import KidsSection from './KidsSection';

import Login from './components/loginsignup/login';

function App() {
  const isWomenPage = window.location.pathname === '/women';

  const backgroundStyle = {
    background: isWomenPage ? '##e6f2ff' : `url(${backgroundAvif})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '175vh',
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <div>
            <Link to="/" className="header-logo">
              <img src={attireLogo} alt="Attire Logo" />
            </Link>
          </div>
          <div className="header-icons">
            <Link to="/login">Login</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/bag">Bag</Link>
          </div>
        </header>
        <main className="app-main" style={backgroundStyle}>
          <Switch>
            <Route path="/women" component={WomenSection} />
            <Route path="/men" component={MenSection} />
            <Route path="/kids" component={KidsSection} />
            {/* Route for the login page */}
            <Route path="/login" component={Login} />
            <Route path="/">
              {/* Overlapping images with text */}
              <div className="overlap-image">
                <a href="/women">
                  <img src={image1} alt="Woman" />
                  <p>WOMAN</p>
                </a>
              </div>
              <div className="overlap-image">
                <a href="/men">
                  <img src={image2} alt="Man" />
                  <p>MAN</p>
                </a>
              </div>
              <div className="overlap-image">
                <a href="/kids">
                  <img src={image3} alt="Kids" />
                  <p>KIDS</p>
                </a>
              </div>
            </Route>
          </Switch>
          {/* Your main content goes here */}
        </main>
        <footer className="app-footer">
          <p>&copy; 2023 attire</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
