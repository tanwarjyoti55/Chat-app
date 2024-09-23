import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ThemeComponent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <LightModeIcon className="icon" onClick={changeTheme} />
      ) : (
        <ModeNightIcon className="icon" onClick={changeTheme} />
      )}
    </>
  );
};
