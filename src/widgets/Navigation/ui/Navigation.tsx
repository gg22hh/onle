import s from '../Navigation.module.scss'

interface NavigationProps {
  currentItemId: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
}

const Navigation = ({ currentItemId, totalItems, onPrev, onNext }: NavigationProps) => {
  return (
    <div className={s.navigate}>
      <h3>0{currentItemId}/0{totalItems}</h3>
      <div>
        <button onClick={onPrev} disabled={currentItemId === 1}>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M8.5 0.75L2.25 7L8.5 13.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </button>
        <button onClick={onNext} className={s.right} disabled={currentItemId === totalItems}>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M8.5 0.75L2.25 7L8.5 13.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;