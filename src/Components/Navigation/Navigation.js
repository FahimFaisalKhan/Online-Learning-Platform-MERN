import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Avatar, Button, Dropdown, Menu, Navbar, Tooltip } from "react-daisyui";
import logo from "../../Static/Images/e-learning (1).svg";
import { Link, NavLink } from "react-router-dom";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import ToogleBtn from "../ToogleBtn/ToogleBtn";
import "./Navigation.css";
const Navigation = () => {
  const { changeMode, lightMode } = useContext(MyThemeContext);
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar className="p-0 items-start">
        <Navbar.Start className="lg:hidden">
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <Link className="self-start text-sm ml-4 mt-3" to={"/courses"}>
                Courses
              </Link>
              <Link className="self-start text-sm ml-4 mt-3" to={"/"}>
                FAQ
              </Link>
              <Link className="self-start text-sm ml-4 mt-3" to={"/blog"}>
                Blog
              </Link>
              {!user && (
                <Link className="self-start text-sm ml-4 mt-3" to={"/signin"}>
                  Sign in
                </Link>
              )}
              {!user && (
                <Link className="self-start text-sm ml-4 mt-3" to={"/signup"}>
                  Signup
                </Link>
              )}
              {user && (
                <Link
                  onClick={logOut}
                  className="self-start text-sm ml-4 mt-3"
                  to={"/"}
                >
                  Sign out
                </Link>
              )}
              {user && (
                <Link className="self-start text-sm ml-4 mt-3">
                  <Tooltip message={user.displayName}>
                    <Avatar
                      src={user.photoURL}
                      shape="circle"
                      size="xs"
                      border={true}
                      online={true}
                    />
                  </Tooltip>
                </Link>
              )}
              <Link
                onClick={changeMode}
                className="self-start text-sm ml-4 mt-3"
              >
                <ToogleBtn></ToogleBtn>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Binary Base
          </Link>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex w-full text-base-content">
          <Menu horizontal className="p-0 w-full ">
            <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center w-36">
              <Link
                className="w-full h-full py-6 justify-start rounded-none active:bg-base-content  "
                to={"/"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 67 67"
                  viewBox="0 0 67 67"
                  width="5.5rem"
                  height="5.5rem"
                >
                  <path
                    fill="#1b1b1b"
                    d="M41.81909,14.92311v37.02982H8.22167V15.54156c0-2.34236,1.89402-4.23638,4.22869-4.23638h25.75079
			C40.20336,11.30518,41.81909,12.92864,41.81909,14.92311z"
                  />
                  <rect
                    width="20.04"
                    height="12.864"
                    x="17.949"
                    y="23.546"
                    fill="#1b1b1b"
                  />
                  <path
                    fill="#414141"
                    d="M13.96554,11.30518v40.64776H8.22167V14.79945c0-1.92492,1.56161-3.49427,3.49427-3.49427H13.96554z"
                  />
                  <path
                    fill="#1b1b1b"
                    d="M41.81909 48.59781v6.70251H11.5768c-.92769 0-1.76261-.37111-2.37331-.98181-.6107-.60301-.98181-1.44563-.98181-2.36558 0-1.85537 1.49975-3.35512 3.35512-3.35512H41.81909zM63.97122 41.09929v7.27997c0 3.97003-3.21997 7.17999-7.17999 7.17999-3.96997 0-7.17999-3.20996-7.17999-7.17999v-7.27997c0-3.97003 3.21002-7.18005 7.17999-7.18005C60.78371 33.91924 63.97122 37.17052 63.97122 41.09929z"
                  />
                  <path
                    fill="#414141"
                    d="M56.84365,44.34903L56.84365,44.34903c-0.64787,0-1.17308-0.5252-1.17308-1.17308v-2.61272
		c0-0.64787,0.5252-1.17308,1.17308-1.17308l0,0c0.64787,0,1.17308,0.5252,1.17308,1.17308v2.61272
		C58.01673,43.82382,57.49152,44.34903,56.84365,44.34903z"
                  />
                  <path
                    fill={lightMode ? "#494949" : "#d9d0dc"}
                    d="M37.98898,23.04576H17.94992c-0.27637,0-0.5,0.22363-0.5,0.5v12.86426c0,0.27637,0.22363,0.5,0.5,0.5
			h20.03906c0.27637,0,0.5-0.22363,0.5-0.5V23.54576C38.48898,23.2694,38.26535,23.04576,37.98898,23.04576z M37.48898,35.91002
			H18.44992V24.04576h19.03906V35.91002z"
                  />
                  <path
                    fill={lightMode ? "#494949" : "#d9d0dc"}
                    d="M25.28781 28.32994h9.4541c.27637 0 .5-.22363.5-.5s-.22363-.5-.5-.5h-9.4541c-.27637 0-.5.22363-.5.5S25.01145 28.32994 25.28781 28.32994zM21.19699 28.32994h1.72754c.27637 0 .5-.22363.5-.5s-.22363-.5-.5-.5h-1.72754c-.27637 0-.5.22363-.5.5S20.92063 28.32994 21.19699 28.32994zM32.58566 31.62584h-3.46972c-.27637 0-.5.22363-.5.5s.22363.5.5.5h3.46972c.27637 0 .5-.22363.5-.5S32.86203 31.62584 32.58566 31.62584zM21.19699 32.62584h5.58594c.27637 0 .5-.22363.5-.5s-.22363-.5-.5-.5h-5.58594c-.27637 0-.5.22363-.5.5S20.92063 32.62584 21.19699 32.62584z"
                  />
                  <path
                    fill={lightMode ? "#494949" : "#d9d0dc"}
                    d="M62.45761 35.93212c.07263-.80945.12512-1.62457.12512-2.45276 0-15.87305-12.91406-28.78711-28.78809-28.78711-6.67377 0-12.82068 2.28748-17.70831 6.11328-1.89463 0-3.46563 0-4.37079 0-2.20215 0-3.99414 1.79199-3.99414 3.99414v.74219 5.7533c-1.73798 3.70251-2.71387 7.83075-2.71387 12.1842 0 4.34222.98181 8.45343 2.71387 12.14691v5.21051 1.11621c0 2.16885 1.76396 3.84766 3.85547 3.84766h4.07819c4.95508 4.03577 11.26581 6.4668 18.13959 6.4668 7.32562 0 14.0152-2.75653 19.10168-7.27881 1.14337.67639 2.47156 1.07178 3.89343 1.07178 4.23438 0 7.67969-3.44531 7.67969-7.67969v-7.28418C64.46945 39.27267 63.807 37.41156 62.45761 35.93212zM63.46555 41.09752v.27246h-4.94922v-.80664c0-.77985-.5379-1.43073-1.26074-1.61542v-4.50446C60.88718 34.69237 63.46555 37.72329 63.46555 41.09752zM55.17062 41.36998h-5.05859v-.27246c0-3.50165 2.711-6.3764 6.14355-6.64972v4.55475C54.84086 39.53717 55.22644 41.10754 55.17062 41.36998zM56.84348 39.89049c1.10385 0 .52327 1.65663.67285 3.28516 0 .89122-1.3457.89144-1.3457 0C56.31455 41.60875 55.72851 39.89049 56.84348 39.89049zM33.79465 5.69225c15.32227 0 27.78809 12.46484 27.78809 27.78711 0 .53186-.02478 1.05756-.05798 1.58112-1.20797-.95286-2.63537-1.52215-4.26917-1.62097v-1.6955c0-1.41895-1.1543-2.57422-2.57324-2.57422h-5.99316c-1.13086 0-2.05078-.91992-2.05078-2.05078s.91992-2.05078 2.05078-2.05078h2.75195c1.68261 0 3.05176-1.36816 3.05176-3.05078v-.11426c0-1.68262-1.36915-3.05078-3.05176-3.05078h-9.12207v-3.92969c0-2.27051-1.84766-4.11719-4.11816-4.11719H17.78574C22.31632 7.59691 27.83267 5.69225 33.79465 5.69225zM41.31906 48.09752H14.46555V11.80553H38.2009c1.71973 0 3.11816 1.39844 3.11816 3.11719V48.09752zM13.46555 11.80553v36.29199h-1.88867c-1.1366 0-2.14923.5036-2.85547 1.28857V15.54186c0-2.06055 1.67285-3.73633 3.72852-3.73633H13.46555zM6.00754 33.47936c0-3.3623.61328-6.58038 1.71387-9.56506v19.11298C6.62259 40.04741 6.00754 36.83623 6.00754 33.47936zM8.72141 51.95299c0-1.57422 1.28125-2.85547 2.85547-2.85547h29.74219c0 .14859 0 2.50154 0 2.35156H22.56223c-.27637 0-.5.22363-.5.5s.22363.5.5.5h18.75683v2.35156H11.57687C10.03265 54.80065 8.72141 53.56189 8.72141 51.95299zM33.79465 61.26744c-6.17395 0-11.86572-2.04706-16.48285-5.4668h24.50726c.27637 0 .5-.22363.5-.5 0-13.06242 0-22.84793 0-35.44824h9.12207c1.13086 0 2.05176.91992 2.05176 2.05078v.11426c0 1.13086-.9209 2.05078-2.05176 2.05078h-2.75195c-1.68262 0-3.05078 1.36816-3.05078 3.05078s1.36816 3.05078 3.05078 3.05078h5.99316c.86719 0 1.57324.70605 1.57324 1.57422v1.69897c-3.98511.27637-7.14551 3.59857-7.14551 7.65356v7.28418c0 2.44342 1.15118 4.61926 2.93524 6.02679C47.15897 58.67424 40.77579 61.26744 33.79465 61.26744zM56.78976 55.06041c-3.68359 0-6.67969-2.99609-6.67969-6.67969v-6.01074h5.06055c.03033.10025-.37583 2.47949 1.67285 2.47949.92285 0 1.67285-.75098 1.67285-1.67383v-.80566h4.95313v6.01074C63.46945 52.06432 60.47336 55.06041 56.78976 55.06041zM36.54074 1.99791c1.7334.1543 3.46582.45898 5.15039.90625.25534.06964.53823-.07983.61133-.35547.07031-.2666-.08789-.54004-.35547-.61133-1.73828-.46094-3.52832-.77637-5.31836-.93555-.25489-.01855-.51758.17676-.54199.4541C36.06223 1.73033 36.26535 1.9735 36.54074 1.99791z"
                  />
                  <path
                    fill={lightMode ? "#494949" : "#d9d0dc"}
                    d="M47.26633 3.87096c-.24902-.11719-.54785-.00977-.66504.24121S46.5925 4.66002 46.8425 4.77721c9.5 4.43652 16.17871 13.21777 17.86426 23.49023.04595.28128.31459.45847.57422.41211.27246-.04492.45703-.30176.41211-.57422C63.95383 17.50768 57.06516 8.44811 47.26633 3.87096zM49.79172 60.50866c-5.41211 3.24512-11.85645 4.81933-18.15429 4.43261-.2793-.02832-.5127.19336-.5293.46875s.19238.5127.46875.5293c6.47165.40142 13.1365-1.2189 18.72851-4.57324.2373-.1416.31445-.44922.17188-.68555C50.33566 60.44323 50.02609 60.36608 49.79172 60.50866zM25.94504 64.04576c-1.71777-.4414-3.39941-1.03906-4.99707-1.77539-.24707-.11621-.54785-.00684-.66309.24512-.11523.25-.00586.54785.24512.66309 1.65137.76172 3.38965 1.3789 5.16699 1.83593.04102.01074.08301.01563.12402.01563.22266 0 .42676-.14941.48438-.37598C26.37374 64.38756 26.21262 64.11412 25.94504 64.04576zM4.87082 20.75573c.1123-.25293-.00293-.54785-.25488-.65918-.25195-.11328-.54883.00293-.65918.25488-3.99902 9.05469-3.45703 19.76563 1.44922 28.65039.13569.24804.44618.32746.67871.19629.24219-.13281.33008-.4375.19629-.67871C1.52512 39.90514.99777 29.52623 4.87082 20.75573zM44.03976 37.34459c.18356 5.30726-.40574 6.46582.5 6.46582.91286 0 .31876-1.2256.5-6.46582C45.03976 37.06823 44.03976 36.6833 44.03976 37.34459zM44.53976 32.02623c-.27637 0-.5.22363-.5.5.11389 1.25227-.31964 2.45898.5 2.45898.27637 0 .5-.22363.5-.5v-1.95898C45.03976 32.24987 44.81613 32.02623 44.53976 32.02623z"
                  />
                </svg>
                <p className="text-3xl font-semibold"> Binary Base</p>
              </Link>
            </Menu.Item>
            <Menu.Item className="border-r-2 border-b-2 border-black grow justify-center">
              <Link
                className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                to={"/courses"}
              >
                Courses
              </Link>
            </Menu.Item>
            <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                to={"/"}
              >
                FAQ
              </Link>
            </Menu.Item>
            <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                to={"/blog"}
              >
                Blog
              </Link>
            </Menu.Item>
            {!user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                  to={"/signin"}
                >
                  Sign in
                </Link>
              </Menu.Item>
            )}
            {!user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                  to={"/signup"}
                >
                  Sign up
                </Link>
              </Menu.Item>
            )}
            {user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                  to={"/"}
                  onClick={logOut}
                >
                  Sign Out
                </Link>
              </Menu.Item>
            )}
            {user && (
              <Menu.Item className=" border-r-2 border-b-2 border-black grow justify-center ">
                <Link
                  className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                  to={"/"}
                >
                  <Tooltip message={user.displayName}>
                    <Avatar
                      src={user.photoURL}
                      shape="circle"
                      size="xs"
                      border={true}
                      online={true}
                    />
                  </Tooltip>
                </Link>
              </Menu.Item>
            )}
            <Menu.Item className=" border-b-2 border-black grow justify-center ">
              <Link
                className="w-full h-full py-6 justify-center rounded-none active:bg-base-content"
                onClick={changeMode}
              >
                <ToogleBtn></ToogleBtn>
              </Link>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
      </Navbar>
    </div>
  );
};

export default Navigation;
