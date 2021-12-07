import { Card, Button } from 'react-bootstrap';
import '../../style/App.css';
import '../../style/blogs.css';
import { Route } from "react-router-dom"

function BlogsCards() {
    return (
        <Card bg="dark" text="light" border="warning" style={{ width: '42rem' }} className="blogscard">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}


function Blogs() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>This is my blogs</h1>
                <div className="main">
                    <BlogsCards />
                    <BlogsCards />
                    <BlogsCards />
                    <BlogsCards />
                </div>
            </header>
        </div>
    );
}

export default Blogs;