import React, { useState, useEffect } from "react";
import axios from "axios";

const AvatarComponent = (props) => {
  const [seed, setSeed] = useState(props.seed);
  const [avatarSvg, setAvatarSvg] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        // const url = seed
        //   ? `http://localhost:8000/avatar?seed=${seed}`
        //   : "http://localhost:8000/avatar";
        const response = await axios.get(
          `http://localhost:8000/avatar?seed=${seed}`,
          {
            headers: {
              accept: "application/json",
            },
          }
        );

        setAvatarSvg(response.data);
      } catch (error) {
        console.error("Error fetching avatar:", error.message);
      }
    };

    fetchAvatar();
  }, [seed]);

  const handleSeedChange = (event) => {
    setSeed(event.target.value);
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />
      <input
        type="text"
        name="seed"
        value={seed}
        onChange={handleSeedChange}
      ></input>
    </div>
  );
};

export default AvatarComponent;
