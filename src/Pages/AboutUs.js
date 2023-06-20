import React from "react";

// import image
import About from "../images/about.jpg";

// import components
import TopBanner from "../Components/Global/TopBanner";
import ObjectiveCard from "../Components/Global/ObjectiveCard";
import BulletContent from "../Components/Global/BulletContent";
import OurTeam from "../Components/OurTeam";
import DataWithTittle from "../Components/Global/DataWithTittle";

// import objects
import { textWithTittle, bulletText } from "../data";

const AboutUs = () => {
  return (
    <>
      <TopBanner img={About} title="About Us" text="Who we are?" />
      <section className="about-us">
        {textWithTittle.map((content, index) => {
          return <DataWithTittle key={index} {...content} />;
        })}

        {bulletText.map((bullets, index) => {
          return <BulletContent key={index} {...bullets} />;
        })}
      </section>
      {/* <Content
        // title="AIPERD is an African-managed and African-owned non-governmental, non-religious, development-focused organization, with the aim to enhance Africa’s socio-economic development, through evidence-based policy making and capacity building. We are committed to supporting evidence-driven research"
        text="The African Institute for Policy Evaluation Research and Development (AIPERD) is an independent non-profit think tank based in Ghana. It focuses on policy advice, advocacy, and training to build capacity in developing countries, relying on cutting-edge research. AIPERD develops partnerships and linkages with research organizations and development partners, conducts research, provides professional and competent policy analysis, advice, and advocacy to enhance capacity building in the areas of education, health, environment, entrepreneurship, and governance. Additionally, the institution offers advisory services and expertise in macroeconomic fiscal policy management. Its team of experts possesses diverse competencies spanning business, finance, banking, economics, public policy, and law."
      /> */}
      {/* <Content
        title="Mission"
        text="Becoming   a leading African organization providing cutting-edge policy research, evaluation and training, that promote Africa’s socio-economic development. "
      /> */}
      {/* <Content
        title="Vission"
        text="Advocating excellence in research to ensure socio-economic transformation  and development of in Africa."
      /> */}
      {/* <BulletContent title="The objectives of AIPERD are:" text={bulletData1} />
      <BulletContent
        title="As an organization, AIPERD is guided by:"
        text={bulletData2}
      /> */}
      {/* <Content
        title="Partnership:"
        text="AIPERD builds partnerships with diverse stakeholders, public and private institutions, as well as non-governmental organizations. Our delivery partners, professionals and consultants ensure timely execution of tasks,   with a common purpose of ensuring professionalism integrity."
      /> */}
      {/* <Content
        title="Centers:"
        text="AIPERD operates the following Centers:

        Center for Economic and Social Research. The Center conducts research on issues including, but not limited to, applied macro and micro economics and social trends. This unit focuses on issues relating to education, labour, health, environment, and gender.
        
        Center for Training and Development: The Center engages in relevant training and capacity building for individuals and organizations,  focusing on public policy research and advocacy, monitoring and evaluation, and project management.
        Center for Advocacy and Financial Mobilization: Advocating for policy reforms and mobilizing financial and relevant resources remain the focus of this center.  
        "
      /> */}
      <OurTeam />
    </>
  );
};

export default AboutUs;
