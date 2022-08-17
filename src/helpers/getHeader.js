export const getHeader = (step) => {
  switch (step) {
    case 1:
      return [
        {
          heading: "Welcome! First thing First...",
          subHeading: "You can always change them later.",
        },
      ];

    case 2:
      return [
        {
          heading: "Let's set up a home for all your work",
          subHeading: "Let's set up a home for all your work",
        },
      ];

    case 3:
      return [
        {
          heading: "How are you planning to use Eden",
          subHeading: "We'll streamline your setup experience accordingly",
        },
      ];

    case 4:
      return [
        {
          heading: "Congratulations,",
          subHeading:
            "You have completed onboarding, you can start using the Eden! ",
        },
      ];

    default:
      break;
  }
};
