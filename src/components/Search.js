import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  // useEffect(() => {
  //   console.log('I ONLY RUN ONCE');
  // }, []);

  // useEffect(() => {
  //   console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
  // });

  useEffect(() => {
    const search = async () => {
      await axios.get('sdsds');
    };

    search();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
