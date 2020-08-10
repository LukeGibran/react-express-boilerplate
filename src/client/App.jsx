import React, { useEffect, useState } from 'react';
import './scss/main.scss';

import ReactImage from './assets/img/react.png';
import ExpressImage from './assets/img/express.png';

// Components
import Sample from './components/Sample';

const App = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    checkServerStatus();
    // eslint-disable-next-line
  }, []);

  const checkServerStatus = async () => {
    try {
      const res = await fetch('/api/welcome');
      const data = await res.json();

      setStatus(data.msg);
    } catch (err) {
      console.log(err);
      setStatus('Disconnected');
    }
  };
  return (
    <div id="app">
      <h1>React / Express Boiler Plate</h1>
      <div id="img">
        <img src={ReactImage} alt="" id="react" />
        <img src={ExpressImage} alt="" id="express" />
      </div>

      <h2>
        Server:{' '}
        <span className={status === 'Disconnected' ? 'danger' : 'success'}>
          {status}
        </span>
      </h2>
      <Sample />
    </div>
  );
};

export default App;
