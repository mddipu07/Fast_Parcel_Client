import ServiceCard from "./ServiceCard";
import { FaShippingFast, FaGlobe, FaWarehouse, FaMoneyBillWave, FaHandshake, FaUndo } from "react-icons/fa";

const servicesData = [
  {
    icon: FaShippingFast,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: FaGlobe,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    icon: FaWarehouse,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: FaHandshake,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    icon: FaUndo,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-base-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
         <ServiceCard
         key={index}
         service={service}
         >   
         </ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
