import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="logo">
          <div className="logo-img" />
          <span className="logo-text">Yale Badminton</span>
        </Link>
        <div className="navbar-left">
          <NavigationMenu className="nav-root">
            <NavigationMenuList className="nav-list">
              {["Home", "Team", "Gallery", "FAQs"].map((item, idx) => (
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
        </div>
        <div className="navbar-right">
          <div className="navbar-right-big-screen">
            <NavigationMenu className="nav-root">
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
                          to: "/old-members",
                        },
                        {
                          label: "Constitution",
                          description: "Read the club’s official constitution.",
                          to: "/constitution",
                        },
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.to} className="dropdown-link">
                            <div className="dropdown-heading">{item.label}</div>
                            {/* <div className="dropdown-text">
                            {item.description}
                          </div> */}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
          </div>
          <div className="mobile-menu">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
