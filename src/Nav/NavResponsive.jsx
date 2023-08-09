import React from 'react'

const NavResponsive = () => {
	return (
		<>
			<div className='navbar-end'>
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
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu bg-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 lg:hidden'
					>
						<li>
							<a>Institucional</a>
						</li>
						<li>
							<a>Nosotros</a>
						</li>
						<li>
							<a>Historia</a>
						</li>
						<li>
							<a>Noticias</a>
						</li>
						<li>
							<a>Contacto</a>
						</li>
					</ul>
				</div>
			</div>{' '}
		</>
	)
}

export default NavResponsive
