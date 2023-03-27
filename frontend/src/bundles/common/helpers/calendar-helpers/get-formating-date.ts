import { type Range } from 'react-date-range';

const formatOneDay = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
};

const formatRange = (range: Range): string => {
    const startDate: Date | undefined = range.startDate;
    const endDate: Date | undefined = range.endDate;
    const formatedStartDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    }).format(startDate);
    const formatedEndDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    }).format(endDate);
    return ` ${formatedStartDate} - ${formatedEndDate} `;
};

export { formatOneDay, formatRange };
