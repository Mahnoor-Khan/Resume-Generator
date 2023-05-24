import React, { useState, useRef } from "react";
import { Button, Form, Input, DatePicker, Space, Modal } from "antd";
import "./style.css";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import SelectTemplate from "../SelectTemplate/SelectTemplate.tsx";
import html2pdf from "html2pdf.js";

const AddInfo = () => {
  const { TextArea } = Input;
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const options = {
      filename: "resume.pdf",
      jsPDF: {
        format: "a4",
      },
    };

    html2pdf().set(options).from(resumeRef.current).save();
  };

  const handleOk = () => {
    handleDownload();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { RangePicker } = DatePicker;

  const handleSubmit = (values) => {
    setIsModalOpen(true);
    setData(values);
  };

  const resumeRef = useRef(null);

  return (
    <>
      <h1 className="heading">Add Information</h1>
      <div className="info-main">
        <div className="form-col">
          <Form className="form" onFinish={handleSubmit}>
            <label>Name</label>
            <span className="asteric">*</span>
            <br />
            <Form.Item
              label=""
              style={{ marginBottom: 0 }}
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <br />
            <label>Profession</label>
            <span className="asteric">*</span>
            <br />
            <Form.Item
              label=""
              name="profession"
              rules={[
                { required: true, message: "Please input your profession!" },
              ]}
            >
              <Input />
            </Form.Item>
            <label>E-Mail</label>
            <span className="asteric">*</span>
            <br />
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your E-mail!" }]}
            >
              <Input />
            </Form.Item>
            <label>Phone No.</label>
            <span className="asteric">*</span>
            <br />
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your Phone no." },
              ]}
            >
              <Input type="tel" />
            </Form.Item>
            <label>Address</label>
            <span className="asteric">*</span>
            <br />
            <Form.Item
              name="address"
              rules={[{ required: true, message: "Please input your Address" }]}
            >
              <TextArea />
            </Form.Item>
            <label>About</label>
            <span className="asteric">*</span>
            <br />
            <Form.Item
              name="about"
              rules={[{ required: true, message: "Please input your About" }]}
            >
              <TextArea />
            </Form.Item>
            <label>Skills</label>
            <br />
            <Form.List name="skills">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      align="baseline"
                      className="skill-space"
                    >
                      <Form.Item noStyle shouldUpdate={true}>
                        {() => (
                          <Form.Item
                            {...field}
                            label="Skill"
                            name={[field.name, "skill"]}
                          >
                            <Input />
                          </Form.Item>
                        )}
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Skill
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <label>Education</label>
            <br />
            <Form.List name="education">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Space key={field.key} align="baseline">
                      <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, curValues) =>
                          prevValues.area !== curValues.area ||
                          prevValues.sights !== curValues.sights
                        }
                      >
                        {() => (
                          <Form.Item
                            {...field}
                            label="Institute"
                            name={[field.name, "institute"]}
                          >
                            <Input />
                          </Form.Item>
                        )}
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Degree"
                        name={[field.name, "degree"]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Duration"
                        name={[field.name, "duration"]}
                      >
                        <RangePicker
                          style={{ width: "50px !important" }}
                          picker="year"
                        />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Education
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <label>Work History</label>
            <br />
            <Form.List name="work_history">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Space key={field.key} align="baseline">
                      <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, curValues) =>
                          prevValues.area !== curValues.area ||
                          prevValues.sights !== curValues.sights
                        }
                      >
                        {() => (
                          <Form.Item
                            {...field}
                            label="Institute"
                            name={[field.name, "institute"]}
                          >
                            <Input />
                          </Form.Item>
                        )}
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Position"
                        name={[field.name, "position"]}
                      >
                        <TextArea />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Duration"
                        name={[field.name, "duration"]}
                      >
                        <RangePicker
                          style={{ width: "50px !important" }}
                          picker="year"
                        />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Work History
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Preview Resume
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Modal
          width="1000px"
          title="Your Resume"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Download Resume"
        >
          <div ref={resumeRef}>
            <SelectTemplate data={data} />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddInfo;
