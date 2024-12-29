import './App.css'
import CustomModal from './components/CustomModal'

function App() {
  return (
    <>
      <CustomModal title={'Modal 1'} content={<Content/>}/>
      <CustomModal title={'Modal 2'} content={<Content2/>}/>
    </>
  )
}


function Content(){
  return <img src="https://via.placeholder.com/500" alt="Dummy Image"/>
}

function Content2(){
  return (
    <div>
      <p>This is second modal</p>
    </div>
  )
}

export default App
