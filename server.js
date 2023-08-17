const express = require('express');
const app = express();
const port = 3000;

// Greeting routes
app.get('/', (req, res) => {
  res.send(`<h1>Homepage</h1>`)
})
app.get('/greeting', (req, res) => {
  res.send('<h1>Hello, Stranger!</h1>')
})

app.get('/greeting/:name', (req, res) => {
  res.send(`<h1>Hello there, ${req.params.name}!</h1>`);
})

// tip calculator routes
app.get('/tip', (req, res) => {
  res.send(`<h1>Tip Calculator</h1>`)
})

// app.get('/tip/:total', (req, res) => {
//   res.send(`<h1>${req.params.total}</h1>`)
// })

// app.get('/tip/:tipPercentage', (req, res) => {
//   res.send(`<h1>${req.params.total}</h1>`)
// })

// When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20 on the page).
app.get('/tip/:total/:tipPercentage', (req, res) => {
  res.send(`<h1>$ ${req.params.total * req.params.tipPercentage / 100}</h1>`)
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})