import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  ActionIcon,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
// import { IconBell } from "@tabler/icons-react";
import classes from "./header.module.css";

// Navigation links array
const NAV_LINKS = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/customers", label: "Customers" },
  { path: "/sales", label: "Sales" },
  { path: "/products", label: "Products" },
  { path: "/analytics", label: "Analytics" },
];

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const isAuthenticated = false;

  return (
    <Box>
      <header className={classes.header2}>
        <Group justify="space-between" h="100%">
          {/* Logo */}
          <NavLink to="/" className={classes.logo}>
            MyApp
          </NavLink>

          {/* Desktop navigation */}
          <Group h="100%" visibleFrom="sm">
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
          </Group>

          {/* Right-side actions */}
          <Group visibleFrom="sm" gap="sm">
            <ThemeSwitcher />
            {isAuthenticated ? (
              <>
                <ActionIcon variant="light" radius="xl">
                  {/* <IconBell size="1.5rem" /> */}
                </ActionIcon>

                {/* User Avatar */}
                <Avatar
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  radius="xl"
                />
              </>
            ) : (
              <>
                <Button
                  variant="default"
                  component={NavLink}
                  to="/sign-in"
                  className={classes.linkButton}
                >
                  Log in
                </Button>
                <Button
                  component={NavLink}
                  to="/register"
                  className={classes.linkButton}
                >
                  Sign up
                </Button>
              </>
            )}
          </Group>

          {/* Burger menu for mobile */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      {/* Mobile menu */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <nav className={classes.drawerNav}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? `${classes.link} ${classes.active}` : classes.link
                }
                onClick={closeDrawer}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            The
            {isAuthenticated ? (
              <>
                <ActionIcon variant="light" radius="xl">
                  {/* <IconBell size="1.5rem" /> */}
                </ActionIcon>
                <Avatar
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  radius="xl"
                />
              </>
            ) : (
              <>
                <Button
                  variant="default"
                  component={NavLink}
                  to="/sign-in"
                  className={classes.linkButton}
                >
                  Log in
                </Button>
                <Button
                  component={NavLink}
                  to="/register"
                  className={classes.linkButton}
                >
                  Sign up
                </Button>
              </>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Header;
