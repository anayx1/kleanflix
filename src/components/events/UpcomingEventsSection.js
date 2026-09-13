'use client';

import React from 'react';
import Image from 'next/image';

export default function UpcomingEventsSection({ events = [] }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="main-container px-6 md:px-12">
        {/* Section Heading */}
        <h2 className="text-primary text-3xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-center mb-8 md:mb-12">
          Upcoming events
        </h2>

        {/* If no events yet */}
        {(!events || events.length === 0) ? (
          <div className="max-w-md mx-auto text-center p-8 md:p-10 rounded-2xl bg-white border border-slate-200 text-slate-500 shadow-sm">
            <p className="text-base md:text-lg font-medium text-primary-dark">
              No upcoming events scheduled at the moment.
            </p>
            <p className="text-xs md:text-sm text-slate-400 mt-1.5">
              Check back soon or submit your requirement below to connect directly with the Kleanfix team.
            </p>
          </div>
        ) : (
          /* Events 2-Column Grid matching reference design */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {events.map((event) => {
              const formattedDates = event.dates
                ? (event.dates.toLowerCase().startsWith('dates:')
                  ? event.dates
                  : `Dates: ${event.dates}`)
                : '';

              const formattedLocation = event.location
                ? (event.location.toLowerCase().startsWith('location:')
                  ? event.location
                  : `Location: ${event.location}`)
                : '';

              return (
                <div
                  key={event.id}
                  className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm group bg-slate-900"
                >
                  {/* Background Event Image */}
                  {event.featuredImage ? (
                    <Image
                      src={event.featuredImage}
                      alt={event.name || 'Upcoming event'}
                      fill
                      sizes="(max-width: 1000px) 100vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center text-slate-500">
                      <span className="text-sm font-semibold">{event.name}</span>
                    </div>
                  )}

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Text Content Overlay positioned at lower-left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end text-white z-10">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold leading-tight drop-shadow-sm text-white">
                      {event.name}
                    </h3>

                    {formattedDates && (
                      <p className="text-xs md:text-sm text-white/90 font-normal mt-1 leading-snug">
                        {formattedDates}
                      </p>
                    )}

                    {formattedLocation && (
                      <p className="text-xs md:text-sm text-white/90 font-normal mt-0.5 leading-snug">
                        {formattedLocation}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
