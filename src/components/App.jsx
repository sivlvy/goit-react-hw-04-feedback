import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statisctics/Statistics';
import { useState } from 'react';

const buttons = ['Good', 'Neutral', 'Bad'];

export const App = () => {
	const [value, setValue] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});
	const countTotalFeedback = () => {
		const { good, neutral, bad } = value;
		return good + neutral + bad;
	};
	const countPositiveFeedbackPercentage = () => {
		return Math.round((value.good / countTotalFeedback()) * 100);
	};
	const onLeaveFeedback = event => {
		const option = event.target.textContent.toLowerCase();
		setValue(prevState => ({
			...prevState,
			[option]: prevState[option] + 1,
		}));
	};
	const {good, neutral, bad} = value;
	return (
		<div>
			<Section title="Please leave your feedback">
				<FeedbackOptions options={Object.keys(value)} onLeaveFeedback={onLeaveFeedback} />
			</Section>
			<Section title="Statistics">
				{countTotalFeedback() ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback}
						positivePercentarge={`${countPositiveFeedbackPercentage()}%`}
					/>
				) : (
					'No feedback'
				)}
			</Section>
		</div>
	);
};
