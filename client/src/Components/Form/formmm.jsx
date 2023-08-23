import React, { useState } from 'react';

function GameForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [releasedDate, setReleasedDate] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [currentPlatform, setCurrentPlatform] = useState('');
  const [currentGenre, setCurrentGenre] = useState('');

  const platforms = [
    'PC',
    'PlayStation',
    'Xbox',
    'Nintendo Switch',
    // Agrega otras plataformas aquí
  ];

  const genres = [
    'Acción',
    'Aventura',
    'RPG',
    'Estrategia',
    // Agrega otros géneros aquí
  ];

  const handleAddPlatform = () => {
    if (currentPlatform && !selectedPlatforms.includes(currentPlatform)) {
      setSelectedPlatforms([...selectedPlatforms, currentPlatform]);
      setCurrentPlatform('');
    }
  };

  const handleAddGenre = () => {
    if (currentGenre && !selectedGenres.includes(currentGenre)) {
      setSelectedGenres([...selectedGenres, currentGenre]);
      setCurrentGenre('');
    }
  };

  const handleRemovePlatform = (platformToRemove) => {
    setSelectedPlatforms(selectedPlatforms.filter(platform => platform !== platformToRemove));
  };

  const handleRemoveGenre = (genreToRemove) => {
    setSelectedGenres(selectedGenres.filter(genre => genre !== genreToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const gameData = {
      name,
      description,
      platforms: selectedPlatforms,
      genres: selectedGenres,
      releasedDate,
      imageURL,
    };
    // Aquí puedes enviar gameData al servidor
  };

  return (
    <div>
      <h2>Crear nuevo juego</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} required />

        <label htmlFor="platforms">Plataformas:</label>
        <div>
          <select
            id="platforms"
            name="platforms"
            value={currentPlatform}
            onChange={e => setCurrentPlatform(e.target.value)}
          >
            <option value="">Selecciona una plataforma...</option>
            {platforms.map(platform => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddPlatform}>Agregar</button>
        </div>
        <div>
          {selectedPlatforms.map(platform => (
            <span key={platform} className="platform-tag">
              {platform}
              <button
                type="button"
                className="remove-button"
                onClick={() => handleRemovePlatform(platform)}
              >
                X
              </button>
            </span>
          ))}
        </div>

        <label htmlFor="genres">Géneros:</label>
        <div>
          <select
            id="genres"
            name="genres"
            value={currentGenre}
            onChange={e => setCurrentGenre(e.target.value)}
          >
            <option value="">Selecciona un género...</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddGenre}>Agregar</button>
        </div>
        <div>
          {selectedGenres.map(genre => (
            <span key={genre} className="genre-tag">
              {genre}
              <button
                type="button"
                className="remove-button"
                onClick={() => handleRemoveGenre(genre)}
              >
                X
              </button>
            </span>
          ))}
        </div>

        <label htmlFor="releasedDate">Fecha de lanzamiento:</label>
        <input type="text" id="releasedDate" name="releasedDate" value={releasedDate} onChange={e => setReleasedDate(e.target.value)} />

        <label htmlFor="imageURL">URL de la imagen:</label>
        <input type="url" id="imageURL" name="imageURL" value={imageURL} onChange={e => setImageURL(e.target.value)} />

        <button type="submit">Guardar juego</button>
      </form>
    </div>
  );
}

export default GameForm;