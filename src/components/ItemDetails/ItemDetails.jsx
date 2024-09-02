import React from 'react';
import { useParams } from 'react-router-dom';
import css from './ItemDetails.module.css';
import itemsData from '../../data/items.json';

const images = {};
const importAllImages = r => {
  r.keys().forEach(key => {
    images[key.replace('./', '')] = r(key);
  });
};
importAllImages(
  require.context('../../images/arrivals', false, /\.(png|jpe?g|svg)$/)
);

const getImagePath = path => {
  return images[path];
};

const ItemDetails = () => {
  const { itemId } = useParams(); // Получаем ID из URL
  const item = itemsData.find(item => item.id === itemId); // Ищем элемент по ID

  if (!item) {
    return <p>Item not found</p>; // Если элемент не найден
  }

  return (
    <div className={css.itemDetailsPage}>
      <h1>{item.name}</h1>
      <img
        srcSet={`${getImagePath(item.images['1x'])} 1x, ${getImagePath(
          item.images['2x']
        )} 2x, ${getImagePath(item.images['3x'])} 3x`}
        src={getImagePath(item.images['1x'])}
        alt={item.name}
        width="400"
        height="740"
      />
      <p>{item.price}</p>
      <p>{item.label}</p>
      {item.quantity === 0 && <span className={css.soldOut}>Sold Out</span>}
    </div>
  );
};

export default ItemDetails;
