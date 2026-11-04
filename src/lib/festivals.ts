import raw from '../../data/festivals.json';
import type { Festival } from '../types/festival';
import { seoulToday, shiftMonth } from './dates';

export const festivals: Festival[] = raw;
export const buildDate = seoulToday();
export const currentMonth = buildDate.slice(0, 7);
// Keep archived sample months and provide one year of navigation around the build month.
export const availableMonths = [...new Set([
  ...festivals.flatMap(festival => festival.months),
  ...Array.from({ length: 25 }, (_, index) => shiftMonth(currentMonth, index - 12)),
])].sort();

export function festivalsInMonth(month: string): Festival[] {
  return festivals.filter(festival => festival.months.includes(month))
    .sort((a, b) => a.startDate.localeCompare(b.startDate) || a.id.localeCompare(b.id));
}
