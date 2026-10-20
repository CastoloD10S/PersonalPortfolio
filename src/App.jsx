import { useState } from 'react'
import {Header} from './components/organisms/Header.jsx';
import {Content} from './components/organisms/Content.jsx';
import {Footer} from './components/organisms/Footer.jsx';
import { ContactForm } from './components/organisms/ContactForm.jsx';

function App() {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container">
          <Header />
          <Content />
          <Footer />          
        </div>
      </div>
    )
  
}

export default App
