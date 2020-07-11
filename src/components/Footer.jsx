import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/adralianelson"
        aria-label="My GitHub"
      >
        Adralia Nelson Mandela
      </a>{" "}
      using <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}
          <strong>Adralia Nelson Mandela portfolio &copy; 2020 </strong>
        </small>
      </p>
    </footer>
  );
};

export default Footer;
