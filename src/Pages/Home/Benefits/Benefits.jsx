import React from 'react';
import VectorImg from '../../../assets/Benefits/Vector.png'
import IllustrationImg from '../../../assets/Benefits/Illustration.png';
import GroupImg from '../../../assets/Benefits/Group4.png';

const benefitsData = [
  {
    id: 1,
    image:IllustrationImg  ,
    title: 'Live Parcel Tracking',
    description:
      'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipments journey and get instant status updates for complete peace of mind.',
  },
  {
    id: 2,
    image: GroupImg,
    title: '100% Safe Delivery',
    description:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
  },
  {
    id: 3,
    image: VectorImg ,
    title: '24/7 Call Center Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
  },
];

const Benefits = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Benefits</h2>

      <div className="space-y-8">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6 gap-6 hover:scale-[1.02] transition-all"
          >
            {/* Left Side Image with Vertical Dashed Line */}
            <div className="relative flex-shrink-0">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full md:w-48 rounded-xl"
              />
              {/* Vertical dashed line */}
              <div className="hidden md:block absolute top-0 right-[-16px] h-full border-r-2 border-dashed border-gray-300"></div>
            </div>

            {/* Horizontal Line for Small Screens */}
            <hr className="block md:hidden w-full border-t border-gray-300" />

            {/* Right Side Content */}
            <div className="md:w-3/4 space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
