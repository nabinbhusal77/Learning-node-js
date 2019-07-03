const express = require('express'),
    app = express(),
    expressLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser')

    // DB connection
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/myProject', { useNewUrlParser: true });

    mongoose.connection.once('open', () => {
        console.log('Connection Established to DB')
    }).on('error', () => {
        console.log('Problem connection to DB.');
    })

    // Body-Parser
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

    // Router Variables
const indexRouter = require('./routes/index'),
      authorsRouter = require('./routes/authors');

    // EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

    // Layouts
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

    // Public Files
app.use(express.static('public'))

    // Routes Handling
app.use('/', indexRouter);
app.use('/authors', authorsRouter);

    // Port and Server
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening to port ${port}`));