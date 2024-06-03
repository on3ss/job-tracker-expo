import { useContext } from "react";
import { configureFonts } from "react-native-paper";
import { PreferencesContext } from "../providers/PreferencesContext";
import { CombinedDarkTheme, CombinedDefaultTheme } from "../theme";

const useTheme = () => {
  const { isThemeDark } = useContext(PreferencesContext);
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const fontConfig = {
    fontFamily: "poppins",
  };

  const themeWithFonts = {
    ...theme,
    fonts: configureFonts({ config: fontConfig }),
  };

  return { theme: themeWithFonts, isThemeDark };
};

export default useTheme;
