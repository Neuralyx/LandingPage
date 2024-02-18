/* eslint-disable jsx-a11y/anchor-is-valid */
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { TiThMenu } from "react-icons/ti";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Home
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Sobre Nós
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Portifólio
      </a>
    ),
  },
];

export const MenuDefault = () => {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space
          style={{
            display: "flex",
            maxWidth: "80px",
            padding: 10,
            justifyContent: "space-between",
            flexDirection: "row-reverse",
          }}
        >
          Menu
          <TiThMenu size={25} />
        </Space>
      </a>
    </Dropdown>
  );
};
