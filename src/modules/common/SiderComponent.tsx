import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';

import menuItems from './__mocks__/menu-items.json';

const { Sider, Content } = Layout;

interface Props {
  components: Object,
}

class SiderComponent extends React.Component<Props> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menuItems.map(item => (
              <Menu.Item key={item.key}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Menu.Item>
            ))}
          </Menu>
          <Icon
            className="trigger"
            onClick={this.toggle}
            style={{ color: '#ffffff' }}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          />
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header> */}
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.components}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderComponent;