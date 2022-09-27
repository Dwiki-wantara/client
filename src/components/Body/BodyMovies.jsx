import Card from 'react-bootstrap/Card';
import Movies from '../../assets/1072652.jpg'
import MoviesTag from '../../assets/moviestag.png'
import Square from "../Timbul.module.css"

function BodyMovies() {
    return(
    <div>
        <Card style={{backgroundColor: "black"}}>
        <Card.Img src={Movies}  alt="Card image" style= {{width:"100vw", height:"100vh", padding:"0px"}} />
        <Card.ImgOverlay>
          <Card.Title> <img src={MoviesTag} alt="" className="ms-5" style={{marginTop: "200px"}}/> </Card.Title>
          <Card.Text className="text-justify ms-5 text-light fw-semibold" >
           Geralt of Rivia, a solitary monster hunter, struglles to fin his place in <br></br>a world where people often prove more whicked than beast
          </Card.Text>
          <div className="d-flex align-center">
          <Card.Text className="ms-5 text-light text-center" >2019 </Card.Text>
          <Card.Text className="ms-3 text-center"> <button className={Square.button}> TV Series </button> </Card.Text>
          </div>
          <a><Card.Text className="ms-5 mt-2 "> <button className="text-light fw-bold" style={{ textColor:"white" , backgroundColor: "Red", borderRadius: "8px", padding: "10px 50px", border:"none"}} > WATCH NOW !</button> </Card.Text>
        </a>
          </Card.ImgOverlay>
      </Card>
    </div>

    )
}

export default BodyMovies