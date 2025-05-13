import { SplashScreen, Stack } from "expo-router";
// import { createContext, useEffect, useState } from "react";
// import { GluestackUIProvider, ModeType } from "@/components/ui/gluestack-ui-provider";
// import { useFonts } from "expo-font";
// import { EntryProvider } from "@/components/ui/entry-context-provider";


// type ThemeContextType = {
//     colorMode?: ModeType;
//     toggleColorMode?: () => void;
// };

// export const ThemeContext = createContext<ThemeContextType>({
//     colorMode: "light",
//     toggleColorMode: () => {},
// });

// export default function RootLayout() {
//     const [colorMode, setColorMode] = useState<ModeType>("light");

//     const [loaded] = useFonts({
//         SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
//     });

//     useEffect(() => {
//         if (loaded) {
//             SplashScreen.hideAsync();
//         }
//     }, [loaded]);

//         if (!loaded) {
//             return null;
//         }

//         const toggleColorMode = async () => {
//             setColorMode((prev) => (prev === "light" ? "dark" : "light"));
//         };

//         return (
//             <GluestackUIProvider mode={colorMode}>
//                 <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
//                     <EntryProvider>
//                         <Stack>
//                             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//                             <Stack.Screen name="+not-found" options={{ headerShown: false }} />
//                         </Stack>
// 0                    </EntryProvider>
//                 </ThemeContext.Provider>
//             </GluestackUIProvider>
//         );
//     }

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: false,
            }}>
            <Stack.Screen name="index" options={{ title: 'Home'}} />
            <Stack.Screen name="[title]" options={{ title: 'Details'}} />
        </Stack>
    );
};