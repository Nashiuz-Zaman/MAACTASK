// header images
import tablet1 from "./../assets/home/tablet1.webp";
import phone1 from "./../assets/home/phone1.webp";

// product feature images
import centralPhone from "./../assets/home/centralphone2.webp";

// about us images
import avg from "./../assets/home/aboutus/avg.webp";
import ceo from "./../assets/home/aboutus/ceo.webp";
import dotpattern from "./../assets/home/aboutus/dotpattern.webp";
import preorder from "./../assets/home/aboutus/preorder.webp";
import topselling from "./../assets/home/aboutus/topselling.webp";

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

export const aboutUsContent = {
  textContent: {
    tertiaryHeading: "About Us",
    secondaryHeading: "A dedicated solution for startups and enterprises",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ceoInfo: {
      imageSource: ceo,
      description: "Fieldx is for teams that care about their product growth.",
      designation: "CEO, FieldX",
    },
  },
  imagesData: {
    topselling: {
      imageSource: topselling,
      alt: "Top selling",
    },
    preorder: {
      imageSource: preorder,
      alt: "Pre order",
    },
    avg: {
      imageSource: avg,
      alt: "Average",
    },
    dotpattern: {
      imageSource: dotpattern,
      alt: "Dot pattern",
    },
  },
};
