import { styled } from "styled-components";
import Service from "./Service";

export default function Main() {
  return (
    <MainStyled>
      <div className="gradient"></div>
      <div className="services">
        <h2>Services</h2>
        <div className="separator"></div>
        <Service
          className={"service-left"}
          Title={"Help Desk Support"}
          Text={
            "Offering remote or on-site technical support for end-user issues, software installations, troubleshooting, and resolving IT-related queries."
          }
        />
        <Service
          className={"service-right"}
          Title={"Network Setup and Support"}
          Text={
            "We offer expert network setup and support services to ensure reliable and efficient connectivity. From initial setup to ongoing maintenance, our dedicated team ensures optimal network performance and secure data transmission. Whether it's wired or wireless networks, troubleshooting connectivity issues, or managing network security, we provide comprehensive assistance for a seamless network experience."
          }
        />
        <Service
          className={"service-left"}
          Title={"Data Backup and Recovery"}
          Text={
            "We offer reliable data backup and recovery services to protect and restore your valuable information. With our secure backup systems and efficient recovery processes, you can have peace of mind knowing that your data is safe and easily accessible when needed."
          }
        />
        <Service
          className={"service-right"}
          Title={"Cybersecurity Solutions"}
          Text={
            "We prioritize our customers' digital asset security and privacy. That's why we offer a comprehensive range of cybersecurity options, including robust antivirus, anti-malware software, and advanced encryption protocols. This layered defense system fortifies their data against unauthorized access."
          }
        />
        <Service
          className={"service-left"}
          Title={"IT Consultation and Strategy"}
          Text={
            "Our IT consultation and strategy services drive business success. We align technology with goals, optimize infrastructure, enhance cybersecurity, and foster growth. With industry insights, informed decisions are made to stay ahead. From leveraging the cloud to streamlining operations, we ensure sustained success."
          }
        />
        <Service
          className={"service-right"}
          Title={"Hardware and Software Procurement"}
          Text={
            "Assisting in the selection, acquisition, and installation of hardware devices (computers, servers, peripherals) and software applications that best suit the business's needs and budget."
          }
        />
        <Service
          className={"service-left"}
          Title={"Virtualization Services"}
          Text={
            "We offer virtualization services to optimize IT infrastructure and reduce costs. By creating virtual environments, we enhance resource utilization, scalability, and flexibility. Whether it's virtual servers, desktops, or networks, our solutions streamline management and improve overall efficiency."
          }
        />
        <Service
          className={"service-right"}
          Title={"VoIP and Unified Communications"}
          Text={
            "We offer VoIP and unified communications solutions for streamlined and cost-effective communication. Our services integrate voice, video, messaging, and collaboration tools to enhance productivity and teamwork. Tailored to each client's needs, our solutions provide reliable and efficient communication across the organization."
          }
        />
        <Service
          className={"service-left"}
          Title={"IT Training and Education"}
          Text={
            "We offer IT training and education services to empower businesses and individuals with the necessary knowledge and skills to thrive in the technology-driven world. Our expert trainers deliver customized programs on software applications, cybersecurity, IT infrastructure management, and emerging technologies. This service complimentary to all our clients"
          }
        />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .gradient {
    height: 1100px;
    width: 100vw;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      #1bbabf 8.28%,
      rgba(255, 255, 255, 0) 50%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .services {
    h2 {
      text-align: center;
      text-transform: uppercase;
      color: #000;
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      margin: 30px 0;
    }

    .separator {
      width: 25px;
      height: 100%;
      position: absolute;
      top: 72px;
      left: 49vw;
      border-radius: 10px;
      background: #1ca6b5;
    }
  }
  .service-left {
    left: 25vw;
  }
  .service-right {
    right: 25vw;
    text-align: right;
  }
`;
