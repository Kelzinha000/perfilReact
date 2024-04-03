import './App.css'
import image from './images/jessica.jpeg'

const App = () => {
    return(
        <main className='main'>
        <div className='box'>
        <img className='img' src={image} alt="" />
        <h1 className='titulo'>Jessica Randall</h1>
        <h3 className='subtitulo'>London, United Kingdom</h3>
        <h3 className='descricao'> "Front-end developer and avid reader"</h3>
            <button className='btn'>Github</button>
            <button className='btn'>Frontend Mentor</button>
            <button className='btn'>Linkedin</button>
            <button className='btn'>Twitter</button>
            <button className='btn'>Instagram</button>
        </div>
        </main>
      
    )
}

export default App;