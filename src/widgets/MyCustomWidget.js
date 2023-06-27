import React, { useEffect, useState } from 'react';

export default function MyCustomWidget() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch the photos from an API or set them manually
    // For simplicity, let's assume we have an array of photo URLs
    const fetchedPhotos = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkZFtytms073Aagxoe8DdLxpBtGVR_T576Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgQUW9oY6fA88SwYCm5224obVpxMF9Q40Mw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEP6t3gyEodjhHviOz1fBlxN_lDf8_jDQKw&usqp=CAU',
    ];

    setPhotos(fetchedPhotos);
  }, []);

  return (
    <div>
      <h2>Photo Widget</h2>
      {photos.length > 0 ? (
        <div>
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))}
        </div>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  );
}
