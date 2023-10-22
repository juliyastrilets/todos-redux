import Image from 'next/image';
import style from './style.module.css';

export const Header = () => {
  const date = new Date().toDateString();

  return (
    <div className={style.wrapper}>
      <div
        className={`${style.wrapperCircle} ${style.wrapperCircleLeft}`}
      >
        <Image
          src="/circleLeft.svg"
          alt="icon"
          width={200}
          height={123}
        />
      </div>
      <div
        className={`${style.wrapperCircle} ${style.wrapperCircleRight}`}
      >
        <Image
          src="/circleRight.svg"
          alt="icon"
          width={100}
          height={183}
        />
      </div>
      <span className={style.date}>{date}</span>
      <h1 className={style.title}>Todo list example</h1>
    </div>
  );
};
