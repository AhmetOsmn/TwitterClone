import CustomIcon from "~/components/custom-icon";

const dActive =
  "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z";
const dPassive =
  "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z";

const BookmarksIcon = ({ isActive = false }) => {
  return (
    <CustomIcon isActive={isActive} dActive={dActive} dPassive={dPassive} />
  );
};

export default BookmarksIcon;
