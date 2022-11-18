import {Link} from 'react-router-dom'
import { useFormik } from "formik";
import "./creat.css";
export default function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (!values.name);
      if (!values.email);
      if (!values.password);
      alert(`Account Created Successfull`);
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "*Required!";
      } else if (!/^[A-Za-z]+$/i.test(values.name)) {
        errors.name = <p style={{ color: "black" }}>*Required</p>;
      }
      if (!values.email) {
        errors.email = <p style={{ color: "black" }}>Required!</p>;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = <p style={{ color: "black" }}>***Required</p>;
      }
      if (!values.password) {
        errors.password = "Required!";
      } else if (values.password.length < 4) {
        errors.password = (
          <p style={{ color: "black" }}>Must be 4 characters or less</p>
        );
      }
      return errors;
    }
  });

  return (
    <>
    
      <div style={{
	      margin: 'auto',
 	      marginLeft: '300px',
        color:'bule'
              	}}>
        <br/>
          <form id="h"  onSubmit={formik.handleSubmit}>
          <h1>CUSTOMER</h1>
            <div class="mb-3">
              <label className="form-label">Name:</label>
              <input
                class="form-control"
                id="name"
                name="name"
                type="text"
                maxlength="10"
                placeholder="Enter Your Name..."
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </div><br/>
            <div class="mb-3">
              <label class="form-label"> <span>Email Address:</span> </label>
              <input
                class="form-control"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Mail..."
                onChange={formik.handleChange}
                value={formik.values.email}
              /><br/>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <br/>
            </div><br/>
            <div class="mb-3">
              <label class="form-label">Password: </label>
              <input
                class="form-control"
                maxlength="5"
                type="password"
                name="password"
                placeholder="Enter Your Password..."
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <br/>
            <Link onClick={(e)=>(!formik.values.email || !formik.values.password) ? e.preventDefault :null  } 
             to={`/MainPage`} > 
            <button type="submit" class="btn btn-primary" disabled={!formik.values.password}>
              Submit
            </button>
            <br/>
            </Link>
           
            <br/>
      
          </form>
          
      
        </div>
    </>
  );
}
