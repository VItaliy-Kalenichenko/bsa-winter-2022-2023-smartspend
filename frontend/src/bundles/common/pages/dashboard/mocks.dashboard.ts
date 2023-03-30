const barChartData = [
    [
        {
            label: 'income',
            data: [
                {
                    date: '01 Jan 2022 00:00:00 GMT',
                    value: 200_000,
                },
                {
                    date: '03 Jan 2022 00:00:00 GMT',
                    value: 250_000,
                },
                {
                    date: '03 Feb 2023 00:00:00 GMT',
                    value: 750_000,
                },
            ],
        },
    ],
    [
        {
            label: 'outcome',
            data: [
                {
                    date: '01 Jan 2022 00:00:00 GMT',
                    value: 100_000,
                },
                {
                    date: '03 Jan 2022 00:00:00 GMT',
                    value: 150_000,
                },
                {
                    date: '01 Feb 2023 00:00:00 GMT',
                    value: 350_000,
                },
                {
                    date: '05 Feb 2023 00:00:00 GMT',
                    value: 250_000,
                },
            ],
        },
    ],
];

const categories = [
    // props to Doughnut Chart
    {
        total: 1150,
        color: 'linear-gradient(95.5deg, #284B9F 0%, #102E68 100%)',
    },
    {
        total: 1825,
        color: 'linear-gradient(96.2deg, #FECC66 -30.03%, #F83062 95.13%)',
    },
    {
        total: 1325,
        color: 'linear-gradient(96.2deg, #FE66E6 -30.03%, #6933DD 95.13%)',
    },
    {
        total: 2425,
        color: 'linear-gradient(91.64deg, #FCE302 -1.67%, #FE5C01 98.41%)',
    },
    {
        total: 1425,
        color: 'linear-gradient(95.77deg, #09F2D6 -14.06%, #09E1FF 101.51%)',
    },
    {
        total: 2225,
        color: 'linear-gradient(95.77deg, #00D7BD -14.06%, #03BFD9 101.51%)',
    },
];

const lineChartData = [
    { date: 'Mar 01,2023', value: 0 },
    { date: 'Mar 04,2023', value: 4500 },
    { date: 'Mar 07,2023', value: 6000 },
    { date: 'Mar 12,2023', value: 7000 },
    { date: 'Mar 14,2023', value: 7000 },
    { date: 'Mar 16,2023', value: 7500 },
    { date: 'Mar 19,2023', value: 5000 },
    { date: 'Mar 27,2023', value: 6500 },
    { date: 'Mar 30,2023', value: 5000 },
];

type Wallet = {
    id: string;
    title: string;
};

const wallets: Wallet[] = [
    { id: '1', title: 'wallet 1' },
    { id: '2', title: 'wallet 2' },
];

// mock data for range slider

const mockSliderData = [
    { amount: -50 },
    { amount: 100 },
    { amount: 350 },
    { amount: 600 },
    { amount: 900 },
];

export {
    type Wallet,
    barChartData,
    categories,
    lineChartData,
    mockSliderData,
    wallets,
};
