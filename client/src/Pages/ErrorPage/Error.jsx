import { ErrorDiv, ImageError } from './Error.styles'

import image from '../../Images/error.jpg'

function Error(){
    return (
        <ErrorDiv className="error">
            Error! Please go back to Home.
        <ImageError src={image} alt='Error'/>
        </ErrorDiv>
    )
};

export default Error;