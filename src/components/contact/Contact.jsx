import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [runAnimation, setRunAnimation] = useState();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      await emailjs.sendForm(
        import.meta.env.VITE_APP_YOUR_SERVICE_ID,
        import.meta.env.VITE_APP_YOUR_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_YOUR_PUBLIC_KEY
      );
      setSending(false);
      setForm({ user_name: "", user_email: "", message: "" });
      alert("Thank You for Submiting Your mail \n I will get to you shortly");
    } catch (error) {
      console.log(error);
    }
  };
  const controlAnimation = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 2800) setRunAnimation(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlAnimation);
    return () => {
      window.removeEventListener("scroll", controlAnimation);
    };
  }, [lastScrollY]);
  return (
    <section className="contact-container" id="contact">
      <div
        className="form-container"
        style={{
          animation: `${runAnimation && "slideRight 1.5s ease forwards"}`,
        }}
      >
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="heading">
            <h4>Get in touch</h4>
            <h3>Contact.</h3>
          </div>
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
            />
          </label>
          <label>
            <span>Your email</span>
            <input
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
            />
          </label>
          <label>
            <span>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              required
            />
          </label>

          <button className="btn" type="submit">
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div
        className="image-container"
        style={{
          animation: `${runAnimation && "slideLeft 1.5s ease forwards"}`,
        }}
      >
        <img src="assets/5xDL.gif" alt="contact gif" />
      </div>
    </section>
  );
}
