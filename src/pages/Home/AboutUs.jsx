const AboutUs = () => {
    return (
      <div>
        <h1 className="text-5xl font-bold text-center my-10">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-10 pt-0 shadow-xl">
            <img
              src="https://i.ibb.co/71xvgLX/mission.png"
              alt=""
              className="w-52 mx-auto"
            />
            <h3 className="text-3xl font-bold text-center my-10">
              Our Mission
            </h3>
            <p>
              At E_Group Study, we are on a mission to transform the traditional
              approach to learning by fostering a dynamic and collaborative
              online group study environment. We believe in the power of
              collective knowledge and aim to provide a platform where students
              and learners can come together to share, learn, and grow.
            </p>
          </div>
          <div className="p-10 pt-0 shadow-xl">
            <img
              src="https://i.ibb.co/gTQX8B9/who-we-are.webp"
              alt=""
              className="w-32 mx-auto"
            />
            <h3 className="text-3xl font-bold text-center my-10">Who We Are</h3>
            <p>
              E_Group Study was founded by a team of passionate educators and
              technology enthusiasts with a shared vision for enhancing the
              learning experience. Our diverse team brings together expertise in
              education, technology, and community building to create a platform
              that caters to the unique needs of every learner.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;