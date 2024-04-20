import React from "react";
import "./FormComponent.css";
import { useNavigate } from "react-router";

const Form = ({ data }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = React.useState(data);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    let path = "";
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    // <form onSubmit={handleSubmit} className="form-main">
    //   {Object.keys(data).map((key) => (
    //     <div key={key}>
    //       <label htmlFor={key}>{key}</label>
    //       <input
    //         type="text"
    //         id={key}
    //         name={key}
    //         value={formData[key]}
    //         onChange={handleChange}
    //       />
    //     </div>
    //   ))}
    //   <button type="submit">Submit</button>
    // </form>
    <div>
      <div class="form-container p-8">
        <div class="logo-container">User Data</div>

        <form class="form" onSubmit={handleSubmit}>
          {Object.keys(data).map((key) => (
            <>
              <div class="form-group">
                <label htmlFor={key}>{key}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder="Enter the data."
                  required=""
                />
              </div>
            </>
          ))}
          <button class="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
