import axios from "axios";

const API_URL = "http://localhost:3001/parkSlots";

export const deleteParks = async (parkId) => {
  try {
    const response = await axios.delete(`${API_URL}/${parkId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête DELETE:", error);
    throw error;
  }
};
