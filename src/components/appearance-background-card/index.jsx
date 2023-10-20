import {
  setBackgroundColor,
  setBoxShadow,
  setColor,
} from "~/store/appearance/actions";
import { useAppearance } from "~/store/appearance/hooks";

const AppearanceBackgroundCard = ({
  colors,
  backgroundColors,
  boxShadow,
  title,
  theme,
  buttonClassName,
  firstDivClassName,
  secondDivClassName,
}) => {
  const { backgroundColor } = useAppearance();

  if (theme === backgroundColor.name) {
    buttonClassName += " !border-[color:var(--color-primary)] !border-2";
    secondDivClassName +=
      " !border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white";
  }

  return (
    <button
      onClick={() => {
        setColor(colors);
        setBackgroundColor(backgroundColors);
        setBoxShadow(boxShadow);
      }}
      className={`h-[62px] pr-3 pl-2 border font-bold border-white/10 rounded group flex items-center gap-1.5 ${buttonClassName}`}
    >
      <div
        className={`w-[40px] h-[40px] rounded-full flex-shrink-0 flex items-center justify-center ${firstDivClassName}`}
      >
        <div
          className={`w-[20px] h-[20px] rounded-full border-[2px] flex items-center justify-center ${secondDivClassName}`}
        >
          {theme === backgroundColor.name && (
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="truncate">{title}</div>
    </button>
  );
};
export default AppearanceBackgroundCard;
