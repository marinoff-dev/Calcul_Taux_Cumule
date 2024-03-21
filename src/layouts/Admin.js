import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Sidebar from "components/Sidebar/Sidebar";

import Footer from "components/Footer/Footer.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

var ps;

function Dashboard(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();

  React.useEffect(() => {
	let psInstance;
	if (mainPanel.current && navigator.platform.indexOf("Win") > -1) {
	  psInstance = new PerfectScrollbar(mainPanel.current);
	  document.body.classList.toggle("perfect-scrollbar-on");
	}
	return function cleanup() {
	  if (psInstance) {
		psInstance.destroy();
		document.body.classList.toggle("perfect-scrollbar-on");
	  }
	};
  }, [mainPanel.current]);
  
  

  React.useEffect(() => {
	if (mainPanel.current && mainPanel.current.scrollTop !== undefined) {
	  mainPanel.current.scrollTop = 0;
	  document.scrollingElement.scrollTop = 0;
	}
  }, [location]);
  

  const handleActiveClick = (color) => {
    setActiveColor(color);
  };

  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };

  // Liste des routes où vous ne voulez pas afficher le sidebar et le navbar
  const routesWithoutSidebarAndNavbar = ["/admin/connexion"];

  // Vérifie si la route actuelle fait partie de la liste des routes sans sidebar et navbar
  const hideSidebarAndNavbar = routesWithoutSidebarAndNavbar.includes(location.pathname);

  return (
    <div className="wrapper">
      {!hideSidebarAndNavbar && (
        <>
          {/* Afficher le sidebar uniquement si ce n'est pas une page où il ne doit pas être affiché */}
          <Sidebar
            {...props}
            routes={routes}
            bgColor={backgroundColor}
            activeColor={activeColor}
          />
          {/* Afficher le navbar uniquement si ce n'est pas une page où il ne doit pas être affiché */}
          <div className="main-panel" ref={mainPanel}>
            <Routes>
              {routes.map((prop, key) => {
                return (
                  <Route
                    path={prop.path}
                    element={prop.component}
                    key={key}
                    exact
                  />
                );
              })}
            </Routes>
            <Footer fluid />
          </div>
          <FixedPlugin
            bgColor={backgroundColor}
            activeColor={activeColor}
            handleActiveClick={handleActiveClick}
            handleBgClick={handleBgClick}
          />
        </>
      )}
      {/* Si c'est une page où le sidebar et le navbar doivent être cachés, ne rien afficher */}
      {hideSidebarAndNavbar && (
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={key}
                exact
              />
            );
          })}
        </Routes>
      )}
    </div>
  );
}

export default Dashboard;
