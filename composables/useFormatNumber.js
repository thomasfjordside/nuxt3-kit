export const useFormatNumber = (number, culture = "da-DK", settings = {}) => {
    const formattedNumber = new Intl.NumberFormat(culture, settings).format(
        number
    );
    return formattedNumber;
};
