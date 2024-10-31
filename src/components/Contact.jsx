import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6 pr-10">
        <h2 className="text-center text-2xl mb-5">Contact Us</h2>
        {submitted ? (
          <p className="text-center text-green-600 text-lg mt-5">
            Thank you for your message! We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-blue-600 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-blue-600 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 font-bold">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-base focus:border-blue-600 transition duration-300 resize-y min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 rounded-md bg-blue-600 text-white text-base cursor-pointer transition duration-300 hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
