import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My Simple React Website</h1>
        <p>This is a demo site deployed on GitHub Pages.</p>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>
            This site is built with React and styled with CSS. You can customize it to fit your needs!
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Reach out at <a href="mailto:your@email.com">your@email.com</a>
          </p>
        </section>
      </main>
      <footer className="app-footer">
        &copy; {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}

export default App;