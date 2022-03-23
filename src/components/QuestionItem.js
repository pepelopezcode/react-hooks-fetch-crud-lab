import React from "react";

function QuestionItem({ question,deleteQuestion ,setQuestionList,questionList }) {
  const { id, prompt, answers, correctIndex } = question;

  function changeCorrectIndex(newIndex){
    console.log(id)
    console.log(newIndex)

    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "correctIndex": newIndex
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(setQuestionList(questionList.filter((question) => {
      if (question.id !== id) {
        return true;
      } else {
        question.correctIndex = newIndex;
        return true
      }
    })))
    }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => changeCorrectIndex(e.target.value)} >{options}</select>
      </label>
      <button onClick={deleteQuestion} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
