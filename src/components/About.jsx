const About = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg font-sans">
      <h2 className="text-3xl text-gray-800 mb-4 text-center">
        About Our Food Delivery App
      </h2>
      <p className="text-base leading-relaxed text-gray-600 my-2">
        Welcome to our food delivery app, where we bring the best local
        restaurants right to your doorstep! Our mission is to make it easy and
        convenient for you to enjoy delicious meals from your favorite eateries
        without the hassle of going out.
      </p>

      <h3 className="text-2xl text-blue-600 mt-6">How It Works</h3>
      <ol className="list-decimal list-inside my-4">
        {[
          "Browse our extensive menu of cuisines and restaurants.",
          "Select your favorite dishes and add them to your cart.",
          "Choose your delivery location and preferred payment method.",
          "Place your order and wait for your food to arrive!",
        ].map((item, index) => (
          <li
            key={index}
            className="bg-gray-200 p-2 rounded-md my-2 transition duration-300 hover:bg-gray-300"
          >
            {item}
          </li>
        ))}
      </ol>

      <h3 className="text-2xl text-blue-600 mt-6">Our Features</h3>
      <ul className="list-disc list-inside my-4">
        {[
          "Wide selection of restaurants and cuisines",
          "Real-time order tracking",
          "Secure payment options",
          "Loyalty rewards program",
          "24/7 customer support",
        ].map((feature, index) => (
          <li
            key={index}
            className="bg-gray-200 p-2 rounded-md my-2 transition duration-300 hover:bg-gray-300"
          >
            {feature}
          </li>
        ))}
      </ul>

      <h3 className="text-2xl text-blue-600 mt-6">Why Choose Us?</h3>
      <p className="text-base leading-relaxed text-gray-600 my-2">
        We are committed to providing you with the best possible food delivery
        experience. Our team of dedicated professionals works tirelessly to
        ensure that your orders are processed quickly and accurately, and that
        your food arrives fresh and hot every time.
      </p>

      <p className="text-base leading-relaxed text-gray-600 my-2">
        We also believe in supporting our local community, which is why we
        partner with the best local restaurants and businesses to bring you the
        finest quality ingredients and flavors.
      </p>

      <h3 className="text-2xl text-blue-600 mt-6">Get Started Today</h3>
      <p className="text-base leading-relaxed text-gray-600 my-2">
        Download our app or visit our website to start exploring our menu and
        placing your orders. We look forward to serving you and making your
        dining experience a delightful one!
      </p>
    </div>
  );
};

export default About;
