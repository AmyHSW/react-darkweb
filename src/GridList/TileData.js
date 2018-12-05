import image1 from "./images/pet-1.jpg";
import image2 from "./images/pet-2.jpg";
import image3 from "./images/pet-3.jpg";
import image4 from "./images/pet-4.jpg";

const SOURCES = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  empty: ''
};

export const TileData = [
  {
    img: image1,
    title: 'Image',
    author: 'author',
    cols: 2,
    video: SOURCES.sintelTrailer,
  },
  {
    img: image2,
    title: 'Image',
    author: 'author',
    cols: 3,
    video: SOURCES.sintelTrailer,
  },
  {
    img: image3,
    title: 'Image',
    author: 'author',
    cols: 2,
    video: SOURCES.sintelTrailer,
  },
  {
    img: image4,
    title: 'Image',
    author: 'author',
    cols: 3,
    video: SOURCES.sintelTrailer,
  },
];