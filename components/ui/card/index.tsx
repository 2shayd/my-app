import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { Link, LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';

// type ICardProps = ViewProps &
//   VariantProps<typeof cardStyle> & { className?: string };

  interface CardProps {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    }

export const Card: React.FC<CardProps> = ({ id, title, content, created_at, updated_at }) => {
    const backgroundColor = useThemeColor({}, 'background');
    const color = useThemeColor({}, 'text');
    const shadowColor = useThemeColor({}, 'shadowColor');
    const router = useRouter();

    const handleLinkPress = () => {
        router.push({
            pathname: '/(tabs)/(home)/[title]',
            params: { title: Link },
        })
    }

    return (
        <View style={[
            { backgroundColor, shadowColor, borderColor: shadowColor },
            styles.card,
        ]}>
        <Text style={[styles.id, { color }]}>{id}</Text>
        <Text style={[styles.title, { color }]}>{title}</Text>
        <Text style={[styles.content, { color }]}>{content}</Text>
        <Text style={[styles.date, { color }]}>{created_at}</Text>
        <Text style={[styles.date, { color }]}>{updated_at}</Text>
        <Link
            className="flex-row items-center-center justify-center"
            onPress={handleLinkPress}
            >
            <LinkText>See Details</LinkText>
        </Link>
        </View>
);

Card.displayName = 'Card'
};