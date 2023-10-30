import './App.css'
import data from './data.json'
import { Listing } from './components/Listing'

function App() {
  return (
    <div className='App'>
      <Listing items={ data } />
    </div>
  )
}

export default App
