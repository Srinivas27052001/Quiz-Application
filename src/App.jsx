import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import Trivia from './components/Trivia'
import Timer from './components/Timer'
import Start from './components/Start'


function App() {

  const[username,setUsername]=useState(null);
  const[questionNumber,setQuestionNumber]=useState(1)
  const[stop,setStop]=useState(false)
  const[earned,setEarned]=useState("$ 0")

    
  const data = [
    {
      id: 1,
      question: "Which data type is used to create a variable that should store text?",
      answers: [
        {
          text: "string",
          correct: false,
        },
        {
          text: "String",
          correct: true,
        },
        {
          text: "myString",
          correct: false,
        },
        {
          text: "Txt",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which method can be used to find the length of a string?",
      answers: [
        {
          text: "length()",
          correct: true,

        },
        {
          text: "getLength()",
          correct: false,
        },
        {
          text: "getSize()",
          correct: false,
        },
        {
          text: "len()",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the correct way to create an object called myObj of MyClass?",
      answers: [
        {
          text: "class MyClass=new myObj();",
          correct: false,
        },
        {
          text: "new myObj=MyClass();",
          correct: false,
        },
        {
          text: "class myObj=new MyClass();",
          correct: false,
        },
        {
          text: "MyClass myObj=new MyClass();",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "Which data type is used to create a variable that should store text?",
      answers: [
        {
          text: "string",
          correct: false,
        },
        {
          text: "String",
          correct: true,
        },
        {
          text: "myString",
          correct: false,
        },
        {
          text: "Txt",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which method can be used to find the length of a string?",
      answers: [
        {
          text: "length()",
          correct: true,

        },
        {
          text: "getLength()",
          correct: false,
        },
        {
          text: "getSize()",
          correct: false,
        },
        {
          text: "len()",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the correct way to create an object called myObj of MyClass?",
      answers: [
        {
          text: "class MyClass=new myObj();",
          correct: false,
        },
        {
          text: "new myObj=MyClass();",
          correct: false,
        },
        {
          text: "class myObj=new MyClass();",
          correct: false,
        },
        {
          text: "MyClass myObj=new MyClass();",
          correct: true,
        },
      ],
    },

    {
      id: 7,
      question: "Which data type is used to create a variable that should store text?",
      answers: [
        {
          text: "string",
          correct: false,
        },
        {
          text: "String",
          correct: true,
        },
        {
          text: "myString",
          correct: false,
        },
        {
          text: "Txt",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which method can be used to find the length of a string?",
      answers: [
        {
          text: "length()",
          correct: true,

        },
        {
          text: "getLength()",
          correct: false,
        },
        {
          text: "getSize()",
          correct: false,
        },
        {
          text: "len()",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the correct way to create an object called myObj of MyClass?",
      answers: [
        {
          text: "class MyClass=new myObj();",
          correct: false,
        },
        {
          text: "new myObj=MyClass();",
          correct: false,
        },
        {
          text: "class myObj=new MyClass();",
          correct: false,
        },
        {
          text: "MyClass myObj=new MyClass();",
          correct: true,
        },
      ],
    },

    {
      id: 10,
      question: "Which data type is used to create a variable that should store text?",
      answers: [
        {
          text: "string",
          correct: false,
        },
        {
          text: "String",
          correct: true,
        },
        {
          text: "myString",
          correct: false,
        },
        {
          text: "Txt",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which method can be used to find the length of a string?",
      answers: [
        {
          text: "length()",
          correct: true,

        },
        {
          text: "getLength()",
          correct: false,
        },
        {
          text: "getSize()",
          correct: false,
        },
        {
          text: "len()",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the correct way to create an object called myObj of MyClass?",
      answers: [
        {
          text: "class MyClass=new myObj();",
          correct: false,
        },
        {
          text: "new myObj=MyClass();",
          correct: false,
        },
        {
          text: "class myObj=new MyClass();",
          correct: false,
        },
        {
          text: "MyClass myObj=new MyClass();",
          correct: true,
        },
      ],
    },

    {
      id: 13,
      question: "Which data type is used to create a variable that should store text?",
      answers: [
        {
          text: "string",
          correct: false,
        },
        {
          text: "String",
          correct: true,
        },
        {
          text: "myString",
          correct: false,
        },
        {
          text: "Txt",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which method can be used to find the length of a string?",
      answers: [
        {
          text: "length()",
          correct: true,

        },
        {
          text: "getLength()",
          correct: false,
        },
        {
          text: "getSize()",
          correct: false,
        },
        {
          text: "len()",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the correct way to create an object called myObj of MyClass?",
      answers: [
        {
          text: "class MyClass=new myObj();",
          correct: false,
        },
        {
          text: "new myObj=MyClass();",
          correct: false,
        },
        {
          text: "class myObj=new MyClass();",
          correct: false,
        },
        {
          text: "MyClass myObj=new MyClass();",
          correct: true,
        },
      ],
    },

  ]; 

  
  

  const moneypyramid=useMemo(()=>
    [
      {id:1,amount:"₹100"},
      {id:2,amount:"₹200"},
      {id:3,amount:"₹300"},
      {id:4,amount:"₹500"},
      {id:5,amount:"₹1000"},  
      {id:6,amount:"₹2000"},
      {id:7,amount:"₹4000"},
      {id:8,amount:"₹8000"},
      {id:9,amount:"₹16000"},
      {id:10,amount:"₹32000"},
      {id:11,amount:"₹64000"},
      {id:12,amount:"₹125000"},
      {id:13,amount:"₹250000"},
      {id:14,amount:"₹500000"},
      {id:15,amount:"₹1000000"},
    ].reverse(),
  []
);

  useEffect(()=>{
    questionNumber>1&& setEarned(moneypyramid.find((m)=>m.id===questionNumber-1).amount)
  },[questionNumber,moneypyramid])

  return (
    <div className='app'>
      {!username ? (
      <Start setUsername={setUsername}/>
    ): (
         <>
          <div className='main'>
        {stop?
        <h1 className='endText'>You Earned:{earned}</h1>:(
          <>
        <div className='top'>
          <div className='timer'>
            <Timer setStop={setStop} questionNumber={questionNumber}/>
 
           </div>
        </div>
        <div className='bottom'>
          <Trivia data={data}
           setStop={setStop}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}
           />
           </div>
            </>  
    )}
      </div>
   

      <div className='pyramid'>
      <ul className='moneylist'>
        {moneypyramid.map((m)=>(
            <li className={questionNumber===m.id? "moneylistItem active":"moneylistItem"} >
            <span className='moneylistItemNumber'>{m.id}</span>
            <span className='moneylistItemAmount'>{m.amount}</span>
          </li>
          ))}
     
    
       
      </ul>
      </div>
         </>

      )}
    </div>
  );
}

export default App