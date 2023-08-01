import React, { useState } from 'react';
import axios from 'axios';
import Quote from './Quote';
import { apikey } from '../../apikey';
import './home.scss';
import DashBoard from './DashBoard';
import RecentAdded from './RecentAdded';
const Home = () => {
  const [quoteData, setQuoteData] = useState({
    quote: 'It is never too late to be what you might have been.',
    author: 'George Eliot',
  });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.request({
        method: 'GET',
        url: 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
        headers: {
          'X-RapidAPI-Key': apikey,
          'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com',
        },
      });

      if (response.data && response.data.length > 0) {
        setQuoteData(response.data[0]);
      } else {
        setQuoteData({
          quote: 'Oops! Something went wrong. Please try again later.',
          author: '',
        });
      }
    } catch (error) {
      console.error(error);
      setQuoteData({
        quote: 'Oops! Something went wrong. Please try again later.',
        author: '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <RecentAdded />
      <Quote data={quoteData} quote={fetchQuote} loading={loading} />
      <DashBoard />
    </div>
  );
};

export default Home;
