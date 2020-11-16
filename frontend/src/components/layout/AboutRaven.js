import React from "react"

const AboutRaven = () => {
  return (
    <div className="aboutRavenCard">
      <div className="card">
        <div className="card-content">
          <h5>Hello and Welcome to Raven!</h5>
          <h5>My name is Okan, and I'm a fullstack web developer. </h5>
          <h6>To contact me, you can mail okanyldrmop@gmail.com</h6>
          <hr />
          <h6>For project files : https://github.com/ragokan/raven</h6>
          <h6>To build this blog, I used these below;</h6>
          <ul class="collection">
            <li class="collection-item">Javascript</li>
            <li class="collection-item">React</li>
            <li class="collection-item">Express</li>
            <li class="collection-item">MongoDB</li>
            <li class="collection-item">Firebase</li>
            <li class="collection-item">MaterializeCSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutRaven
