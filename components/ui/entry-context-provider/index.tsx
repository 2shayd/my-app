import { createContext, useContext, useState } from 'react';
import { entryData } from '@/data/entries.json';

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
    entries: Entry[];
    addEntry: (entries: Entry[]) => void;
    updateEntry: (id: number, updatedEntry: Partial<Entry>) => void;
    pinEntry: (id: number) => void;
    // add delete entry
};

//npm install formik yup into command line!!
// add a floating action button
// fix up OldCard.tsx to use properly use the card component




