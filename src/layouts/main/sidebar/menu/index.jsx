import { NavLink } from "react-router-dom";
import classNames from "classnames";
import ExploreIcon from "~/layouts/main/sidebar/icons/ExploreIcon";
import HomeIcon from "~/layouts/main/sidebar/icons/HomeIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import MessagesIcon from "../icons/MessagesIcon";
import ListsIcon from "../icons/ListsIcon";
import BookmarksIcon from "../icons/BookmarksIcon";
import ProfileIcon from "../icons/ProfileIcon";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      <NavLink to="/" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            <HomeIcon isActive={isActive} />
            <div className="pr-4 text-xl">Anasayfa</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/explore" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            <ExploreIcon isActive={isActive} />
            <div className="pr-4 text-xl">Keşfet</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/notifications" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            <NotificationsIcon isActive={isActive} />
            <div className="pr-4 text-xl">Bildirimler</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/messages" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            <MessagesIcon isActive={isActive} />
            <div className="pr-4 text-xl">Mesajlar</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/lists" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            <ListsIcon isActive={isActive} />
            <div className="pr-4 text-xl">Listeler</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/bookmarks" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            <BookmarksIcon isActive={isActive} />
            <div className="pr-4 text-xl">Yer İşaretleri</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/profile" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            <ProfileIcon isActive={isActive} />
            <div className="pr-4 text-xl">Profil</div>
          </div>
        )}
      </NavLink>
    </nav>
  );
}
