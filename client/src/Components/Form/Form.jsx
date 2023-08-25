import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Validate from './Validation';
import { loadGenres, postNewGame } from '../../Redux/actions';

import { FormItSelf } from './Form.styles';


function CreateGame() {

    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.genres);

    useEffect(() => { //useEffect controla el ciclo de vida del componente
        dispatch(loadGenres());
    }, []);

    const platforms = ['PlayStation 1', 'PlayStation 2', "PlayStation 3", "PlayStation 4", 'PlayStation 5', "PS Vita", "Xbox", "Xbox One", 
    ' Xbox 360', "Xbox Series S/X", "PC", "Web", "Linux", "macOS", "Android", "iOS", "Wii", "Wii U", "Nintendo 64", "Nintendo Switch",
     "Nintendo 3DS", "Dreamcast", "Game Boy Color", "Game Boy Advance", "NES",
        "Commodore/Amiga", "Atari 7800", "Atari 5200", "Atari 2600", "Atari 8-bit", "Atari XEGS", "GameCube"];


    const [gameInfo, setGameInfo] = useState({

        name: '',
        description: '',
        platforms: [],
        released: '',
        image: '',
        rating: '',
        genres: [],
    });

    const [errors, setErrors] = useState({

        initial: 'Please fill out all fields to be able to submit the game info',
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
            if (gameInfo[name].includes(value)) {
                return;
            } else {
                setGameInfo({
                    ...gameInfo,
                    [name]: [...gameInfo[name], value],
                });
            }
            event.target.value = '';
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

    function handleRemovePlatform(index) {
        const newPlatforms = gameInfo.platforms.slice();
        newPlatforms.splice(index, 1);
        setGameInfo({
            ...gameInfo,
            platforms: newPlatforms,
        });
    }

    function handleRemoveGenre(index) {
        const newGenres = gameInfo.genres.slice();
        newGenres.splice(index, 1);
        setGameInfo({
            ...gameInfo,
            genres: newGenres,
        });
    };

    function handleSubmit() {
        dispatch(postNewGame(gameInfo));
        window.alert("Game Created Successfully");
    };


    function handleRenderButton() {
        let disabled = true;
    
        for (let error in errors) {
            if (errors[error]) {
                disabled = true;
                break;
            }
            disabled = false;
        }
    
        return disabled;
    }


        return (

            <div>
                <FormItSelf action="" onSubmit={handleSubmit}>

                
                <h2>Create A New Game</h2>

                {errors.initial && <p className="error-message">{errors.initial}</p>}

                    <label>Game Name</label>
                    <input type="text" placeholder="Put name here..." name='name' onChange={handleChange} value={gameInfo.value} />
                    {errors.name && <p className="error-message">{errors.name}</p>}

                    <label>Game Description</label>
                    <textarea type="text" placeholder="At least 30 characters..." name='description' onChange={handleChange} cols={80} rows={15} />
                    {errors.description && <p className="error-message">{errors.description}</p>}


                    <label>Platforms Available</label>
                    <div>
                        <select name="platforms" onChange={handleChange}>
                            <option value='' >Select platforms...</option>
                            {platforms.map(platform => (<option key={platform} value={platform}>{platform}</option>))}
                        </select>
                        {/* <button type="button" onClick={handleAddGenre}>Add Genre</button> */}
                        {errors.platforms && <p className="error-message">{errors.platforms}</p>}
                    </div>
                    <div>
                        {gameInfo.platforms.map(platform => (
                            <span key={platform} className="genre-tag">{platform}
                                <button type="button" className="remove-button" onClick={handleRemovePlatform}> X </button>
                            </span>
                        ))}
                    </div>


                    <label>Released Date</label>
                    <input type="text" name='released' placeholder='YYYY-MM-DD' onChange={handleChange} />
                    {errors.released && <p className="error-message">{errors.released}</p>}

                    <label>Game Generes</label>
                    <div>
                        <select name="genres" onChange={handleChange}>
                            <option value='' >Select game genres...</option>
                            {allGenres.map(genre => (<option key={genre.name} value={genre.name}>{genre.name}</option>))}
                        </select>
                       
                        {errors.genres && <p className="error-message">{errors.genres}</p>}
                    </div>
                    <div>
                        {gameInfo.genres.map((genre, index) => (
                            <span key={genre} className="genre-tag">{genre}
                                <button type="button" className="remove-button" onClick={() => handleRemoveGenre(index)}> X </button>
                            </span>
                        ))}
                    </div>

                    <label>Image URL</label>
                    <input type="url" name='image' placeholder='Put a valid URL to image' onChange={handleChange} />
                    {errors.image && <p className="error-message">{errors.image}</p>}

                    <label>Game Rating</label>
                    <input type="text" name='rating' placeholder='Format X.XX' onChange={handleChange} />
                    {errors.rating && <p className="error-message">{errors.rating}</p>}

                    <button type="submit" disabled={handleRenderButton()}> Create Game </button>
                  

                </FormItSelf>
            </div>
        )
    };

    export default CreateGame;


