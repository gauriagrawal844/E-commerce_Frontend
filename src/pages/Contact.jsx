import React from "react";

const Contact = () => { 
    return (
        <div className="px-4">
            
            <div className="text-center  text-2xl text-gray-900 pt-10 border-t mr-40 mb-7">
            <p className="font-semibold text-2xl text-center my-10 mt-2">CONTACT US -</p>
                <title text1={'CONTACT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className="w-full md:max-w-[420px]" 
                    src="https://media.istockphoto.com/id/1150218316/photo/the-woman-is-working-with-various-office-gadgets.jpg?s=612x612&w=0&k=20&c=sck1GRIK9wxpRi8oj2f8kUwo8PZgDYL5kK_Lo0l5KLI=" 
                    alt="Office Work" 
                />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-2xl text-gray-800">Our Store</p>
                    <p className="text-gray-700">54709 Willms Station <br />Suite 350, Uttar Pradesh, India</p>
                    <p className="text-gray-700">Tel: (415) 555-0132 <br/>Email: admin@Trendzy.com</p>
                    <p className="font-semibold text-2xl text-gray-800">Careers at Trendzy</p>
                    <p className="text-gray-700">Learn more about our teams and job openings.</p>
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
                        Explore Jobs
                    </button>
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
    );
};

export default Contact;

             


