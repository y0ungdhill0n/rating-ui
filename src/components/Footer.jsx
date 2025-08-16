import React from 'react';
import AnimatedContent from './AnimatedContent';

const Footer = () => {
	return (
		<div className='footer'>
			<AnimatedContent
				distance={150}
				direction='horizontal'
				reverse={false}
				duration={1.2}
				ease='bounce.out'
				initialOpacity={0.2}
				animateOpacity
				scale={1.1}
				threshold={0.2}
				delay={0.3}>
				<div>&copy; 2025 Made with ❤️ AD</div>
			</AnimatedContent>
		</div>
	);
};

export default Footer;
