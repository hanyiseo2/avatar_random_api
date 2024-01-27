import React, { useState, useEffect } from "react";
import axios from "axios";

import downloadLogo from "./downloadLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./AvatarComponent.css";

const AvatarComponent = ({ seed: seedProps }) => {
  const [seed, setSeed] = useState(seedProps);
  const [avatarSvg, setAvatarSvg] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/?seed=${seed}`,
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

  const handleDownload = (svgElement) => {
    const blob = new Blob([svgElement], { type: "image/svg+xml" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "avatar.svg";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyUrl = () => {
    const url = `http://avatar-random-api/seed=${seed}`;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("URL copied to clipboard:", url);
      })
      .catch((error) => {
        console.error("Error copying URL to clipboard:", error);
      });
  };

  return (
    <div className="avatar-container">
      <div
        dangerouslySetInnerHTML={{ __html: avatarSvg }}
        className="avatar-img"
      />

      <InputGroup className="mb-3 avatar-input">
        <InputGroup.Text id="basic-addon1"></InputGroup.Text>
        <Form.Control
          value={seed}
          onChange={handleSeedChange}
          placeholder="Avatar Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Button
        className="avatar-button"
        onClick={() => handleDownload(avatarSvg)}
      >
        <img src={downloadLogo} alt="download logo" className="downloadLogo" />
        <span className="tooltiptext tooltiptext_download">Download</span>
      </Button>
      <Button className="avatar-button" onClick={handleCopyUrl}>
        <div style={{ color: "black", fontWeight: "bold" }}>&lt; &gt;</div>
        <span className="tooltiptext tooltiptext_copyUrl">Copy Url link</span>
      </Button>
    </div>
  );
};

export default AvatarComponent;
