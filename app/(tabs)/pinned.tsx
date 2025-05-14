import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import React from 'react';

const initialState = { pinned: [] as string[] };

function pinnedReducer(
    state: { pinned: string[] },
    action: { type: 'add'; payload?: string }
) {
    switch (action.type) {
        case 'add':
            if (action.payload && !state.pinned.includes(action.payload)) {
            return { pinned: [...state.pinned, action.payload] };
            }
        default:
            throw new Error('Unknown action type');
    }
}

export default function Pinned() {
    const [state, dispatch] = React.useReducer(pinnedReducer, initialState);
    const sampleItems = ['React', 'Expo', 'NativeWind', 'Gluestack'];
return (
    <Box className="flex-1 justify-center items-center bg-light dark:bg-dark p-4">
        <VStack className="items-center space-y-4">
            <Text className="text-lg text-gray-600 dark:text-gray-400">
                Add an entry to your pinned list
            </Text>
        
{/* //display the items */}
    <Box className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <Text className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Pinned Entries:
        </Text>
        {state.pinned.length > 0 ? (
            state.pinned.map((item, index) => (
                <HStack
                    space='sm'
                    key={index}
                    className="justify-between items-center bg-white dark:bg-gray-700 p-2 mb-2 rounded"
                >
                    <Text className="text-gray-800 dark:text-gray-200">{item}</Text>
                </HStack>
            ))
        ) : (
            <Text className="text-gray-500 dark:text-gray-400">
                No pinned entries yet.
            </Text>
        )}
    </Box>
        </VStack>
    </Box>
);
}