// src/components/home/Team/Team.jsx
import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Deco Milan",
      role: "Founder",
      image: "https://via.placeholder.com/400x400",
      socials: [
        { icon: "facebook-filled", link: "#!" },
        { icon: "instagram", link: "#!" },
        { icon: "twitter-original", link: "#!" },
        { icon: "linkedin-original", link: "#!" },
      ],
    },
    {
      name: "Liza Marko",
      role: "Developer",
      image: "https://via.placeholder.com/400x400",
      socials: [
        { icon: "facebook-filled", link: "#!" },
        { icon: "instagram", link: "#!" },
        { icon: "twitter-original", link: "#!" },
        { icon: "linkedin-original", link: "#!" },
      ],
    },
    {
      name: "John Smith",
      role: "Designer",
      image: "https://via.placeholder.com/400x400",
      socials: [
        { icon: "facebook-filled", link: "#!" },
        { icon: "instagram", link: "#!" },
        { icon: "twitter-original", link: "#!" },
        { icon: "linkedin-original", link: "#!" },
      ],
    },
    {
      name: "Amion Doe",
      role: "Co-Founder",
      image: "https://via.placeholder.com/400x400",
      socials: [
        { icon: "facebook-filled", link: "#!" },
        { icon: "instagram", link: "#!" },
        { icon: "twitter-original", link: "#!" },
        { icon: "linkedin-original", link: "#!" },
      ],
    },
  ];

  return (
    <section className="team section">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Expert Team
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Meet Our Team
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-3 col-md-6 col-12 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}
              key={index}
            >
              <div className="single-team">
                <div className="team-image">
                  <img src={member.image} alt={`${member.name}`} />
                </div>
                <div className="content">
                  <h4>
                    {member.name}
                    <span>{member.role}</span>
                  </h4>
                  <ul className="social">
                    {member.socials.map((social, idx) => (
                      <li key={idx}>
                        <a
                          href={social.link}
                          aria-label={`${social.icon} link`}
                        >
                          <i className={`lni lni-${social.icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
