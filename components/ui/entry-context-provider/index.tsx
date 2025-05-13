import { createContext, useContext, useState } from 'react';
import { useRouter } from 'expo-router';
import  entryData  from '@/data/entries.json';
import React from 'react';

export type Entry = {
    id: number;
    startDate: string;
    startTime: string;
    endDate?: string;
    endTime?: string;
    scaleRating: number;
    pinned?: boolean;
}

 //cmd+shift+L to select all lines

type EntryContextType = {
    isLoading: boolean;
    entries: Entry[];
    addEntry: (entry: Entry) => void;
    updateEntry: (id: number, updatedEntry: Partial<Entry>) => void;
    pinEntry: (id: number) => void;
    // add delete entry
};

const EntryContext = createContext<EntryContextType | undefined>(undefined);

export const EntryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// need to be completed --->
    // const {data, isFetching} = useGetEntries(); 
 // <-- need to be completed   
    const [entries, setEntries] = useState<Entry[]>(entryData as Entry[]);

    const addEntry = (entry: Entry) => {
        setEntries((prev) => [...prev, entry]);
    };

    const updateEntry = (id: number, updatedEntry: Partial<Entry>) => {
        setEntries((prev) =>
            prev.map((entry) => 
                entry.id === id ? { ...entry, ...updatedEntry } : entry
            )
        );
    };

    const pinEntry = (id: number) => {
        setEntries((prev) =>
            prev.map((entry) => 
                entry.id === id ? { ...entry, pinned: !entry.pinned } : entry
            )
        );
    };
//need to be completed --->
//     useEffect(() => {
//         if (data && !isFetching) {
//             console.log('Fetched entries:', data);
//             setEntries(data as Entry[]);
//         }, [data, isFetching]);
//     })
    return (
        <EntryContext.Provider value={{ isLoading: false, entries, addEntry, updateEntry, pinEntry }}>
            {children}
        </EntryContext.Provider>
    );
};
// <--- need to be completed

export const useEntryContext = () => {
    const context = useContext(EntryContext);
    if (!context) {
        throw new Error('useEntryContext must be used within an EntryProvider');
    }
    return context;
};

//npm install formik yup into command line!!
// add a floating action button
// fix up OldCard.tsx to use properly use the card component




