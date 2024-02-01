// header images
import tablet1 from "./../assets/home/tablet1.webp";
import phone1 from "./../assets/home/phone1.webp";

// product feature images
import centralPhone from "./../assets/home/centralphone2.webp";

// about us images
import avg from "./../assets/home/aboutus/avg.webp";
import ceo from "./../assets/home/aboutus/ceo.png";
import dotpattern from "./../assets/home/aboutus/dotpattern.webp";
import preorder from "./../assets/home/aboutus/preorder.webp";
import topselling from "./../assets/home/aboutus/topselling.webp";
import devices from "./../assets/home/aboutus/icons/monitor-mobile.png";
import people from "./../assets/home/aboutus/icons/people.png";
import user from "./../assets/home/aboutus/icons/user.png";
import cup from "./../assets/home/aboutus/icons/cup.png";

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
  operationsData: [
    {
      imageSource: devices,
      numberInfo: "10+",
      description: "Platforms Created",
    },
    {
      imageSource: people,
      numberInfo: "1559+",
      description: "Total Users",
    },
    {
      imageSource: user,
      numberInfo: "10+",
      description: "Total Clients",
    },
    {
      imageSource: cup,
      numberInfo: "300 Days",
      description: "In Operations",
    },
  ],
};

export const frequentlyAskedContent = [
  {
    id: 0,
    question: "What kind of data can I see in FieldX?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
  },
  {
    id: 1,
    question: "How do you take payments?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
  },
  {
    id: 2,
    question: "Does Bizzy read my customers' data?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
  },
  {
    id: 3,
    question: "Can I also track website analytics on fieldX?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
  },
  {
    id: 4,
    question: "What's your refund and cancellation policy?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
  },
  {
    id: 5,
    question: "What makes Bizzy different from other analytics tools?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
  },
];
