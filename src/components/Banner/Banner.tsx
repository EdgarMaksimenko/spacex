import React, { FC } from 'react';
import styles from './Banner.module.css';
import bg1 from '../../images/main-bg-1.png';
import bg2 from '../../images/main-bg-2.png';
import bg3 from '../../images/main-bg-3.png';
import arrow from '../../images/arrow-down.png';

const Banner: FC = () => {
  const [dotPos, setDotPos] = React.useState(0);

  return (
    <div className={styles.banner}>
      {dotPos === 0 &&
        <img src={bg1} alt="bg-1" />
      }
      {dotPos === 1 &&
        <img src={bg2} alt="bg-2" />
      }
      {dotPos === 2 &&
        <img src={bg3} alt="bg-3" />
      }
      <div className={styles.title}>
        <p className={styles.small__title}>The space is waiting for</p>
        <p className={styles.big__title}>You</p>
        <div className={styles.dots}>
          <button onClick={() => setDotPos(0)}>
            {dotPos === 0 && <span></span>}
          </button>
          <button onClick={() => setDotPos(1)}>
            {dotPos === 1 && <span></span>}
          </button>
          <button onClick={() => setDotPos(2)}>
            {dotPos === 2 && <span></span>}
          </button>
        </div>
      </div>
      <button className={styles.explore}><p>Explore tours</p><img src={arrow} alt="arrow" /></button>
    </div>
  )
};

export default Banner;