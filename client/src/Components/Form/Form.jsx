import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Validate from './Validation';


function CreateGame() {

    const platforms = ['olla'];
    const genres = ['indie', 'action', 'adventure'];

    const [gameInfo, setGameInfo] = useState({

        name: '',
        description: '',
        platforms: '',
        released: '',
        image: '',
        rating: '',
        genres: '',
    });

    const [errors, setErrors] = useState({

        name: '',
        description: '',
        platforms: '',
        released: '',
        image: '',
        rating: '',
        genres: '',

    });
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        if (name === 'platforms' || name === 'genres') {
            setGameInfo((prevFormData) => ({
                ...prevFormData,
                [name]: [...prevFormData[name], value],
            }));
        } else {
            setGameInfo({
                ...gameInfo,
                [name]: value,
            });
        }
    setErrors(Validate({
            ...gameInfo,
            [name]: value,
        }))
    };
    
    

    return (

        <div>
            <form action="" onSubmit={''}>
                <label>Game Name</label>
                <input type="text" placeholder="Put name here..." name='name' onChange={handleChange} value={gameInfo.value}/>
                {errors.name && <p className="error-message">{errors.name}</p>}

                <label>Game Description</label>
                <textarea type="text" placeholder="At least 30 characters..." name='description' onChange={handleChange} cols={80} rows={15} />
                {errors.description && <p className="error-message">{errors.description}</p>}
                <label>Available Platforms</label>

                <div>
                    <input
                        type="text"
                        name="platforms"
                        placeholder='Platforms here...'
                        onChange={handleChange}
                    />
                    <button type="button">Add Platform</button>
                    {errors.platforms && <p className="error-message">{errors.platforms}</p>}
                </div>
                <div>
                    {platforms.map(platform => (
                        <span key={platform} className="platform-tag">
                            {platform}
                            <button
                                type="button"
                                className="remove-button"
                            >
                                X
                            </button>
                        </span>
                    ))}
                </div>

                <label>Released Date</label>
                <input type="text" name='released' placeholder='YYYY-MM-DD' onChange={handleChange} />
                {errors.released && <p className="error-message">{errors.released}</p>}

                <label>Image URL</label>
                <input type="url" name='image' placeholder='Put a valid URL to image' onChange={handleChange} />
                {errors.image && <p className="error-message">{errors.image}</p>}

                <label>Game Rating</label>
                <input type="text" name='rating' placeholder='Format X.XX' onChange={handleChange} />
                {errors.rating && <p className="error-message">{errors.rating}</p>}

                <label>Game Generes</label>
                <div>
                    <select
                        name="genres"
                        onChange={handleChange}
                    >
                        <option value="">Select game genres...</option>
                        {genres.map(genre => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    <button type="button">Add Genre</button>
                    {errors.genres && <p className="error-message">{errors.genres}</p>}
                </div>
                <div>
                    {genres.map(genre => (
                        <span key={genre} className="genre-tag">
                            {genre}
                            <button
                                type="button"
                                className="remove-button"
                            >
                                X
                            </button>
                        </span>
                    ))}
                </div>
            </form>
        </div>
    )
};

export default CreateGame;


