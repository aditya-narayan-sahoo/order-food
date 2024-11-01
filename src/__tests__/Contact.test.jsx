import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../components/Contact";

describe("Contact Component", () => {
  it("renders the contact form correctly with empty fields", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Contact Us"
    );

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");

    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("allows users to fill out the form", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there!" },
    });

    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
    expect(screen.getByLabelText(/message/i)).toHaveValue("Hello there!");
  });

  it("submits the form and shows a success message", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there!" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText(/thank you for your message!/i)
    ).toBeInTheDocument();
  });

  it("resets the form after submission", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there!" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
  });
});
