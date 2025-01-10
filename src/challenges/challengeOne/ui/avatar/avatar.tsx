import styles from './style.module.css';

interface AvatarProps {
  photo: string;
}

export const Avatar = ({photo}: AvatarProps) => {
  return (
    <div className={styles.avatarContainer}>
      <img src={`/challengeOne/${photo}`} />
    </div>
  );
};
