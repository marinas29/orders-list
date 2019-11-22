import React from 'react';
import moment from 'moment';

import TableComponent from '../common/TableComponent';

import columns from './__mocks__/columns.json';
import data from './__mocks__/data.json';
import statusList from './__mocks__/status.json';

interface Item {
  createdAt?: string,
  status?: Number,
  statusUpdateTime?: string,
}

interface ColumnItem {
  [key:string]: any,
  dataIndex: string,
  ellipsis: boolean,
  filterType: string,
  key: string,
  title: string,
}

interface ColumnData {
  [key:string]: any,
}

const Home: React.FC = () => {
  const parseData = (data: Array<Object>) => {
    const dateFormat: string = 'DD/MM/YYYY hh:mm:ss';

    return data.map((order: Item, index: Number) => ({
      ...order,
      createdAt: moment(order.createdAt).format(dateFormat),
      key: index,
      statusUpdateTime: moment(order.statusUpdateTime).format(dateFormat),
      statusName: statusList.find(status => (
        status.code === order.status ? status.name : ''
      )),
    }));
  }

  const parseFilters = (data: Array<ColumnData>, key: string) => {
    const parsedData = data.map(item => ({ text: parseKeys(key, item), value: parseKeys(key, item) }));

    return parsedData.reduce((accum: Array<any>, curr) => {
      if (curr.text && curr.value !== undefined) {
        if (!accum.some(x => x.value === curr.value && x.text === curr.text)) {
          accum.push(curr);
        }
      }
      return accum;
    }, []);
  }

  const parseKeys = (path: string, obj: Object) => {
    return path.split('.').reduce((prev: any, curr) => {
      return prev ? prev[curr] : null;
    }, obj);
  }

  const parseColumns = (columns: Array<ColumnItem>) => (
    columns.map((column: ColumnItem) => ({
      ...column,
      filters: parseFilters(parseData(data), column.key),
      onFilter: (value: Number, record: ColumnItem) => parseKeys(column.key, record).indexOf(value) === 0,
      sorter: (a: ColumnItem, b: ColumnItem) => parseKeys(column.key, a).length - parseKeys(column.key, b).length,
      sortDirections: ['descend', 'ascend'],
    }))
  );

  return (
    <div className="home">
      <TableComponent
        columns={parseColumns(columns)}
        dataSource={parseData(data)}
      />
    </div>
  );
}

export default Home;
