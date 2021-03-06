const { Subject } = require('../models');

const subjectData = [
  {
    name: 'Web Dev'
  },
  {
    name: 'Nursing'
  },
  {
    name: 'Math'
  },
  {
    name: 'Biology'
  },
  {
    name: 'History'
  },
  {
    name: 'Psychology'
  },
  {
    name: 'Sports'
  },
  
];

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;

