import { StyleSheet, Text, View } from 'react-native';

import { BottomTabInset, Spacing } from '@/constants/theme';
import { FeedItem, rarityOf } from '@/utils/roll-caste';

type CasteCardProps = {
  item: FeedItem;
  height: number;
};

export function CasteCard({ item, height }: CasteCardProps) {
  const { caste, caption } = item;
  const color = { color: caste.textColor };

  return (
    <View style={[styles.card, { height, backgroundColor: caste.hex }]}>
      <View style={styles.caption}>
        <Text style={[styles.name, color]}>@{caste.name.toLowerCase()}</Text>
        <Text style={[styles.text, color]}>{caption}</Text>
        <Text style={[styles.odds, color]}>{rarityOf(caste)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  caption: {
    padding: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five + Spacing.two,
    gap: Spacing.one,
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
  },
  odds: {
    fontSize: 13,
    fontWeight: 500,
    opacity: 0.7,
  },
});
