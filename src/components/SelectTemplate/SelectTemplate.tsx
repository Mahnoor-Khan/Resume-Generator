import React, { useRef } from "react";
import "./style.css";
import {
  EnvironmentFilled,
  PhoneFilled,
  MailFilled,
  CodeSandboxOutlined,
  UserOutlined,
  LayoutFilled,
  TrophyFilled,
} from "@ant-design/icons";
import { Steps } from "antd";

const SelectTemplate = ({ data }) => {
  const resumeRef = useRef(null);
  const { Step } = Steps;

  return (
    <>
      <div ref={resumeRef}>
        <div className="upper-heading">
          <div className="name-div">
            {data?.name && <h1 className="name-heading">{(data?.name).toUpperCase()}</h1>}
            {data.profession && <h4 className="profession-heading">{(data?.profession).toUpperCase()}</h4>}
          </div>
          <div className="contact-div">
            {" "}
            <div>
              <div>
                <p className="heading-2">Contact Info</p>
              </div>
              {data?.address && <div>
                <i className="icons">
                  <EnvironmentFilled />
                </i>{" "}
                <span className="profile-text">{data?.address}</span>
              </div>}
              {data?.phone && <div>
                <i className="icons">
                  <PhoneFilled />
                </i>
                <span className="profile-text">{data?.phone}</span>
              </div>}
              {data?.email && <div>
                <i className="icons">
                  <MailFilled />{" "}
                </i>
                <span className="profile-text">{data?.email}</span>
              </div>}
            </div>
          </div>
        </div>
        <div className="main">
          <div className="col-2">
            {data?.about && (
              <>
                <div className="resume-headings">
                  <i className="resume-icons">
                    <UserOutlined />
                  </i>
                  <b>
                    <h1 className="resume-heading-text">About</h1>
                  </b>
                </div>
                <p className="resume-text">{data?.about}</p>
              </>
            )}

            {data?.skills?.length && (
              <>
                <div className="resume-headings">
                  <i className="resume-icons">
                    <CodeSandboxOutlined />
                  </i>
                  <b>
                    <h1 className="resume-heading-text">Skills</h1>
                  </b>
                </div>
                <div>
                  <ul>
                    {data?.skills?.map((item) => (
                      <li className="resume-text">{item?.skill}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
            {data?.work_history?.length && (
              <>
                <div className="resume-headings">
                  <i className="resume-icons">
                    <LayoutFilled />
                  </i>
                  <b>
                    <h1 className="resume-heading-text">Work Hisoty</h1>
                  </b>
                </div>
                <div>
                  <div className="stepper-container">
                    <Steps
                      progressDot
                      direction="vertical"
                      current={data?.work_history?.length}
                    >
                      {data?.work_history?.map((item, index) => (
                        <Step
                          key={index}
                          title={
                            <>
                              <h2 className="resume-text">{(item?.institute).toUpperCase()}</h2>
                            </>
                          }
                          description={
                            <>
                              <p className="resume-text-steper">
                                {item?.position}
                              </p>
                              <br className="break" />
                              <div style={{ display: "flex" }}>
                                {" "}
                                <p className="duration">
                                  {item?.duration[0].$y}
                                </p>{" "}
                                -{" "}
                                <p className="duration">
                                  {item?.duration[1].$y}
                                </p>
                              </div>
                            </>
                          }
                        />
                      ))}
                      <Step
                        key={data?.work_history?.length + 1}
                        progressDot={false}
                        title=""
                        description=""
                      />
                    </Steps>
                  </div>
                </div>
              </>
            )}
            {data?.education?.length && (
              <>
                <div className="resume-headings education">
                  <i className="resume-icons">
                    <TrophyFilled />
                  </i>
                  <b>
                    <h1 className="resume-heading-text">Education</h1>
                  </b>
                </div>
                <div>
                  <div className="stepper-container">
                    <Steps
                      progressDot
                      direction="vertical"
                      current={data?.education?.length}
                    >
                      {data?.education?.map((item, index) => (
                        <Step
                          key={index}Se
                          title={
                            <>
                              <h2 className="resume-text">{(item?.institute).toUpperCase()}</h2>
                            </>
                          }
                          description={
                            <>
                              <p className="resume-text-steper">
                                {item?.degree}
                              </p>
                              <br className="break" />
                              <div style={{ display: "flex" }}>
                                {" "}
                                <p className="duration">
                                  {item?.duration[0].$y}
                                </p>{" "}
                                -{" "}
                                <p className="duration">
                                  {item?.duration[1].$y}
                                </p>
                              </div>
                            </>
                          }
                        />
                      ))}
                      <Step
                        key={data?.education?.length + 1}
                        progressDot={false}
                        title=""
                        description=""
                      />
                    </Steps>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTemplate;
