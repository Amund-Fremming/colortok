import { SymbolView } from 'expo-symbols';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Spacing } from '@/constants/theme';

const FeedTabs = ['Following', 'For You'] as const;

type FeedTab = (typeof FeedTabs)[number];

type FeedTabButtonProps = {
  label: FeedTab;
  isSelected: boolean;
  onPress: () => void;
};

function FeedTabButton({ label, isSelected, onPress }: FeedTabButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.tabButton}>
      <Text style={[styles.tabLabel, isSelected && styles.tabLabelSelected]}>{label}</Text>
      <View style={[styles.indicator, isSelected && styles.indicatorSelected]} />
    </Pressable>
  );
}

export function FeedTopBar() {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState<FeedTab>('For You');

  return (
    <View style={[styles.container, { paddingTop: insets.top + Spacing.two }]} pointerEvents="box-none">
      <Pressable style={styles.iconButton}>
        <SymbolView
          name={{ ios: 'play.tv', web: 'live_tv' }}
          tintColor="#ffffff"
          size={24}
        />
      </Pressable>

      <View style={styles.tabs}>
        {FeedTabs.map((tab) => (
          <FeedTabButton
            key={tab}
            label={tab}
            isSelected={tab === selectedTab}
            onPress={() => setSelectedTab(tab)}
          />
        ))}
      </View>

      <Pressable style={styles.iconButton}>
        <SymbolView
          name={{ ios: 'magnifyingglass', web: 'search' }}
          tintColor="#ffffff"
          size={24}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
  },
  iconButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    gap: Spacing.four,
  },
  tabButton: {
    alignItems: 'center',
    gap: Spacing.one,
  },
  tabLabel: {
    fontSize: 17,
    fontWeight: 600,
    color: '#ffffff',
    opacity: 0.6,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowRadius: 4,
  },
  tabLabelSelected: {
    opacity: 1,
    fontWeight: 700,
  },
  indicator: {
    width: 28,
    height: 3,
    borderRadius: 2,
  },
  indicatorSelected: {
    backgroundColor: '#ffffff',
  },
});
