"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src="https://pixabay.com/videos/man-stairs-walk-hike-travel-152203/"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-100/20 text-saffron font-semibold text-sm mb-6 border border-orange-200/30 backdrop-blur-sm">
                        #ViksitBharat2047
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        Viksit Bharat <br />
                        <span className="text-saffron drop-shadow-md">Darshan Yatra</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        Embark on a journey to witness the transformation of India.
                        Experience the development, culture, and heritage of a rising nation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-saffron text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border border-transparent">
                            Join the Yatra <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-20"></div>
        </section>
    );
};

export default Hero;
