export function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  
  return `${month}. ${day}`;
}

export function formatDateLong(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  
  return `${month} ${day}, ${date.getFullYear()}`;
}