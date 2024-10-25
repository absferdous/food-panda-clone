import { cities } from "../../../../../utils/data";

export const footerSeoBlock = [
  "Myanmar",
  "Laos ",
  "Hong Kong ",
  "Pakistan",
  "Singapore ",
  "Malaysia",
  "Philippines",
  "Thailand",
  "Taiwan",
  "Cambodia",
];

export const footerContactLink = [
  "Help Center",
  "Terms and Conditions",
  "Privacy Policy",
  "Refund Account Terms and Conditions",
  "Cashback Program",
  "pandapro Subscription",
  "Dine-in",
  "Partner with Us",
  "Download foodpanda Apps",
  "Careers",
  "foodpanda for Business",
  "pandago for business",
  "pandago for customers",
  "foodpanda Deals",
  "Grocery delivery",
  "Become an Affiliate",
  "All cities",
  "Ramadan delivery",
];

export const footerCities = cities.map((city) => (
  <p>Areas delivered in {city.name}</p>
));
