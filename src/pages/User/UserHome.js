import React from "react";
import BodyHomeUser from "../../components/Body/BodyHome"
import NavbarUser from "../../components/Navbar/NavbarUser";
import UserListFilm from "../../components/User/ListFilmUser"

export default function LayoutUser() {
  return (
    <div>
      <NavbarUser />
      <BodyHomeUser />
      <UserListFilm />
    </div>
  );
}
