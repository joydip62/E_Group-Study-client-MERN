const ContactUs = () => {
  return (
    <div className="hero bg-base-100 mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6">
            Have a question or need assistance? Our team is here to help. Reach
            out to us for general inquiries, feedback, or anything else youd
            like to share.
          </p>
          <p>Email: careers@egroup.com</p>
          <p>
            Visit Us: <b>E_Group</b> <br />
            Street: 185 Arlington Avenue <br />
            City: Magnolia <br />
            Zip code: 71753 <br />
            Country: United States
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Send your message to us</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Type here"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
