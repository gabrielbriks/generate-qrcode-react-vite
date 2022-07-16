import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import { QrCodeCanvas } from './components/QrCodeCanvas'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <input type="text" value={text} onChange={event => setText(event.target.value)} />
      <QrCodeCanvas text={text} />
      <Toaster position='top-right' />
    </div>
  )
}

export default App
