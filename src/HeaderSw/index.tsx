import React, { Component } from 'react';

interface Props {
  name: string;
}
interface State {}

export default class Header extends Component<Props, State> {
  state = {};

  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}
