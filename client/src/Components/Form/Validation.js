
function Validate(game){

    const errors = {};

    if (game.name.length < 2) {
          errors.name = 'Name must be longer';
    } else {
        errors.name = '';
    }
    if(game.description.length < 30){
        errors.description = 'Descriprtion must have more than 30 characters';
    } else {
        errors.description = '';
    }
    if (game.platforms.length === 0) {
        errors.platforms = 'At least one platform must be provided';
    } else {
        errors.platforms = '';
    }
    if(!/^(?:19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(game.released)){
        errors.released = 'Date must be in format YYYY-MM-DD'
    } else{
        errors.released = '';
    }
    if(!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(game.image)){
        errors.image = 'Must provide a valid URL';
    } else {
        errors.image = '';
    }
    if(!/^\d+(\.\d{2})?$/.test(game.rating)){
        errors.rating = 'Rating must be in format X.XX';
    } else{
        errors.rating = '';
    }
    if(game.genres.length === 0) {
        errors.genres= "Atleast on genre must be provided";
    }

    return errors;
};

export default Validate;

// function Validate(gameInfo, setErrors){
  
//     if (gameInfo.name.length < 2){
//         setErrors((errors) => ({ ...errors, name: 'Name must be longer' }));
//     }  else{
//         setErrors((errors) => ({ ...errors, name: '' })); 
//     }
    
//     if (gameInfo.description.length < 30){
//         setErrors((errors) => ({ ...errors, description: 'Descriprtion must have more than 30 characters' }));
//     } else{
//         setErrors((errors) => ({ ...errors, description: '' })); 
//     }
// };

// export default Validate;

