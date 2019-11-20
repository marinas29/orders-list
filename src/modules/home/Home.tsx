import React from 'react';
import List from '../common/List';
import columns from './__mocks__/columns.json';
import data from './__mocks__/data.json';

const Home: React.FC = () => {
  return (
    <div className="home">
      <List
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default Home;
