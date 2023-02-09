import React from 'react';
import { Helmet } from 'react-helmet';

export default function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>PAPER LEAF - {title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: 'Welcome to PaperLeaf',
  description: 'Best available women kurtis, dupattas, fabrics, dress materials in Bhubaneswar, Odisha',
  keywords: 'Kurtis, Kurti Sets, Dupattas, Dress, Fabrics, Jewellery',
};