import "./subscribe.css";

const Subscribe = () => (
  <div className="page-container subscribe-page">
    <h1>Subscribe to EduMag</h1>
    <p>Get notified whenever a new issue is published.</p>

    <form
      className="subscribe-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
      />
      <button className="btn-primary">Subscribe</button>
    </form>
  </div>
);

export default Subscribe;
