const express = require('express');
const https = require('https'); // Import the built-in http module
const app = express();
const port = 3003;
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
const API_KEY = process.env.API_KEY;
const options = {
    hostname: 'api.openai.com',
    port: 443,
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    }
  };

app.post('/formAI', async (req, res) => {
  const { term } = req.body;

  const postData = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: `Define this word ${term} in concise way`
    }],
    max_tokens: 100
  });

  
  try {
    const req = https.request(options, async (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      console.log(data);

      response.on('end', () => {
        if (response.headers['content-type'].startsWith('application/json')) {
          try {
            const responseJSON = JSON.parse(data);
            const answer = responseJSON.choices[0].message.content;
            res.json({ answer });
          } catch (jsonError) {
            console.error('Error parsing JSON response:', jsonError);
            res.status(500).json({ error: 'An error occurred while processing the response.' });
          }
        } else {
          // Handle HTML response
          console.log('HTML response:', data);
          res.status(500).json({ error: 'Received unexpected HTML response.' });
        }
      });
    });

    req.on('error', (error) => {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    });

    req.write(postData);
    req.end();
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});


app.post('/questAI', async (req, res) => {
    const { keywords } = req.body;
  
    const postData = JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content:`Generate only one multiple choices question with answer based on keywords: ${keywords}`
      }],
      max_tokens: 100
    });
  
    
    try {
      const req = https.request(options, async (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        console.log(data);
  
        response.on('end', () => {
          if (response.headers['content-type'].startsWith('application/json')) {
            try {
              const responseJSON = JSON.parse(data);
              const answer = responseJSON.choices[0].message.content;
              res.json({ answer });
            } catch (jsonError) {
              console.error('Error parsing JSON response:', jsonError);
              res.status(500).json({ error: 'An error occurred while processing the response.' });
            }
          } else {
            // Handle HTML response
            console.log('HTML response:', data);
            res.status(500).json({ error: 'Received unexpected HTML response.' });
          }
        });
      });
  
      req.on('error', (error) => {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
      });
  
      req.write(postData);
      req.end();
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  });
  


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
