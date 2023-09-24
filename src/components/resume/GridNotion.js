import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NotionRenderer } from 'react-notion';

import React, { useState, useEffect } from 'react';
import LoadingUi from '../ui/LoadingUi';

export default function GridNotion({ NOTION_PAGE_ID }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      })
      .catch((error) => {
        console.error('Error fetching Notion data:', error);
      });
  }, [NOTION_PAGE_ID]);

  if (response) {
    return (
      <div data-theme="pastel" className="w-[100%] mx-auto">
        <div className="bg-white p-3 ">
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
