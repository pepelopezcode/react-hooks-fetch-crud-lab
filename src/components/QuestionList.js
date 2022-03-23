import { findByDisplayValue } from "@testing-library/react";
import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionList, setQuestionList}) {

  

  function deleteQuestion(id){
  fetch(`http://localhost:4000/questions/${id}`,{method: 'DELETE'})
    .then(() => setQuestionList(questionList.filter((question) => {
    if (question.id !== id) {
    return true
    }
    })))

  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList.map((question) => {
        return(<QuestionItem 
          key={question.id} 
          question={question} 
          deleteQuestion={() => deleteQuestion(question.id)} 
          setQuestionList={setQuestionList}
          questionList={questionList}/>)
          
      })}</ul>
    </section>
  );
}

export default QuestionList;
