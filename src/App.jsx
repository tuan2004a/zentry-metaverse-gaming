import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
            <Hero />
            <About/>
            <Navbar/>
        </main>
    )
}

export default App
