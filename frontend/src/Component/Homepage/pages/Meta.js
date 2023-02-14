import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Meta({ title, description, keywords }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PAPER LEAF - {title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Helmet>
    </HelmetProvider>
  );
}

Meta.defaultProps = {
  title: 'Welcome to PaperLeaf',
  description: 'Best available women kurtis, dupattas, fabrics, dress materials in Bhubaneswar, Odisha',
  keywords: 'Kurtis, Kurti Sets, Dupattas, Dress, Fabrics, Jewellery',
};