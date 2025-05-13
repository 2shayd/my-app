import { StyleSheet, ScrollView, FlatList, TextInput } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import entries from "../../../data/entries.json";
import { useEffect, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import EntryCard from "@/components/EntryCard";

export default function HomeScreen() {
  const entryData = entries;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(entryData);
  const backgroundColor = useThemeColor({}, "background");
  const color = useThemeColor({}, "text");

  // need to figure out how to search by date and time with a calandar picker
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = entryData.filter((item) =>
      item.startDate.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  // add a way to filter by different categories like date, time, scale rating, symptoms, etc.
  useEffect(() => {
    const pinned = entryData.filter((item) => item.pinned);
    if (pinned.length > 0) {
      console.log("Pinned entries:", pinned);
      setFilteredData(pinned);
    }
  }, []);

  return (
    <Box className="flex-1 p-4 dark:bg-zinc-700">
      <ThemedText type="subtitle">Migraine Diary</ThemedText>
      <TextInput
        style={[{ backgroundColor, color }, styles.searchInput]}
        placeholder="Search entry..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EntryCard {...item} />}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    marginTop: 10,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
