export const useFormatDate = (dateString, formatting = "long", culture) => {
    const date = new Date(dateString);

    const format =
        typeof formatting === "object"
            ? formatting
            : formatting === "short"
            ? {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
              }
            : {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
              };

    const formatter = new Intl.DateTimeFormat(culture, format);

    return formatter.format(date);
};
export const useRelativeDate = (
    dateString,
    culture = "da-DK",
    formatting = "long"
) => {
    const date = new Date(dateString);

    const formatter = new Intl.RelativeTimeFormat(culture, {
        numeric: "auto",
        style: formatting,
    });

    const DIVISIONS = [
        { amount: 60, name: "seconds" },
        { amount: 60, name: "minutes" },
        { amount: 24, name: "hours" },
        { amount: 30.5, name: "days" },
        { amount: 12, name: "months" },
        { amount: Number.POSITIVE_INFINITY, name: "years" },
    ];

    let duration = (date - new Date()) / 1000;

    for (let i = 0; i < DIVISIONS.length; i++) {
        const division = DIVISIONS[i];
        if (Math.abs(duration) < division.amount) {
            return formatter.format(Math.round(duration), division.name);
        }
        duration /= division.amount;
    }
};
