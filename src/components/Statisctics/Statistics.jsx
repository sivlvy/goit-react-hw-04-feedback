import css from './Statistics.module.css';

export const Statistics = ({
	good,
	neutral,
	bad,
	total,
	positivePercentarge,
}) => {
	return (
		<ul className={css.statistics_list}>
			<li className={css.statistics_item}>Good: {good}</li>
			<li className={css.statistics_item}>Neutral: {neutral}</li>
			<li className={css.statistics_item}>Bad: {bad}</li>
			<li className={css.statistics_item}>Total: {total}</li>
			<li className={css.statistics_item}>
				Positive feedback: {positivePercentarge}
			</li>
		</ul>
	);
};
