import React, { Component } from 'react';

import Multiselect from 'multiselect-dropdown-react';

const data = [{
  name: 'one',
  value: 'one'
},
{
    name: 'two',
    value: 'two'
  },
  {
    name: 'three',
    value: 'three'
  },
  {
    name: 'four',
    value: 'four'
  },
  {
    name: 'five',
    value: 'five'
  },
  {
    name: 'six',
    value: 'six'
  }];
class Drop extends Component {
  result(params) {
    console.log(params);
  }
  render() {
    return (
      <div >
        <Multiselect options={data} onSelectOptions={this.result} />
      </div>
    );
  }
}

export default Drop;
