export const pageAnimation = {
  initial: {
    opacity: 0,
    y: '50vh',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    y: '-50vh',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
export const formAnimation = {
  initial: {
    opacity: 0,
    x: '-30vh',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'backOut',
    },
  },
};
export const articlesParentAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export const articlesAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};
export const articleAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'backInOut',
    },
  },
};
