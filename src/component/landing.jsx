import React from 'react';
import { useNavigate } from 'react-router-dom';
const landing = () => {
  const navigate = useNavigate();
  // Define your inline styles as JavaScript objects
  const headerStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
  };

  const sectionStyle = {
    height: '500px',
    backgroundColor: '#87CEFA',
    color: 'white',
    padding: '20px',
  };

  const boxTextStyle = {
    float: 'right',
  };

  const buttonStyle = {
    borderRadius: '20px',
    backgroundColor: '#035b84',
  };

  const newsletterStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    color: '#035b84',
    height: '50px',
  };
  
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    backgroundColor: 'lightgray',
    padding: '80px',
  };
  const f1 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    color: 'ightgray',
    height: '150px',
  };

  const c1 = {
    margin: '5px 0', // Adjust top and bottom margins
  };

  const addressStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    color: '#035b84',
    height: '50px',
  };
  
  const h4Style = {
    margin: '0', // Remove top and bottom margins
  };
  
  const pStyle = {
    margin: '0', // Remove top and bottom margins
  };
  
  const copyrightStyle = {
    color: '#035b84',
    height: '50px',
  };

  const formStyle = {
    display: 'flex',               // Use flexbox layout
    justifyContent: 'center',     // Center content horizontally
    alignItems: 'center',         // Center content vertically
    flexDirection: 'column',      // Stack children vertically
    height: '25%',               // Fill the entire parent container height
  };

  return (
    <div>
      {/* Header */}
      <div style={headerStyle}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            simple header
          </a>
          {/* ... rest of your header code */}
        </nav>
      </div>

      {/* Body */}
      <main>
        <div style={sectionStyle}>
          <section className="section_1">
            <div style={boxTextStyle}>
              <img
                src="gambar/ganbar5.jpg"
                style={{ float: 'right' }}
                width="300px"
                height="300px"
              />
              <h1 className="tittle">Better Solution For Your Bussiness</h1>
              <p className="sub-tittle">
                We are a team of talented making websites with Bootstrap
              </p>
              <a href="createProduct.html">
                <a
                  className="btn btn-primary"
                  href="createProduct.html"
                  role="button"
                  style={buttonStyle}
                >
                  Get Started
                </a>
                <a href="#" className="text-white">
                  Watch Video
                </a>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <main>
        <div style={footerStyle}>
            <section style={newsletterStyle}>
              <h4>Join Our Newsletter</h4>
            </section>
            <section>
              <p>"porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"</p>
            </section>
            <section style={formStyle}>
              <div className="box-text">
                <form className="form-inline">
                  <div className="form-group mb-2">
                    <input type="text" id="name" name="name" style={{ borderRadius: '20px' }} required minLength="6" maxLength="8" />
                    <a href="createProduct.html">
                     <button onClick={ () => navigate('/create') } className="btn btn-primary" style={{ borderRadius: '20px' }}>Get Started</button>
                    </a>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
        <hr style={{ width: '150%', textAlign: 'left', marginLeft: '0' }} />
        <main>
        <div style={footerStyle}>
          <div style={addressStyle}>
            <h4 style={h4Style}>Devita Nela Aprilia</h4>
            <p style={pStyle}>A108 Adam Street<br />
              New York, NY 535022<br />
              United States</p>
            <p style={pStyle}>
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> dnelaapri@gmail.com
            </p>
          </div>
        </div>
        </main>
        <hr style={{ width: '150%', textAlign: 'left', marginLeft: '0' }} />
        <div style={f1}>
          <section className="section_1">
            <div style={c1}>
              <p>
                <strong>@Copy Right Devita Nela Aprilia All right Reserved</strong>
              </p>
              <p> Desain By Devita Nela Aprilia</p>
              <a href="mailto:hege@example.com">dnelaapri@gmail.com</a>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};


export default landing;
