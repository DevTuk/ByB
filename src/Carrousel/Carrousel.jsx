import React from 'react'

const Carrousel = () => {
	return (
		<>
			<div className='carousel rounded-box mt-24'>
				<div className='carousel-item'>
					<img
						//lorem picsum random para imagenes de prueba
						src='https://picsum.photos/200/300/?random=99'
						alt='Burger'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://picsum.photos/200/300/?random=5'
						alt='Burger'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://picsum.photos/200/300/?random=88'
						alt='Burger'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://picsum.photos/200/300/?random=55'
						alt='Burger'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://picsum.photos/200/300/?random=1'
						alt='Burger'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://picsum.photos/200/300/?random=10'
						alt='Burger'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://picsum.photos/200/300/?random=20'
						alt='Burger'
					/>
				</div>
			</div>
		</>
	)
}

export default Carrousel
