/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Tarifs from "views/Tarifs.js";
//import Icons from "views/Icons.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";
import Connexion from "views/Connexion.js";

var routes = [
  {
    path: "/dashboard",
    name: "Tableau de bord",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  /*
 {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: <Icons />,
    layout: "/admin",
  },
  
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: <Maps />,
    layout: "/admin",
  }, */

  {
    path: "/user-page",
    name: "Calcul Taxe",
    icon: "nc-icon nc-bulb-63",
    component: <UserPage />,
    layout: "/admin",
  },
  
  
  {
    path: "/tarifs",
    //name: "tarifs",
    //icon: "nc-icon nc-paper",
    component: <Tarifs />,
    //layout: "/admin",
  },

  {
    path: "/tables",
    name: "Liste des tarifs",
    icon: "nc-icon nc-tile-56",
    component: <TableList />,
    
    layout: "/admin",
  },
  
  /*{
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: <Typography />,
    layout: "/admin",
  },
  */
  {
    pro: true,
    path: "/connexion",
    name: "Déconnexion",
    icon: "nc-icon nc-circle-10",
    component: <Connexion />,
    layout: "/admin",
  }
];
export default routes;
