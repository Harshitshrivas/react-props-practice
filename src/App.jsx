import React from 'react'
import Card from './components/Card'

import './index.css'
const App = () => {
  return (
    <div className='parent'>
      <Card user = "Harshit Shrivas" desc = "Full Stack developer" img = "https://images.unsplash.com/photo-1760662418182-932278aab280?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"/>
      <Card user = "Harshuu Shrivas"desc = "Fronted developer" img="https://images.unsplash.com/photo-1760509684262-4501bacfdcc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"/>
      <Card user = "Harshvardhan" desc = "Ai Engineer" img = "https://images.unsplash.com/photo-1760594386948-09ffb8a24eb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"/>
       <Card user = "Harprit kaur" desc = "Backend developer" img = "https://images.unsplash.com/photo-1760086741328-c56df17e8272?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500 "/>
    
    </div>
  )
}

export default App