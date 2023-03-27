import EmmaAvatar from '~/assets/img/emma-avatar.svg';
import JoanAvatar from '~/assets/img/joan-avatar.svg';
import JoyAvatar from '~/assets/img/joy-avatar.svg';

import {
    FeedbacksPart,
    FirstStepPart,
    Footer,
    Header,
    HighlightBanner,
    QuestionPart,
    SecondStepPart,
    SubscriptionPart,
    ThirdStepPart,
} from './components/components';
import { AppRoute } from './enums/enums';

const Landing: React.FC = () => {
    const tabsData = [
        { title: 'Transaction', to: '/ui/' },
        { title: 'Overview', to: '/ui/overview' },
        { title: 'Budget', to: '/ui/budget' },
        { title: 'Wallet Settings', to: '/ui/wallet-settings' },
    ];

    const tabsDashboard = [
        { title: 'Dashboard', to: AppRoute.DASHBOARD },
        { title: 'Budget', to: AppRoute.BUDGETS },
    ];

    const allTabsData = {
        dashboard: tabsDashboard,
        wallets: tabsData,
    };

    const feedbacksArray = [
        {
            name: 'Roy',
            src: JoyAvatar,
            feedback:
                'Easy to use, great design, sync option and has a very simple and nice-looking widget that makes it even easier to use.',
        },
        {
            name: 'Emma',
            src: EmmaAvatar,
            feedback:
                'Really loved this app. It helps me to analyse my expenses and income. The best thing is it indexes everything based on hash which helps to see the expenses at once.',
        },
        {
            name: 'Joan',
            src: JoanAvatar,
            feedback:
                'Nullam tempus, elit non tempus molestie, tellus diam sagittis urna, vel viverra velit risus in nunc. Crahjhjs in quam leo. Nullam mattis at lacus eget pretium. Etiam quis pulvinar',
        },
        {
            name: 'Daniel',
            src: JoyAvatar,
            feedback:
                'I have tried other money-tracking apps before SmartSpend, but I choose to stick to this because of its simplicity and intuitive design.',
        },
        {
            name: 'Sophia',
            src: JoanAvatar,
            feedback:
                'I am using this app for more than two years and could not be happier with the service I got.',
        },
        {
            name: 'Jacob',
            src: JoyAvatar,
            feedback:
                'The app works intuitively, it makes it super easy to control your money. It helps me to develop healthy spending habits.',
        },
    ];

    return (
        <>
            <Header dataTabs={allTabsData} />
            <HighlightBanner
                title={'The only app that gets your money into shape'}
                details={
                    'Use SmartSpend to plan your budget and take control of finances'
                }
            />
            <QuestionPart question={'How to get your money into shape?'} />
            <FirstStepPart />
            <SecondStepPart />
            <ThirdStepPart />
            <FeedbacksPart
                title={'Why people use SmartSpend'}
                feedbacks={feedbacksArray}
            />
            <SubscriptionPart
                title={'Get monthly money tips and stay on top of your finance'}
            />
            <Footer />
        </>
    );
};

export { Landing };
