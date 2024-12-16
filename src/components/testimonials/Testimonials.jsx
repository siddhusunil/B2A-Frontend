import React from 'react';
import './testimonials.css';

const Testimonials = () => {
    const testimonialsData = [
        {
          id: 1,
          name: "Teja Naik",
          position: "Student",
          message:
            "This platform has transformed the way I learn! The variety of subjects keeps me engaged and motivated.",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        },
        {
          id: 2,
          name: "Siddhu",
          position: "Student",
          message:
            "The courses are well-structured and easy to follow. I learned so much in just a few weeks!",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id: 3,
          name: "Lokesh",
          position: "Student",
          message:
            "Great resource for professional development! The practical skills I gained have already helped me in my job.",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        },
        {
          id: 4,
          name: "Sunil",
          position: "Student",
          message:
            "I love the flexibility of learning at my own pace. The instructors are knowledgeable and supportive.",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
      ];
  return (
    <section className="testimonials">
        <h2>What our students say</h2>
        <div className="testimonials-cards">
            {
                testimonialsData.map((e)=>(
                    <div className="testimonials-card" key={e.id}>
                        <div className="student-image">
                            <img src={e.image} alt="" />
                        </div>
                        <p className="message">{e.message}</p>
                        <div className="info">
                            <p className="name">{e.name}</p>
                            <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Testimonials