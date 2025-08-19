import { useQuiz } from "../Contexts/QuizContext";
import Options from "./Options";

function Questions() {
  const { question } = useQuiz();
  return (
    <div>
      <h3>{question.question}</h3>
      <Options />
    </div>
  );
}

export default Questions;
