const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('sustainifyshop'); // You must have set up an engine to render .html files though
})



app.get('/carbonfoot', (req, res) => {
    res.render('carbonfoot', {navImage: 'https://www.tuvsud.com/-/media/global/images/services/sustainability-services/ss-carbon-neutrality.jpg?pid=2baf6dd4-2b31-4d27-8970-4ba9cfac380b'}); // You must have set up an engine to render .html files though
})
app.get('/foodnutrition', (req, res) => {
    res.render('foodnutrition', { navImage: 'https://www.merieuxnutrisciences.com/eu/wp-content/uploads/2023/04/Header-ObstGemuese_72dpi.jpg' }); // You must have set up an engine to render .html files though
})
app.get('/moneyshop', (req, res) => {
    res.render('moneyshop', {navImage: 'https://img.pikbest.com/wp/202403/income-calculation-money-and-coins-calculator-a-visual-representation-of-tracking-expenses_9824020.jpg!w700wp'}); // You must have set up an engine to render .html files though
})



app.listen(3333, () => {
    console.log("LISTENING ON PORT 3333")
})

