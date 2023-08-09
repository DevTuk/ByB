import React from 'react'
import NavResponsive from './NavResponsive'
const Nav = () => {
	return (
		<>
			<div className='navbar bg-black rounded-3xl h-24 border-4 border-t-red-700 border-r-black border-l-black '>
				<div className='navbar-start'>
					<a className='btn btn-ghost navbar-center normal-case text-2xl'>
						Bielsa & Bochini
					</a>
				</div>
				<NavResponsive />
				<div className='navbar-end '>
					<div className='flex-none'>
						<ul
							tabIndex={0}
							className='menu menu-horizontal px-1 xs:hidden'
						>
							<li>
								<details>
									<summary>Institucional</summary>
									<ul className='p-2 bg-base-100'>
										<li>
											<a>Historia</a>
										</li>
										<li>
											<a>Cuerpo Técnico</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary>Equipo</summary>
									<ul className='p-2 bg-base-100'>
										<li>
											<a>Plantel</a>
										</li>
										<li>
											<a>Leyendas</a>
										</li>
									</ul>
								</details>
							</li>

							<li>
								<a>Nosotros</a>
							</li>

							<li>
								<a>Noticias</a>
							</li>
							<li>
								<a>Contacto</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Nav
