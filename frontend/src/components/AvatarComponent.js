import React, { useState, useEffect } from "react";
import axios from "axios";
import generateRnadomSeed from "./RandomSeed";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./AvatarComponent.css";

const AvatarComponent = (props) => {
  const [seed, setSeed] = useState(props.seed);
  const [avatarSvg, setAvatarSvg] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        //random 처리
        const finalSeed = seed || generateRnadomSeed();
        // const url = seed
        //   ? `http://localhost:8000/avatar?seed=${seed}`
        //   : "http://localhost:8000/avatar";

        const response = await axios.get(
          `http://localhost:8000/avatar?seed=${finalSeed}`,
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
    <div className="avatar_container">
      <div
        dangerouslySetInnerHTML={{ __html: avatarSvg }}
        className="avatar_img"
      />
      <InputGroup className="mb-3 inner_input">
        <InputGroup.Text id="basic-addon1"></InputGroup.Text>
        <Form.Control
          value={seed}
          onChange={handleSeedChange}
          placeholder="Avatar Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default AvatarComponent;
