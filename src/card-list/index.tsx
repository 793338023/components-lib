import React, { Component } from 'react';
import { Card } from 'antd';
import './style/index';

interface Props {
  title: string;
}
interface State {}

export default class CardList extends Component<Props, State> {
  state = {};

  render() {
    const { title } = this.props;
    return (
      <div className="site-card-border-less-wrapper">
        <Card title={title} bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}
