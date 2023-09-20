import React from 'react';
import LoadingUi from '../../ui/LoadingUi';

export default function TagList({ tags, setCurrentTag, currentTag }) {
  if (tags) {
    return (
      <div className="flex flex-row p-1 rounded-md flex-wrap justify-center gap-1">
        {tags.map((tag) => {
          return (
            <div key={tag.id} className="flex flex-col">
              <button
                className={`btn btn-sm btn-ghost normal-case ${
                  currentTag === tag.id && 'bg-slate-600'
                }`}
                onClick={() => setCurrentTag(tag.id)}
              >
                # {tag.name}
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <LoadingUi />;
  }
}
