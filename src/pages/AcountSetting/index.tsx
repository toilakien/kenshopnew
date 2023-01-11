import { Row, Col, Avatar, Typography } from "antd";
import React, { useState } from "react";
import TabSetting from "./TabSetting";
import UploadImage from "./UploadImage";

const AcountSetting = () => {
  const [imageUpload, setImageUpload] = useState<any>("");
  return (
    <Row>
      <Col span={8}>
        <Row>
          <Avatar size={80} src={imageUpload} />
        </Row>
        <Row>
          Name:
          <Typography>Lê Văn Kiên</Typography>
        </Row>
        <Row>
          Change image:
          <UploadImage />
        </Row>
      </Col>
      <Col span={16}>
        <TabSetting />
      </Col>
    </Row>
  );
};

export default AcountSetting;
