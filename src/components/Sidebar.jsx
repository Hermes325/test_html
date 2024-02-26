import React from "react";
import "../style/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../fontawesome";

const routes = [
  { title: "Dashboard", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];
const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

export default function Sidebar() {
  const [isOpened, setIsOpened] = React.useState(true);
  const [pathName, setPathName] = React.useState("/");
  const toggleSidebar = () => {
    setIsOpened((state) => !state);
  };

  React.useEffect(() => {
    setPathName(window.location.pathname);
  }, []);
  return (
    <aside
      className={
        (isOpened ? "  w-[13vw] " : " w-[5vw]  ") +
        " grid grid-rows-[0.2fr_2fr_1fr_0.5fr] gap-y-5 items-center justify-center h-full rounded-lg  bg-white overflow-visible"
      }
    >
      <div className="logo flex flex-center items-center justify-between h-20 relative">
        <img src="./logo.png" alt="Logotip" className="h-10 " />
        <h1
          className={
            isOpened ? " span-show block " : " span-show-reverse hidden "
          }
        >
          Technifly
        </h1>
        <div>
          <button
            className=" arrow w-10 h-10 bg-black rounded-full absolute top-5 right-[-40px] flex items-center justify-center border-2 border-grey-500"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon
              className="text-white w-6 h-6 "
              icon={isOpened ? "angle-left" : "angle-right"}
            />
          </button>
        </div>
      </div>

      <div className="high_bar grid grid-rows-6 gap-y-3 mt-8">
        {routes.map((route) => (
          <div
            key={route.path}
            className={
              (route.path === pathName ? " bg-amber-500 text-black " : " ") +
              "hover:bg-amber-500 h-[45px] flex p-0.5 rounded-lg group/edit"
            }
          >
            <a
              href={route.path}
              className={
                (route.path === pathName ? " text-black " : " ") +
                "flex flex-center items-center gap-5 m-2  group-hover/edit:text-black"
              }
              key={route.title}
            >
              <FontAwesomeIcon icon={route.icon} />

              <span
                className={
                  isOpened ? " span-show block " : " span-show-reverse hidden "
                }
              >
                {route.title}
              </span>
            </a>
          </div>
        ))}
      </div>

      <div className="low_bar grid grid-rows-2 gap-y-5 mt-10">
        {bottomRoutes.map((route) => (
          <div
            key={route.path}
            className={
              (route.path === pathName ? " bg-amber-500 text-black " : " ") +
              "hover:bg-amber-500 h-[45px] flex p-0.5 rounded-lg group/edit"
            }
          >
            <a
              href={route.path}
              className={
                (route.path === pathName ? " text-black " : " ") +
                "flex flex-center items-center gap-5 m-2  group-hover/edit:text-black"
              }
            >
              <FontAwesomeIcon icon={route.icon} />
              <span
                className={
                  isOpened ? " span-show block " : " span-show-reverse hidden "
                }
              >
                {route.title}{" "}
              </span>
            </a>
          </div>
        ))}
        <hr />
      </div>
      <div className="flex space-x-4">
        <img src="./avatar.png" className="w-[25px]" alt="Avatar" />
        {isOpened && (
          <button
            className={
              isOpened ? " span-show block " : " span-show-reverse hidden "
            }
          >
            Account
          </button>
        )}
      </div>
    </aside>
  );
}

// {isOpened && (
//   <span className={isOpened ? " span-show " : " span-show-reverso "}>
//     {route.title}
//   </span>
// )}
