import styles from "./styles.module.css"
import {MainPhoto} from "../../ui/mainPhoto/mainPhoto";
import {MiniPhoto} from "../../ui/miniPhoto/miniPhoto";
import {useState} from "react";

interface IPhoto {
    name: string,
    id: string
}

interface PhotoContainerProps {
    photos: IPhoto[]
}

export const PhotoContainer = ({photos}: PhotoContainerProps) => {
    const [firstPhoto, setFirstPhoto] = useState(0);
    const handleScrollUp = () => {
        if (photos.length - firstPhoto === photos.length) {
            setFirstPhoto(photos.length - 4)
        } else setFirstPhoto(firstPhoto - 1)
    }

    const handleScrollDown = () => {
        if (photos.length - 4 === firstPhoto) {
            setFirstPhoto(0)
        } else setFirstPhoto(firstPhoto + 1)
    }


    return (
        <div className={styles.photosContainer}>
            <div className={styles.miniPhotoContainer}>
                {photos.length > 4 && (
                    <img className={styles.arrow} src={"/challengeTwo/arrowUp.png"} onClick={handleScrollUp}/>
                )}
                <ul className={styles.miniPhotosList}>
                    <div className={styles.miniPhotosListContainer} data-step={firstPhoto}>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <MiniPhoto img={photo.name} />
                    </li>
                ))
                }
                    </div>
                </ul>
                {photos.length > 4 && (
                    <img className={styles.arrow} src={"/challengeTwo/arrowDown.png"} onClick={handleScrollDown} />
                )}
            </div>
            <MainPhoto img={photos[0].name} />
        </div>
    )
}

