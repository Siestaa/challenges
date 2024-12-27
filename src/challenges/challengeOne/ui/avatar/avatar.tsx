import styles from './style.module.css';

interface AvatarProps {
  photo: string;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div className={styles.avatarContainer}>
      <img src={`/${props.photo}`} />
    </div>
  );
};
