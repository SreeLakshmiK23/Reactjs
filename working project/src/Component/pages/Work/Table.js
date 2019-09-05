import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import EditIcon from 'material-ui/svg-icons/image/edit'
import TrashIcon from 'material-ui/svg-icons/action/delete'
import DownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down'
import UpArrow from 'material-ui/svg-icons/navigation/arrow-drop-up'
import { Button } from 'react-bootstrap'
import InlineForm from './InlineForm'

const row = (
  x,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleSave,
  stopEditing
) => {
  const currentlyEditing = editIdx === i
  return currentlyEditing ? (
    <TableRow key={`inline-form-${i}`} selectable={false}>
      <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
        stopEditing={stopEditing}
        width='600'
      />
    </TableRow>
  ) : (
    <TableRow key={`tr-${i}`} selectable={false}>
      {header.map((y, k) => (
        <TableRowColumn key={`trc-${k}`} className={k === 0 ? 'disable' : ''}>
          {k === 0 ? i + 1 : x[y.prop]}
        </TableRowColumn>
      ))}
      <TableRowColumn>
        {/* <Button  variant="secondary"  onClick={() => startEditing(i)}>
              <EditIcon/>
                      </Button>
          </TableRowColumn>
            <TableRowColumn>
        <Button  variant="" onClick={() => handleRemove(i)}>
                  <TrashIcon/>
                      </Button> */}
        <EditIcon onClick={() => startEditing(i)} />
        <TrashIcon onClick={() => handleRemove(i)} />
      </TableRowColumn>
    </TableRow>
  )
}

export default ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleSave,
  stopEditing,
  handleSort,
  sortDirection,
  columnToSort,
  length
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) => (
          <TableHeaderColumn key={`thc-${i + 1}`}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
              onClick={() => handleSort(x.prop)}
            >
              <span>{x.name}</span>
              {columnToSort === x.prop ? (
                sortDirection === 'asc' ? (
                  <UpArrow />
                ) : (
                  <DownArrow />
                )
              ) : null}
            </div>
          </TableHeaderColumn>
        ))}
        <TableHeaderColumn />
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) =>
        row(
          x,
          i,
          header,
          handleRemove,
          startEditing,
          editIdx,
          handleSave,
          stopEditing
        )
      )}
    </TableBody>
  </Table>
)
