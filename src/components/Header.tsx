import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
// import { NavigationMenuTrigger, NavigationMenuContent } from "@radix-ui/react-navigation-menu";
// import { CaretDownIcon } from "@radix-ui/react-icons";
// import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="logo">
          <div className="logo-img" />
          <span className="logo-text">Yale Badminton</span>
        </Link>
        <div className="navbar-right">
          <div className="navbar-right-big-screen">
            <NavigationMenu className="nav-root">
              <NavigationMenuList className="nav-list">
                {["Home", "Team", "Gallery", "FAQ"].map((item, idx) => (
                  <NavigationMenuItem key={idx}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="nav-link"
                    >
                      {item}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* <NavigationMenu className="nav-root">
              <NavigationMenuList className="nav-list">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-trigger">
                    Archive <CaretDownIcon className="caret-down" aria-hidden />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="dropdown">
                    <ul className="dropdown-list">
                      {[
                        {
                          label: "Past Teams",
                          description: "View a gallery of past team members.",
                          to: "/past-teams",
                        },
                        {
                          label: "Constitution",
                          description: "Read the club's official constitution.",
                          to: "/constitution",
                        },
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.to} className="dropdown-link">
                            <div className="dropdown-heading">{item.label}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}
            {/* <ThemeToggle /> */}
          </div>
          <div className="mobile-menu">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
