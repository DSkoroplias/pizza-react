import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="2" y="300" rx="10" ry="10" width="260" height="88" />
    <rect x="3" y="271" rx="10" ry="10" width="260" height="16" />
    <rect x="3" y="407" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="402" rx="25" ry="25" width="128" height="45" />
    <circle cx="134" cy="129" r="125" />
  </ContentLoader>
);

export default Skeleton;
