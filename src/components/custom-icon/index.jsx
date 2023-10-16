const CustomIcon = ({ isActive = false, dActive = "", dPassive = "" }) => {
  const path = isActive ? (
    <path fill="#fff" d={dActive} />
  ) : (
    <path fill="#e7e9ea" d={dPassive} />
  );

  return (
    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
      {path}
    </svg>
  );
};
export default CustomIcon;
