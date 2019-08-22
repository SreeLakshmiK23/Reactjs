import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Abcdef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  handleAddRow = () => {
    this.setState((prevState, props) => {
      const row = {content:"0" };
      return { rows: [...prevState.rows, row] };
    });
  };
    handleRemoveRow = () => {
    this.setState((prevState, props) => {
      return { rows: prevState.rows.slice(1) };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div style={styles}>
        <table
          className="table table-bordered table-hover"
                id="tab_logic">
              
                <thead>
                  <tr>
                    <th className="text-center"> Sl No. </th>
                    <th className="text-center"> Order</th>
                    <th className="text-center"> Name</th>
                    <th className="text-center"> Description</th>
                    <th />
                  </tr>
                </thead>
          <tbody>
            {this.state.rows.map(row => (
              <tr>
              
                <td>{row.content}</td>
              </tr>
            ))}

             </tbody>
        </table>
            
              <button className="" onClick={this.handleAddRow}>
                (+)Add</button>
              
              {Boolean(this.state.rows.length) && (
                <button onClick={this.handleRemoveRow}>
                (-)Delete</button>
              )}
            
       
      </div>
    );
  }
}
export default Abcdef;