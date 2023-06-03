import {
  Header,
  TheAcademy,
  WhyChooseUs,
  ImproveYourSkills,
  Programs,
  MeetYourTeachers,
  Testimonials,
} from "@/containers/pages/home";

import { Footer } from "@/components";

const HomePage = () => {
  return (
    <>
      <Header />
      <TheAcademy />
      <WhyChooseUs />
      <ImproveYourSkills />
      <Programs />
      <MeetYourTeachers />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
