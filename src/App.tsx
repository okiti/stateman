import React from 'react';
import { useState } from 'react';
import questionStore from './store/questions.store';
import './App.css';

function App() {
  const { questions, filtered, createQuestion, updateQuestion, deleteQuestion, filterByCategory } = questionStore((state) => state);
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [answer, setAnswer] = useState('');
  const [showDetails, setDetailsToShow] = useState('');

  const handleSubmit = (e: any) => {
    createQuestion({
      id: Date.now().toString(),
      question: question,
      category: category,
      answers: [answer]
    });
    setQuestion('');
    setCategory('');
    setAnswer('');
    e.preventDefault();
  }
  return (
    <div className="App">
      <div className='form-container'>
        <form onSubmit={handleSubmit} action="">
          <div className='form-group'>
            <label htmlFor="">Question</label>
            <input value={question} onChange={e => setQuestion(e.target.value)} type="text" name="" id="" />
          </div>
          <div className='form-group'>
            <label htmlFor="">Category</label>
            <input value={category} onChange={e => setCategory(e.target.value)} type="text" name="" id="" />
          </div>
          <div className='form-group'>
            <label htmlFor="">Answer</label>
            <input value={answer} onChange={e => setAnswer(e.target.value)} type="text" name="" id="" />
          </div>
          <div className='form-group'>
            <button type='submit'>Add question</button>
          </div>
        </form>
      </div>
      <div>
        <div className='filters'>
          <button type='button' onClick={() => filterByCategory('nodejs')}>Nodejs</button>
          <button type='button' onClick={() => filterByCategory('')}>Clear filter</button>
        </div>
        <div className='questions-container'>
          {(questions && questions.length > 0) && filtered.length < 1 &&
            questions.map((q: any, i: number) => {
              return (
                <div className='question-group'>
                  <div className='q-hold' key={q.id}>
                    <p className='number'>{i + 1}</p>
                    <p
                      onInput={(e) => {
                        updateQuestion(q.id, { question: e.currentTarget.textContent || undefined })
                        e.currentTarget.focus()
                      }}
                      onClick={(e) => setDetailsToShow(q.id)}
                      className='text-sm pb-2 text-gray-600'>
                      {q.question}</p>
                    <span className='category'>
                      <p>{q.category}</p>
                    </span>
                    <button className='delete-btn' onClick={() => deleteQuestion(q.id)}>
                      Delete
                    </button>
                  </div>
                  {showDetails === q.id &&
                    <div>
                      <ul>
                        {(q.answers && q.answers.length > 0) &&
                          q.answers.map((ans: any, i: number) => {
                            return (
                              <li className='answers'>{ans}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  }
                </div>
              )
            })
          }
          {(filtered && filtered.length > 0) &&
            filtered.map((q: any, i: number) => {
              return (
                <div className='question-group'>
                  <div className='q-hold' key={q.id}>
                    <p className='number'>{i + 1}</p>
                    <p
                      onInput={(e) => {
                        updateQuestion(q.id, { question: e.currentTarget.textContent || undefined })
                        e.currentTarget.focus()
                      }}
                      onClick={(e) => setDetailsToShow(q.id)}
                      className='text-sm pb-2 text-gray-600'>
                      {q.question}</p>
                    <span className='category'>
                      <p>{q.category}</p>
                    </span>
                    <button className='delete-btn' onClick={() => deleteQuestion(q.id)}>
                      Delete
                    </button>
                  </div>
                  {showDetails === q.id &&
                    <div>
                      <ul>
                        {(q.answers && q.answers.length > 0) &&
                          q.answers.map((ans: any, i: number) => {
                            return (
                              <li className='answers'>{ans}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
