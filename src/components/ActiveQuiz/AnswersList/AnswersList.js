import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => (
	<ul className={classes.AnswerList}>
		{props.answers.map((answer, index) => {
			return (
				<AnswerItem
					key={index}
					answer={answer}
					onAnswerClick={props.onAnswerClick}
				/>
			);
		})}
	</ul>
);

export default AnswersList;
