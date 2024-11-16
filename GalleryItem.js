// GalleryItem.js
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover img {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
`;

const GalleryItem = ({ item }) => (
  <ItemContainer>
    <Image src={item.imageUrl} alt={item.title} />
    <p>{item.title}</p>
  </ItemContainer>
);

export default GalleryItem;
