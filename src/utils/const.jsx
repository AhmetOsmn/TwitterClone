import BookmarksIcon from "~/layouts/main/sidebar/icons/BookmarksIcon";
import ExploreIcon from "~/layouts/main/sidebar/icons/ExploreIcon";
import HomeIcon from "~/layouts/main/sidebar/icons/HomeIcon";
import ListsIcon from "~/layouts/main/sidebar/icons/ListsIcon";
import MessagesIcon from "~/layouts/main/sidebar/icons/MessagesIcon";
import NotificationsIcon from "~/layouts/main/sidebar/icons/NotificationsIcon";
import PremiumIcon from "~/layouts/main/sidebar/icons/PremiumIcon";
import ProfileIcon from "~/layouts/main/sidebar/icons/ProfileIcon";

import store from "~/store";

export const mainMenu = [
  {
    path: "/",
    title: "Anasayfa",
    icon: {
      active: <HomeIcon isActive={true} />,
      passive: <HomeIcon />,
    },
  },
  {
    path: "/explore",
    title: "Keşfet",
    icon: {
      active: <ExploreIcon isActive={true} />,
      passive: <ExploreIcon />,
    },
  },
  {
    path: "/notifications",
    title: "Bildirimler",
    notification: 4,
    icon: {
      active: <NotificationsIcon isActive={true} />,
      passive: <NotificationsIcon />,
    },
  },
  {
    path: "/messages",
    title: "Mesajlar",
    icon: {
      active: <MessagesIcon isActive={true} />,
      passive: <MessagesIcon />,
    },
  },
  {
    path: "/lists",
    title: "Listeler",
    icon: {
      active: <ListsIcon isActive={true} />,
      passive: <ListsIcon />,
    },
  },
  {
    path: "/bookmarks",
    title: "Yer İşaretleri",
    icon: {
      active: <BookmarksIcon isActive={true} />,
      passive: <BookmarksIcon />,
    },
  },
  {
    path: "/premium",
    title: "Premium",
    icon: {
      active: <PremiumIcon isActive={true} />,
      passive: <PremiumIcon />,
    },
  },
  {
    path: () => {
      return `/${store.getState()?.auth?.currentAccount?.userName}`;
    },
    title: "Profil",
    icon: {
      active: <ProfileIcon isActive={true} />,
      passive: <ProfileIcon />,
    },
  },
];

export const topics = [
  {
    title: "Türkiye tarihinde dündemde",
    topic: {
      type: "tag",
      value: "reactjs",
    },
  },
  {
    title: "Türkiye tarihinde dündemde",
    topic: {
      type: "query",
      value: "starlink",
    },
    postCount: 122
  },
  {
    title: "Türkiye tarihinde dündemde",
    topic: {
      type: "query",
      value: "elon musk",
    },
    postCount: 321452
  },
  {
    title: "Türkiye tarihinde dündemde",
    topic: {
      type: "query",
      value: "twitter",
    },
    postCount: 346324
  },
  {
    title: "Türkiye tarihinde dündemde",
    topic: {
      type: "query",
      value: "Galatasaray",
    },
    postCount: 1523423
  },
];
