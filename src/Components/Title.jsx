import React from 'react';

const Title = ({ setActivePage }) => {
  return (
    <div className="container">
      <h1 className='title1'>スポイト<br />カレンダー</h1>
      <img className='title2' src="./logo.png" alt="ロゴ" />
      <button type="button" className="btn btn-outline-primary title3" onClick={() => setActivePage('main')}>
        start!
      </button>
    </div>
  );
};

export default Title;
