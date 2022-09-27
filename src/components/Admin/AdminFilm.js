import React from "react";
import NavbarAdmin from "../Navbar/NavbarAdmin"
import Button from "react-bootstrap/Button";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { Link } from "react-router-dom";
import Square from "../Timbul.module.css"

function Listfilm() {

  let { data: film } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  return (
    <>
    <NavbarAdmin/>
      <div style={{ marginTop: "11vh" }}>
        <div style={{ backgroundColor: "black" }} className="d-flex">
          <div className="d-flex">
            <h2 className="text-light ms-4"> List Movies</h2>
          </div>
          <div className="d-flex ms-auto p-2">
            <Button as={Link} to="/admin/addfilm" variant="danger">
              Add Film
            </Button>
          </div>
        </div>
        
        <div>
        <div style={{display: "grid", gridTemplateColumns:"repeat(6,2fr)"}} >
        {film?.map((film, index) => (
            <Link to={`/admin/detail/` + film.id} width={"100%"} style={{textAlign:"center",textDecoration:"none",color:"white"}} className="m-3"  >
              <div  key={index} className={Square.Square}>
                <div>
                  <img src={film.thumbnailFilm} alt="" style={{minHeight:"280px", maxHeight:"280px",minWidth:"100%",maxWidth:"100%"}} />
                </div>
                <div>
                  <div>
                    <h4 style={{textDecoration:"none"}}>{film.title}</h4>
                    <p>{film.year}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Listfilm;
