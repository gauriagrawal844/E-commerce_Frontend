import React from "react";  

const About = () => {

    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                {/* <title text1={'ABOUT'} text2={'US'}></title> */}
                <p className="flex flex-col text-3xl justify-center text-gray-800 mb-20 ">ABOUT US-</p>
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className='w-full md:max-w-[450px] h-80 ml-40 mb-9 mt-9'src="https://media.istockphoto.com/id/2169433004/photo/a-set-of-seasonal-autumn-or-summer-fashionable-womens-clothing-a-blue-denim-jacket-with-a.jpg?s=612x612&w=0&k=20&c=EbIQnyf5tlx3EJxz2-HPArgkQC9nh0ENhwaMEi_HNxo=" alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                <p>Trendzy was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with simple idea: to provide a platform where customers can easily discover,explore and purchase a wide raange of products from the comfort of their homes.</p>
                <p>Since our inception,we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.From fashion and beauty to electronics and home essentials, we offer an extension collection souced from trusted brands and suppliers.</p>
                <b className="  text-gray-800 ">Our Mission</b>
                <p>Our mission at trendzy is to empower customers with choices, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds, from browsing and ordering to delivery and beyond. </p>

                </div>


            </div>
            <p className="text-xl py-4 ml-40  ">WHY CHOOSE US-</p>
            <div className="flex flex-col md:flex-row text-sm mb-20 ml-40">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b className="text-2xl ">Quality Assurance:</b>
                    <p className="text-gray-600">We meticulously and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b className="text-2xl ">Convenience:</b>
                    <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 mr-20">
                    <b className="text-2xl">Exceptional Customer Service:</b>
                    <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority. </p>
                </div>

            </div>
            <p className="font-semibold text-2xl text-center my-8 text-gray-800 mb-2">Subscribe now & get 20% off</p>


            <div className="flex justify-center items-center">
                <div className="flex w-full max-w-md border border-gray-600 rounded-md overflow-hidden mb-20 ">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full px-4 py-2 focus:ring-2 focus:ring-black" 
                    />
                    <button className="bg-black text-white px-6 py-2 hover:bg-gray-600 focus:outline-none">
                        SUBSCRIBE
                    </button>
                </div>
            </div>


            
        </div>
    )
}
export default About;