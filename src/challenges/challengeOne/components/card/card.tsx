import { Avatar } from '../../ui/avatar/avatar';
import { ListContacts } from '../../ui/listContacts/listContacts';
import styles from './style.module.css';
import list from '../../ui/listContacts/list.json';
import { Button } from '../../ui/button/button';
import { useCurrentCoordinate } from './useCurrentCoordinate';
import { useRef } from 'react';

export const Card = () => {
  const card = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  const getCoordinate = (e: MouseEvent) => {
    const bounds = card?.current?.getBoundingClientRect();
    bounds && useCurrentCoordinate(e, bounds, card, glow);
  };

  const moveCard = () => {
    document.addEventListener('mousemove', getCoordinate);
  };

  const leaveCard = () => {
    document.removeEventListener('mousemove', getCoordinate);
    if (card.current) card.current.style.transform = '';
    if (glow.current) glow.current.style.backgroundImage = '';
  };

  return (
    <div
      ref={card}
      className={styles.card}
      onMouseEnter={moveCard}
      onMouseLeave={leaveCard}>
      <div ref={glow} className={styles.glow} />
      <Avatar photo="Alex.jpg" />
      <span className={styles.name}>Alexey Ivanenko</span>
      <ListContacts list={list} />
      <span className={styles.info}>
        As a passionate and detail-oriented Frontend Developer, I specialize in
        creating responsive, user-friendly, and visually appealing websites and
        web applications. With expertise in HTML5, CSS3, TypeScript, and modern
        frameworks like React, I focus on building seamless user experiences
        across devices.
      </span>
      <div className={styles.buttonsContainer}>
        <Button isLink text="Follow" />
        <Button isTransparent isLink text="Message" />
      </div>
    </div>
  );
};
