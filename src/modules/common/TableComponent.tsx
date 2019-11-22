import * as React from 'react';
import { Table } from 'antd';
import '../../../node_modules/antd/dist/antd.css';

interface Props {
  columns?: Array<Object>,
  dataSource?: Array<Object>,
}

class TableComponent extends React.Component<Props> {
  state = {
    selectedRowKeys: [],
  };

  onSelectChange = (selectedRowKeys: Array<Object>) => this.setState({ selectedRowKeys });

  handleChange = (pagination: any, filters: any, sorter: any) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  
  render() {
    const { columns, dataSource } = this.props;
    const { selectedRowKeys } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <Table
        bordered={true}
        columns={columns}
        dataSource={dataSource}
        onChange={this.handleChange}
        pagination={{ pageSize: 100 }}
        rowSelection={rowSelection}
        scroll={{ y: 800 }}
        size="middle"
      />
    );
  }
}

export default TableComponent;
