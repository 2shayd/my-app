import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/global.css";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { createContext, useEffect, useState } from "react";
import { GluestackUIProvider, ModeType } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { EntryProvider } from "@/components/ui/entry-context-provider";
import { supabase } from "@/utils/supabase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";

//prevent splash screen from auto hiding before asset is loaded
SplashScreen.preventAutoHideAsync();

type ThemeContextType = {
    colorMode?: ModeType;
    toggleColorMode?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    colorMode: "light",
    toggleColorMode: () => {},
});

const queryClient = new QueryClient();

export default function RootLayout() {
    const [colorMode, setColorMode] = useState<ModeType>("light");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });


    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);



    //handle initial supabase auth
    useEffect(() => {
        const autoSignin = async () => {
            if (isAuthenticated) {
                console.log('User is already signed in');
                return;
            }

        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
            if (sessionError) {
                console.error('Error getting session:', sessionError);
            } else if (sessionData.session) {
                setIsAuthenticated(true);
                console.log('User is already signed in:', sessionData.session.user);
            } else {
                signIn();
            }
            
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email: 'test@dev.com',
            password: 'testpassword',
        });
        if (signInError) {
            console.error('Error signing in:', signInError);
        } else {
            setIsAuthenticated(true);
            console.log('User signed in:', signInData);
        }
    };
    



    autoSignin();
}, [isAuthenticated])

    if (!loaded) {
        return null;
    }

    const toggleColorMode = async () => {
        setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
<QueryClientProvider client={queryClient}>
<GluestackUIProvider mode={colorMode}>
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        <EntryProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" options={{ headerShown: false }} />
            </Stack>
        </EntryProvider>
    </ThemeContext.Provider>
</GluestackUIProvider>
</QueryClientProvider>
);
}

function signIn() {
    throw new Error("Function not implemented.");
}

