import 'rc-slider/assets/index.css';
import '~/assets/css/variables/color-variables.scss';

import Slider from 'rc-slider';
import React, { useCallback } from 'react';

import { type RangeLimits } from '../../types/range-slider.type';
import styles from './styles.module.scss';

interface Properties {
    onChange?: (range: RangeLimits) => void;
    rangeLimits: RangeLimits;
    currentRange: RangeLimits;
}

const RangeSlider: React.FC<Properties> = ({
    onChange,
    rangeLimits,
    currentRange,
}) => {
    const handleSliderChange = useCallback(
        (value: number[]): void => {
            const newRange = value as [number, number];
            if (onChange) {
                onChange({ min: newRange[0], max: newRange[1] });
            }
        },
        [onChange],
    );

    // use prop styles because css modules doesn't work with Slider lib

    const trackStyle = {
        backgroundColor: 'var(--color-blue-500)',
    };

    const handleStyle = {
        borderColor: 'var(--color-blue-500)',
    };

    return (
        <div className={styles.sliderWrapper}>
            <Slider
                trackStyle={trackStyle}
                handleStyle={[handleStyle, handleStyle]}
                range
                min={rangeLimits.min}
                max={rangeLimits.max}
                value={[currentRange.min, currentRange.max]}
                onChange={
                    handleSliderChange as (value: number | number[]) => void
                }
            />
            <div className={styles.rangeValues}>
                <span>{currentRange.min}</span>
                <span>{currentRange.max}</span>
            </div>
        </div>
    );
};

export { RangeSlider };
