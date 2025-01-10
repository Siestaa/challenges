import {PhotoContainer} from "../photoContainer/photoContainer.tsx";
import photos from '../photoContainer/photos.json'

export const ChallengeTwo = () => {
    return (
        <div>
            <PhotoContainer photos={photos} />
        </div>
    )
}