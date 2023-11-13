import React, { useState, useEffect } from "react";
import axios from "axios";

const AvatarComponent = () => {
  const [avatarSvg, setAvatarSvg] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await axios.get("http://localhost:8000/avatar", {
          headers: {
            accept: "application/json",
          },
        });

        setAvatarSvg(response.data);
      } catch (error) {
        console.error("Error fetching avatar:", error.message);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <div>
      <h1>Your Avatar</h1>
      <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />
    </div>
  );
};

export default AvatarComponent;
