import React from 'react';
import './App.css';

function App() {
 return (
   <div className="App">
     <header className="form">
       <p>What's The Weather?</p>
     </header>
     <main>
      <form>
      <label>
        <input type="text" name="name" placeholder="Enter City Name"/>
      </label>
      </form>
       <button onclick = "document.body.style.backgroundImage = 'url(assets/earth2.jpg)';">Get Forecast</button>
     </main>
     <footer>
       Developed by Abhay.
     </footer>
   </div>
 );
}
export default App;
