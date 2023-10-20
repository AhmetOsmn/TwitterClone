const CustomIcon = ({ isActive = false, dActive = "", dPassive = "" }) => {
  const path = isActive ? (
    <path fill="currentColor" d={dActive} />
  ) : (
    <path fill="currentColor" d={dPassive} />
  );

  return (
    <svg viewBox="0 0 24 24" className="block h-[1.641rem]">
      {path}
    </svg>
  );
};
export default CustomIcon;
