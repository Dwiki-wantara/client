import React from "react";
import BodyTvShowsUser from "../../components/Body/BodyTvShows"
import NavbarUser from "../../components/Navbar/NavbarUser";
import UserListFilm from "../../components/User/ListFilmUser"

export default function LayoutUser() {
  return (
    <div>
      <NavbarUser />
      <BodyTvShowsUser />
      <UserListFilm />
    </div>
  );
}
