import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* we can directly call the function, (uses bibel) as App is nothing but function*/}
    {/* App(); */}
  </StrictMode>,
)
