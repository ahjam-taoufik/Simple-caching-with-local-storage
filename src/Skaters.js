import React from 'react';
import useRequest from './hooks/useRequest';

const renderSkater = ({ name, stance }) => (
  <div key={name}>
    <p>
      {name} - {stance}
    </p>
  </div>
);

const url = 'https://thps.now.sh/api/skaters';

const Skaters = () => {
  const { data: skaters, loading } = useRequest(url);

  if (loading) return <p>Loading...</p>;

  return skaters.map(renderSkater);
};

export default Skaters;