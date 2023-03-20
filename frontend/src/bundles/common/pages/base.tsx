import React from 'react';

import {
    InputLabel,
    InputPlaceholder,
    InputSize,
    InputType,
} from '~/bundles/common/enums/enums.js';
import { useAppForm } from '~/bundles/common/hooks/hooks';
import {
    type UserSignInRequestDto,
    userSignInValidationSchema,
} from '~/bundles/users/users';

import { Button, Input, LineChart } from '../components/components';
import { DoughnutChart } from '../components/doughnut-chart/doughnut-chart';
import { Tabs } from '../components/tabs/tabs';
import { ButtonSize } from '../enums/button-size.enum';
import { ButtonVariant } from '../enums/button-variant.enum';

const tabsData = [
    { title: 'Transaction', to: '/ui/' },
    { title: 'Overview', to: '/ui/overview' },
    { title: 'Budget', to: '/ui/budget' },
    { title: 'Wallet Settings', to: '/ui/wallet-settings' },
];

const DEFAULT_SIGN_IN_PAYLOAD: UserSignInRequestDto = {
    email: '',
    password: '',
};

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

const Base: React.FC = () => {
    const { control, errors } = useAppForm<UserSignInRequestDto>({
        defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
        validationSchema: userSignInValidationSchema,
    });

    return (
        <div>
            Base Page
            <Tabs tabsData={tabsData} />
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: '20px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                        }}
                    >
                        <Button
                            variant={ButtonVariant.PRIMARY}
                            size={ButtonSize.MEDIUM}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                        <Button
                            variant={ButtonVariant.PRIMARY}
                            size={ButtonSize.MEDIUM}
                            disabled={true}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                        }}
                    >
                        <Button
                            variant={ButtonVariant.SECONDARY}
                            size={ButtonSize.MEDIUM}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                        <Button
                            variant={ButtonVariant.SECONDARY}
                            size={ButtonSize.MEDIUM}
                            disabled={true}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                        }}
                    >
                        <Button
                            variant={ButtonVariant.PRIMARY}
                            size={ButtonSize.SMALL}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                        <Button
                            variant={ButtonVariant.PRIMARY}
                            size={ButtonSize.SMALL}
                            disabled={true}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                        }}
                    >
                        <Button
                            variant={ButtonVariant.SECONDARY}
                            size={ButtonSize.SMALL}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                        <Button
                            variant={ButtonVariant.SECONDARY}
                            size={ButtonSize.SMALL}
                            disabled={true}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                        }}
                    >
                        <Button
                            variant={ButtonVariant.PLAIN}
                            size={ButtonSize.SMALL}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                        <Button
                            variant={ButtonVariant.PLAIN}
                            size={ButtonSize.SMALL}
                            disabled={true}
                        >
                            <span>+</span>
                            <span>Button</span>
                            <span>˅</span>
                        </Button>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                        }}
                    >
                        <Button variant={ButtonVariant.ROUND}>+</Button>
                    </div>
                </div>
            </div>
            <div style={{ width: 600, height: 400 }}>
                <LineChart
                    dataArr={[
                        { date: 'Mar 01,2023', value: 0 },
                        { date: 'Mar 04,2023', value: 4500 },
                        { date: 'Mar 07,2023', value: 6000 },
                        { date: 'Mar 12,2023', value: 7000 },
                        { date: 'Mar 14,2023', value: 7000 },
                        { date: 'Mar 16,2023', value: 7500 },
                        { date: 'Mar 19,2023', value: 5000 },
                        { date: 'Mar 27,2023', value: 6500 },
                        { date: 'Mar 30,2023', value: 5000 },
                    ]}
                />
            </div>
            {/* Doughnut Chart----------------------------------- */}
            <div>
                <p>Doughnut Chart</p>
                <DoughnutChart categories={categories} />
            </div>
            {/* end-Doughnut Chart------------------------------- */}
            <div>
                <form>
                    <div>
                        <Input
                            name="email"
                            type={InputType.EMAIL}
                            label={InputLabel.EMAIL}
                            size={InputSize.MEDIUM}
                            placeholder={InputPlaceholder.EMAIL}
                            control={control}
                            errors={errors}
                        />
                        <Input
                            name="email"
                            type={InputType.EMAIL}
                            label={InputLabel.EMAIL}
                            size={InputSize.SMALL}
                            placeholder={InputPlaceholder.EMAILSMALL}
                            control={control}
                            errors={errors}
                        />
                        <Input
                            name="password"
                            type={InputType.PASSWORD}
                            label={InputLabel.PASSWORD}
                            placeholder={InputPlaceholder.PASSWORD}
                            control={control}
                            errors={errors}
                        />
                        <Input
                            name="email"
                            type={InputType.TEXT}
                            label={InputLabel.NOTE}
                            size={InputSize.MEDIUM}
                            placeholder={InputPlaceholder.NOTE}
                            control={control}
                            errors={errors}
                        />
                        <Input
                            name="email"
                            type={InputType.TEXT}
                            label={InputLabel.NOTE}
                            size={InputSize.SMALL}
                            placeholder={InputPlaceholder.NOTESMALL}
                            control={control}
                            errors={errors}
                        />
                        <Input
                            name="email"
                            type={InputType.TEXT}
                            label={InputLabel.AMOUNT}
                            placeholder={InputPlaceholder.AMOUNT}
                            control={control}
                            errors={errors}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export { Base };
