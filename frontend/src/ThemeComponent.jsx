import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ThemeComponent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <SunIcon className="icon" onClick={changeTheme} />
      ) : (
        <MoonIcon className="icon" onClick={changeTheme} />
      )}
    </>
  );
};
