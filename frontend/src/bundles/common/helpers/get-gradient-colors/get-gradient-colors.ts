const getGradientColors = (gradientString: string): string[] => {
    const colorStrings: string[] = gradientString
        .split(',')
        .map((part: string) => part.trim());
    const colors: string[] = [];

    for (let index = 1; index < colorStrings.length; index++) {
        const colorString: string = colorStrings[index];
        if (colorString.startsWith('#')) {
            colors.push(colorString.slice(0, 7));
            if (colors.length === 2) {
                break;
            }
        }
    }

    return colors;
};

export { getGradientColors };
