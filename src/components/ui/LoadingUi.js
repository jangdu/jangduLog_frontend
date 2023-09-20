import React from 'react';

export default function LoadingUi() {
  return (
    <div className="w-full  min-h-screen">
      <div className="flex justify-center">
        <span className=" loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
}
