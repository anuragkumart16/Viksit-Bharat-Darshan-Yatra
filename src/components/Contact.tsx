"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-saffron font-semibold tracking-wider uppercase">Join the Movement</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mt-2 mb-6">
                            Register for the Yatra
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Be a part of this historic journey. Register now to participate in the Viksit Bharat Darshan Yatra and contribute to the nation's development story.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-saffron font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Fill the Form</h3>
                                    <p className="text-gray-600">Provide your basic details and preferences.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-saffron font-bold shrink-0">2</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Get Confirmation</h3>
                                    <p className="text-gray-600">Receive your Yatra pass and itinerary via email.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-saffron font-bold shrink-0">3</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Start Journey</h3>
                                    <p className="text-gray-600">Join us at the designated starting point.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                            >
                                Register Now <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
