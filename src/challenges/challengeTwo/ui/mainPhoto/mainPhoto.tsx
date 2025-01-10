interface MainPhotoProps {
    img: string

}
export const MainPhoto = ({img}: MainPhotoProps) => {
return  (
    <div>
        <img  src={`/challengeTwo/${img}.jpg`} />
    </div>
)
}