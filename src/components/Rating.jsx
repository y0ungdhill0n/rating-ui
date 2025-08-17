import { useState } from 'react';
import Footer from './Footer';
import Star from './Star';
import Modal from './Modal';

const Rating = ({
	heading = 'Rate Your Experience',
	color = 'black',
	feedbackMessages = [
		'Terrible 😩',
		'Poor 😞',
		'Fair 😑',
		'Good 👍',
		'Excellent 👌',
	],
}) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		if (rating > 0) {
			setSubmitted(true);
		}
	};
	const closeModal = () => {
		setSubmitted(false);
		setRating(0);
		setHover(0);
	};
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<div className='rating-container'>
			<img id='rating-scale-img' src='rating-scale.avif' alt='rate' />
			<h2>{heading}</h2>
			<div className='stars'>
				{stars.map((star) => (
					<Star
						key={star}
						star={star}
						rating={rating}
						hover={hover}
						color={color}
						ratingClick={setRating}
						hoverEnter={setHover}
						hoverLeave={() => setHover(null)}
					/>
				))}
			</div>
			{rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}

			<button
				className='submit-btn'
				onClick={handleSubmit}
				disabled={rating === 0}>
				Submit Feedback
			</button>

			<Modal isOpen={submitted} onClose={closeModal} rating={rating} />

			{/* Footer */}
			<span>
				<Footer />
			</span>
		</div>
	);
};

export default Rating;
