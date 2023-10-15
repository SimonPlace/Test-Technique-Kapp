import { ConfigProvider, ThemeConfig } from "antd";
import React from "react";

const PRIMARY_COLOR = "#ED7846";

const config: ThemeConfig = {
  token: {
    colorPrimary: PRIMARY_COLOR,
    borderRadius: 6,
  },
  components: {
    Button: {
      borderRadius: 6,
      colorPrimary: PRIMARY_COLOR,
      controlOutline: PRIMARY_COLOR,
      controlOutlineWidth: 0,
    },
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ConfigProvider theme={config}>{children}</ConfigProvider>
);

export default Theme;
