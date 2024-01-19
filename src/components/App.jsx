import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statisctics/Statistics';
import { Component } from 'react';

const buttons = ['Good', 'Neutral', 'Bad'];

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};
	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};
	countPositiveFeedbackPercentage = () => {
		const { good, neutral, bad } = this.state;
		if (good === 0) return 0;
		return Number(((good / (good + neutral + bad)) * 100).toFixed());
	};
	onLeaveFeedback = event => {
		const option = event.target.textContent.toLowerCase();

		this.setState(prevState => ({
			[option]: prevState[option] + 1,
		}));
	};

	render() {
		const { good, neutral, bad } = this.state;
		return (
			<div>
				<Section title="Please leave your feedback">
					<FeedbackOptions
						options={buttons}
						onLeaveFeedback={this.onLeaveFeedback}
					/>
				</Section>
				<Section title="Statistics">
					{this.countTotalFeedback() ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.countTotalFeedback}
							positivePercentarge={`${this.countPositiveFeedbackPercentage()}%`}
						/>
					) : (
						'No feedback'
					)}
				</Section>
			</div>
		);
	}
}
export default App;
