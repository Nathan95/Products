import React from "react";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Items from "../components/Items";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

configure({ adapter: new Adapter() });
const array = [
  {
    amount: {
      currency_iso: "GBP",
      value: -1678.49
    },
    category_title: "Shopping",
    date: "2018-06-11",
    description: "Amazon",
    id: "4eb53d62c82b5c79cd3c6421f300eb07ab6b1f75ee4b7fdd47eaee55088f3b9271d1"
  }
];

describe("Items component", () => {
  test("checks if the data is present", () => {
    let amount = "-1678.49";
    const { container, getByText } = render(<Items rows={array} />);
    expect(getByText("2018-06-11")).toBeInTheDocument();
    expect(getByText("Amazon")).toBeInTheDocument();
    expect(getByText("Shopping")).toBeInTheDocument();
    expect(getByText(amount)).toBeInTheDocument();
  });
});
