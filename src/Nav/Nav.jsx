import React from 'react'
import NavResponsive from './NavResponsive'
import NavLg from './NavLg'
const Nav = () => {
	return (
		<>
			<div className='navbar bg-black rounded-3xl h-24 border-4 border-t-red-700 border-r-black border-l-black border-b-black'>
				<div className='navbar-start'>
					<a className='btn btn-ghost navbar-center normal-case text-2xl'>
						Bielsa & Bochini
					</a>
				</div>
				<NavResponsive />
				<NavLg />
			</div>
		</>
	)
}

export default Nav
