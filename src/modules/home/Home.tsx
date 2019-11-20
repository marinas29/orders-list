import React from 'react';
import moment from 'moment';

import List from '../common/List';

import columns from './__mocks__/columns.json';
import data from './__mocks__/data.json';
import statusList from './__mocks__/status.json';

interface Item {
  createdAt?: string,
  status?: Number,
  statusUpdateTime?: string,
}

const Home: React.FC = () => {
  const parseData = (data: Array<Object>) => {
    const dateFormat: string = 'DD/MM/YYYY hh:mm:ss';

    return data.map((order: Item) => ({
      ...order,
      createdAt: moment(order.createdAt).format(dateFormat),
      statusUpdateTime: moment(order.statusUpdateTime).format(dateFormat),
      statusName: statusList.find(status => (
        status.code === order.status ? status.name : ''
      )),
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
