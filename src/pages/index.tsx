import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { Layout } from '../components/templates/layouts';

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
      <Layout>
        <div ref={animationContainer} />
      </Layout>
    </>
  );
}

export default IndexPage;
