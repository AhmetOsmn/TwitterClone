const CustomIcon = ({ isActive = false, dActive = "", dPassive = "" }) => {
  const path = isActive ? (
    <path fill="currentColor" d={dActive} />
  ) : (
    <path fill="currentColor" d={dPassive} />
  );

  return (
    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
      {path}
    </svg>
  );
};
export default CustomIcon;
