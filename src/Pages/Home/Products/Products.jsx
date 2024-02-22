import img1 from '../../../assets/images/products/1.png';
import img2 from '../../../assets/images/products/2.png';
import img3 from '../../../assets/images/products/3.png';
import img4 from '../../../assets/images/products/4.png';
import img5 from '../../../assets/images/products/5.png';
import img6 from '../../../assets/images/products/6.png';

const Products = () => {
    return (
        <div className="">
            <div className="w-1/2 mx-auto text-center mb-12">
                <p className="font-bold text-xl text-[#ff3811]">Popular Products</p>
                <h3 className="text-5xl font-bold text-black my-5">Browse Our Products</h3>
                <p className="text-base text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 mb-5">
                        <img src={img1} alt="Shoes" className="rounded-xl h-[215px] w-[328px]" />
                    </figure>
                    <div className="rating w-[120px] mx-auto mb-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                    </div>
                    <div className="card-body items-center text-center py-0 mb-7">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl font-semibold text-[#ff3811]'>$20.00</p>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 mb-5">
                        <img src={img2} alt="Services" className="rounded-xl h-[215px] w-[328px]" />
                    </figure>
                    <div className="rating w-[120px] mx-auto mb-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                    </div>
                    <div className="card-body items-center text-center py-0 mb-7">
                        <h2 className="card-title text-2xl font-bold">Car Air Filter</h2>
                        <p className='text-xl font-semibold text-[#ff3811]'>$20.00</p>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 mb-5">
                        <img src={img3} alt="Services" className="rounded-xl h-[215px] w-[328px]" />
                    </figure>
                    <div className="rating w-[120px] mx-auto mb-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                    </div>
                    <div className="card-body items-center text-center py-0 mb-7">
                        <h2 className="card-title text-2xl font-bold">Cools Led Light</h2>
                        <p className='text-xl font-semibold text-[#ff3811]'>$20.00</p>
                    </div>
                </div>




                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 mb-5">
                        <img src={img4} alt="Services" className="rounded-xl h-[215px] w-[328px]" />
                    </figure>
                    <div className="rating w-[120px] mx-auto mb-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                    </div>
                    <div className="card-body items-center text-center py-0 mb-7">
                        <h2 className="card-title text-2xl font-bold">Cools Led Light</h2>
                        <p className='text-xl font-semibold text-[#ff3811]'>$20.00</p>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 mb-5">
                        <img src={img5} alt="Services" className="rounded-xl h-[215px] w-[328px]" />
                    </figure>
                    <div className="rating w-[120px] mx-auto mb-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                    </div>
                    <div className="card-body items-center text-center py-0 mb-7">
                        <h2 className="card-title text-2xl font-bold">Cools Led Light</h2>
                        <p className='text-xl font-semibold text-[#ff3811]'>$20.00</p>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 mb-5">
                        <img src={img6} alt="Services" className="rounded-xl h-[215px] w-[328px]" />
                    </figure>
                    <div className="rating w-[120px] mx-auto mb-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ff912c]" />
                    </div>
                    <div className="card-body items-center text-center py-0 mb-7">
                        <h2 className="card-title text-2xl font-bold">Cools Led Light</h2>
                        <p className='text-xl font-semibold text-[#ff3811]'>$20.00</p>
                    </div>
                </div>
            </div>

            <div className="flex align-middle mb-32">
                <button className="btn btn-outline btn-error mx-auto">More Products</button>
            </div>


        </div>
    );
};

export default Products;