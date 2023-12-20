import { useState, useEffect } from "react";

function useRandomId(length) {
  const [randomId, setRandomId] = useState("");

  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setRandomId(result);
  }, [length]);
  return randomId;
}

export default useRandomId;
