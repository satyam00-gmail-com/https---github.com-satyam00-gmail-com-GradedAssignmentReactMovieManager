import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import LoadingIndicator from './common/LoadingIndicator';
import ImoviesItem from '../models/ImoviesItem';
import { LoadingStatus } from '../models/types';
import { getTopRatedIndiaItems } from '../services/movies';
import MoviesListItem from '../models/MoviesListItem';


type Props = {
};

type State = {
    status: LoadingStatus,
    movies?: ImoviesItem[],
    error?: Error
};

class TopRatedIndianList extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render() {
        let el;
        const { status, movies, error } = this.state;

        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of movies. Please wait..."
                    />
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={2} md={6} lg={7}>
                        {
                            movies?.map(
                                movie => (
                                    <Col key={movie.id} className="d-flex align-items-stretch my-5">
                                        <MoviesListItem movie={movie} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );
                break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger my-3">
                        {error?.message}
                    </Alert>
                );
                break;
        }
    
        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getTopRatedIndiaItems();
            this.setState({
                status: 'LOADED',
                movies: data
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR_LOADING'
                        });
        }
    }
}

  export default TopRatedIndianList;