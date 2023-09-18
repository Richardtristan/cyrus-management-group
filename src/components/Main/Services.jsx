import { styled } from "styled-components";
import { device } from "../../device";

import Service from "../reusable-ui/Service";

export default function Services() {
  return (
    <ServicesStyled id="Services">
      <h2>Services</h2>
      <div className="separator"></div>
      <Service
        className={"service-right"}
        Title={"Help Desk Support"}
        Text={
          "Offering remote or on-site technical support for end-user issues, software installations, troubleshooting, and resolving IT-related queries."
        }
      />
      <Service
        className={"service-left"}
        Title={"Network Setup and Support"}
        Text={
          "We offer expert network setup and support services to ensure reliable and efficient connectivity. From initial setup to ongoing maintenance, our dedicated team ensures optimal network performance and secure data transmission. Whether it's wired or wireless networks, troubleshooting connectivity issues, or managing network security, we provide comprehensive assistance for a seamless network experience."
        }
      />
      <Service
        className={"service-right"}
        Title={"Data Backup and Recovery"}
        Text={
          "We offer reliable data backup and recovery services to protect and restore your valuable information. With our secure backup systems and efficient recovery processes, you can have peace of mind knowing that your data is safe and easily accessible when needed."
        }
      />
      <Service
        className={"service-left"}
        Title={"Cybersecurity Solutions"}
        Text={
          "We prioritize our customers' digital asset security and privacy. That's why we offer a comprehensive range of cybersecurity options, including robust antivirus, anti-malware software, and advanced encryption protocols. This layered defense system fortifies their data against unauthorized access."
        }
      />
      <Service
        className={"service-right"}
        Title={"IT Consultation and Strategy"}
        Text={
          "Our IT consultation and strategy services drive business success. We align technology with goals, optimize infrastructure, enhance cybersecurity, and foster growth. With industry insights, informed decisions are made to stay ahead. From leveraging the cloud to streamlining operations, we ensure sustained success."
        }
      />
      <Service
        className={"service-left"}
        Title={"Hardware and Software Procurement"}
        Text={
          "Assisting in the selection, acquisition, and installation of hardware devices (computers, servers, peripherals) and software applications that best suit the business's needs and budget."
        }
      />
      <Service
        className={"service-right"}
        Title={"Virtualization Services"}
        Text={
          "We offer virtualization services to optimize IT infrastructure and reduce costs. By creating virtual environments, we enhance resource utilization, scalability, and flexibility. Whether it's virtual servers, desktops, or networks, our solutions streamline management and improve overall efficiency."
        }
      />
      <Service
        className={"service-left"}
        Title={"VoIP and Unified Communications"}
        Text={
          "We offer VoIP and unified communications solutions for streamlined and cost-effective communication. Our services integrate voice, video, messaging, and collaboration tools to enhance productivity and teamwork. Tailored to each client's needs, our solutions provide reliable and efficient communication across the organization."
        }
      />
      <Service
        className={"service-right"}
        Title={"IT Training and Education"}
        Text={
          "We offer IT training and education services to empower businesses and individuals with the necessary knowledge and skills to thrive in the technology-driven world. Our expert trainers deliver customized programs on software applications, cybersecurity, IT infrastructure management, and emerging technologies. This service complimentary to all our clients"
        }
      />
    </ServicesStyled>
  );
}

const ServicesStyled = styled.div`
  position: relative;
  h2 {
    text-align: center;
    text-transform: uppercase;
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 900;
    margin: 30px 0;
  }

  .separator {
    width: 15px;
    height: 100%;
    border-radius: 10px;
    background: #1ca6b5;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .service-right {
    left: 25vw;
    animation: fadeInRight;
    animation-duration: 2s;
  }
  .service-left {
    right: 25vw;
    text-align: right;
    animation: fadeInLeft;
    animation-duration: 2s;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 40px;
      margin: 30px 0;
    }
    .separator {
      width: 25px;
    }
  }
`;
