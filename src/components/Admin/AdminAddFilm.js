import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { CgAttachment } from "react-icons/cg";
import { API } from "../../config/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

function Addfilm() {
  let navigate = useNavigate();
 
  const [form, setForm] = useState({
    title: "",
    thumbnailFilm: "",
    year: "",
    linkFilm: "",
    desc: "",
    categoryId: "", 
  });

  const getCategory = async () => {
    try {
      const response = await API.get("/categori");
      setCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    console.log("handle change", e.target.name);

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };
  const [category, setCategory] = useState([]); 
  const [preview, setPreview] = useState(null); 
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const addDataFilm = new FormData();
      addDataFilm.set("title", form.title);
      addDataFilm.set("thumbnailFilm",form.thumbnailFilm[0],form.thumbnailFilm[0].name);
      addDataFilm.set("year", form.year);
      addDataFilm.set("linkFilm", form.linkFilm);
      addDataFilm.set("desc", form.desc);
      addDataFilm.set("category_id", form.categoryId);
      const response = await API.post("/film", addDataFilm, config);
      console.log(response);
      navigate("/admin/film");
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
    <div style={{ backgroundColor: "black", marginTop: "11vh" }}>
      <div>
        <h2 className="text-light col-2 d-flex justify-content-end">
          Add Film
        </h2>
        {preview && ( 
             <div style={{alignItem:"center",textAlign:"center"}}>
                <img  src={preview} style={{ minWidth:"300px", maxWidth: "300px",minHeight:"400px", maxHeight: "400px",objectFit: "cover",}} alt={preview}/>
            </div>)}  
      </div>
      <form onSubmit={(e) => handleSubmit.mutate(e)} className="d-flex justify-content-center">
        <div className="row g-2 d-flex justify-content-center">
          <div style={{ width: "70%",marginLeft:"45px" }}>
            <div className="form-floating">
              <Form.Group className="mt-3">
                <Form.Control type="text" name="title" id="title" onChange={handleChange} placeholder="Title" className="bg-dark text-white"/>
              </Form.Group>
            </div>
          </div>
          <div className="col-2">
            <div>
              <Form.Group className="d-flex ">
                <Form.Label  for="fileattach" className="bg-dark text-white rounded border" type="file"  style={{ cursor: "pointer",marginTop:"16px",padding:"5px 5px 7px 15px" }}>
                  Attach Thumbail
                  <CgAttachment className="text-danger mx-2" />
                </Form.Label>
                <Form.Control type="file" id="fileattach" name="thumbnailFilm" onChange={handleChange} hidden />
              </Form.Group>
            </div>
          </div>
          <div className="col-10 d-flex justify-content-center">
            <Form.Control type="number" placeholder="Year" name="year" onChange={handleChange} className="bg-dark text-white"/>
          </div>
          <div className="col-10 d-flex justify-content-center">
            <Form.Control type="text" placeholder="Link Film" name="linkFilm" onChange={handleChange} className="bg-dark text-white"/>
          </div>
          <div className="col-10 d-flex justify-content-center">
            <select className="form-select bg-dark text-white" aria-label="Default select example" onChange={handleChange}  name="categoryId">
              <option value="">Category</option>
              {category.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="col-10 d-flex justify-content-center input-group-lg">
            <textarea className="form-control bg-dark text-white" id="exampleFormControlTextarea1" placeholder="Description" rows="3" name="desc" onChange={handleChange} />
          </div>

          <div className="col-10 d-flex">
            <button class="btn btn-danger float-md-start btn-lg  d-grid gap-2 col-2 " type="submit" >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
  );
}

export default Addfilm;
