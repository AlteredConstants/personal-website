import React from 'react';
import Link from 'next/prefetch';
import { NextUrlType } from '../component/types';
import Page from '../component/page';

export default function NotFound({ url }) {
  return (
    <Page title="Not Found" pathname={url.pathname}>
      <p>Nope. <Link href="/">Go home.</Link></p>
    </Page>
  );
}

NotFound.propTypes = {
  url: NextUrlType,
};
