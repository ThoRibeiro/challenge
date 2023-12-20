import React from "react";
import PropTypes from "prop-types";
import ButtonComponent from "../tools/button/button";
import MapComponent from "../map/map";
import "./listingItem.css";
import iconLocation from "../../assets/iconLocation.svg";
import iconCalendar from "../../assets/iconCalendar.svg";
import iconPrice from "../../assets/iconPrice.svg";

const ListingItemComponent = ({
  id,
  address,
  startDate,
  endDate,
  price,
  buttonText,
  onClick = () => {},
}) => {
  return (
    <div className="listingItemContainer">
      <div className="detailsSection">
        <div className="listItem">
          <img src={iconLocation} alt="Location" className="icon" />
          <span className="text">{address}</span>
        </div>
        <div className="listItem dateRange">
          <img src={iconCalendar} alt="Calendar" className="icon" />
          <span className="text">
            {startDate} - {endDate}
          </span>
        </div>

        <div className="listItem">
          <img src={iconPrice} alt="Price" className="icon" />
          <span className="text">{`${price}€ / jour`}</span>
        </div>
        <div className="listItem">
          <ButtonComponent text={buttonText} onClick={() => onClick(id)} />
        </div>
      </div>
      <div className="verticalSeparator"></div>
      <div className="mapSection">
        <MapComponent address={address} />
      </div>
    </div>
  );
};

ListingItemComponent.propTypes = {
  address: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

export default ListingItemComponent;
