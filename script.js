//your JS code here. If required.
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

/* Body */
body {
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Main layout */
.left, .right {
  width: 450px;
}

/* Left section */
.left img {
  width: 300px;
  margin-bottom: 20px;
}

.left p {
  font-size: 24px;
  color: #1c1e21;
}

/* Right section */
.right {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Inputs */
.right input {
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  font-size: 16px;
  border: 1px solid #dddfe2;
  border-radius: 6px;
}

/* Login button */
.submit {
  width: 100%;
  padding: 14px;
  font-size: 18px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.submit:hover {
  background-color: #166fe5;
}

/* Forgotten account */
.para {
  display: block;
  text-align: center;
  margin: 15px 0;
  color: #1877f2;
  text-decoration: none;
  font-size: 14px;
}

.para:hover {
  text-decoration: underline;
}

/* Create account button */
.signup {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  background-color: #42b72a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.signup:hover {
  background-color: #36a420;
}

