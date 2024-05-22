import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const useCustomFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [fontError, setFontError] = useState<Error | null>(null);

    const [loaded] = useFonts({
        "poppins-black": require("../../assets/fonts/Poppins-Black.ttf"),
        "poppins-black-italic": require("../../assets/fonts/Poppins-BlackItalic.ttf"),
        "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
        "poppins-bold-italic": require("../../assets/fonts/Poppins-BoldItalic.ttf"),
        "poppins-extra-bold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
        "poppins-extra-bold-italic": require("../../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
        "poppins-extra-light": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
        "poppins-extra-light-italic": require("../../assets/fonts/Poppins-ExtraLightItalic.ttf"),
        "poppins-light": require("../../assets/fonts/Poppins-Light.ttf"),
        "poppins-italic": require("../../assets/fonts/Poppins-Italic.ttf"),
        "poppins-medium": require("../../assets/fonts/Poppins-Medium.ttf"),
        "poppins-medium-italic": require("../../assets/fonts/Poppins-MediumItalic.ttf"),
        "poppins": require("../../assets/fonts/Poppins-Regular.ttf"),
        "poppins-semi-bold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
        "poppins-semi-bold-italic": require("../../assets/fonts/Poppins-SemiBoldItalic.ttf"),
        "poppins-thin": require("../../assets/fonts/Poppins-Thin.ttf"),
        "poppins-thin-italic": require("../../assets/fonts/Poppins-ThinItalic.ttf"),
    });

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    useEffect(() => {
        if (loaded) {
            setFontsLoaded(true);
        } else if (fontError) {
            setFontError(new Error('Failed to load fonts'));
        }
    }, [loaded, fontError]);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    return { fontsLoaded, fontError, onLayoutRootView };
};

export default useCustomFonts;
