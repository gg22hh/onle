export interface ItemType {
  id: number;
  value: string;
  range: number[];
  name: string;
  events: { id: number; year: string; description: string }[];
}