import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, srcSet, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  if (!imageSrc) {
    return <div style={{ backgroundColor: '#f0f0f0', ...props }} />;
  }

  return <img src={imageSrc} srcSet={srcSet} alt={alt} {...props} />;
};

export default OptimizedImage;
