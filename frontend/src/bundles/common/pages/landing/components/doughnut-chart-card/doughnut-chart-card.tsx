import classNames from 'classnames';

import { DoughnutChart } from '~/bundles/common/components/doughnut-chart/doughnut-chart';

import BlueMurseIcon from '../../../../../../assets/img/blue-murse-icon.svg';
import OrangeMurseIcon from '../../../../../../assets/img/orange-murse-icon.svg';
import styles from './styles.module.scss';

type Properties = {
    title: string;
    date: string;
    transaction_num: number;
    transaction_type: string;
    transaction_sum: string;
    variant?: string;
};

const DoughnutChartCard: React.FC<Properties> = ({
    title,
    date,
    transaction_num,
    transaction_sum,
    transaction_type,
    variant = 'primary',
}) => {
    const transactionSumClass = classNames(
        styles.transaction_sum,
        transaction_sum.includes('+') ? styles.blue : styles.red,
    );

    const blueGradient =
        'background: linear-gradient(95.77deg, #00D7BD -14.06%, #03BFD9 101.51%)';
    const orangeGradient =
        'background: linear-gradient(91.64deg, #FCE302 -1.67%, #FE5C01 98.41%)';

    const categories = [
        {
            total: 100,
            color: variant ? blueGradient : orangeGradient,
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.top_part}>
                <p className={styles.title}>{title}</p>
                <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.chart_part}>
                <DoughnutChart categories={categories} />
            </div>
            <div className={styles.bottom_part}>
                <div className={styles.transaction_type_container}>
                    <img
                        src={
                            variant === 'primary'
                                ? BlueMurseIcon
                                : OrangeMurseIcon
                        }
                        alt={'murse'}
                    />
                    <p>{transaction_type}</p>
                </div>
                <p className={styles.transaction_num}>
                    {transaction_num} transaction
                </p>
                <p className={transactionSumClass}>{transaction_sum}</p>
            </div>
        </div>
    );
};

export { DoughnutChartCard };
