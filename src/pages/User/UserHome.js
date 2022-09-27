import React from "react";
import BodyHomeUser from "../../components/Body/BodyHome"
import NavbarUser from "../../components/Navbar/NavbarUser";
import UserDetailFilm from "../../components/User/UserDetailFilm"

export default function LayoutUser() {
  return (
    <div>
      <NavbarUser />
      <BodyHomeUser />
      <UserDetailFilm />
    </div>
  );
}
