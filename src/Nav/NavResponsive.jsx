import React from 'react'

const NavResponsive = () => {
	return (
		<>
			<div className='navbar-end items-end ml-32'>
				<div className='dropdown dropdown-end lg:hidden '>
					<label
						tabIndex={0}
						className='btn btn-ghost btn-circle '
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h7'
								color='red'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu bg-black menu-sm dropdown-content z-[1] shadow rounded w-52  lg:hidden '
					>
						<div className='collapse text-start hover:bg-primary hover:text-black'>
							<input
								type='checkbox'
								className='peer '
							/>
							<div className='collapse-title peer-checked:bg-primary peer-checked:text-black'>
								Institucional
							</div>
							<div className='collapse-content peer-checked:bg-primary peer-checked:text-black'>
								<li>
									<a>Historia</a>
								</li>
								<li>
									<a>Cuerpo Técnico</a>
								</li>
							</div>
						</div>
						<div className='collapse text-start hover:bg-primary hover:text-black'>
							<input
								type='checkbox'
								className='peer'
							/>
							<div className='collapse-title peer-checked:bg-primary peer-checked:text-black'>
								Equipo
							</div>
							<div className='collapse-content peer-checked:bg-primary text-black'>
								<li>
									<a>Plantel</a>
								</li>
								<li>
									<a>Leyendas</a>
								</li>
							</div>
						</div>
						<div className='collapse  text-start hover:bg-primary hover:text-black'>
							<input
								type='checkbox'
								className='peer'
							/>
							<div className='collapse-title'>Nosotros</div>
						</div>
						<div className='collapse  text-start hover:bg-primary hover:text-black'>
							<input
								type='checkbox'
								className='peer'
							/>
							<div className='collapse-title'>Noticias</div>
						</div>
						<div className='collapse  text-start hover:bg-primary hover:text-black'>
							<input
								type='checkbox'
								className='peer'
							/>
							<div className='collapse-title'>Contacto</div>
						</div>
					</ul>
				</div>
			</div>{' '}
		</>
	)
}

export default NavResponsive
