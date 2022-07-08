import React from 'react';
import './Quote.css';

const Quote = () => (
  <div className="pt-5 mt-5 quotes-box">
    <h3 className="Quote m-5 py-2" title="quote">
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding.
      <span>— WIlliam Paul Thurston</span>
    </h3>
    <h3 className="Quote m-5 py-2" title="quote">
      Without mathematics, there’s nothing you can do. Everything around you is mathematics.
      Everything around you is numbers.
      <span>— Shakuntala Devi, Indian writer and mental calculator</span>
    </h3>
    <h3 className="Quote m-5 py-2" title="quote">
      Pure mathematics is, in its way, the poetry of logical ideas.
      <span>— Albert Einstein, German theoretical physicist</span>
    </h3>
  </div>
);

export default Quote;
