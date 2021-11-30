import React from 'react'
let navigate = useNavigate();


const ForgotPassword = () => {
    return (
        <div>
                <div className="auth">
      <header >
        <Nav></Nav>
      </header>

      <main className="auth-main sign-in-main">
        <div className="container">
          <div className="auth-main__row row">
            <div
              className="auth-main__row__left-col col-sm-7 col-12"
              id="borders"
            >
             

              <h1>
                Forgot Your Password? <span className="ids">Enter the email you have signed up with</span>{" "}
              </h1>
            </div>
            <div className="auth-main__row__right-col col-sm-5 col-12">
             
              <form action="#">
                <label>
                  <label>
                    Email Address
                    <input
                      onChange={(event) => {
                        validateEmail(event.target.value) === true
                          ? setEmail(event.target.value)
                          : setEmail(event.target.value);
                          setMessage('')
                      }}
                      type="email"
                      name="email"
                      required
                      style={{
                        border:
                          email === ""
                            ? ""
                            : validateEmail(email) === true
                            ? "solid 1px #707070"
                            : "1px solid red",
                      }}
                    />
                  </label>
                

                  <button className="forget-password" onClick={()=>{navigate('/user/login') }}>Get password</button>
                </label>
              </form>
              <div className="different-auth">
                <span>
                  If you don't have an account, Please create an account below
                </span>
                <a
                  className="main-btn_transparent sign-up-btn"
                  onClick = {()=>{    navigate('/user/registration')}}
                >
                    
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
        </div>
    )
}

export default ForgotPassword
