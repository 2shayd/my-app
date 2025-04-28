import { StyleSheet, ScrollView, FlatList, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import entries from '../../../data/entries.json';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Card } from '@/components/ui/card';

export default function HomeScreen() {
  const entryData = entries
  const [searchQuery, setSearchQuery] = useState('');
  const[filteredData, setFilteredData] = useState(entryData);
  const backgroundColor = useThemeColor({}, 'background');
  const color = useThemeColor({}, 'text');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = entryData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
   );
    setFilteredData(filtered);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedText type="subtitle">Migraine Diary</ThemedText>
      <TextInput
        style={[{ backgroundColor, color }, styles.searchInput]}
        placeholder="Search entry..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data = {filteredData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
          {...item}
          />
        )}
      />
    </ScrollView>
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
