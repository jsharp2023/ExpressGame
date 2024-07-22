const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const indexRouter = require('./routers/index');
const gameRouter = require('./routers/game');

app.use('/', indexRouter);
app.use('/api/game', gameRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

