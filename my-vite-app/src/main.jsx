import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Create a root DOM node
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );


// passing element to the function and calling it as function
// if passing element as object is invalid
const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to go to Google</a>
)

// How react creates elements
// React.createElement(type, props, children)
const username = 'Manoj jivanagi';
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Click me to go to Google',
  username
)
// Therefore, we can't add if/for loops in the above code because its a element.


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* we can directly call the function, (uses bibel) as App is nothing but function*/}
    {/* App(); */}
  </StrictMode>,
  // anotherElement(),
  // reactElement()

)
