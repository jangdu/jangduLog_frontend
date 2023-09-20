import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; //
import { NotionRenderer } from 'react-notion';

import React, { useState, useEffect } from 'react';
import LoadingUi from '../ui/LoadingUi';

export default function GridNotion() {
  const [response, setResponse] = useState();

  useEffect(() => {
    const NOTION_PAGE_ID = 'a63ab92708594c13b06661413801419b';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  if (response) {
    return (
      <div
        data-theme="pastel"
        className="max-w-4xl md:w-[100%] mx-auto mockup-window bg-base-200"
      >
        <div className="bg-white p-3 sm:px-8">
          <NotionRenderer
            // blockMap={staticResponse}
            blockMap={response}
            fullPage={false}
          />
        </div>
      </div>
    );
  } else {
    return <LoadingUi />;
  }
}
