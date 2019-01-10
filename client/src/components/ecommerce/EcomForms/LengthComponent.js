import React, { Component } from 'react';

import {
  Form, Input, Select, Button,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class LengthInput extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      length: value.length || 'inch',
    };
  }

  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  }

  handlelengthChange = (length) => {
    if (!('value' in this.props)) {
      this.setState({ length });
    }
    this.triggerChange({ length });
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.length}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handlelengthChange}
        >
          <Option value="inch">inch</Option>
          <Option value="meter">m</Option>
          <Option value="centimeter">cm</Option>
          <Option value="milimeter">mm</Option>
        </Select>
      </span>
    );
  }
}



const WrappedDemo = Form.create()(LengthInput);
export default LengthInput;
