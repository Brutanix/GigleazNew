import React, { useState,useEffect } from "react";
import "./jobview.css";
import Footer from "../../utils/footer";
import { Link } from "react-router-dom";

const JobView = () => {
  const [activeTab, setActiveTab] = useState("description");
  console.log(activeTab);
  const changeActiveTab = (value) => {
    setActiveTab(value);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const hardRefresh=()=>{
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="jobview-bg-container">
        <div className="jobview-top-bg">
          <Link className="link-class-job-card" to="/">
            <button>
              <svg
              className="svg-jobview"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_1639_34444)">
                  <rect
                    x="32"
                    width="32"
                    height="32"
                    rx="8"
                    transform="rotate(90 32 0)"
                    fill="#29AB87"
                  />
                  <path
                    d="M18.9983 10L12.9983 16L18.9983 22"
                    stroke="white"
                    stroke-width="2.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1639_34444">
                    <rect
                      x="32"
                      width="32"
                      height="32"
                      rx="8"
                      transform="rotate(90 32 0)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              Go Back
            </button>
          </Link>

          <p>Job Role Name at Gigleaz</p>
        </div>

        <div className="role-details-bg role-details-bg-small">
            <div className="role-detail-bg">
              <p className="role-key">Role</p>
              <p className="role-value">Product Designer</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Department</p>
              <p className="role-value">Design</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Type</p>
              <p className="role-value">Full Time</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Location</p>
              <p className="role-value">North America</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Compensation</p>
              <p className="role-value">₹15L – ₹19L</p>
            </div>
          </div>

        <div className="jobview-bottom-bg">
          <h1>Application Form</h1>

          <div className="job-toggle-btn-wraper">
            <div className="job-toggle-btn">
              <div
                onClick={() => changeActiveTab("description")}
                className={`toggle-tabs ${
                  activeTab == "description" ? "selected-tab" : ""
                }`}
              >
                Description
              </div>
              <div
                onClick={() => changeActiveTab("application")}
                className={`toggle-tabs ${
                  activeTab == "application" ? "selected-tab" : ""
                }`}
              >
                Application
              </div>
            </div>
          </div>

          <div className="role-details-bg role-details-bg-large">
            <div className="role-detail-bg">
              <p className="role-key">Role</p>
              <p className="role-value">Product Designer</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Department</p>
              <p className="role-value">Design</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Type</p>
              <p className="role-value">Full Time</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Location</p>
              <p className="role-value">North America</p>
            </div>
            <div className="role-detail-bg">
              <p className="role-key">Compensation</p>
              <p className="role-value">₹15L – ₹19L</p>
            </div>
          </div>

          <div className="variable-scree-bg">
            {activeTab == "description" ? (
              <>
                <div className="description-faqs-bg">
                  <div className="description-faq-bg">
                    <h1>Who Are We?</h1>
                    <p>
                      Gigleaz is a forward-thinking company dedicated to
                      bridging the gap between talent and opportunity through
                      innovative assessment solutions. Our mission is to empower
                      individuals and businesses with the tools they need to
                      succeed in today's competitive landscape.
                    </p>
                  </div>
                  <div className="description-faq-bg">
                    <h1>What Do We Do?</h1>
                    <p>
                      We provide comprehensive assessment tests that help job
                      seekers demonstrate their skills and secure positions at
                      top companies. Our platform is designed to evaluate
                      aptitude, domain-specific knowledge, and professional
                      values, ensuring that our users are well-prepared for the
                      job market.
                    </p>
                  </div>
                  <div className="description-faq-bg">
                    <h1>Why You Should Apply</h1>
                    <ul>
                      <li>
                        <span>Innovative Environment: </span> At Gigleaz, we
                        foster a culture of creativity and innovation. You'll be
                        working with a team that's passionate about making a
                        difference
                      </li>
                      <li>
                        <span>Professional Growth: </span> We offer
                        opportunities for continuous learning and development,
                        helping you advance your career.
                      </li>
                      <li>
                        <span>Impactful Work: </span>Your work will directly
                        contribute to helping individuals secure meaningful
                        employment.
                      </li>
                    </ul>
                  </div>
                  <div className="description-faq-bg">
                    <h1>Who Are We?</h1>
                    <ul>
                      <li>
                        <span>Comfort Zone: </span> If you prefer a routine and
                        unchallenging work environment, this role might not be
                        for you. We thrive on tackling complex problems and
                        constantly pushing boundaries.
                      </li>
                      <li>
                        <span>Lack of Adaptability: </span> Our fast-paced
                        environment requires adaptability and a willingness to
                        embrace change. If you're resistant to change, you might
                        find it challenging to thrive here.
                      </li>
                    </ul>
                  </div>
                  <div className="description-faq-bg">
                    <h1>Your Qualifications</h1>
                    <ul>
                      <li>
                        3+ years of experience in product design, with a strong
                        portfolio showcasing your work.
                      </li>
                      <li>
                        Proficiency in design tools such as Sketch, Figma, Adobe
                        Creative Suite, etc.
                      </li>
                      <li>
                        Ability to create innovative and user-friendly designs
                        that meet user needs.
                      </li>
                      <li>
                        Excellent communication and teamwork skills to work
                        effectively with cross-functional teams.
                      </li>
                      <li>Strong analytical and problem-solving abilities.</li>
                    </ul>
                  </div>
                  <div className="description-faq-bg">
                    <h1>Who Are We?</h1>
                    <ol className="order-faqs">
                      <li>
                        <span>Application Review:</span>Our team will review
                        your application and portfolio.
                      </li>
                      <li>
                        <span> Initial Interview:</span> A video interview with
                        our HR team to discuss your experience and
                        qualifications.
                      </li>
                      <li>
                        <span>Design Challenge: </span>A take-home design
                        challenge to assess your problem-solving and design
                        skills.
                      </li>
                      <li>
                        <span>Final Interview:</span> An interview with our
                        design team and stakeholders to discuss your design
                        challenge and fit within our team.
                      </li>
                      <li>
                        <span>Offer:</span> If selected, we'll extend an offer
                        and discuss the next steps.
                      </li>
                    </ol>
                  </div>

                  <div className="description-faq-bg">
                    <h1>Your Qualifications</h1>
                    <ol className="order-faqs">
                      <li>
                        We offer a competitive salary based on your experience
                        and skills.
                      </li>
                      <li>
                        Comprehensive health insurance plans to keep you and
                        your family healthy.
                      </li>
                      <li>
                        We believe in work-life balance and offer flexible work
                        hours.
                      </li>
                      <li>
                        Opportunities for continuous learning and professional
                        growth.
                      </li>
                      <li>
                        A supportive and collaborative work environment where
                        your contributions are valued.
                      </li>
                    </ol>
                  </div>
                  <div className="description-faq-bg">
                    <p className="join-para">
                      Join Gigleaz and help us revolutionize the way talent
                      meets opportunity!
                    </p>
                  </div>
                </div>

                <div className="job-apply-btn-container">
                  <button onClick={()=>{changeActiveTab("application");hardRefresh()}}>
                    Let`s Apply
                    <svg className="svg-jobview"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1538_26150)">
                        <rect
                          y="32"
                          width="32"
                          height="32"
                          rx="12"
                          transform="rotate(-90 0 32)"
                          fill="#29AB87"
                        />
                        <path
                          d="M13.0017 22L19.0017 16L13.0017 10"
                          stroke="white"
                          stroke-width="2.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1538_26150">
                          <rect
                            y="32"
                            width="32"
                            height="32"
                            rx="12"
                            transform="rotate(-90 0 32)"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                <form className="form-bg-container">
                  <div className="widgets-wraper">
                    <div className="form-widget">
                      <label>First Name</label>
                      <input type="text" />
                    </div>

                    <div className="form-widget">
                      <label>Last Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="widgets-wraper">
                    <div className="form-widget">
                      <label>Date of Birth</label>
                      <input type="text" />
                    </div>

                    <div className="form-widget">
                      <label>Gender</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="widgets-wraper">
                    <div className="form-widget">
                      <label>EmailID</label>
                      <input type="text" />
                    </div>

                    <div className="form-widget">
                      <label>Phone Number</label>
                      <div className="phone-number-bg">
                        <div className="phone-icons-bg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="18"
                            viewBox="0 0 27 18"
                            fill="none"
                          >
                            <rect width="27" height="18" rx="3" fill="white" />
                            <rect width="27" height="6" fill="#FF9933" />
                            <rect y="6" width="27" height="6" fill="white" />
                            <rect y="12" width="27" height="6" fill="#108809" />
                          </svg>
                          <span>+91</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_1623_33299)">
                              <path
                                d="M8 9L12 5L16 9"
                                stroke="#969696"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16 15L12 19L8 15"
                                stroke="#969696"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1623_33299">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div
                            style={{
                              height: "20px",
                              borderLeft: "1px solid #dcdcdc",
                            }}
                          ></div>
                        </div>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="single-form-widget form-widget ">
                    <label>Full Address</label>
                    <input type="text" />
                  </div>

                  <div className="widgets-wraper">
                    <div className="form-widget">
                      <label>City</label>
                      <input type="text" />
                    </div>

                    <div className="form-widget">
                      <label>State</label>
                      <input type="text" />
                    </div>

                    <div className="form-widget">
                      <label>Pin code</label>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="widgets-wraper">
                    <div className="form-widget">
                      <label>LinkedIn URL</label>
                      <input type="text" />
                    </div>

                    <div className="form-widget">
                      <label>Personal Website URL (if you have any)</label>
                      <input type="text" />
                    </div>
                  </div>
                </form>

                <div className="resume-upload-container">
                  <p>Resume</p>
                  <div className="resume-upload-bg">
                    <div className="resume-input">
                      <label for="resume">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                        >
                          <rect
                            x="0.199219"
                            width="32"
                            height="32"
                            rx="8"
                            fill="white"
                          />
                          <path
                            d="M16.1976 10.6641V21.3307M16.1976 10.6641C15.264 10.6641 13.5196 13.3231 12.8643 13.9974M16.1976 10.6641C17.1312 10.6641 18.8756 13.3231 19.5309 13.9974"
                            stroke="#29AB87"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Upload Files
                      </label>
                      <input type="file" name="photo" id="resume" />
                    </div>
                    <p>Drag or Drop Files</p>
                  </div>
                </div>

                <div className="job-apply-btn-container submit-application-container">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1538_26150)">
                        <rect
                          y="32"
                          width="32"
                          height="32"
                          rx="12"
                          transform="rotate(-90 0 32)"
                          fill="#29AB87"
                        />
                        <path
                          d="M13.0017 22L19.0017 16L13.0017 10"
                          stroke="white"
                          stroke-width="2.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1538_26150">
                          <rect
                            y="32"
                            width="32"
                            height="32"
                            rx="12"
                            transform="rotate(-90 0 32)"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Submit Application
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JobView;
