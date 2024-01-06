import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Space, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function AppHeader() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle user icon click
  const handleUserIconClick = () => {
    // Navigate to the sign-in route
    navigate("/");
  };

  return (
    <div
      className="AppHeader"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          width={140}
          src="https://pharma-release.server247.info/assets/Amnil%20Logo-548bea27.png"
        />
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ marginLeft: 16 }}
        />
      </div>
      <div>
        {/* Add onClick event to the user icon */}
        <UserOutlined
          style={{ fontSize: 24, cursor: "pointer" }}
          onClick={handleUserIconClick}
        />
      </div>
    </div>
  );
}

export default AppHeader;
