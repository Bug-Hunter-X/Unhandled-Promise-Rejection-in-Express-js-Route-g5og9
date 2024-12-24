const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('OK');
  }).catch(err => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

//Example Async Function
function someAsyncOperation(){
  return new Promise((resolve, reject) => {
    //Simulate an error 50% of the time
    const random = Math.random();
    if(random < 0.5){
      reject(new Error('Simulated Async Error'));
    }else{
      resolve();
    }
  })
}
