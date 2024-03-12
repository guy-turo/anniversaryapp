import React ,{useState} from 'react'
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const profileMenuItems=[
  {
    label:"Edit Profile",
    icon:Cog6ToothIcon,
  },
  {
    label:"Sign Out",
    icon:PowerIcon,
  },
]

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto sm:ml-auto"
        >
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            className="border rounded-full border-gray-900 p-0.5 w-10 h-10"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          const edit = key===profileMenuItems[0]
          console.log(edit)
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const NavbarComponent=()=> {
  return (
    <Navbar className="  mx-auto max-w-screen-xl p-2  lg:pl-6 bg-gray-100 text- md:pl-4 ms:pl-2">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <div><strong>Anniversary reminder</strong></div>
        <div className="flex items-center">
        <Button size="sm" variant="text" className="mr-3">
          <p>Guy-james</p>
        </Button>
        <ProfileMenu />
        </div>
     
 
       
      </div>
     
    </Navbar>
  );
}

export default NavbarComponent