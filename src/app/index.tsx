import { useState } from 'react';
import { FlatList, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { CasteCard } from '@/components/caste-card';
import { FeedTopBar } from '@/components/feed-top-bar';
import { rollFeedItems } from '@/utils/roll-caste';

const BatchSize = 20;

export default function HomeScreen() {
  const [items, setItems] = useState(() => rollFeedItems(BatchSize));
  const [pageHeight, setPageHeight] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) =>
    setPageHeight(event.nativeEvent.layout.height);

  const loadMore = () => setItems((current) => [...current, ...rollFeedItems(BatchSize)]);

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <StatusBar style="light" />
      {pageHeight > 0 && (
        <FlatList
          data={items}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => <CasteCard item={item} height={pageHeight} />}
          getItemLayout={(_, index) => ({ length: pageHeight, offset: pageHeight * index, index })}
          pagingEnabled
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="never"
          onEndReached={loadMore}
          onEndReachedThreshold={3}
          windowSize={5}
        />
      )}
      <FeedTopBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
