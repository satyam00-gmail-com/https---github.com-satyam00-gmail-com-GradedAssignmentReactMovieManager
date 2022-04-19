interface ImoviesItem{
        id: number,
        title: string,
        year: string,
        genres: string,
        rating : Array<number>,
        poster : string,
        contentRating: number,
        duration: string,
        releaseDate: Date,
        averageRating: number,
        originalTitle: string,
        storyline: string,
        actors: Array<string>,
        imdbRating : number,
        posterurl: string,
        
};

export default ImoviesItem;