import React, { useState } from "react";
import Modal from "react-modal";

import "./profil.css";
import ButtonComponent from "../tools/button/button";
import ListingContainerComponent from "../listingContainer/listingContainer";
import { deleteParks } from "../../services/deleteParks";

const Profil = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteParks = () => {
  const id = 1;

  try{
    deleteParks(id);
    console.log("OK")
  }
  catch(error) {
    console.error(error)
  }
}
  return (
    <div>
      <ButtonComponent text="Mon Profil" onClick={() => setModalIsOpen(true)} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ content: { width: "70%" } }}
      >
        <div className="containerBody">
          <div className="listingContainerComponent">
            <ListingContainerComponent
              className="listingContainerComponent"
              buttonText="Supprimer"
              onClick={()=>deleteParks}

            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profil;
