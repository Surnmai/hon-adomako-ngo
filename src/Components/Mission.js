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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            placeat laborum voluptatum quaerat, numquam blanditiis ad
            voluptates, veniam, sit tenetur doloribus quod rerum voluptatibus
            nisi illo neque corporis doloremque perspiciatis velit. Error
            necessitatibus soluta et enim, sapiente nobis quas quo!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            obcaecati. Ratione odit doloremque accusamus ab aliquid laboriosam
            ea dolorum repudiandae culpa asperiores quo autem fuga ex
            repellendus optio in mollitia harum quae reiciendis, vero est
            reprehenderit earum praesentium! Placeat adipisci accusamus ducimus
            autem soluta vitae tempore deleniti voluptatibus totam vel minima
            impedit sunt voluptatem, quidem pariatur facilis? Adipisci vel
            assumenda nisi atque minus laboriosam excepturi quo. A, voluptatibus
            voluptatem reiciendis odit excepturi minus eveniet architecto ab vel
            asperiores odio ex repudiandae, obcaecati nam nihil soluta
            voluptates! Veritatis, harum? At praesentium recusandae
            consequuntur, asperiores iusto et similique reprehenderit facere
            quae accusantium?
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
