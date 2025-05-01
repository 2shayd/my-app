import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Stack, useLocalSearchParams } from "expo-router";
import entryData from "@/data/entries.json";
import { VStack } from "@/components/ui/vstack"; 
import { Text } from "@/components/ui/text";



export default function DetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const entry = entryData.find((entry) => entry.id.toString() === id);
    const {
        id: entryId,
        startDate,
        startTime,
        scaleRating
    } = entry || {};    


    return (
        <Box className='flex-1 p-4'>
            <Stack.Screen
                options={{
                    title: `Entry ${entryId}`,
                }}
            />
            <Heading size='xl' className='self-center'>Entry Details:</Heading>
            <VStack space="md" className='mr-auto mt-4'>
                <Text size='lg'>Start Date: {startDate}</Text>
                <Text size='lg'>Start Time: {startTime}</Text>
            </VStack>
        </Box>
  );
}

