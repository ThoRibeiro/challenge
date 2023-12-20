import React, { useState, useEffect } from "react";
import ListingItemComponent from "../listingItem/listingItem";
import "./linstingContainer.css";
import { getParks } from "../../services/getParksService";

const ListingContainerComponent = ({ buttonText = "Louer", onClick }) => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchParks = async () => {
      try {
        const data = await getParks();
        setParks(data);
      } catch (error) {
        console.error("Erreur lors du chargement des parks:", error);
      }
    };
    fetchParks();
  }, []);

  return (
    <div className="containerListing container">
      {parks.map((park, index) => (
        <ListingItemComponent
          id={park.id}
          key={index}
          address={park.address}
          startDate={park.startDate}
          endDate={park.endDate}
          price={park.price}
          buttonText={buttonText}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ListingContainerComponent;
