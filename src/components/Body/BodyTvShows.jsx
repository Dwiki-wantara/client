import Card from 'react-bootstrap/Card';
import Joker from '../../assets/joker.png'
import TvPicture from '../../assets/tvshow.jpg'
// import Square from "../components/Timbul.module.css"

function BodyTvShows() {
    return(
      <div>
      <Card style={{backgroundColor: "black"}}>
      <Card.Img src={TvPicture}  alt="Card image" style= {{width:"100vw", height:"100vh", padding:"0px"}} />
      <Card.ImgOverlay>
        <Card.Title> <img src={Joker} alt="" className="ms-5" style={{marginTop: "200px"}}/> </Card.Title>
        <Card.Text className="text-justify ms-5 text-light fw-semibold" >
          In Gotham City, mentally troubled comedian Arthur Fieck is <br></br>disregarded and mistreated by society. 
          Arthur wears two masks -- the one he paints <br></br> for his day job as a clown, and the guise he projects in a futile attempt to feel like he's <br></br>
           part of the world around him.
        </Card.Text>
        <div className="d-flex align-center">
        <Card.Text className="ms-5 text-light text-center" >2019 </Card.Text>
        <Card.Text className="ms-3 text-center"> <button className="text-light border-light" style={{backgroundColor: "black", borderRadius: "8px"}}> Movies </button> </Card.Text>
        </div>
      <a><Card.Text className="ms-5 mt-2"> <button className="text-light fw-bold" style={{ textColor:"white" , backgroundColor: "Red", borderRadius: "8px", padding: "10px 50px"}}> WATCH NOW !</button> </Card.Text>
      </a>
        </Card.ImgOverlay>
    </Card>
  </div>
    )
}

export default BodyTvShows