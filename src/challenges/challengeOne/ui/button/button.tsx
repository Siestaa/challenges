import styles from './styles.module.css';

interface ButtonProps {
  isTransparent?: boolean;
  isLink: boolean;
  link?: string;
  text: string;
  onClick?: () => void;
}

export const Button = ({
  isLink,
  isTransparent,
  link,
  text,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {isLink ? (
        <a
          className={`${isTransparent ? styles.buttonTransparent : ''} ${
            styles.button
          }`}
          href={link}>
          {text}
        </a>
      ) : (
        <button type="button" onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};
