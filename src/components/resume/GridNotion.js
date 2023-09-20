import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; //
import { NotionRenderer } from 'react-notion';

import React, { useState, useEffect } from 'react';

export default function GridNotion() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // 두번째 방법
    const NOTION_PAGE_ID = 'a63ab92708594c13b06661413801419b';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <div
      data-theme="pastel"
      className="max-w-4xl md:w-[100%] mx-auto mockup-window bg-base-200"
    >
      <div className="bg-white">
        <NotionRenderer
          // blockMap={staticResponse}
          blockMap={response}
          fullPage={true}
        />
      </div>
    </div>
  );
}
