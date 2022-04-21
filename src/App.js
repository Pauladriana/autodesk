import './App.css';
import { useState } from 'react';
import Table from './components/Table';
import Modal from './components/Modal';
import CreateData from './components/CreateData';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <button className="modal" onClick={() => setOpenModal(true)}>Crear</button>

    {openModal && (
      <Modal
      title="Create Item" closeModal={setOpenModal}>
        <CreateData  closeModal={setOpenModal} />
      </Modal>
    )}
    <div className="App">
      <Table />
    </div>
    </>
  );
}

export default App;
