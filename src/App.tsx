import React from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, version } from "antd";
import 'antd/dist/reset.css';
import "./index.css";

function App() {
  return (
      <div className="App">
        <h1>Select Date</h1>
        <Space>
          <DatePicker />

        </Space>
      </div>
  );
}

export default App;
