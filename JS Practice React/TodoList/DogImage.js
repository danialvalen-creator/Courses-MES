import React, { useState } from 'react';
import './DogImage.css';

const DogImage = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
      
      const data = await response.json();
      setDogImage(data.message);
    } catch (err) {
      setError('Не удалось загрузить картинку. Попробуйте еще раз.');
      console.error('Ошибка загрузки:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dog-section">
      <h2 className="section-title">Случайная собака</h2>
      
      <button 
        onClick={fetchDog} 
        className={`btn btn-dog ${loading ? 'loading' : ''}`}
        disabled={loading}
      >
        {loading ? 'Загрузка...' : 'Показать собаку'}
      </button>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      {dogImage && !error && (
        <div className="image-container">
          <img 
            src={dogImage} 
            alt="Случайная собака" 
            className="dog-image"
          />
          <button 
            onClick={fetchDog}
            className="btn btn-secondary"
            disabled={loading}
          >
            Загрузить другую
          </button>
        </div>
      )}
    </div>
  );
};

export default DogImage;