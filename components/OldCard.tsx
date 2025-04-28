// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { IconSymbol } from './ui/IconSymbol';
// import { useThemeColor } from '@/hooks/useThemeColor';

// interface CardProps {
//     id: number;
//     title: string;
//     content: string;
//     created_at: string;
//     updated_at: string;
//     }

// export const OldCard: React.FC<CardProps> = ({ id, title, content, created_at, updated_at }) => {
//     const backgroundColor = useThemeColor({}, 'background');
//     const color = useThemeColor({}, 'text');
//     const shadowColor = useThemeColor({}, 'shadowColor');
//     const router = useRouter();

//     const handleLinkPress = () => {
//         router.push({
//             pathname: '/(tabs)/(home)/[title]',
//             params: { title: link },
//         })
//     }

//     return (
//         <View style={[
//             { backgroundColor, shadowColor, borderColor: shadowColor },
//             styles.card,
//         ]}>
//         <Text style={[styles.id, { color }]}>{id}</Text>
//         <Text style={[styles.title, { color }]}>{title}</Text>
//         <Text style={[styles.content, { color }]}>{content}</Text>
//         <Text style={[styles.date, { color }]}>{created_at}</Text>
//         <Text style={[styles.date, { color }]}>{updated_at}</Text>
//         <Link
//             className="flex-row items-center-center justify-center"
//             onPress={handleLinkPress}
//             >
//             <LinkText>See Details</LinkText>
//         </Link>
//         <TouchableOpacity style={styles.button} onPress={() => console.log(`Link pressed: ${link}`)}>
//             <Text style={styles.link}>See Details</Text>
//         </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     card: {
//         padding: 16,
//         borderRadius: 8,
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 3,
//         borderWidth: 1,
//     },
//     id: {
//         fontSize: 12,
//         fontWeight: 'bold',
//         marginBottom: 4,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     content: {
//         fontSize: 14,
//         marginBottom: 8,
//     },
//     date: {
//         fontSize: 12,
//         color: 'gray',
//     },
//     button: {
//         marginTop: 12,
//         padding: 10,
//         backgroundColor: '#007BFF',
//         borderRadius: 4,
//         alignItems: 'center',
//     },
//     link: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//     },
// });