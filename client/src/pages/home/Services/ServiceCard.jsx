const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-60 w-full object-cover" src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}!</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-600 text-white  hover:bg-orange-500 hover:text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;