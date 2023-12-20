import React, { useState } from "react";
import Modal from "react-modal";

import "./profil.css";
import ButtonComponent from "../tools/button/button";
import ListingContainerComponent from "../listingContainer/listingContainer";

const Profil = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profil;
