import React from 'react';
import Location from '../../../assets/location-merchant.png'
const BeMerchant = () => {
    return (
     <div data-aos="zoom-in-up" className="bg-no-repeat bg-[url('assets/be-a-merchant-bg.png')] rounded-4xl bg-[#03373D] p-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={Location}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6 text-white">
     We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <button className="btn btn-primary rounded-full text-black">Become A Merchant</button>
      <button className="btn btn-primary btn-outline rounded-full ms-4 text-primary">Become A Merchant</button>
    </div>
  </div>
</div>
    );
};

export default BeMerchant;