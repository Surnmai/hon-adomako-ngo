import React from "react";

// import image
import MissionImg from "../images/mission.jpg";

const Mission = () => {
  return (
    <>
      <section className="mission">
        <div className="content">
          <h3 className="title">Our mission & vision</h3>

          <p>
            AIPERD is an African-owned and managed think tank operating at the
            intersection of research, policy, and practice, providing advice,
            insights, and expertise to address development challenges. Through
            evidence-based analysis, capacity building, and goal-directed
            initiatives, they foster innovation and inform policymaking for
            sustainable development in developing nations.
          </p>
          <p>
            AIPERD's vision is to advocate excellence in evidence-based research
            for Africa's socio-economic transformation and development,
            empowering African institutions through innovative ideas and local
            talent augmentation. Our mission is to be a leading African
            organization providing cutting-edge policy research, evaluation, and
            training, promoting socio-economic development through
            evidence-based research, policy analysis, and advocacy. AIPERD
            serves as a catalyst for sustainable and empowered African
            development through research, capacity building, and fostering
            networks of leaders.
          </p>
        </div>
        <div className="image">
          <img src={MissionImg} alt="mission-img" />
        </div>
      </section>
    </>
  );
};

export default Mission;
