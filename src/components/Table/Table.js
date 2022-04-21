import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { getItems, dbDeleteItem } from "../../endpoints";
import { tableIcons } from "./icons";
import Delete from '@material-ui/icons/Delete';
import { TableContainer } from "./tableStyle";
import ItemDetail from "../itemDetails/ItemDetail";

const Table = ({ setItemsList, data, deleteItem }) => {

  const formatTableData = (data) => {
    return data.map((rows) => ({
      ...rows,
      spec: rows.subSpecSection
        ? `${rows.subSpecSection} - ${rows.specSection}`
        : rows.specSection ? rows.specSection : "",
        id: 1,
      title: rows.title || "--",
      type: rows.type || "--",
      priority: rows.priority || "--",
      packages: rows.packages || "--",
      duedate: rows.dueDate || "--",
    }));
  };

  const getData = async () => {
    try {
      const res = await getItems();
      const data = res.data.data;
      if (data) {
        setItemsList(formatTableData(data))
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const res = await dbDeleteItem(itemId);
      if (res.status) {
        deleteItem(itemId);
      }
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer>
      <MaterialTable
        icons={tableIcons}
        columns={[
          { title: "Status", field: "status" },
          { title: "#", field: "id" },
          { title: "Spec", field: "spec" },
          { title: "Rev", field: "rev" },
          { title: "Title", field: "title" },
          { title: "Type", field: "type" },
          { title: "Priority", field: "priority" },
          { title: "Package", field: "packages" },
          { title: "Due date", field: "due_date" },
          { title: "Response", field: "response" },
        ]}
        data={data}
        title="Submittals"
        detailPanel={(rowData) => {
          return (
            <ItemDetail item={rowData} />
          );
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        actions={[
          {
            icon: Delete,
            tooltip: "Delete item",
            onClick: (event, rowData) => handleDeleteItem(rowData.id),
          },
        ]}
      />
    </TableContainer>
  );
};

export default Table;
