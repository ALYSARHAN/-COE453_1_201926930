// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World from NodeApp! docker is cool!');
//     }
// );

// app.listen(3000, () => {
//     console.log('Server is up on 3000');
//     }
// );
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hello World from NodeApp! docker is cool!');
    const htmlPath = path.resolve(__dirname, 'index.html');
    // Send the HTML file as a response
    res.sendFile(htmlPath);
    }
);

app.listen(3000, () => {
    console.log('Server is up on 3000');
    }
);