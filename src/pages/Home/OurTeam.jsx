
const OurTeam = () => {
    return (
      <div>
        <h1 className="text-5xl font-bold text-center my-10">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Jhon Deo</h2>
              <figure>
                <img
                  src="https://i.ibb.co/WvsvMQR/user1.jpg"
                  alt=""
                  className="w-28 rounded-full"
                />
              </figure>
              <p>
                Jhon Deo is the driving force behind [Your Platform Name]. With
                a background in E_Group Study, he founded the platform to
                revolutionize the way we approach education. As the CEO, Jhon
                Deo provides strategic direction and ensures that the platform
                aligns with our mission.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Alison</h2>
              <figure>
                <img
                  src="https://i.ibb.co/b3fQXXD/user2.jpg"
                  alt=""
                  className="w-28 h-24 rounded-full"
                />
              </figure>
              <p>
                As our Chief Technology Officer, Alison brings his technical
                expertise to the forefront. He oversees the platforms
                technological infrastructure, ensuring a seamless and secure
                user experience.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">Andrea</h2>
              <figure>
                <img
                  src="https://i.ibb.co/CmXCmz9/user3.jpg"
                  alt=""
                  className="w-28 rounded-full"
                />
              </figure>
              <p>
                Andrea is our guiding light in matters of education. With a
                background in E_group Study, she curate educational content to
                ensure it meets the highest standards of quality and relevance.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurTeam;