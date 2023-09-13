import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    const buttons = <>

    </>
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute flex items-center h-full pl-8 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alteration in some forms</p>
                        <div>
                            <button className="btn bg-orange-600 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline border border-2 border-orange-600 text-white hover:bg-orange-500 hover:text-white">Latest Projects</button>
                        </div>

                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide4" className="btn btn-circle mr-5 hover:bg-orange-600">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full pl-8 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alteration in some forms</p>
                        <div className=''>
                            <button className="btn bg-orange-600 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline border border-2 border-orange-600 text-white">Latest Projects</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide1" className="btn btn-circle mr-5 hover:bg-orange-600">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full pl-8 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alteration in some forms</p>
                        <div>
                            <button className="btn bg-orange-600 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline border border-2 border-orange-600 text-white">Latest Projects</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide2" className="btn btn-circle mr-5 hover:bg-orange-600">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full pl-8 rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2'>
                        <h2 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alteration in some forms</p>
                        <div>
                            <button className="btn bg-orange-600 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline border border-2 border-orange-600 text-white">Latest Projects</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide3" className="btn btn-circle hover:bg-orange-600 mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-orange-600 ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;