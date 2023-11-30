import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './components/Student';
import StudentReview from './components/StudentReview';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
      <Student fullName="John Connor" jobExperience={8}>
        <StudentReview/>
      </Student>
      
      <Student fullName="Luke Skywalker" jobExperience={2} />
  </div>
    


  
  // </React.StrictMode>
);

