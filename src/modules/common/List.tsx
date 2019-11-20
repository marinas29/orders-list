import * as React from 'react';
import { Table } from 'antd';
import '../../../node_modules/antd/dist/antd.css';

interface Props {
  columns?: Array<Object>,
  dataSource?: Array<Object>,
}

class List extends React.Component<Props> {
  render() {
    const { columns, dataSource } = this.props;
  
    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 100 }}
        scroll={{ y: 800 }}
      />
    );
  }
}

export default List;
