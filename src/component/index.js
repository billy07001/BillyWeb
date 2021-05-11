import { Carousel } from 'react-bootstrap';
import myphoto_1 from '../view/index_myphoto1.jpeg';
import myphoto_2 from '../view/index_myphoto2.jpg';
import myphoto_3 from '../view/index_myphoto3.JPG';
import '../style/App.css';

function Index() {
    return (
        <div className="App">
            <div className="App-header">
                <Carousel className="index_carousel">
                    <Carousel.Item>
                        <img className="d-block w-100" src={myphoto_1} alt="First" />
                        <Carousel.Caption>
                            <h3>Hi, My name is Billy</h3>
                            <p>Welcome to my website</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={myphoto_2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={myphoto_3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </div>
            <div className="photo">
                <img src={myphoto_1} className="myphoto" alt="Billy的帥照" />
            </div>
        </div>
    );
}

export default Index;