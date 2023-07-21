'use client'
import { useState, useEffect } from 'react'
import 'aos/dist/aos.css';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
const breakpointColumnsObj = {
    default: 3, // Number of columns by default
    1100: 2, // Number of columns at 1100px screen width and above
    700: 1, // Number of columns at 700px screen width and above
  };
export default () => {

  const testimonials = [
      {
          avatar: "/images/Testimonial/228657280_2408291969301026_2693986771810010038_n.jpeg",
          name: "Gopi",
          title: "IT Director @ Empower",
          quote: "He is an exceptionally hardworking software engineer. With a unique blend of imagination and dedication, he brings a fresh perspective to every project. His drive and determination are off the charts, and he consistently goes above and beyond to deliver outstanding results. "
      },
      {
          avatar: "/images/Testimonial/1679623471293.jpeg",
          name: "Geetika",
          title: "Associate intern @ Jeffries",
          quote: " Mohnish is an incredibly creative individual with exceptional product design and management skills. His imaginative mindset and unique ideas make him an invaluable asset to any team he joins. I have no doubt that his future projects will be characterized by ongoing success and innovation."
      },
      {
        avatar: "/images/Testimonial/jim.jpeg",
        name: "Jim Pantaleo",
        title: "Business Development Coordinator @ AI Institute",
        quote: "Mohnish was a participant in an AIFS hackathon some months ago here at UC Davis (I was a mentor to the teams) and I was taken aback at his organization and visualization skills regarding the hack. The judges were blown away by his and his partner's app which garnered 2nd Place among some very tough competitors. My thought was, 'This young man is going places'. Watch him ascend to the highest levels of academia and AgTech. This is a bold statement but I truly believe with great people like Mohnish, our planet will be OK. I believe this. Reach out to him. Meet him. You'll agree."
    },

      {
          avatar: "/images/Testimonial/rajesh.jpeg",
          name: "Rajesh Balaraman",
          title: "Software Engineering Manager @ Google",
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
      },
    {
        avatar: "/images/Testimonial/Edward.jpeg",
        name: "Edward Chew",
        title: "Ex-President @ CodeLab",
        quote: "I worked with Mohnish in CodeLab, when he was both an Events Lead on the board and a Product Manager in the general member cohort. In both roles, he hit the ground running. Even as a first-year student, he was able to plan events with tight deadlines, navigate interpersonal challenges on his project team, and oversee a technical project with a then-limited coding background. He’s a very motivated individual and will flourish even in challenging environments."
    },

      {
        avatar: "/images/Testimonial/Screen Shot 2023-07-17 at 2.31.30 PM.png",
        name: "Caden Newton",
        title: "President @ CodeLab",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
    },
    {
        avatar: "/images/Testimonial/1686936622402.jpeg",
        name: "Kamal Raydan",
        title: "Business Consultant @ eSolutions Maximo ",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
    },

    {
      avatar: "/images/Testimonial/download.jpeg",
      name: "Prashansa Goel",
      title: "President @ Google Developers Student Club",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
  },
  ]
  
    return (
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl sm:text-center md:mx-auto">
            <h3 className="text-white text-6xl font-semibold sm:text-6xl">
              alright, a little brag
            </h3>
            <p className="mt-3 text-white">
              See what people have to say about me !!
            </p>
          </div>
          <div className="mt-12">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl my-masonry-grid_column">
                  <figure>
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.avatar}
                        className="w-16 h-16 rounded-full"
                        alt={''}
                        width={500}
                        height={500}
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      <p className="mt-6 text-gray-700">
                        {item.quote}
                      </p>
                    </blockquote>
                  </figure>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </section>
    );
  }
  