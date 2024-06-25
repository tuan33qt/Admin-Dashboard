import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";

function AddCabin() {
  const [showform, setShowForm] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowForm(!showform)}>Add new cabin</Button>
      {showform && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm onCloseModal={() => setShowForm(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
