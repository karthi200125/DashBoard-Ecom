export const slideUp = {
    initial: {
        y: "-100%"
    },
    open: (i) => ({
        y: "0%",
        transition: { duration: 0.7, delay: 0.07 * i }
    }),
    closed: {
        y: "-100%",
        transition: { duration: 0.5 }
    }
};