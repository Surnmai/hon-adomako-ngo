// import icons
import { FaRegClock } from "react-icons/fa";

// import images
import Project1 from "./images/project1.jpg";
import Project2 from "./images/project2.jpg";
import Project3 from "./images/project3.jpg";
import Project4 from "./images/project4.jpg";
import Project5 from "./images/project5.jpg";
// import Project6 from "./images/project6.jpg";
// import Project7 from "./images/project7.jpg";
// import Project8 from "./images/project8.jpg";
// import Project9 from "./images/project9.jpg";

import OurTeam1 from "./images/ourteam1.jpg";
import OurTeam2 from "./images/ourteam2.jpg";
import OurTeam3 from "./images/ourteam3.jpg";
import OurTeam4 from "./images/ourteam4.jpg";

export const navLinks = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/about",
    text: "about us",
  },
  {
    path: "/ourteam",
    text: "our team",
  },
  {
    // our research
    path: "/research",
    text: "research",
  },
  // {
  //   path: "/blogs",
  //   text: "blogs",
  // },
  {
    path: "/contact",
    text: "contact",
  },
];

export const recentProjects = [
  {
    id: "1",
    image: Project1,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "Healthcare Access",
    text: "AIPERD prioritizes equitable access to healthcare, aiming to reduce maternal and child health inequities among rural, uneducated, and disabled populations in developing nations. Their research and advocacy focus on improving health insurance coverage and addressing demographic disparities in antenatal and skilled care, especially for rural pregnant women.",
    readMore: "read more",
    detailedText:
      "In developing nations, inequities in maternal and child health interventions persist, disproportionately affecting marginalized groups such as those in rural areas, with limited education, and living with disabilities. AIPERD is committed to promoting equitable access to healthcare, recognizing the critical role of health insurance coverage for women with disabilities in reducing high maternal mortality rates. Ensuring equity and improving access to healthcare resources remain key priorities in our research and public advocacy efforts. At AIPERD, we actively engage in research and advocacy initiatives that specifically address demographic disparities in early antenatal care and access to skilled care, particularly for pregnant women residing in rural areas. We aim to identify barriers and develop evidence-based solutions to enhance healthcare access and quality, ultimately contributing to improved maternal and child health outcomes. By collaborating with stakeholders, policymakers, and local communities, we strive to foster partnerships that facilitate the implementation of inclusive healthcare policies and programs. We believe in the power of knowledge exchange and capacity building to drive sustainable change in healthcare systems. Through our work, we aim to empower individuals and communities, advocate for policy reforms, and create a more equitable healthcare landscape that ensures every woman and child can access the care they need for a healthier future.",
    desc: "first",
  },
  {
    id: "2",
    image: Project2,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "Environment and Sanitation",
    text: "AIPERD recognizes the crucial link between environmental protection, public health, and sustainable development. Through research, AIPERD addresses sanitation and food safety challenges in developing nations to promote human health, productivity, and welfare by advocating for sound environmental management.",

    readMore: "read more",
    detailedText:
      "The protection of the environment is a key component of achieving sustainable development as it has a direct impact on public health. AIPERD recognizes this crucial nexus between proper environmental management and the well-being of communities. As part of our efforts, we undertake comprehensive research to address critical issues related to sanitation and food safety in developing nations.In these countries, numerous factors pose challenges to maintaining a clean, safe, and pleasant physical environment. Through our research initiatives, AIPERD identifies these factors, analyzes their impacts, and develops evidence-based solutions to address them effectively. By focusing on sanitation and food safety, we aim to improve public health outcomes and enhance the overall quality of life for individuals and communities.AIPERD's overarching objective is to promote human health, productivity, and welfare by advocating for sound environmental management practices. This entails raising awareness about the importance of environmental protection and fostering behavior changes that lead to sustainable practices. We work closely with local stakeholders, policymakers, and communities to facilitate the adoption of environmentally friendly policies, strategies, and technologies.Furthermore, AIPERD recognizes the interdependence of environmental, social, and economic factors. In our research and advocacy efforts, we aim to strike a balance between environmental conservation and socio-economic development. This includes promoting sustainable livelihoods, supporting eco-friendly business practices, and encouraging the responsible use of natural resources.Through our commitment to sound environmental management, AIPERD strives to create a healthier and more sustainable future for all. By addressing sanitation and food safety challenges, we contribute to improved public health outcomes, enhanced productivity, and the overall well-being of communities in developing nations.",
    desc: "first",
  },
  {
    id: "3",
    image: Project3,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "Education ",
    text: "AIPERD addresses the development challenge of education by advocating for free education, expanding access for disadvantaged communities, and promoting equity in education infrastructure. Their commitment is grounded in the UN Sustainable Development Goals for quality and equitable primary and secondary education.",
    readMore: "read more",
    detailedText:
      "Access to education poses a significant development challenge for nations, as it directly impacts resource distribution and the development of human capacity. AIPERD recognizes this crucial issue and actively engages in education-related activities and advocacy.One of the key focuses of AIPERD is the elimination of costs associated with public education, aiming to make education more accessible for disadvantaged communities and marginalized groups. By advocating for policies that promote equity in education infrastructure, AIPERD strives to ensure that all individuals have equal opportunities to acquire the necessary skills for socio-economic transformation.AIPERD's commitment to addressing education challenges is firmly grounded in the United Nations Sustainable Development Goals (SDGs). These goals emphasize the importance of free, equitable, and quality primary and secondary education that leads to relevant and effective learning outcomes. AIPERD aligns its efforts with these global objectives, seeking to create an educational landscape that fosters inclusivity and provides equal opportunities for all.Furthermore, AIPERD recognizes that education is not only crucial for individual development but also plays a vital role in the overall progress of societies. By advocating for equitable access to education and the provision of requisite skills, AIPERD aims to contribute to socio-economic transformation at both the individual and community levels.Through research, advocacy, and collaboration with stakeholders, AIPERD works towards the goal of building an education system that empowers individuals, bridges disparities, and enables sustainable development. By addressing the challenges of access, equity, and quality in education, AIPERD strives to create a more equitable and prosperous future for nations and their communities.",
    desc: "first",
  },
  {
    id: "4",
    image: Project4,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "STEM Education",
    text: "AIPERD promotes STEM education to foster innovation and skill-building in science and mathematics. Their public education agenda focuses on enhancing teacher skills in STEM subjects, advocating for gender diversity in STEM, and supporting the advancement of the aged and disabled.",
    readMore: "read more",
    detailedText:
      "AIPERD recognizes the significance of STEM education as a vital tool for fostering innovation, invention, and skill development, particularly in the fields of science and mathematics. To advance this agenda, AIPERD actively promotes a public education framework that strengthens the skills of teachers, providing them with additional training and support in STEM subjects.By enhancing the capabilities of teachers in science, technology, engineering, and mathematics, AIPERD aims to ensure that students receive high-quality education in these critical areas. Through targeted professional development programs, AIPERD equips teachers with the necessary knowledge, resources, and pedagogical approaches to effectively engage students in STEM learning.Moreover, AIPERD places a strong emphasis on advocating for gender diversity in STEM fields. Recognizing the underrepresentation of women in these disciplines, AIPERD supports initiatives that encourage girls and women to pursue STEM education and careers. By breaking down gender barriers and creating inclusive environments, AIPERD strives to unlock the full potential of talent and innovation.Additionally, AIPERD acknowledges the importance of supporting the advancement of individuals from underrepresented groups, including the aged and disabled, in STEM fields. Through tailored programs and initiatives, AIPERD seeks to provide equal opportunities for these individuals to excel and contribute to the STEM workforce. By embracing diverse perspectives and talents, AIPERD fosters an inclusive STEM community that leverages the full range of human potential.In summary, AIPERD's commitment to promoting STEM education is multifaceted, encompassing teacher skill enhancement, gender diversity advocacy, and support for underrepresented groups. Through these efforts, AIPERD strives to cultivate a generation of innovators, problem solvers, and critical thinkers who are equipped with the knowledge and skills needed to thrive in the fields of science, technology, engineering, and mathematics.",
    desc: "second",
  },
  {
    id: "5",
    image: Project5,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "Agro-Business",
    text: "AIPERD emphasizes the role of government policies and external assistance in addressing challenges within the agro-business industry, recognizing its potential for driving structural transformation in the economies of developing nations.",
    readMore: "read more",
    detailedText:
      "The agro-business industry holds significant potential for driving the structural transformation of developing economies. AIPERD places great importance on recognizing the crucial role of government policies and external assistance in effectively addressing the challenges encountered within this sector.AIPERD understands that the agro-business industry, which encompasses agricultural production, processing, and marketing, plays a pivotal role in fostering economic growth, reducing poverty, and promoting food security. However, it also recognizes that the sector faces various challenges, including limited access to capital, inadequate infrastructure, market inefficiencies, and climate change impacts.To overcome these challenges, AIPERD advocates for the formulation and implementation of effective government policies that create an enabling environment for agro-business development. This includes measures such as improving access to finance and credit facilities for smallholder farmers, investing in rural infrastructure, enhancing market linkages, and supporting research and development initiatives in agriculture.Furthermore, AIPERD underscores the significance of external assistance in complementing government efforts and strengthening the agro-business sector. Collaborating with development partners, international organizations, and investors, AIPERD seeks to leverage resources, expertise, and technology transfer to bolster the industry. This assistance can come in the form of financial aid, technical support, capacity building programs, and knowledge sharing platforms.By emphasizing the importance of government policies and external assistance, AIPERD aims to foster an enabling environment that promotes sustainable growth and development within the agro-business industry. Through research, policy analysis, and advocacy, AIPERD strives to contribute to the realization of the full potential of the sector, creating opportunities for job creation, income generation, and enhanced livelihoods for communities in developing nations.Ultimately, AIPERD envisions the agro-business industry as a catalyst for economic transformation, driving inclusive and sustainable development in developing nations and contributing to global food security. ",
    desc: "second",
  },
];

export const ourteam = [
  {
    image: OurTeam1,
    name: "hon. Dr. Adomako Mensah",
    title: "President",
    text: " A dedicated Member of Parliament for Sekyere Afram Plains, with a strong background in banking, extensive expertise in financial services research, and a notable role in shaping policies through active participation in parliamentary committees and influential think tanks, making him a knowledgeable and influential figure in shaping evidence-based policies for financial services and related sectors.",
  },
  {
    image: OurTeam2,
    name: "Professor Charles O. Kwarteng",
    title: "Researcher",
    text: "An accomplished researcher and academic with expertise in public and international affairs, European cooperation's impact on ACP nations, and organizational theory, who has published influential books and articles, held key academic positions, mentored researchers, and actively contributed to community development.",
  },
  {
    image: OurTeam3,
    name: "Mr. Samuel Quarshigah Ayitey",
    title: "Researcher",
    text: "Samuel Quarshigah Ayitey is a versatile business consultant and advisor with extensive expertise in various fields, including investment banking, SME advisory services, real estate, construction management, healthcare, sustainable business development, corporate restructuring, and private sector development, holding multiple MBA degrees in finance and being a Chartered Banker.",
  },
];

// have to creat an object for our team page with four contents
export const ourteamAll = [
  {
    image: OurTeam1,
    name: "hon. Dr. Adomako Mensah",
    title: "President",
    text: " A dedicated Member of Parliament for Sekyere Afram Plains, with a strong background in banking, extensive expertise in financial services research, and a notable role in shaping policies through active participation in parliamentary committees and influential think tanks, making him a knowledgeable and influential figure in shaping evidence-based policies for financial services and related sectors.",
  },
  {
    image: OurTeam2,
    name: "Professor Charles O. Kwarteng",
    title: "Researcher",
    text: "An accomplished researcher and academic with expertise in public and international affairs, European cooperation's impact on ACP nations, and organizational theory, who has published influential books and articles, held key academic positions, mentored researchers, and actively contributed to community development.",
  },
  {
    image: OurTeam3,
    name: "Mr. Samuel Quarshigah Ayitey",
    title: "Researcher",
    text: "Samuel Quarshigah Ayitey is a versatile business consultant and advisor with extensive expertise in various fields, including investment banking, SME advisory services, real estate, construction management, healthcare, sustainable business development, corporate restructuring, and private sector development, holding multiple MBA degrees in finance and being a Chartered Banker.",
  },
  {
    image: OurTeam4,
    name: "Rosinah Simah Agyapomaa",
    title: "Project Coordniator",
    text: "A philanthropist with a degree in the study of religions, who has worked in various roles including marketing, production management, and operations, and has a passion for economic empowerment, particularly for women and persons with disabilities.",
  },
];

// export const bulletData1 = [
//   {
//     text: "To undertake relevant research that would enhance development and transformation of Africa",
//   },
//   {
//     text: "To engage in national and international development-oriented advocacy",
//   },
//   {
//     text: "To write, issue, and publish development-oriented reports, articles, books, and policy position papers.",
//   },
//   {
//     text: "To educate the public about important economic and social issues",
//   },
//   {
//     text: "To champion policy reforms that enhance the economic development of Africa",
//   },
// ];

// export const bulletData2 = [
//   {
//     text: "Transparency and openness in dealing with the public",
//   },
//   {
//     text: "Ethical Responsibility as a guiding principle in conducting activities",
//   },
//   {
//     text: "Excellence and Professionalism",
//   },
// ];

export const textWithTittle = [
  {
    tittle:
      "African Institute For Policy Evaluation Research And Development (AIPERD)",
    text: "The African Institute for Policy Evaluation Research and Development (AIPERD) is an independent non-profit think tank based in Ghana. It focuses on policy advice, advocacy, and training to build capacity in developing countries, relying on cutting-edge research. AIPERD develops partnerships and linkages with research organizations and development partners, conducts research, provides professional and competent policy analysis, advice, and advocacy to enhance capacity building in the areas of education, health, environment, entrepreneurship, and governance. Additionally, the institution offers advisory services and expertise in macroeconomic fiscal policy management. Its team of experts possesses diverse competencies spanning business, finance, banking, economics, public policy, and law.",
  },
  {
    tittle: "Partnerships",
    text: "We actively partner with stakeholders and provide assistance to institutions, organizations, and policy makers across a wide range of policies. Our aim is to share expertise and knowledge with like-minded organizations, fostering capacity building. In line with our commitment to inclusiveness, we collaborate with partners to drive positive developmental changes in critical areas such as education, health, environment, and population issues. We advocate for policies that promote inclusiveness in education, health, and equitable sharing of environmental resources. Through our partnerships with small and medium-sized enterprises, we support communities in developing local capacity and provide expertise and resources that transcend regions and communities. We believe that this strategy facilitates trade and socio-economic interactions among communities in developing nations. Our delivery partners, professionals, and consultants ensure timely execution of tasks, driven by professionalism and integrity. By leveraging our partnerships, we harness the talents of individuals with innovative ideas to ensure successful task execution.",
  },
  {
    tittle: "About Us",
    text: "AIPERD is an African-owned and managed non-governmental, non-profit think tank that provides advice, insights, and professional expertise to policy makers, institutions, philanthropists, and stakeholders in addressing development challenges. Operating at the nexus of research, policy, and practice, we believe this approach fosters innovation through evidence-based analysis, promoting capacity building in developing nations. We prioritize goal-directed development initiatives informed by rigorous research and analysis. Our team consists of specialists and professionals with experience engaging with high-level policy makers and leaders in academic and educational institutions. They possess extensive global experience and have published groundbreaking research articles in reputable media, which significantly enhances AIPERD's credibility.",
  },
  {
    tittle: "Vission",
    text: "AIPERD's vision is founded on advocating excellence in evidence-based research to foster the socio-economic transformation and development of Africa. We envision an empowered African institution capable of harnessing innovative ideas to enhance local skills and talents for sustainable development.",
  },
  {
    tittle: "Mission",
    text: "Our mission is to become a leading African organization providing cutting-edge policy research, evaluation and training that promote Africa’s socio-economic development. We conduct evidence-based research, engage in policy analysis in support of building essential local capacity, and advocacy, to ensure efficient utilization of innovative ideas. AIPERD WOULD CONTINUE TO BE A CATALYST FOR SUSTAINABLE AND EMPOWERED AFRICAN DEVELOPMENT, THROUGH THREE ESSENTIAL PATHS: EVIDENCE-BASED RESEARCH, POLICY ADVICE, AND ADVOCACY.To this end, AIPERD undertakes innovative research into relevant policy issues, and analyze trends that facilitate training, education and advocacy on key development issues.  We provide innovative insights into trends that impact development. We build network of leaders to ensure capacity building.",
  },
  {
    tittle: "Objectives",
    text: "AIPERD is anchored on robust research and analysis that are grounded in local realities. The organization is based on core objectives, which serve as guiding principles to help us address the challenges of development in Africa.",
  },
];

export const objectiveData = [
  {
    bold: "The objectives of AIPERD are:",
    text1:
      "To undertake relevant research that would enhance the socio-economic transformation of developing nations.",
    text2:
      "To engage in national and international development-oriented advocacy.",
    text3:
      "To write, issue, and publish development-oriented reports, articles, books, and policy position papers.",
    text4:
      "To educate the public about important economic and social issues affecting developing nations.",
    text5:
      "To educate the public about important economic and social issues affecting developing nations.",
  },
];

export const valuesData = [
  {
    bold: "Values",
    article:
      "AIPERD operates within a set of values that serve as our guiding principles. We all it the “TEEI” Principles. The core values shape AIPRED’s operations that allow the organization to offer impartial analysis and policy recommendations on issues that are researched by the organization. We believe that, our analysis impact people and societies, in terms of health, education and policy initiatives.",
    text1: "Transparency and openness in dealing with the public.",
    text2:
      "Ethical Responsibility as a guiding principle in conducting activities.",
    text3:
      "Excellence and Professionalism. We believe in high ethical standards in work, guided by the standard of accuracy, evidenced-based positions, and objective analysis.",
    text4:
      "Integrity: We believe in building trust and credibility in dealing with partners and the communities that we engage with.  Such an approach provides lasting trust and support that enhance the sustainability of our programs.",
    text5: "",
  },
];

export const opCentreData = [
  {
    bold: "Operating Centers",
    article:
      "Benefiting from a team of experts, AIPERD innovatively saw the need to operate centers that would allow us to offer contribution to policy and best practices. Accordingly, AIPERD operates the following Centers:",
    text1:
      "CENTER FOR ECONOMIC AND SOCIAL RESEARCH CESR). The Center conducts research on issues including, but not limited to, applied macroeconomics.  This unit focuses on trending issues relating to education, labour, health, environment, and gender.   The analysis of these trends informs AIPERD on what recommendations would be necessary to address the issues.",
    text2:
      "CENTER FOR TRAINING, INNOVATION AND DEVELOPMENT (CTID): The Center engages in relevant training and capacity building for individuals and organizations, focusing on public policy research and advocacy, monitoring and evaluation, as well as project management.  AIPERD believes that these training and development programmes, allow both practitioners and new entrants to the business and professional world, to gain exposure to innovative ideas. The Center enhances institutional capacity through training, networks, and internships.  Educational and professional development programmes that target capacity building are supported.  African societies are impacted by a digital revolution and technological advancement.  The Center aims at putting Africa and Africans on a higher level on the frontiers of innovation and digital revolution.",
    text3:
      "CENTER FOR ADVOCACY (CA): Advocating for policy reforms remains the focus of this Center.  Our advocacy uses education tools to solve developmental issues that AIPERD uncovers.  The Center is operated by a team with wide experience in engaging grassroot communities, as well as policy makers who shape local and national development agenda.",
  },
];

// Have to create three objects for each of the research pages with ID's and use USE PARAMS to access them
