import "../css/about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">

        <h2>🐶 About Dogs</h2>

        <p>
          Dogs are one of the most loyal and friendly animals in the world.
          They have been companions to humans for thousands of years and are
          known for their intelligence, obedience, and emotional connection.
        </p>

        <p>
          There are hundreds of dog breeds across the world, each with unique
          characteristics, behaviors, and purposes. Some dogs are used for
          security, some for rescue operations, and many as loving pets.
        </p>

        <h3>🚀 About This Application</h3>

        <p>
          This Dog Manager application allows users to manage dog breed data
          efficiently. You can search, create, update, and delete dog records
          in a simple and user-friendly interface.
        </p>

        <ul>
          <li>🔍 Search dogs by breed</li>
          <li>➕ Create new dog entries</li>
          <li>✏️ Update sub-breeds</li>
          <li>🗑️ Delete dog records</li>
        </ul>

        <p>
          This project is built using modern web technologies including
          React for frontend and Node.js with MongoDB for backend.
        </p>

        <div className="footer">
          <p>✨ Thank you for using Dog Manager!</p>
          <h4>👨‍💻 Created by Abhishek Tarra</h4>
        </div>

      </div>
    </div>
  );
}

export default About;