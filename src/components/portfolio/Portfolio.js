import React, { useState } from 'react';

export default function Portfolio() {
  const [checkCollapse, setCheckCollapse] = useState(true);

  return (
    <div className="collapse bg-base-200">
      <input
        type="checkbox"
        checked={checkCollapse}
        onClick={() => setCheckCollapse(!checkCollapse)}
      />
      <div className="collapse-title text-2xl font-bold">🧑🏻‍💻 Projects</div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
}
