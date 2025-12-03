"use client";

import { motion } from "framer-motion";
import { Landmark, Rocket, Users, Globe } from "lucide-react";

const features = [
    {
        icon: Landmark,
        title: "Cultural Heritage",
        description: "Explore the rich traditions and timeless monuments of India.",
    },
    {
        icon: Rocket,
        title: "Modern Development",
        description: "Witness the cutting-edge infrastructure and technological advancements.",
    },
    {
        icon: Users,
        title: "People's Participation",
        description: "See how Jan Bhagidari is shaping the future of the nation.",
    },
    {
        icon: Globe,
        title: "Global Standing",
        description: "Understand India's rising influence on the world stage.",
    },
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
                        About the Yatra
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The Viksit Bharat Darshan Yatra is a nationwide journey celebrating India's progress.
                        It connects citizens with the vision of a developed India by 2047.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors border border-gray-100 hover:border-orange-100 group"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-saffron group-hover:text-white transition-colors">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
