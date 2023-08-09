import './App.css'
import Carrousel from './Carrousel/Carrousel'
import Nav from './Nav/Nav'
import Nosotros from './Nosotros/Nosotros'
import Historia from './Historia/Historia'
import Noticias from './Noticias/Noticias'
import Contacto from './Contacto/Contacto'

function App() {
	return (
		<>
			<Nav />

			<Carrousel />
			<Carrousel />
			<Nosotros />
			<Historia />
			<Noticias />
			<Contacto />
		</>
	)
}

export default App
