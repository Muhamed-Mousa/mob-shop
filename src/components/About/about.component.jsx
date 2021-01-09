import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const [message, setMessage] = useState(
    "التحدي في الوصول الي حد الكمال و الاستمرار في الاذهال ."
  );

  const handleMessage = () => {
    setMessage('على مدى السنوات التسع الماضية قمنا بتحديات لتحقيق الكمال الحقيقي، مما جعلنا نصل إلى آفاق جديدة بمرور الوقت');
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Welcome Our Community</h2>
          <p>{message}</p>
          <button onClick={handleMessage}> vivo حول </button>
        </div>
      </div>
    </div>
  );
};

export default About;
