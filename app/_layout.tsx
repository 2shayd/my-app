import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/global.css";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { createContext, useEffect, useState } from "react";
import { GluestackUIProvider, ModeType } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { EntryProvider } from "@/components/ui/entry-context-provider";
// import { supabase } from "../app/utils/supabase";


type ThemeContextType = {
    colorMode?: ModeType;
    toggleColorMode?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    colorMode: "light",
    toggleColorMode: () => {},
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
    const [colorMode, setColorMode] = useState<ModeType>("light");


    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

        //handle initial supabase auth
    // need to be completed --->
        useEffect(() => {
//             if (isAuthenticated) {
//                 return;
//             }
//             const autoSign = async () => {
//                 const { data, error } = await supabase.auth.getSession();
//                 if (error) {
//                     console.error('Error getting session:', error);
//                 } else if (data.session) {
//                     setIsAuthenticated(true);
//                     console.log('User is already signed in:', data.session.user);
//                 } else {
//                     signIn();
//                 }
//             };

//             const {data, error} = await supabase.auth.signInWithPassword({
//                 email: 'test@dev.com',
//                 password: 'testpassword',
//             });
//             if (error) {
//                 console.error('Error signing in:', error);
//             }else {
//                 setIsAuthenticated(true);
//                 console.log('User signed in:', data);
//             }
//         }
    
        // autoSign();
    }, [])
    // <--- need to be completed

    if (!loaded) {
        return null;
    }
    const toggleColorMode = async () => {
        setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    };
   
        return (
            <GluestackUIProvider mode={colorMode}>
                <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
                    <EntryProvider>
                        <Stack>
                            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
                        </Stack>
0                    </EntryProvider>
                </ThemeContext.Provider>
            </GluestackUIProvider>
        );
    }
