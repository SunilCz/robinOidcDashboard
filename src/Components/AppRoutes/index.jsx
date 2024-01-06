// AppRoutes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";
import Company from "../../Pages/Company";
import Projects from "../../Pages/Projects";
import Users from "../../Pages/Users";
import SignIn from "../../SiginIn";
import { OidcProvider } from "@axa-fr/react-oidc";
import { oidcConfiguration } from "../../oidcConfig";
import { OidcSecure } from "@axa-fr/react-oidc";

function AppRoutes() {
  return (
    <OidcProvider configuration={oidcConfiguration}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <OidcSecure>
              <Dashboard />
            </OidcSecure>
          }
        />
        <Route
          path="/company"
          element={
            <OidcSecure>
              <Company />
            </OidcSecure>
          }
        />
        <Route
          path="/projects"
          element={
            <OidcSecure>
              <Projects />
            </OidcSecure>
          }
        />
        <Route
          path="/users"
          element={
            <OidcSecure>
              <Users />
            </OidcSecure>
          }
        />
      </Routes>
    </OidcProvider>
  );
}

export default AppRoutes;
