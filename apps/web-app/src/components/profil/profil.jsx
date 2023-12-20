import React, { useState } from "react";
import Modal from "react-modal";

import "./profil.css";
import ButtonComponent from "../tools/button/button";
import ListingContainerComponent from "../listingContainer/listingContainer";
import { deleteParksService } from "../../services/deleteParksService";
import { showSuccessToast } from "../../services/toastService";

const Profil = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDeleteParks = (parkid) => {
    const id = parkid;
    console.log("Deleting park with ID:", id);
    try {
      deleteParksService(id);
      showSuccessToast("Annonce supprimée avec succès.");
    } catch (error) {
      showSuccessToast("Erreur lors de la suppression de l'annonce.");
    }
  };

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
              onClick={handleDeleteParks}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profil;
