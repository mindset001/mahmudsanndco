import React from 'react';
import Gallery from './Gallary';
import About from '../../../../public/images/new/IMG_3113.jpgg.jpg'


const Gallerypage = () => {
  // Example image data
  const images = [
    { url: '/images/new/IMG_3113.jpgg.jpg', alt: 'Image 1' },
    { url: '/images/new/about.jpg', alt: 'Image 2' },
    { url: '/images/new/IMG_3164.jpgg.jpg', alt: 'Image 3' },
    { url: '/images/new/IMG_3182.jpgg.jpg', alt: 'Image 4' },
    { url: '/images/new/IMG_3236.jpgg.jpg', alt: 'Image 5' },
    { url: '/images/new/IMG_3249.jpgg.jpg', alt: 'Image 6' },
    { url: '/images/new/IMG_3251.jpgg.jpg', alt: 'Image 7' },
    { url: '/images/new/IMG_3276.jpgg.jpg', alt: 'Image 8' },
    { url: '/images/new/why.jpg', alt: 'Image 9' },
    { url: '/images/new/why2.jpg', alt: 'Image 10' },
  ];

  return (
    <div className='mt-20'>
      <h1 className="text-center text-3xl font-bold my-8">Picture Gallery</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Gallerypage;
