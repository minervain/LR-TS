import { useFormik } from "formik";

import userSchema from "./Validation";

export default function SignUp(){

    const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
        initialValues:{
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          hobbies:[],
          country:'',
          password:'',
          passwordConfirm:'',
    
    
        }, onSubmit: values => {
          console.log(values);
        },
        validationSchema : userSchema
      })

      return (
        <div className="App">
        <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} onChange={handleChange}>
            <label htmlFor="firstName">First Name</label>
            <input name='firstName' placeholder="First Name"></input>
    
            <label htmlFor="lastName">Last Name</label>
            <input name='lastName' onChange={handleChange} />
    
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} type="email" onBlur={handleBlur}/>

            {errors.email && touched.email && <div className="errors">{errors.email} </div>}
            
            <br />
            <br />
            
            <label htmlFor='password'>Password</label>
            <input type="password" name='password' onChange={handleChange} onBlur={handleBlur}/>

            {errors.password && touched.password && <div className="errors">{errors.password} </div>}
    
            <br />
            <br />
    
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input type="password" name='passwordConfirm' onChange={handleChange} onBlur={handleBlur}/>

            {errors.passwordConfirm && touched.passwordConfirm && <div className="errors">{errors.passwordConfirm} </div>}
            <br />
            <br />
            
            <label className='radios' htmlFor='gender'>Male</label>
            <input type="radio" name="gender" value="male" onChange={handleChange} /> 
            <label  className='radios' htmlFor='gender'>Female</label>
            <input type="radio" name="gender" value="female" onChange={handleChange} /> 
            
            <br />
            <br />
            
            <div>
              <input type="checkbox" name="hobbies" value="Football" onChange={handleChange} />
              Football
            </div>
    
            <div>
              <input type="checkbox" name="hobbies" value="Reading" onChange={handleChange} />
              Reading
            </div>
    
            <div>
              <input type="checkbox" name="hobbies" value="Photography" onChange={handleChange}/>
              Photography
            </div>
    
            <br />
            <br />
    
            <select name='country' onChange={handleChange}>
              <option value="tr">Turkiye</option>
              <option value="UK">United Kingdom</option>
              <option value="USA">United State America</option>
            </select>
    
            <button type="submit">Submit</button>
    
            <br />
            <br />
            {JSON.stringify(values)}
    
    
          </form>
        </div>
      );
}