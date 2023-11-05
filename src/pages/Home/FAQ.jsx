
const FAQ = () => {
    return (
      <div>
        <h1 className="text-5xl font-bold text-center my-10">Frequently Asked Questions
</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="collapse bg-base-200 mb-5">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                What is E-Group Study?
              </div>
              <div className="collapse-content">
                <p>
                  E-Group Study is an online platform designed to facilitate
                  group study and collaboration among students. It allows you to
                  create and submit assignments, collaborate with peers, and
                  access study resources.
                </p>
              </div>
            </div>
            <div className="collapse bg-base-200 mb-5">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                How do I get started with E-Group Study?
              </div>
              <div className="collapse-content">
                <p>
                  To get started, simply register for an account or log in if
                  you already have one. Once logged in, you can create
                  assignments, join study groups, and explore various features.
                </p>
              </div>
            </div>
            <div className="collapse bg-base-200 mb-5">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Can I invite friends to join my study group?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely! You can invite friends and classmates to join your
                  study group by sharing a group link or sending them an
                  invitation.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="collapse bg-base-200 mb-5">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I submit assignments on E-Group Study?
              </div>
              <div className="collapse-content">
                <p>
                  Submitting assignments is easy. Just go to the My Assignments
                  page, select the assignment you want to submit, and follow the
                  submission process, which may include attaching files or
                  entering text.
                </p>
              </div>
            </div>
            <div className="collapse bg-base-200 mb-5">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Is my data and personal information secure on E-Group Study?
              </div>
              <div className="collapse-content">
                <p>
                  We take your data security seriously. Your information is
                  encrypted, and we follow industry standards to protect your
                  privacy. You can review our privacy policy for more details.
                </p>
              </div>
            </div>
            <div className="collapse bg-base-200 mb-5">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I access E-Group Study on mobile devices?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, E-Group Study is designed to be mobile-responsive. You
                  can access it on smartphones and tablets for a convenient
                  study experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;