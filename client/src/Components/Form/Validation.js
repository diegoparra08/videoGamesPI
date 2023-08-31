
function Validate(game){

    const errors = {};

    if (game.name.length < 2 || game.name.length > 20) {
          errors.name = 'Name must have between 2 and 20 characters including spaces';
    } else if (!/^[a-zA-Z0-9\s]*$/.test(game.name)) {
        errors.name = `Name can´t contain special chatacters ('*'  ,  '+'  ,  '!'  , etc)`;
    } else {
        errors.name = '';
    }
    if(game.description.length < 30){
        errors.description = 'Descriprtion must have at least 30 characters';
    } else {
        errors.description = '';
    }
    if (game.platforms.length < 1) {
        errors.platforms = 'At least one platform must be provided';
    } else {
        errors.platforms = '';
    }
    if(!/^(?:19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(game.released)){
        errors.released = 'Date must be in format YYYY-MM-DD'
    } else{
        errors.released = '';
    }
    if(!/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/.test(game.image)){
        errors.image = 'Must provide a valid URL';
    } else {
        errors.image = '';
    }
    if(!/^\d+(\.\d{2})?$/.test(game.rating)){
        errors.rating = 'Rating must be in format X.XX';
    } else if(game.rating <= 0.00 || game.rating > 5){
        errors.rating = 'Rating must be a number within 0.01 and 5.00';
    } else{
        errors.rating = '';
    }
    if(game.genres.length === 0) {
        errors.genres = "Atleast on genre must be provided";
    }
    if(!errors.name && !errors.description && !errors.platforms && 
    !errors.released && !errors.image && !errors.rating && !errors.genres){
        errors.initial = '';
    }

    return errors;
};

export default Validate;

