import { Image, StyleSheet, ScrollView, Platform, FlatList } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import entries from '../../data/entries.json';
import { Card } from '../../components/Card';

export default function HomeScreen() {
  const entryData = entries
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="subtitle">Migraine Diary</ThemedText>
      <FlatList
        data = {entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title}
            content={item.content}
            created_at={item.created_at}
            updated_at={item.updated_at}
          />
        )}
      />
      </ThemedView>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
