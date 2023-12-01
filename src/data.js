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
    more: {
      title1:
        "FARMING FOR PRIDE, PROFIT AND PROGRESS: A MESSAGE FOR GHANA’S FARMERS DAY 2023",
      content1:
        "Training, motivating, and supporting people to engage in agriculture is important for self-sufficiency in agriculture. Impacting the skill to produce food is crucial for development. As the famous Chinese proverb says: “Give a man fish, and he eats for a day. Teach him how to fish, and he eats every day”.   Training people to feed themselves is a major part of the development process. In   1922, the Kwadaso Agricultural College was initially established in Kumasi, Ghana, to train young school leavers in cocoa production. The College was later transformed, in 1946, into an institution to train secondary school leavers in general agriculture. The aim was to increase food production for the nation. After independence in 1957, agriculture became the backbone of the Ghanaian economy, and incentives were provided for farmers. For example, the Cocoa Marketing Board Scholarship Scheme was created by the Government under the Government of President Kwame Nkrumah to provide scholarships for children of cocoa farmers. This Scheme was to provide a morale booster for farmers.",
      title2: "FEEDING THE NATION",
      content2:
        "Political sloganeering became an important means of instilling pride into the Ghanaian farmer, as well as the youth who constitute the greatest resource for development.  The shift from cash-crop production to food production was essential for the newly independent nation. A priority was to ensure national food sufficiency and to instill national pride among the youth. Under the military regime of General Kutu Acheampong (1972-1978), the military junta developed a national development strategy, code-named: ‘Operation Feed Yourself’.  The nation would no longer import food, as the leaders planned Ghana’s self-reliance.   As an independent nation—the first black nation to achieve independence in Africa--importing rice from Thailand or corned beef from Argentina seems to run counter to the policy of projecting national pride. Through the policy of agrarian reforms and modernization of agriculture, China has been able to feed itself, and now exports food to Africa and other parts of the world. This is a source of pride for the Chinese farmer, who, as a peasant, was the backbone of the Chinese agricultural revolution, which was part of China’s “Four Modernization Policy” that began after 1976. ",
      title3: "FARMER’S PRIDE",
      content3:
        "Instilling pride among the youth in Ghana is critical in the policy of promoting agriculture.  The military regime in Ghana motivated university students to suspend their education, and travel to farming communities, to transport cocoa from rural areas, in order to be exported.  I recall the policy organizing competition among secondary schools in agriculture, during the era of military government in Ghana.  Inspired by the slogan, ‘Operation Feed Yourself’, people took pride in cultivating food crops in backyard gardens. Farming was no longer the profession of the rural dwellers and the least educated.  The educated can also be a farmer or a manager of a farm.",
      title4: "REMOVING THE BOTTLENECKS FOR FARMERS",
      content4:
        "Farmers have complained about logistical challenges in transporting their products to market centers in the country.  Bad roads and transport facilities still plague farmers. This problem rings a bell as we recall the famous statement made by Lord Lugard, the British Governor General of Gold Coast (Ghana). Lord Lugard observed that the material development of Africa is summed up in one word: “transportation”. Transportation still remains a major challenge for agriculture in Africa.  Rural-urban road networks in Ghana need a major overhaul.  There is a need to ensure connectivity. The haulage of food products relies on roads that are largely inaccessible, due to lack of maintenance.   Rail development would be an alternative to the road-based transportation system.  However, the once vibrant Ghana’s railway system, is in a state of decay, according to the World Bank (2022). This state of affairs is due, largely, to neglect and underfunding. For an initial network size of 947 km in 1960, Ghana’s operational rail line was 160 km in 2020. Ghana experienced a substantial decrease in freight volumes transported (81 percent) during the period from 1990 to 2020 (World Bank 2022). Inaccessible road networks diminish the incentive for farmers to engage in large-scale farming, as their products are left on farms, and are not able to get to marketing centers.  As a result, farmers lose the incentive to farm, and the youth are not impressed. The Operation Feed Yourself mantra would provide the rationale to address shortages of poultry and meat supply in Ghana. Food items like onions and tomatoes are subject to the vagaries of the weather, as well as political stability in West Africa, as the neighboring countries like Burkina Faso and Niger--who export these items to Ghana-- are ravaged by instability.  Feeding the nation would involve building the necessary infrastructure. Building food processing capacity in Ghana would motivate farmers and also convince the youth to take agriculture seriously. Therefore, agro-processing business needs to be encouraged.  Perishable commodities,   including tomatoes, pepper, and other vegetables can be canned and preserved for both internal consumption and for exports.  With good management and marketing strategies, new opportunities can be created in value chains in a variety of produce. Cassava has great potential as a food crop as well as a cash crop that would also be relevant in the industrial sector. Supporting farmers in Ghana would require meaningful climate-resilient strategies.  In 2016, a Government policy initiative to ensure adequate irrigation systems, particularly for drought-affected regions in the country, was promoted.  Once again, a political slogan was used: ‘One-village- one—dam’.  The policy is not implemented on a scale that can assist farmers to expand their farms, and overcome persistent drought and other climate-related problems. ",
      title5: "MOTIVATING THE YOUTH IN FARMING",
      content5:
        "Motivating the youth to engage in agriculture would require a national policy that would make agriculture both lucrative and sustainable. There is an army of university graduates who are looking for jobs that are unavailable. It would be necessary to build an entrepreneurship spirit among the youth in farming.  Other policies need to be in place.  Land reforms are needed.  Large-scale cultivation of plantain, pineapple, and other products to the scale that prevails in neighboring Cote d Ivoire, needs land reforms. The government must also stop the denigration of farmlands. The destruction of farmlands and water bodies would prevent sustainable agricultural production that would attract the youth. Destroying farmlands through the activities of illegal mining (‘galamsey’) would not promote agriculture, and would not motivate our farmers. Agriculture, forestry, and fishery activities are integral to the Ghanaian economy, contributing 20 percent to GDP, and providing sources of income and livelihood for millions of Ghanaians. The Government initiated the commemoration of National ‘Farmers’ Day’ in 1985. The day came as a result of 30 % growth in the farming industry. The industry had been ravaged by severe drought in 1983 which brought hunger in Ghana.  Farmers have done a lot to sustain the nation, for which we all need to salute them.",
      title6: "POLICY DIRECTIONS",
      content6:
        "The theme for the National Farmers’ Day Celebration 2023 is “Delivering Smart Solutions for Sustainable Food Security and Resilience”.   Several questions remain to be asked. First, what smart solutions are needed to tackle the degradation of farmlands due to illegal mining practices (‘galamsey’)?  Second, how can Ghana achieve food security, and reverse the trend where the nation largely depends on the import of pork and pork products? According to the United States Department of Agriculture (2023), Ghana imported a total of 8,988 metric tons of pork and pork products, in 2022. The major importing sources are Belgium, Germany, and Poland.  Other food products are largely imported. AIPERD, as a policy think tank, recommends policy reforms that would reverse environmental degradation and sustain the nation’s agriculture, as well as enhance food security.",
    },
  },
];

export const ourteam = [
  {
    image: OurTeam1,
    name: " Dr. Alex Adomako Mensah",
    title: "President",
    text: "Alex Adomako MensahIs an enthusiastic and professional banker and marketer, who enjoys being part of, as well as leading a successful and productive team.He is the founder and chief executive officer ( CEO) of Newedge Group, a leading security company and micro finance company. He was a founding member of the medical aid Africa, a think-tank of made up eminent medical science professionals in UK. Currently, he is a chairman of the kumawuman Rural Bank, in Ghana.Alex has a PHD in Business Administration from the CASS Business Europe and a masters degree in Business Administration (MBA) in France from University of Leicester and BSC in financial services from the University of Manchester Institute of science and technology .Alex is a professional Banker with a research focus on continuous improvement in financial services.",
  },
  {
    image: OurTeam2,
    name: "Professor Charles O. Kwarteng",
    title: "Researcher",
    text: "Countries of experience: United States, Belgium,  Ghana and Nigeria. Professor  Charles Kwarteng was  educated in a rural community in Ghana. He was exposed to lack of development in his community, which ignited his interest in advocating for development. This motivation underpins his interest in the establishment of an Institute (AIPERD),  that promotes inclusive and empowered development. Prof Kwarteng has unique international experience. From 1989-1990, he served as an in-service trainee  at the Directorate General for  External Relations, at the headquarters of the European Union (Brussels, Belgium).  He was among the Guests  invited to visit the NATO headquarters in Brussels. At the EU, he researched the implications of European economic integration on developing nations. Based on the research conducted at the EU, he wrote a path--breaking book,  Africa and the European Challenge: Survival in a Changing World (Avebury Press, London 1997), which details the global implications of European economic bloc. This book  was reviewed to be one of the top four books that relate to the external relations of the EU. He attended  the EU-ACP Convention,  that took place in Brussels in 1989, and observed the negotiations regarding EU’s partnership with the African,  Caribbean and Pacific (ACP)  nations.  He has received internationally competitive awards. He was a recipient of Fulbright Hays Travel Grant from the United States Information Agency (USIA). Before this experience, he  worked for Mobay Corporation, a subsidiary of Bayer Germany, in Pittsburgh, USA,  where he researched for the Vice-President,  on issues including US Multinational Corporations’  investments in Africa and Central America.  Among the case studies he researched,  were Heinz Corporation’s investment in Zimbabwe, and Gulf Oil’s investment in Angola. As a result of his research on US export control policies, he had the opportunity to interview ambassadors and officials of the International Monetary Fund (IMF).  Prof  Kwarteng has over 30 years of rich experience in academia, spanning from United States and Ghana. He was tenured and promoted, with the rank of Associate Professor at Morgan State University (1997 to 2007) in the US. In  2009, he became  the first Director of Research, and later, the Dean of Graduate School at Regent University, which is a private tertiary institution in Ghana. He has  held key management and administrative positions in academia, including Acting Dean, Business School, Ghana Communication Technology University (2015-2017). Prof Kwarteng has used his vast professional experience to provide organizational leadership. For example, as Director of Research, he was instrumental in organizing a workshop on “Technology Options for Early Childhood Education in Ghana.”, that was held on October 23, 2009, Accra, at Regent University. Based on his vision as Acting Dean of the Business School at Ghana Technology University, he pioneered the establishment of a Center for Entrepreneurship, which won a grant of US$1.4 million. The Center is still sustaining itself, and is providing training in business incubation in Ghana. In 1996, he was nominated and included in Who is Who Among American Teachers, an internationally known registry of teachers  nominated by top students who are on Dean’s List in the United States. In the area of Governance and Democracy, Professor Kwarteng is internationally associated with the theoretical concept, “Babangidaization” (coined from the name of former ‘military-civilian’ President of Nigeria, Ibrahim Babangida), in the context of “militocracy”.  His scholarly research works have been published by Round Table (established in  1910) Britain’s leading and first journal on public affairs.  His service to local communities includes his activism and advocacy  for more than 10 years,  in negotiating for development  projects in Ghana, as Secretary of a Residents Association .  Professor Kwarteng’s credentials include a Ph.D, Degree  in Public & International Affairs, from University of Pittsburgh ,  USA (1989),  and a JD (Juris Doctor) from University  of Maryland (1998), USA. With deep understanding of organizations and legal experience, he brings  a wealth of competence as  a researcher at AIPERD.",
  },
  {
    image: OurTeam3,
    name: "Mr. Samuel Quarshigah Ayitey",
    title: "Researcher",
    text: "Samuel is a results-oriented Finance Professional with over 25 years combined experience and functional expertise in Financial Management, Business Development, Investment Banking, MSME Advisory Services, Strategic Management, and Real Estate Development and Management.Samuel has a wealth of practical exposure in originating, structuring, evaluating and implementing the funding of Public and Private Sector Projects, Structured Financing and Trade Finance transactions. Uniquely, Samuel has worked for extended periods as a Financial Management Specialist in various positions in the Construction, Healthcare, Real Estate and Investment Banking across an array of local and international institutions.Prior to joining AIPERD, Samuel has  consulted as a  Researcher and Independent Consultant in various capacities for several Micro, Small  Medium Enterprises (MSMEs) in various sectors including Agri- Business, Educational and Faith Based Organizations,  Financial Services, Waste Management, Renewable Energy, Oil and Gas, Construction, Real Estate, FMCG, NGOs, Printing and Publishing etc.Mr. Ayitey holds BSc degree (with Honours) in Accounting and Information Systems from the Regent University and an MBA degrees in Finance from the Maastricht School of Management (Netherlands) and Bangor University (UK) respectively.Samuel also holds a Chartered Banker Certificate from the Chartered Banker Institute in Scotland (UK) and an Associate with the Institute of Chartered Bankers, Ghana, and a Professional Certificate in Incubation and Entrepreneurship Development in Agro- Technology from the Maastricht School of Management (Netherlands).",
  },
];

// have to create an object for our team page with four contents
export const ourteamAll = [
  {
    image: OurTeam1,
    name: " Dr. Alex Adomako Mensah",
    title: "President",
    text: "Alex Adomako MensahIs an enthusiastic and professional banker and marketer, who enjoys being part of, as well as leading a successful and productive team.He is the founder and chief executive officer ( CEO) of Newedge Group, a leading security company and micro finance company. He was a founding member of the medical aid Africa, a think-tank of made up eminent medical science professionals in UK. Currently, he is a chairman of the kumawuman Rural Bank, in Ghana.Alex has a PHD in Business Administration from the CASS Business Europe and a masters degree in Business Administration (MBA) in France from University of Leicester and BSC in financial services from the University of Manchester Institute of science and technology .Alex is a professional Banker with a research focus on continuous improvement in financial services.",
  },
  {
    image: OurTeam2,
    name: "Professor Charles O. Kwarteng",
    title: "Researcher",
    text: "Countries of experience: United States, Belgium,  Ghana and Nigeria. Professor  Charles Kwarteng was  educated in a rural community in Ghana. He was exposed to lack of development in his community, which ignited his interest in advocating for development. This motivation underpins his interest in the establishment of an Institute (AIPERD),  that promotes inclusive and empowered development. Prof Kwarteng has unique international experience. From 1989-1990, he served as an in-service trainee  at the Directorate General for  External Relations, at the headquarters of the European Union (Brussels, Belgium).  He was among the Guests  invited to visit the NATO headquarters in Brussels. At the EU, he researched the implications of European economic integration on developing nations. Based on the research conducted at the EU, he wrote a path--breaking book,  Africa and the European Challenge: Survival in a Changing World (Avebury Press, London 1997), which details the global implications of European economic bloc. This book  was reviewed to be one of the top four books that relate to the external relations of the EU. He attended  the EU-ACP Convention,  that took place in Brussels in 1989, and observed the negotiations regarding EU’s partnership with the African,  Caribbean and Pacific (ACP)  nations.  He has received internationally competitive awards. He was a recipient of Fulbright Hays Travel Grant from the United States Information Agency (USIA). Before this experience, he  worked for Mobay Corporation, a subsidiary of Bayer Germany, in Pittsburgh, USA,  where he researched for the Vice-President,  on issues including US Multinational Corporations’  investments in Africa and Central America.  Among the case studies he researched,  were Heinz Corporation’s investment in Zimbabwe, and Gulf Oil’s investment in Angola. As a result of his research on US export control policies, he had the opportunity to interview ambassadors and officials of the International Monetary Fund (IMF).  Prof  Kwarteng has over 30 years of rich experience in academia, spanning from United States and Ghana. He was tenured and promoted, with the rank of Associate Professor at Morgan State University (1997 to 2007) in the US. In  2009, he became  the first Director of Research, and later, the Dean of Graduate School at Regent University, which is a private tertiary institution in Ghana. He has  held key management and administrative positions in academia, including Acting Dean, Business School, Ghana Communication Technology University (2015-2017). Prof Kwarteng has used his vast professional experience to provide organizational leadership. For example, as Director of Research, he was instrumental in organizing a workshop on “Technology Options for Early Childhood Education in Ghana.”, that was held on October 23, 2009, Accra, at Regent University. Based on his vision as Acting Dean of the Business School at Ghana Technology University, he pioneered the establishment of a Center for Entrepreneurship, which won a grant of US$1.4 million. The Center is still sustaining itself, and is providing training in business incubation in Ghana. In 1996, he was nominated and included in Who is Who Among American Teachers, an internationally known registry of teachers  nominated by top students who are on Dean’s List in the United States. In the area of Governance and Democracy, Professor Kwarteng is internationally associated with the theoretical concept, “Babangidaization” (coined from the name of former ‘military-civilian’ President of Nigeria, Ibrahim Babangida), in the context of “militocracy”.  His scholarly research works have been published by Round Table (established in  1910) Britain’s leading and first journal on public affairs.  His service to local communities includes his activism and advocacy  for more than 10 years,  in negotiating for development  projects in Ghana, as Secretary of a Residents Association .  Professor Kwarteng’s credentials include a Ph.D, Degree  in Public & International Affairs, from University of Pittsburgh ,  USA (1989),  and a JD (Juris Doctor) from University  of Maryland (1998), USA. With deep understanding of organizations and legal experience, he brings  a wealth of competence as  a researcher at AIPERD.",
  },
  {
    image: OurTeam3,
    name: "Mr. Samuel Quarshigah Ayitey",
    title: "Researcher",
    text: "Samuel is a results-oriented Finance Professional with over 25 years combined experience and functional expertise in Financial Management, Business Development, Investment Banking, MSME Advisory Services, Strategic Management, and Real Estate Development and Management.Samuel has a wealth of practical exposure in originating, structuring, evaluating and implementing the funding of Public and Private Sector Projects, Structured Financing and Trade Finance transactions. Uniquely, Samuel has worked for extended periods as a Financial Management Specialist in various positions in the Construction, Healthcare, Real Estate and Investment Banking across an array of local and international institutions.Prior to joining AIPERD, Samuel has  consulted as a  Researcher and Independent Consultant in various capacities for several Micro, Small  Medium Enterprises (MSMEs) in various sectors including Agri- Business, Educational and Faith Based Organizations,  Financial Services, Waste Management, Renewable Energy, Oil and Gas, Construction, Real Estate, FMCG, NGOs, Printing and Publishing etc.Mr. Ayitey holds BSc degree (with Honours) in Accounting and Information Systems from the Regent University and an MBA degrees in Finance from the Maastricht School of Management (Netherlands) and Bangor University (UK) respectively.Samuel also holds a Chartered Banker Certificate from the Chartered Banker Institute in Scotland (UK) and an Associate with the Institute of Chartered Bankers, Ghana, and a Professional Certificate in Incubation and Entrepreneurship Development in Agro- Technology from the Maastricht School of Management (Netherlands).",
  },
  {
    image: OurTeam4,
    name: "Rosinah Simah Agyapomaa",
    title: "Project Coordniator",
    text: "Simah Rosinah Agyapomaah is a dynamic and versatile individual with a passion for education, politics, and the arts. With a background in Religious Studies and Political Science, Simah's academic journey has shaped her into a well-rounded and open-minded professional. Her diverse experiences in various fields, including public service, marketing, film production, philanthropy, and public speaking training, showcase her adaptability and commitment to making a positive impact in the world. Education: Simah pursued her Bachelor of Arts degree in Religious Studies and Political Science, showcasing her interest in understanding the complexities of society, culture, and governance. Her academic foundation has equipped her with critical thinking, research, and analytical skills, which she applies in both her professional and personal endeavors. Professional Experience: 1. National Service with Parliament of Ghana: Simah's dedication to public service was evident as she contributed her expertise to the political sphere during her national service. Working closely with parliamentary affairs allowed her to gain valuable insights into the workings of government and the democratic process. 2. Marketing Department of the Library: Simah's venture into the marketing department of a library demonstrates her adaptability and interest in promoting cultural and educational resources. Her ability to effectively communicate and connect with audiences has been evident throughout her career. 3. Film Production, Direction, and Hosting: Simah's creative spirit shines through her work as a film producer, director, and host. Her storytelling abilities, combined with her passion for the arts, have resulted in compelling and engaging visual experiences. 4. Philanthropy Space: Simah's dedication to social impact and giving back to the community is evident through her work in the philanthropy space. Her commitment to making a difference in the lives of others is a testament to her compassionate nature and desire to foster positive change. 5. Public Speaking Training: Simah's expertise in public speaking has allowed her to empower others with effective communication skills. Through training and mentoring, she has helped individuals find their voices and develop confidence in public speaking. Skills:- Strong analytical and research abilities. - Excellent communication and public speaking skills.- Creative storytelling and media production expertise. - Passion for education, arts, and social impact. - Ability to adapt and thrive in diverse environments. - Adept at fostering positive relationships and teamwork.Passions and Hobbies: Outside of her professional life, Simah enjoys exploring different cultures through travel, engaging in community outreach activities, and immersing herself in the world of literature and cinema. She finds joy in connecting with people from all walks of life and continuously seeks opportunities for personal growth and learning. Simah Rosinah Agyapomaah's unique combination of academic knowledge, diverse professional experiences, and commitment to social impact make her a dynamic and influential individual in her respective fields. Her passion for education, arts, and public service is evident in her endeavors to make a meaningful difference in society.",
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
