import { useQuiz } from "../Contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The Movie & TV Quiz!</h2>
      <h3>{numQuestions} questions to challenge your inner film buff</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
