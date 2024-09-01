// convertImagesToWebp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Укажите директорию с изображениями
const imagesDir = path.join(__dirname, '../../images/header');

// Функция для конвертации изображений в WebP
const convertToWebp = (inputPath, outputPath) => {
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log(`Converted: ${outputPath}`);
    })
    .catch(err => {
      console.error('Error:', err);
    });
};

// Перебираем все изображения в директории и конвертируем их в WebP
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    return console.error('Could not list the directory.', err);
  }

  files.forEach(file => {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, `${path.parse(file).name}.webp`);

    convertToWebp(inputPath, outputPath);
  });
});
