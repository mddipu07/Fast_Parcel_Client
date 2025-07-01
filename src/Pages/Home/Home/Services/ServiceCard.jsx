const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;

  return (
    <div className="card group bg-base-100 border border-base-200 shadow-md hover:shadow-xl hover:bg-primary hover:text-white transition duration-300">
      <div className="card-body items-center text-center">
        <div className="mb-4">
          <Icon className="text-4xl text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="card-title font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

