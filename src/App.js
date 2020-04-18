import React, { Component } from 'react';
import Customer from './components/Customers';
import './App.css';

const customer = [ // 보내질 하나의 변수
  {
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '찌윤',
  'birthday': '990913',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '정애',
  'birthday': '730329',
  'gender': '여자',
  'job': '선생님'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '하나',
  'birthday': '000130',
  'gender': '여자',
  'job': '요가선생님'
}
]

class App extends Component {
  render() {
    return (
      <div>
        { customer.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })}
      </div>
    )
  }
}

export default App;
