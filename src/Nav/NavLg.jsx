import React from 'react'

const NavLg = () => {
	return (
		<>
			<div className='navbar-end '>
				<div className='flex-none hidden lg:block'>
					<ul
						tabIndex={0}
						className='menu menu-horizontal px-1 '
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
		</>
	)
}

export default NavLg
