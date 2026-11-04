export function seoulToday(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(date);
  const get = (type: string) => parts.find(part => part.type === type)!.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

export function shiftMonth(month: string, offset: number): string {
  const [year, number] = month.split('-').map(Number);
  return new Date(Date.UTC(year, number - 1 + offset, 1)).toISOString().slice(0, 7);
}

export function monthPath(month: string): string {
  return `/${month.replace('-', '/')}/`;
}

export function monthLabel(month: string): string {
  const [year, number] = month.split('-');
  return `${year}년 ${Number(number)}월`;
}

export function period(start: string, end: string): string {
  return `${start.replaceAll('-', '.')} — ${end.replaceAll('-', '.')}`;
}

export function festivalStatus(start: string, end: string, today: string): string {
  if (today > end) return '종료';
  if (today >= start) return '진행중';
  const days = Math.round((Date.parse(`${start}T00:00:00Z`) - Date.parse(`${today}T00:00:00Z`)) / 86400000);
  return `D-${days}`;
}
