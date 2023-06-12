import React from "react";

const about = () => {
  return (
    <div className="bg-white bg-opacity-20 shadow-md p-6 rounded-3xl mt-5">
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg p-4">
        <div style={{ marginBottom: "12px" }}>
          I used Next.js, Tailwind CSS, and Firebase. While the focus was
          primarily on understanding and implementing the core functionalities
          of these technologies, I acknowledge that the visual appeal of the app
          may be modest.
        </div>
        <div style={{ marginBottom: "12px" }}>
          Throughout the development process, my main goal was to grasp the
          concepts of components, routing, layout, data fetching, server/client
          components, and suspense. This allowed me to build a solid foundation
          for future exploration and improvement in terms of styling and design.
        </div>
        <div style={{ marginBottom: "12px" }}>
          Although the app's aesthetics are simple, it successfully showcases
          the integration of Firebase for data fetching and submission.
          Additionally, I implemented suspense to enhance the loading experience
          and leveraged dynamic routing to create personalized content for
          users. Notably, the app also supports photo uploads, allowing users to
          include images as part of their data.
        </div>
        <div style={{ marginBottom: "12px" }}>
          While I recognize that there is room for improvement in terms of
          visual appeal, this project has provided me with valuable hands-on
          experience and a deeper understanding of these technologies. It has
          paved the way for me to continue exploring and refining my skills in
          designing more visually appealing and feature-rich web applications.
        </div>
        <div style={{ marginBottom: "12px" }}>
          I am grateful for the opportunity to work on this project and look
          forward to leveraging my newfound knowledge in future endeavors. --BIT
        </div>
      </div>
    </div>
  );
};

export default about;
