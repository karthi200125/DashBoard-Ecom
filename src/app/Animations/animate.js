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

// menu bar animations comes from bottom left
export const perspective = {
    initial: {
        opacity: 0,
        translateY: 80,
        translateX: -20,
        rotateX: 90
    },
    enter: (i) => ({
        opacity: 1,
        translateY: 0,
        rotateX: 0,
        translateX: 0,
        transition: {
            delay: 0.5 + (i * 0.1),
            opacity: { duration: 0.35 },
            duration: 0.65,
            ease: [.255, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0
    }
};

