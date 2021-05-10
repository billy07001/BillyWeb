import { Carousel } from 'react-bootstrap';
import myphoto_1 from '../view/index_myphoto1.jpeg';
import myphoto_2 from '../view/index_myphoto2.jpg';
import myphoto_3 from '../view/index_myphoto3.JPG';
import '../style/App.css';

function Index() {
    return (
        <div className="App">
            <div className="App-header">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={myphoto_1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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