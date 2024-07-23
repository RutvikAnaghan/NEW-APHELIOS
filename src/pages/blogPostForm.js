import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import "react-quill/dist/quill.snow.css"; // Import React Quill styles

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ReactQuill from "react-quill"; // Import React Quill

export default function HomePage() {
  const [formData, setFormData] = useState({
    title: "",
    introduction: "",
    subheading1: "",
    content1: "",
    subheading2: "",
    bulletPoints: "",
    subheading3: "",
    content2: "",
    content3: "",
    conclusion: "",
    cta: "",
    metaDescription: "",
    authorBio: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleQuillChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    // Reset form
    setFormData({
      title: "",
      introduction: "",
      subheading1: "",
      content1: "",
      subheading2: "",
      bulletPoints: "",
      subheading3: "",
      content2: "",
      content3: "",
      conclusion: "",
      cta: "",
      metaDescription: "",
      authorBio: "",
      image: null,
    });
  };

  const imagePreview = formData.image ? URL.createObjectURL(formData.image) : null;

  return (
    <>
      <Helmet>
        <title>Aphelios Solution LLP - Software Development Partner</title>
        <meta
          name="google-site-verification"
          content="YTdwCrnCL_jKFS9VQQk8AS_DgBRg8giKnOgQE0--tV4"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="Aphelios Solution LLP provides comprehensive IT solutions, including Salesforce CRM consulting and custom software development for various industries."
        />
        <meta
          name="keywords"
          content="Aphelios, Salesforce development, CRM consulting, web development, IT services, Salesforce CRM, UI/UX, Application Development, Mobile App, Website, eCommerce, Salesforce development, Salesforce migration, Salesforce consulting, Salesforce implementation, Salesforce integration, Salesforce customization, Salesforce managed services, Salesforce support, Salesforce solutions, Salesforce experts, Salesforce Lightning development, Salesforce Apex development, Salesforce Visualforce development, Salesforce API integration, Salesforce data migration, Salesforce CRM, Salesforce automation, Salesforce mobile app development, Salesforce app development, Salesforce cloud services, Salesforce for healthcare, Salesforce for finance, Salesforce for retail, Salesforce for education, Salesforce for non-profits, Salesforce for real estate, Salesforce for manufacturing, Salesforce for logistics, Salesforce for telecom, Salesforce for insurance, Best Salesforce developers, Top Salesforce consultants, Certified Salesforce experts, Experienced Salesforce developers, Leading Salesforce development company, Affordable Salesforce services, Reliable Salesforce migration, Professional Salesforce implementation, Custom Salesforce solutions, Trusted Salesforce partner, Salesforce development in india, Salesforce migration services in india, Salesforce consultants in india, Salesforce development in surat, Salesforce migration services in surat, Salesforce consultants in surat, Salesforce development in Gujarat, Salesforce migration services in Gujarat, Salesforce consultants in Gujarat, Salesforce experts near me, Local Salesforce development company, How to migrate to Salesforce, Benefits of Salesforce development, Custom Salesforce app development, Salesforce integration best practices, Top Salesforce migration tools, Salesforce development trends, Choosing the right Salesforce consultant, Salesforce CRM customization, Salesforce Lightning migration, Salesforce data migration strategies"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Aphelios Solution LLP" />
        <link rel="canonical" href="https://www.apheliossolution.in" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.apheliossolution.com"
        />
      </Helmet>

      <Navbar />
      <main>
        <div style={styles.container}>
          <h2 style={styles.heading}>Create a New Blog Post</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="title">
                Title
              </label>
              <input
                style={styles.input}
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="introduction">
                Introduction
              </label>
              <ReactQuill
                id="introduction"
                name="introduction"
                value={formData.introduction}
                onChange={(value) => handleQuillChange("introduction", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="subheading1">
                Subheading 1
              </label>
              <input
                style={styles.input}
                type="text"
                id="subheading1"
                name="subheading1"
                value={formData.subheading1}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="content1">
                Content 1
              </label>
              <ReactQuill
                id="content1"
                name="content1"
                value={formData.content1}
                onChange={(value) => handleQuillChange("content1", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="subheading2">
                Subheading 2
              </label>
              <input
                style={styles.input}
                type="text"
                id="subheading2"
                name="subheading2"
                value={formData.subheading2}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="content2">
                Content 2
              </label>
              <ReactQuill
                id="content2"
                name="content2"
                value={formData.content2}
                onChange={(value) => handleQuillChange("content2", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="bulletPoints">
                Bullet Points
              </label>
              <ReactQuill
                id="bulletPoints"
                name="bulletPoints"
                value={formData.bulletPoints}
                onChange={(value) => handleQuillChange("bulletPoints", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="subheading3">
                Subheading 3
              </label>
              <input
                style={styles.input}
                type="text"
                id="subheading3"
                name="subheading3"
                value={formData.subheading3}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="content3">
                Content 3
              </label>
              <ReactQuill
                id="content3"
                name="content3"
                value={formData.content3}
                onChange={(value) => handleQuillChange("content3", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="conclusion">
                Conclusion
              </label>
              <ReactQuill
                id="conclusion"
                name="conclusion"
                value={formData.conclusion}
                onChange={(value) => handleQuillChange("conclusion", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="cta">
                CTA
              </label>
              <input
                style={styles.input}
                type="text"
                id="cta"
                name="cta"
                value={formData.cta}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="metaDescription">
                Meta Description
              </label>
              <ReactQuill
                id="metaDescription"
                name="metaDescription"
                value={formData.metaDescription}
                onChange={(value) => handleQuillChange("metaDescription", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="authorBio">
                Author Bio
              </label>
              <ReactQuill
                id="authorBio"
                name="authorBio"
                value={formData.authorBio}
                onChange={(value) => handleQuillChange("authorBio", value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="image">
                Upload Image
              </label>
              <input
                style={styles.fileInput}
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
              {imagePreview && (
                <div style={styles.imagePreviewContainer}>
                  <img src={imagePreview} alt="Image Preview" style={styles.imagePreview} />
                </div>
              )}
            </div>
            <button type="submit" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
      <Switcher />
    </>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "70px auto",
    padding: "2rem",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    marginBottom: ".5rem",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: ".5rem",
    fontSize: "1rem",
    border: "1px solid gray",
    borderRadius: "10px",
  },
  textarea: {
    width: "100%",
    padding: ".5rem",
    fontSize: "1rem",
    minHeight: "100px",
    border: "1px solid gray",
    borderRadius: "10px",
  },
  fileInput: {
    width: "100%",
    padding: ".5rem",
    fontSize: "1rem",
    border: "1px solid gray",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  imagePreviewContainer: {
    marginTop: "1rem",
    textAlign: "center",
  },
  imagePreview: {
    maxWidth: "100%",
    borderRadius: "10px",
  },
};
