import React from 'react';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {

    render() {

        const images = [
          {
            original: '/img/photos/original/alpine-plant.jpg',
            thumbnail: '/img/photos/thumb/alpine-plant.jpg',
          },
          {
            original: '/img/photos/original/alpine-plants.jpg',
            thumbnail: '/img/photos/thumb/alpine-plants.jpg',
          },
          {
            original: '/img/photos/original/beautiful-grass.jpg',
            thumbnail: '/img/photos/thumb/beautiful-grass.jpg',
          },
          {
            original: '/img/photos/original/castle-garden.jpg',
            thumbnail: '/img/photos/thumb/castle-garden.jpg',
          },
          {
            original: '/img/photos/original/castle-labyrinth.jpg',
            thumbnail: '/img/photos/thumb/castle-labyrinth.jpg',
          },
          {
            original: '/img/photos/original/castle-park.jpg',
            thumbnail: '/img/photos/thumb/castle-park.jpg',
          },
          {
            original: '/img/photos/original/flower-bed.jpg',
            thumbnail: '/img/photos/thumb/flower-bed.jpg',
          },
          {
            original: '/img/photos/original/grass-promptlys.jpg',
            thumbnail: '/img/photos/thumb/grass-promptly.jpg',
          },
          {
            original: '/img/photos/original/green-grass.jpg',
            thumbnail: '/img/photos/thumb/green-grass.jpg',
          },
          {
            original: '/img/photos/original/labyrinth.jpg',
            thumbnail: '/img/photos/thumb/labyrinth.jpg',
          }
        ]
    
        return (
          <ImageGallery items={images} autoPlay={true}/>
        );
    }

}