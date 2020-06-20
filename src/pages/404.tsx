import * as React from 'react';
import { SEO } from '../components/templates/Seo';

type Props = {
  location: Location;
};

const NotFoundPage: React.FC<Props> = ({ location }) => (
  <>
    <SEO
      pagetitle="404エラーページ"
      pagepath={location.pathname}
    />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist... the
      sadness.
    </p>
  </>
);

export default NotFoundPage;
