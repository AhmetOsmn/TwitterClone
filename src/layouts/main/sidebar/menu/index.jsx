import { NavLink } from "react-router-dom";
import classNames from "classnames";
import ExploreIcon from "~/layouts/main/sidebar/icons/ExploreIcon";
import HomeIcon from "~/layouts/main/sidebar/icons/HomeIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import MessagesIcon from "../icons/MessagesIcon";
import ListsIcon from "../icons/ListsIcon";
import BookmarksIcon from "../icons/BookmarksIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { mainMenu } from "~/utils/const";
import MoreIcon from "../icons/MoreIcon";
import Button from "~/components/button";
import More from "./more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={menu.path} className="py-[3px] block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu.notification && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {isActive ? menu.icon.active : menu.icon.passive}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <New />
    </nav>
  );
}
