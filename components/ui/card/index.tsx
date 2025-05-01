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
    startDate: string;
    startTime: string;
    endDate?: string;
    endTime?: string;
    scaleRating: number;
    pinned?: boolean;
    }

export const Card: React.FC<CardProps> = ({ id, startDate, startTime, endDate, endTime, scaleRating, pinned }) => {
    const backgroundColor = useThemeColor({}, 'background');
    const color = useThemeColor({}, 'text');
    const shadowColor = useThemeColor({}, 'shadowColor');
    const router = useRouter();

    const handleLinkPress = () => {
        router.push({
            pathname: '/(tabs)/(home)/[title]',
            params: { id : Link },
        })
    }

    return (
        <View style={[
            { backgroundColor, shadowColor, borderColor: shadowColor },
            styles.card,
        ]}>
        <Text style={[styles.id, { color }]}>{id}</Text>
        <Text style={[styles.startDate, { color }]}>{startDate}</Text>
        <Text style={[styles.startTime, { color }]}>{startTime}</Text>
        <Text style={[styles.endDate, { color }]}>{endDate}</Text>
        <Text style={[styles.endTime, { color }]}>{endTime}</Text>
        <Text style={[styles.scaleRating, { color }]}>{scaleRating}</Text>
        <Text style={[styles.pinned, { color }]}>{pinned ? 'Pinned' : 'Not Pinned'}</Text>

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