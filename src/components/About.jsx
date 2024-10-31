const About = () => {
  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow-xl font-sans transition-transform transform hover:scale-105">
      <h2 className="text-4xl text-gray-800 mb-6 text-center font-semibold">
        About Our Food Delivery App
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 my-4">
        Welcome to our food delivery app, where we bring the best local
        restaurants right to your doorstep! Our mission is to make it easy and
        convenient for you to enjoy delicious meals from your favorite eateries
        without the hassle of going out.
      </p>

      <h3 className="text-3xl text-blue-600 mt-8 mb-4 font-semibold">
        How It Works
      </h3>
      <ol className="list-decimal list-inside space-y-3">
        {[
          "Browse our extensive menu of cuisines and restaurants.",
          "Select your favorite dishes and add them to your cart.",
          "Choose your delivery location and preferred payment method.",
          "Place your order and wait for your food to arrive!",
        ].map((item, index) => (
          <li
            key={index}
            className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md transition duration-300 hover:bg-blue-100"
          >
            {item}
          </li>
        ))}
      </ol>

      <h3 className="text-3xl text-blue-600 mt-8 mb-4 font-semibold">
        Our Features
      </h3>
      <ul className="list-disc list-inside space-y-3">
        {[
          "Wide selection of restaurants and cuisines",
          "Real-time order tracking",
          "Secure payment options",
          "Loyalty rewards program",
          "24/7 customer support",
        ].map((feature, index) => (
          <li
            key={index}
            className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md transition duration-300 hover:bg-blue-100"
          >
            {feature}
          </li>
        ))}
      </ul>

      <h3 className="text-3xl text-blue-600 mt-8 mb-4 font-semibold">
        Why Choose Us?
      </h3>
      <p className="text-lg leading-relaxed text-gray-700 my-4">
        We are committed to providing you with the best possible food delivery
        experience. Our team of dedicated professionals works tirelessly to
        ensure that your orders are processed quickly and accurately, and that
        your food arrives fresh and hot every time.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 my-4">
        We also believe in supporting our local community, which is why we
        partner with the best local restaurants and businesses to bring you the
        finest quality ingredients and flavors.
      </p>

      <h3 className="text-3xl text-blue-600 mt-8 mb-4 font-semibold">
        Get Started Today
      </h3>
      <p className="text-lg leading-relaxed text-gray-700 my-4">
        Download our app or visit our website to start exploring our menu and
        placing your orders. We look forward to serving you and making your
        dining experience a delightful one!
      </p>
    </div>
  );
};

export default About;
