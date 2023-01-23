import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LightningFormBuilder from "../lib";

describe("LightningFormBuilder", () => {
  it("Should render the LightningFormBuilder Component", () => {
    const inputs = [
      {
        name: "name",
        value: "John",
        required: true,
      },
    ];

    const { container } = render(
      <LightningFormBuilder input={inputs} onSubmit={() => {}} />
    );

    const input = container.querySelector("input[name='name']");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("John");
    expect(input).toBeRequired();
    expect(input).not.toBeDisabled();
    expect(input).toHaveAttribute("type", "text");
  });

  it("Should render form with multiple inputs", () => {
    const inputs = [
      {
        name: "email",
        value: "test@gmail.com",
        required: true,
      },
      {
        name: "password",
        value: "123",
        required: true,
      },
    ];

    const { container } = render(
      <LightningFormBuilder input={inputs} onSubmit={() => {}} />
    );

    const emailInput = container.querySelector("input[name='email']");
    const passwordInput = container.querySelector("input[name='password']");

    for (const input of [emailInput, passwordInput]) {
      expect(input).toBeInTheDocument();
      expect(input).not.toBeDisabled();
      expect(input).toBeRequired();
      expect(input).toHaveAttribute("type", "text");
    }
  });

  it("Should return error if input was the same name", () => {
    const inputs = [
      {
        name: "email",
        value: "",
      },
      {
        name: "email",
        value: "",
      },
    ];

    expect(() => {
      render(<LightningFormBuilder input={inputs} onSubmit={() => {}} />);
    }).toThrow("[Lightning Form Builder] - Invalid Inputs with the same name");
  });

  it("Should return error if select input has no options", () => {
    const inputs = [
      {
        name: "account_type",
        type: "select",
        value: "",
      },
    ];

    expect(() => {
      render(<LightningFormBuilder input={inputs} onSubmit={() => {}} />);
    }).toThrow("[Lightning Form Builder] - Select inputs must have options");
  });

  it("Should change input value", () => {
    const inputs = [
      {
        name: "email",
        value: "",
      },
    ];

    const { container } = render(
      <LightningFormBuilder input={inputs} onSubmit={() => {}} />
    );

    const emailInput = container.querySelector("input[name='email']");

    expect(emailInput).toHaveValue("");

    emailInput?.dispatchEvent(new Event("focus", { bubbles: true }));
    emailInput?.dispatchEvent(new Event("change", { bubbles: true }));
    emailInput?.dispatchEvent(new Event("blur", { bubbles: true }));

    expect(emailInput).toHaveValue("");
  });
});
