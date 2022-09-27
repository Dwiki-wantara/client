import React from "react";
import NavbarAdmin from "../../components/Navbar/NavbarAdmin";
import AdminAddFilm from "../../components/Admin/AdminAddFilm";

export default function LayoutAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <AdminAddFilm />
    </div>
  );
}
