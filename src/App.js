import { useEffect, useState } from 'react';
import { fetchProperties } from './api';
import Component from './Component';
import './styles.css';

export default function App() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetchProperties().then((result) => setRes(result));
  }, []);

  return (
    <div className="App">
      <div className="table">
        {res?.map((el) => (
          <Component key={el.id} el={el} />
        ))}
      </div>
    </div>
  );
}
