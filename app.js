const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// init app
const app = express();
// setup view engine
var hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: [
        // path to your partials
        path.join(__dirname, 'views/partials'),
    ]
});
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');
// connect client side to server css and js files
app.use('/public',express.static('public'))
// create port
const port = 3000;
// handle home route
app.get('/',(req,res) => {
    res.render('home',{
        title: 'Home'
    });
});
app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About'
    });
});
app.get('/contact',(req,res) => {
    res.render('contact',{
        title: 'Contact Us'
    });
});
app.get('/signup',(req,res) => {
    res.render('signupform',{
        title: 'Register'
    });
});
app.post('/signup',(req,res) => {
    res.render('regsuccess',{
        title: 'Register'
    });
});
app.get('/auth/facebook',(req,res) => {
    res.render('loginform',{
        title: 'Login'
    });
});
app.get('/auth/google',(req,res) => {
    res.render('loginform',{
        title: 'Login'
    });
});
app.get('/auth/email',(req,res) => {
    res.render('loginform',{
        title: 'Login'
    });
});
app.get('/listCar',(req,res) => {
    res.render('listCar',{
        title:'Listing'
    });
});
app.post('/listCar',(req,res) => {
    res.render('listCar2',{
        title: 'Finish'
    });
});
app.post('/listCar2',(req,res) => {
    res.render('listCarSuccess',{
        title: 'Finish'
    });
});
app.get('/login',(req,res) => {
    res.render('loginform',{
        title:'Login'
    });
});
app.get('/successfullogin',(req,res) => {
    res.render('successfulllogin',{
        title:'Success'
    });
});
app.post('/login',(req,res) => {
    res.render('successfullogin',{
        title:'Login Success'
    });
});
app.get('/logout',(req,res) => {
    res.render('logoutpage',{
        title:'Logout'
    });
});
app.get('/RentCar',(req,res) => {
    res.render('RentCar',{
        title:'Rent'
    });
});
app.get('/calculate',(req,res) => {
    res.render('claculate',{
        title:'Calculate Total'
    });
});
app.post('/RentCar',(req,res) => {
    res.render('calculate',{
        title:'Calculate'
    });
});
app.get('/checkout',(req,res) => {
    res.render('checkout',{
        title:'Payment'
    });
});
app.get('/payment',(req,res) => {
    res.render('payment',{
        title:'Method'
    });
});
app.post('/calculate',(req,res) => {
    res.render('checkout',{
        title:'payment'
    });
});
app.post('/checkout',(req,res) => {
    res.render('payment',{
        title:'pay'
    });
});
app.get('/paymentsuccess',(req,res) => {
    res.render('paymentsuccess',{
        title:'Success'
    });
});
app.post('/payment',(req,res) => {
    res.render('paymentsuccess',{
        title:'pay'
    });
});
app.get('/queries',(req,res) => {
    res.render('queries',{
        title:'Query'
    });
});
app.post('/contact',(req,res) => {
    res.render('queries',{
        title:'Query'
    });
});
app.listen(port,() => {
    console.log('Server is running on port ' +  port);
});