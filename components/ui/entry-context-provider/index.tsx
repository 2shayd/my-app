import { createContext, useContext, useState, useEffect } from "react";
import entryData from "@/data/entries.json";
import React from "react";
import { useAddEntry } from "@/hooks/useAddEntry";
import { useGetEntry } from "@/hooks/useGetEntry";
import { useUpdateEntry } from "@/hooks/useUpdateEntry";


export type Entry = {
  id: number;
  startDate: string;
  startTime: string;
  endDate?: string;
  endTime?: string;
  scaleRating: number;
  isPinned?: boolean;
};

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

export const EntryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // need to be completed --->
  const {data, isFetching} = useGetEntry();
  const addEntryMutation = useAddEntry();
  const updateEntryMutation = useUpdateEntry();

  // <-- need to be completed
  const [entries, setEntries] = useState<Entry[]>(entryData as Entry[]);

  const addEntry = async (entry: SupabaseNewEntry) => {
    addEntryMutation.mutate(entry);
  };

  const updateEntry = (id: number, updatedEntry: Partial<Entry>) => {
    updateEntryMutation.mutate(updatedEntry);
  };

  const pinEntry = (id: number) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, isPinned: !entry.isPinned } : entry
      )
    );
  };

      useEffect(() => {
          if (data && !isFetching) {
              console.log('Fetched entries:', data);
              setEntries(data as Entry[]);
          }
          if (isFetching) {
              console.log("fetching data..");
          }
          }, [data, isFetching]);

  return (
    <EntryContext.Provider
      value={{
        isLoading: isFetching || addEntryMutation.isPending || updateEntryMutation.isPending,
        entries,
        addEntry,
        updateEntry,
        pinEntry 

      }}>
      {children}
    </EntryContext.Provider>
  );
};


export const useEntryContext = () => {
  const context = useContext(EntryContext);
  if (!context) {
    throw new Error("useEntryContext must be used within an EntryProvider");
  }
  return context;
};

