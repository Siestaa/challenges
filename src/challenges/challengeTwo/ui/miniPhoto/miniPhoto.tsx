import styles from "./styles.module.css"
interface MiniPhotoProps {
    img: string
}
export const MiniPhoto = ({img}: MiniPhotoProps) => {
    return (
        <div className={styles.miniImageContainer}>
            <img className={styles.miniImage} src={`/challengeTwo/${img}.jpg`} />
        </div>
    )
}