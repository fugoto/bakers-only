const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const { db } = require('./db');
const routes = require('./routes');
const authMiddleware = require('./middleware/authMiddleware');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authMiddleware);

app.use(express.static(path.join(__dirname, './public')));

app.use('/api', routes);

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// 500 handler
app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send(`something wrong: ${err.message}`);
});

// set PORT
async function init() {
  try {
    console.log('syncing');
    await db.sync();
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

init();
