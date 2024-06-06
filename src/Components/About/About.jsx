import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About MoodCheckIn
                        </h2>
                        <h1>It's a platform created by Vimal Mudalagi, aimed at helping you monitor and enhance your emotional well-being.</h1>
                        <p className="mt-6 text-gray-600">
                            At MoodCheckIn, we understand the importance of mental health and the impact it has on our daily lives. Through our intuitive interface, users can effortlessly track their mood fluctuations, identify patterns, and gain valuable insights into their emotional states over time.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Join Vimal Mudalagi and the MoodCheckIn community today to embark on a journey of self-discovery, personal growth, and emotional empowerment!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}