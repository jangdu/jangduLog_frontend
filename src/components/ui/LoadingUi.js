import React from 'react';

export default function LoadingUi() {
  return (
    <div className="w-full">
      <div className="flex justify-center min-h-screen">
        <span className=" loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
}
