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

    const platforms = [{ name: 'PlayStation 1' }, { name: 'PlayStation 2' }, { name: 'PlayStation 3' }, { name: 'PlayStation 4' },
    { name: 'PlayStation 5' }, { name: 'PS Vita' }, { name: 'Xbox' }, { name: 'Xbox One' }, { name: 'Xbox 360' }, { name: 'Xbox Series S/X' },
    { name: 'PC' }, { name: 'Web' }, { name: 'Linux' }, { name: 'macOS' }, { name: 'Android' }, { name: 'iOS' }, { name: 'Wii' },
    { name: 'Wii U' }, { name: 'Nintendo 64' }, { name: 'Nintendo Switch' }, { name: 'Nintendo 3DS' }, { name: 'Dreamcast' }, { name: 'Game Boy Color' },
    { name: 'Game Boy Advance' }, { name: 'NES' }, { name: 'Commodore/Amiga' }, { name: 'Atari 7800' }, { name: 'Atari 5200' }, { name: 'Atari 2600' },
    { name: 'Atari 8-bit' }, { name: 'Atari XEGS' }, { name: 'GameCube' }];



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

        if (name === 'platforms') {

            const updatedValue = gameInfo.platforms.some(platform => platform.name === value)
                ? gameInfo.platforms.filter(platform => platform.name !== value)
                : [...gameInfo.platforms, { name: value }];

            setGameInfo({
                ...gameInfo,
                platforms: updatedValue,
            });
        } else if (name === 'genres') {
            const updatedValue = gameInfo.genres.includes(value)
                ? gameInfo.genres.filter(genre => genre !== value)
                : [...gameInfo.genres, value];

            setGameInfo({
                ...gameInfo,
                genres: updatedValue,
            });
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
    }

    function handleRemovePlatform(index) {
        const newPlatforms = gameInfo.platforms.slice();
        newPlatforms.splice(index, 1);
        setGameInfo({
            ...gameInfo,
            platforms: newPlatforms,
        });

        setErrors({
            ...errors,
            platforms: newPlatforms.length === 0 ? "You need to select at least one platform" : "",
        });
    }

    function handleRemoveGenre(index) {
        const newGenres = gameInfo.genres.slice();
        newGenres.splice(index, 1);
        setGameInfo({
            ...gameInfo,
            genres: newGenres,
        });

        setErrors({
            ...errors,
            genres: newGenres.length === 0 ? "You need to select at least one Genre" : "",
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
                        {platforms.map(platform => (<option key={platform.name} value={platform.name}>{platform.name}</option>))}
                    </SelectOptions>

                    {(errors.platforms) && <ErrorBanners >{errors.platforms}</ErrorBanners>}
                </div>
                <div>
                    {gameInfo.platforms.map((platform, index) => (
                        <XButtonSpan key={platform.name}>{platform.name}
                            <Xbutton type="button" onClick={() => handleRemovePlatform(index)}> X </Xbutton>
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
                            <Xbutton type="button" onClick={() => handleRemoveGenre(index)}> X </Xbutton>
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