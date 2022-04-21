import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

const Table = () => {

  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);

  const columns = [
    { title: 'Status', field: 'status' },
    { title: '#', field: 'id' },
    { title: 'Spec', field: 'spec' },
    { title: 'Rev', field: 'rev' },
    { title: 'Title', field: 'title' },
    { title: 'Type', field: 'type' },
    { title: 'Priority', field: 'priority' },
    { title: 'Package', field: 'package' },
    { title: 'Due date', field: 'due_date' },
    { title: 'Response', field: 'response' }
  ];

  const data = [
    {
      id: 1,
      status: 'Closed',
      spec: "219245",
      sub_spec_section: "Attachments",
      rev: 0,
      title: "Product Data",
      type: "type import",
      priority: "Normal",
      package: "00017-48",
      due_date: "2018-01-01",
      response: "Approved"
    },
    {
      id: 2,
      status: 'Closed',
      spec: "219245",
      sub_spec_section: "Attachments",
      rev: 0,
      title: "Product Data",
      type: "type import",
      priority: "Normal",
      package: "00017-48",
      due_date: "2018-01-01",
      response: "Approved"
    },
    {
      id: 3,
      status: 'Closed',
      spec: "219245",
      sub_spec_section: "Attachments",
      rev: 0,
      title: "Product Data",
      type: "type import",
      priority: "Normal",
      package: "00017-48",
      due_date: "2018-01-01",
      response: "Approved"
    },
    {
      id: 4,
      status: 'Closed',
      spec: "219245",
      sub_spec_section: "Attachments",
      rev: 0,
      title: "Product Data",
      type: "type import",
      priority: "Normal",
      package: "00017-48",
      due_date: "2018-01-01",
      response: "Approved"
    },
  ];

  const formatTableData = (data) => {
    return data.map((rows) => (
      {
        ...rows,
        spec: `${rows.spec} - ${rows.sub_spec_section}`,
      }
    ))
  }

  useEffect(() => {
    setTableHeaders(columns);
    setTableData(formatTableData(data));
  }, [])

  return (
    <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={tableHeaders}
          data={tableData}
          title="Autodesk table"
        />
      </div>
  )
}

export default Table;