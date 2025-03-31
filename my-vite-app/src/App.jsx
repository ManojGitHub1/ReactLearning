import { useState } from 'react'
import Counter from './counter'

function App() {
  const username = 'Manoj jivanagi';

  return (
    // react fragment return multiple elements
    <>
    <Counter />
    <h1>Hello World! {username}</h1>
    </>
  )
}

export default App
