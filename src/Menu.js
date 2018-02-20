import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Home</li>
      <li onClick={close}>Getting Started</li>
      <li onClick={close}>Component API</li>
      <li onClick={close}>Use Case - Tooltip</li>
      <li onClick={close}>Use Case - Modal</li>
      <li onClick={close}>Use Case - Menu</li>
      <li onClick={close}>Contributing</li>
    </ul>
  </div>
);
