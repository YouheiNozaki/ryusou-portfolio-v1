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
      <h1> Welcome!!</h1>
      <div ref={animationContainer} />
    </>
  );
}

export default IndexPage;
