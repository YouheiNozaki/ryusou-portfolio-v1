import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function IndexPage() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      autoplay: true,
      loop: false,
      path: '/animations/data.json',
    });
  });

  return (
    <>
      <div ref={animationContainer} />
    </>
  );
}

export default IndexPage;
