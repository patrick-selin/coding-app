import React, { useState } from "react";
import { NavLink } from "react-router";
import { Burger, useMantineTheme, Drawer } from "@mantine/core";
import classes from "./header.module.css";

const NAV_LINKS = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/customers", label: "Customers" },
  { path: "/sales", label: "Sales" },
  { path: "/products", label: "Products" },
  { path: "/analytics", label: "Analytics" },
];

const Header = () => {
  const theme = useMantineTheme();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = () => setDrawerOpened((prev) => !prev);

  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <NavLink to="/" className={classes.logo}>
          MyApp
        </NavLink>
      </div>

      {/* Navigation links for desktop */}
      <nav className={classes.nav}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : classes.link
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Burger menu for mobile */}
      <div className={classes.right}>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          size="sm"
          color={theme.colors.gray[6]}
          className={classes.burger}
        />
      </div>

      {/* Drawer for mobile navigation */}
      <Drawer
        opened={drawerOpened}
        onClose={toggleDrawer}
        title="Navigation"
        padding="md"
        size="md"
      >
        <nav className={classes.drawerNav}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${classes.drawerLink} ${classes.active}` : classes.drawerLink
              }
              onClick={() => setDrawerOpened(false)} // Close drawer on link click
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
