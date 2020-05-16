const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) =>{
    res.send([
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
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));