import { Carousel, Container, Row, Col } from 'react-bootstrap';
import myphoto_1 from '../view/index_myphoto1.jpeg';
import myphoto_2 from '../view/index_myphoto2.jpg';
import myphoto_3 from '../view/index_myphoto3.JPG';
import '../style/App.css';

const slideimg = {
    img1: { imgsrc: myphoto_1, imgalt: "First", label1: "Hi, My name is Billy.", label2: "Welcome to my website." },
    img2: { imgsrc: myphoto_2, imgalt: "Second", label1: "Go to my profolio.", label2: "To browse all of my works." },
    img3: { imgsrc: myphoto_3, imgalt: "Third", label1: "Go to my studynote.", label2: "To see how I learn." }
};

function Slideinfo() {
    return (
        <Carousel className="index_carousel">
            <Carousel.Item>
                <img className="index_img" src={slideimg.img1.imgsrc} alt={slideimg.img1.imgalt} />
                <Carousel.Caption>
                    <h3>{slideimg.img1.label1}</h3>
                    <p>{slideimg.img1.label2}</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="index_img" src={slideimg.img2.imgsrc} alt={slideimg.img2.imgalt} />
                <Carousel.Caption>
                    <h3>{slideimg.img2.label1}</h3>
                    <p>{slideimg.img2.label2}</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="index_img" src={slideimg.img3.imgsrc} alt={slideimg.img3.imgalt} />
                <Carousel.Caption>
                    <h3>{slideimg.img3.label1}</h3>
                    <p>{slideimg.img3.label2}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function Welcomeinfo() {
    return (
        <div className="welcome_info">
            <h1>Welcome !</h1>
            <p>This is my first personal website</p>
        </div>
    );
}

function Index() {
    return (
        <div className="App">
            <div className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <Welcomeinfo />
                        </Col>

                        <Col>
                            <Slideinfo />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Index;