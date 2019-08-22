import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'

import axios from 'axios';
// import '../css/Table.css'
// import '../dist/react-bootstrap-table-all.min.css'
 import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
 
function onInsertRow(row) {
  let newRowStr = ''
 
  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n'
  }
  alert('You inserted:\n ' + newRowStr)
}
 
 
function onDeleteRow(rowKeys) {
  alert('You deleted: ' + rowKeys)
}

   
 
 
class Table7 extends Component {

      constructor(props)
    {
        super(props)
      
        this.state=
        {
           
           data:[]
            
            
        }
       
    }


      submitHandler= e =>
    {

        //  console.log(this.state)
        e.preventDefault()


        axios
        .post('http://a648.ngrok.io/user/save',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }


  render() {
    const options = {
      afterInsertRow: onInsertRow,
      afterDeleteRow: onDeleteRow
    }
 
    // To delete rows you shouldbe able to select rows
    const selectRowProp = {
      mode: 'checkbox'
    }


    return (
    <div>
    <form onSubmit={this.submitHandler }> 
      <div>
        <BootstrapTable data={this.props.data}
                        insertRow={true}
                        deleteRow={true}
                        selectRow={selectRowProp}
                        options={options}
        >
          <TableHeaderColumn isKey dataField='id'
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
          >
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />

      </form>
    </div>
    )
  }
}
 
export default Table7