"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ReviewType {
  name: string;
  review: string;
  rating: number;
}

const ListOfReviews: ReviewType[] = [
  {
    name: "Alice Johnson",
    review: "Excellent service! The frontend was responsive and smooth. Would highly recommend.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    review: "Backend API was efficient and well-documented. My project was delivered on time.",
    rating: 4,
  },
  {
    name: "Emma Brown",
    review: "Great work with React and TailwindCSS. The project exceeded expectations!",
    rating: 5,
  },
  // Add more reviews as needed...
];

const Reviews: React.FC = () => {
  return (
    <div className="p-6 b m-5">
      <h2 className="text-3xl font-bold text-center  text-black font-serif mb-7">Client Reviews</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {ListOfReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">{review.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{review.review}</p>
              <div className="flex justify-center text-yellow-500">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
