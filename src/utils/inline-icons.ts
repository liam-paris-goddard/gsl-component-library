// src/utils/inline-icons.ts

export function getIcon(name: 'chevron' | 'lock-open' | 'lock-closed'): string {
  switch (name) {
    case 'chevron':
      return `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill="currentColor"/>
        </svg>
      `;
    case 'lock-open':
      return `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 1.25C17.4162 1.25 19.375 3.20875 19.375 5.625V8.75C19.375 9.09518 19.0952 9.375 18.75 9.375C18.4048 9.375 18.125 9.09518 18.125 8.75V5.625C18.125 3.89911 16.7259 2.5 15 2.5C13.2741 2.5 11.875 3.89911 11.875 5.625V8.125C13.2557 8.125 14.375 9.24429 14.375 10.625V16.25C14.375 17.6307 13.2557 18.75 11.875 18.75H3.125C1.74429 18.75 0.625 17.6307 0.625 16.25V10.625C0.625 9.24429 1.74429 8.125 3.125 8.125H10.625V5.625C10.625 3.20875 12.5838 1.25 15 1.25Z" fill="currentColor"/>
        </svg>
      `;
    case 'lock-closed':
      return `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1C12.4853 1 14.5 3.01472 14.5 5.5V9H15C16.1046 9 17 9.89543 17 11V17C17 18.1046 16.1046 19 15 19H5C3.89543 19 3 18.1046 3 17V11C3 9.89543 3.89543 9 5 9H5.5V5.5C5.5 3.01472 7.51472 1 10 1ZM10 2.5C8.34315 2.5 7 3.84315 7 5.5V9H13V5.5C13 3.84315 11.6569 2.5 10 2.5Z" fill="currentColor"/>
        </svg>
      `;
    default:
      return '';
  }
}
