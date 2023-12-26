// use npm install && npm start что бы запустить 


// import express from 'express';
// import http from 'http';

// const sleep = (time = 0) => new Promise((resolve) => setTimeout(resolve, time));
// const port = 3002;

// //4040

// const app = express();
// const server = http.createServer(app);

// app.use(express.json());

// app.get('/login', (_, res) => {
//     res.write('This is mock server');
//     res.end();
// });

// app.post('/endpoint', async (req, res) => {
//     await sleep(3000);
//     if (typeof req.body.email === 'string') {
//         // Trigger rendering of the React app
//         res.status(200).json({ ok: true, message: 'Rendering triggered' });
//         // Assuming renderApp is imported at the top of this file
//         renderApp();
//     } else {
//         return res.status(400).json({ ok: false, message: `Expected email, got: ${req.body.email}` });
//     }
// });

// // New route to trigger rendering
// app.get('/render-app', (_, res) => {
//     res.status(200).json({ message: 'Rendering triggered' });
// });

// server.listen(port, () => {
//     console.log(`Server listening on http://localhost:${port}`);
// });
