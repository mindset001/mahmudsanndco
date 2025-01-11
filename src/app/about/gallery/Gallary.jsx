'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal } from 'antd';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container ">
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative cursor-pointer">
            <Image
              src={image.url}
              alt={image.alt || `Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg object-cover h-[200px]"
              onClick={() => openModal(image.url)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Full-Screen View */}
      <Modal
        open={!!selectedImage}
        footer={null}
        onCancel={closeModal}
        centered
        width="70%"
      >
        {selectedImage && (
          <div className="flex justify-center items-center py-10">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="rounded-lg object-contain "
            />
          </div>
        )}
      </Modal>

      <style jsx>{`
        .gallery-container {
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
