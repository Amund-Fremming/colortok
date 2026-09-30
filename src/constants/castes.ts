export type Caste = {
  name: string;
  hex: string;
  textColor: string;
  weight: number;
};

export const Castes: Caste[] = [
  { name: 'Red', hex: '#B3121B', textColor: '#ffffff', weight: 40 },
  { name: 'Brown', hex: '#6B4226', textColor: '#ffffff', weight: 18 },
  { name: 'Orange', hex: '#F07C1A', textColor: '#000000', weight: 12 },
  { name: 'Gray', hex: '#7A7D80', textColor: '#ffffff', weight: 10 },
  { name: 'Green', hex: '#1E9E4A', textColor: '#ffffff', weight: 6 },
  { name: 'Blue', hex: '#1F5FD6', textColor: '#ffffff', weight: 5 },
  { name: 'Yellow', hex: '#F2D22E', textColor: '#000000', weight: 3.5 },
  { name: 'Pink', hex: '#F28DB2', textColor: '#000000', weight: 2 },
  { name: 'Silver', hex: '#C0C4C8', textColor: '#000000', weight: 1.5 },
  { name: 'Copper', hex: '#B87333', textColor: '#ffffff', weight: 1.2 },
  { name: 'Obsidian', hex: '#111114', textColor: '#ffffff', weight: 0.5 },
  { name: 'Violet', hex: '#7A3FC4', textColor: '#ffffff', weight: 0.2 },
  { name: 'Gold', hex: '#D4AF37', textColor: '#000000', weight: 0.1 },
];
