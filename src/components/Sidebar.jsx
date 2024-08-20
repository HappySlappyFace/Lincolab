import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/service1"
            className={selectedService === "service1" ? "active" : ""}
            onClick={() => handleServiceClick("service1")}
          >
            Service 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service2"
            className={selectedService === "service2" ? "active" : ""}
            onClick={() => handleServiceClick("service2")}
          >
            Service 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service3"
            className={selectedService === "service3" ? "active" : ""}
            onClick={() => handleServiceClick("service3")}
          >
            Service 3
          </NavLink>
        </li>
        {/* Add more services as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
