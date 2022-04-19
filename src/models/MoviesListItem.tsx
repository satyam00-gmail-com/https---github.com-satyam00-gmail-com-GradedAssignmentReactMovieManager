import React from "react";
import { Card, Container } from 'react-bootstrap';
import ImoviesItem from './ImoviesItem'


type Props = {
    movie: ImoviesItem
};

const MoviesListItem = ( { movie } : Props ) => {
    const {
        id,
        title,
        posterurl,
        year
 
    } = movie;

    return (
    <Container>
        <Card style={{ height: "20rem", width: "13rem"}}>
            <Card.Img style={{height: "16rem" }} variant="top" src={posterurl}  />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">             
                    {/* <div>
                        <Link to={`/movies-coming/${id}`} className="btn btn-primary btn-sm">                    
                        </Link>
                    </div> */}
                </Card.Title>
                <Card.Text>{title} {year}</Card.Text>
            </Card.Body>
        </Card>
    </Container>
        

    );
}

export default MoviesListItem;