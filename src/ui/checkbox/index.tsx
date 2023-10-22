import style from './style.module.css';

interface TodoProps {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ checked, onChange }: TodoProps) => {
  return (
    <label
      className={`${style.checkbox} ${
        checked ? style.checkboxChecked : ''
      }`}
    >
      <input type="checkbox" onChange={onChange} checked={checked} />
    </label>
  );
};
