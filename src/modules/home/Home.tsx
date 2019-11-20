import React from 'react';
import moment from 'moment';

import List from '../common/List';
import columns from './__mocks__/columns.json';
import data from './__mocks__/data.json';

interface Item {
  createdAt?: string,
  statusUpdateTime?: string,
} 

const Home: React.FC = () => {
  const parseData = (data: Array<Object>) => {
    const dateFormat: string = 'DD/MM/YYYY hh:mm:ss';

    return data.map((item: Item) => ({
      ...item,
      createdAt: moment(item.createdAt).format(dateFormat),
      statusUpdateTime: moment(item.statusUpdateTime).format(dateFormat),
    }));
  }

  return (
    <div className="home">
      <List
        columns={columns}
        dataSource={parseData(data)}
      />
    </div>
  );
}

export default Home;
