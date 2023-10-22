import style from './style.module.css';
import { Button } from '@/ui/button';
import { Checkbox } from '@/ui/checkbox';
import Image from 'next/image';

interface TodoProps {
  title: string;
  completed: boolean;
  onChange: () => void;
  onRemove: () => void;
}

export const Todo = ({
  title,
  completed,
  onChange,
  onRemove,
}: TodoProps) => {
  return (
    <div className={style.todo}>
      <Checkbox onChange={onChange} checked={completed} />
      <h2
        className={`${style.title} ${
          completed ? style.titleChecked : ''
        }`}
      >
        {title}
      </h2>
      <div className={style.button}>
        <Button size="small" onClick={onRemove}>
          <Image
            className={style.icon}
            src="/closeWhite.svg"
            alt="icon"
            width={16}
            height={16}
          />
        </Button>
      </div>
    </div>
  );
};
