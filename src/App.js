import { useReducer, useState } from "react";
import { TYPES } from "./actions";
import { initialState, reducer } from "./reducers";

import Table from "./components/Table/Table";
import Modal from "./components/modal/Modal";
import CreateItem from "./components/createItem/CreateItem";

import Button from "@mui/material/Button";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const items = state.data;

  const addToItemsList = (newItem) => {
    dispatch({ type: TYPES.ADD_TO_ITEMS_LIST, payload: newItem });
  };

  const setItemsList = (items) => {
    dispatch({ type: TYPES.SET_ITEMS_LIST, payload: items });
  };

  const deleteItem = (itemId) => {
    dispatch({ type: TYPES.REMOVE_FROM_ITEM_LIST, payload: itemId });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpenModal(true)}>
        Create
      </Button>

      {openModal && (
        <Modal title="Create Item" closeModal={setOpenModal}>
          <CreateItem
            closeModal={setOpenModal}
            addToItemsList={addToItemsList}
          />
        </Modal>
      )}

      <Table setItemsList={setItemsList} data={items} deleteItem={deleteItem} />
    </>
  );
}

export default App;
