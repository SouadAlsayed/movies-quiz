import Options from "./Options";

function Questions({ question, answer, dispatch }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Questions;
