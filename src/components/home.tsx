import { Link, Outlet } from 'react-router-dom';
import styles from './home.module.css';
import { useState } from 'react';
import challengesList from './challenges.json';
import classNames from 'classnames';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState('Выберите челендж');
  const [isOpen, setIsOpen] = useState(false);

  const handleClickCurrentPage = (name: string) => {
    setCurrentPage(name);
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.currentPage} onClick={() => setIsOpen(prevState => !prevState)}>
          <span>{currentPage}</span>
          <svg
            className={styles.dropdown}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8 10 4 4 4-4"
            />
          </svg>
        </div>
        <div className={classNames({[styles.pageList] : true, [styles.pageListOpen]: isOpen})}>
          {challengesList.challenges.map((challenge) => (
            <Link
              className={styles.pageItem}
              key={challenge.id}
              to={`/${challenge.link}`}
              onClick={() => handleClickCurrentPage(challenge.name)}>
              {challenge.name}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};
