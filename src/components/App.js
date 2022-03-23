import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((resp) => resp.json())
      .then((data) => setQuestionList(data))
  },[])

 

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestionList={setQuestionList} questionList={questionList} /> : <QuestionList questionList={questionList} setQuestionList={setQuestionList} />}
    </main>
  );
}

export default App;
