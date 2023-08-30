import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Validate from './Validation';
import { loadGenres, postNewGame } from '../../Redux/actions';

import { FormItSelf, SearchInput, XButtonSpan, CreateLabels, Xbutton, ErrorBanners, DescriptionBanner, CreateTitleH2, SelectOptions, CreateButton } from './Form.styles';


function CreateGame() {

    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.genres);

    useEffect(() => { 
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
        }));

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

                
                <CreateTitleH2>Create A New Game</CreateTitleH2>

                {errors.initial && <ErrorBanners className="error-message">{errors.initial}</ErrorBanners>}

                    <CreateLabels>Game Name</CreateLabels>
                    <SearchInput type="text" placeholder="Put name here..." name='name' onChange={handleChange} value={gameInfo.value} />
                    {errors.name && <ErrorBanners className="error-message">{errors.name}</ErrorBanners>}

                    <CreateLabels>Game Description</CreateLabels>
                    <DescriptionBanner type="text" placeholder="At least 30 characters..." name='description' onChange={handleChange} cols={100} rows={10} />
                    {errors.description && <ErrorBanners className="error-message">{errors.description}</ErrorBanners>}


                    <CreateLabels>Platforms Available</CreateLabels>
                    <div>
                        <SelectOptions name="platforms" onChange={handleChange}>
                            <option value='' >Select platforms...</option>
                            {platforms.map(platform => (<option key={platform} value={platform}>{platform}</option>))}
                        </SelectOptions>
                        
                        {errors.platforms && <ErrorBanners className="error-message">{errors.platforms}</ErrorBanners>}
                    </div>
                    <div>
                        {gameInfo.platforms.map(platform => (
                            <XButtonSpan key={platform} >{platform}
                                <Xbutton type="button"  onClick={handleRemovePlatform}> X </Xbutton>
                            </XButtonSpan>
                        ))}
                    </div>


                    <CreateLabels>Released Date</CreateLabels>
                    <SearchInput type="text" name='released' placeholder='YYYY-MM-DD' onChange={handleChange} />
                    {(errors.released) && <ErrorBanners className="error-message">{errors.released}</ErrorBanners>}

                    <CreateLabels>Game Generes</CreateLabels>
                    <div>
                        <SelectOptions name="genres" onChange={handleChange}>
                            <option value='' >Select game genres...</option>
                            {allGenres.map(genre => (<option key={genre.name} value={genre.name}>{genre.name}</option>))}
                        </SelectOptions>
                       
                        {errors.genres && <ErrorBanners className="error-message">{errors.genres}</ErrorBanners>}
                    </div>
                    <div>
                        {gameInfo.genres.map((genre, index) => (
                            <XButtonSpan key={genre}>{genre}
                                <Xbutton type="button"  onClick={() => handleRemoveGenre(index)}> X </Xbutton>
                            </XButtonSpan>
                        ))}
                    </div>

                    <CreateLabels>Image URL</CreateLabels>
                    <SearchInput type="url" name='image' placeholder='Put a valid URL to image' onChange={handleChange} />
                    {errors.image && <ErrorBanners className="error-message">{errors.image}</ErrorBanners>}

                    <CreateLabels>Game Rating</CreateLabels>
                    <SearchInput type="text" name='rating' placeholder='Format X.XX' onChange={handleChange} />
                    {errors.rating && <ErrorBanners className="error-message">{errors.rating}</ErrorBanners>}

                    <CreateButton type="submit" disabled={handleRenderButton()}> Create Game </CreateButton>
                  

                </FormItSelf>
            </div>
        )
    };

    export default CreateGame;


