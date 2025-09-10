import React, { useState, useEffect } from 'react';

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => setVisible(window.pageYOffset > 0);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

		const style = {
			display: visible ? 'block' : 'none',
		position: 'fixed',
		bottom: '30px',
		right: '30px',
		width: '40px',
		height: '40px',
		alignItems: 'center',
		justifyContent: 'center',
			backgroundColor: '#333',
			color: '#fff',
			borderRadius: '50%',
			cursor: 'pointer',
			zIndex: 1000,
			textAlign: 'center',
			lineHeight: '40px',
			fontSize: '24px',
	};

		return (
			<div id="back2top" style={style} onClick={scrollToTop} title="Go top">
				↑
			</div>
		);
}
