import React, { useEffect, useRef } from 'react';

export default function Comment({ id }) {
  const commentsEl = useRef();
  const scriptEl = document.createElement('script');

  useEffect(() => {
    scriptEl.async = true;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('repo', 'jangdu/DohoLog-comments');
    scriptEl.setAttribute('issue-term', `posts/${id}`);
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    commentsEl.current.appendChild(scriptEl);
  });
  return (
    <div className="my-6">
      <div className="sm:p-4" ref={commentsEl}></div>
    </div>
  );
}
