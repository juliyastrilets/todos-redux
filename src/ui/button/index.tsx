import style from './style.module.css';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element | JSX.Element[];
  size: 'regular' | 'small';
}

export const Button = ({
  children,
  size,
  ...extendProps
}: ButtonProps) => {
  return (
    <button
      {...extendProps}
      className={`${style.button} ${style[size]}`}
    >
      {children}
    </button>
  );
};
