// tests/About.test.jsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import About from "../components/About";

describe("About Component", () => {
  it("renders the main heading correctly", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "About Our Food Delivery App"
    );
  });

  it("renders the introductory paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(/Welcome to our food delivery app/i)
    ).toBeInTheDocument();
  });

  it('renders the "How It Works" section heading', () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 3, name: /How It Works/i })
    ).toBeInTheDocument();
  });

  it('renders all steps in "How It Works"', () => {
    render(<About />);
    const steps = [
      "Browse our extensive menu of cuisines and restaurants.",
      "Select your favorite dishes and add them to your cart.",
      "Choose your delivery location and preferred payment method.",
      "Place your order and wait for your food to arrive!",
    ];
    steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it('renders the "Our Features" section heading', () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 3, name: /Our Features/i })
    ).toBeInTheDocument();
  });

  it('renders all features in "Our Features"', () => {
    render(<About />);
    const features = [
      "Wide selection of restaurants and cuisines",
      "Real-time order tracking",
      "Secure payment options",
      "Loyalty rewards program",
      "24/7 customer support",
    ];
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders the "Get Started Today" section heading', () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 3, name: /Get Started Today/i })
    ).toBeInTheDocument();
  });
});
