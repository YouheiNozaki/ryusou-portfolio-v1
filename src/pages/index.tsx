import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function IndexPage() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      path: '/animations/data.json',
    });
  });

  return (
    <>
      <p className="text-6xl text-green-700 text-center">
        Welcome!!
      </p>
      <div ref={animationContainer} />
    </>
  );
}

export default IndexPage;
