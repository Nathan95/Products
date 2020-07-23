import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DisplayList from "../components/DisplayList";

import "@testing-library/jest-dom/extend-expect";
import { render, waitFor, act } from "@testing-library/react";
import fetchMock from "fetch-mock";

configure({ adapter: new Adapter() });

const array = {
  id: "sadasdasdsa",
  transactions: [
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
  ]
};
describe("fetch data", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("Verify if data is retrieved load - success", async () => {
    fetchMock.mock("http://www.mocky.io/v2/5c62e7c33000004a00019b05/", {
      body: array,
      status: 200
    });

    const { getByText } = render(<DisplayList rows={array} />);

    await waitFor(() => getByText("Amazon"));
  });
});
