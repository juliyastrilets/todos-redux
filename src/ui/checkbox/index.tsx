import style from './style.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
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
