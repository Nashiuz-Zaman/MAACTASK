// header images
import tablet1 from "./../assets/home/tablet1.webp";
import phone1 from "./../assets/home/phone1.webp";

// product feature images
import centralPhone from "./../assets/home/centralphone2.webp";

export const homeBannerContent = {
  heading: "Analytics that transform your product inside-out",
  buttonsData: [
    {
      text: "Request for Demo",
      colorTheme: "primary",
      sizeTheme: "lg",
    },
    {
      text: "Download",
      colorTheme: "primary-alt",
      sizeTheme: "lg",
    },
  ],
  imagesData: {
    tablet: { imageSource: tablet1, alt: "Tablet" },
    phone: { imageSource: phone1, alt: "Phone" },
  },
};

export const productFeaturesContent = {
  secondaryHeading: "Make more out of your data",
  tertiaryHeading: "Products Features",
  imageSource: centralPhone,
  featuresA: [
    {
      heading: "Real-time analytics",
      text: "See product usage, sign-ins, feature metrics change as users work on your.",
    },
    {
      heading: "Intuitive dashboard",
      text: "See product usage, sign-ins, feature metrics change as users work on your.",
    },
    {
      heading: "Smart suggestions",
      text: "See product usage, sign-ins, feature metrics change as users work on your.",
    },
  ],
  featuresB: [
    {
      heading: "Multiple views",
      text: "See product usage, sign-ins, feature metrics change as users work on your.",
    },
    {
      heading: "AI-led diagnoses",
      text: "See product usage, sign-ins, feature metrics change as users work on your.",
    },
    {
      heading: "Responsive",
      text: "See product usage, sign-ins, feature metrics change as users work on your.",
    },
  ],
};
