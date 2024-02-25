import "./home.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { projectCards } from "../../helpers/projectCards";
import { GitHub } from "@mui/icons-material";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Home = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        alert("Success!");
        reset();
      })
      .catch((error) => alert(error));
  };

  const regEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // console.log(watch(register));

  // const [err, setErr] = useState(null);

  // const handleChange = (e) => {
  // 	setInputs(prev => ({
  // 		...prev, [e.target.name]: e.target.value
  // 	}));
  // };

  // const handleSubmit = async (e) => {
  // 	e.preventDefault();

  // 	if (err) { };

  // 	if (inputs.name === '' || inputs.email === '' || inputs.comment === '') {
  // 		return alert("Please fill out all fields.")
  // 	} else if (!regEmail.test(inputs.email)) {
  // 		return alert("Please enter a valid Email address.")
  // 	}
  // 	try {
  // 		await Axios.post("http://localhost:8800/", inputs);
  // 	} catch (err) {
  // 		setErr(err.response?.data)
  // 	}

  // 	setInputs({
  // 		name: '',
  // 		email: '',
  // 		comment: ''
  // 	});
  // 	alert("Message sent!");
  // }

  return (
    <div className="Home">
      <div className="Hero">
        <div className="InfoContainer">
          <div className="InfoText">
            <h1>Abhay Gupta</h1>
            <h2>Full Stack Web Developer. </h2>
            <p>
              Passionate about creating functional websites | Eager to
              contribute and grow professionally.
            </p>
            <a href="#message">
              <button className="InfoBtn">Get in Touch</button>
            </a>
          </div>
          <div className="InfoImg">
            <span></span>
          </div>
        </div>
      </div>
      <div className="Work">
        <h1>Over the months I've built a few projects...</h1>
        <div className="WorkContainer">
          {projectCards.map((project, index) => (
            <div className="ProjectCardContainer" key={index}>
              <img
                src={project.image}
                alt="Project-Logo"
                onClick={() => {
                  navigate(`/projects/${index}`);
                }}
              />
              <div>
                <h2>{project.title}</h2>
                <p>
                  {project.desc}
                  <br />
                </p>
                <span>
                  <a href={`/projects/${index}`}>Find out more...</a>
                  <a href={project.gitUrl}>
                    <GitHub />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Skill">
        <div className="SkillHead">
          <h1>Tech Stack</h1>
        </div>
        <div className="SkillContainer">
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="react"
            />
          </a>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
              alt="bootstrap"
            />
          </a>
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
            <img
              src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png"
              alt="tailwind"
            />
          </a>
          <a
            href="https://www.w3schools.com/html/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
              alt="html5"
            />
          </a>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt="css3"
            />
          </a>
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png"
              alt="sass"
            />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
              alt="nodejs"
            />
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <img
              src="https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png"
              alt="express"
            />
          </a>
          <a
            href="https://www.djangoproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/django.svg"
              alt="django"
              width="80"
              height="80"
            />
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              src="https://banner2.cleanpng.com/20180821/lyg/kisspng-mysql-workbench-database-mysql-cluster-5b7cdc87c3dd20.3638601015349095758023.jpg"
              alt="mysql"
            />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png"
              alt="mongoDB"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="javascript"
            />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
              alt="python"
            />
          </a>
          <a href="https://www.java.com" target="_blank" rel="noreferrer">
            <img
              src="https://app.codingrooms.com/assets/ide/java-original.svg"
              alt="java"
            />
          </a>
        </div>
      </div>
      <div className="MailMeHeader" id="message">
        <h1>Drop me a message!</h1>
        <p>Like my work or want to connect, just let me know.</p>
        <div className="MailMe-InnerContent">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Form-Row">
              {
                <input
                  className="Abhay FormInput"
                  placeholder="Your name."
                  {...register("name", { required: true, maxLength: 60 })}
                />
              }
              {errors.name?.type === "required" && (
                <p role="alert">Your name is required.</p>
              )}
              <input
                className="Abhay FormInput"
                placeholder="Your email address."
                {...register("email", {
                  required: true,
                  maxLength: 100,
                  pattern: regEmail,
                })}
              />
              {errors.email && <p> Please fill out this field correctly.</p>}
            </div>
            <div className="Form-Row">
              <textarea
                className="FormInput"
                placeholder="Hello, we would like to discuss about so and so position/project with you."
                {...register("comment", { required: true })}
              />
              {errors.comment && <p> Please fill out this field.</p>}
            </div>
            {/* <input className='SendButton' type='submit' /> */}
            <div className="BtnBody" type="submit">
              <div id="BtnContainer">
                <button className="Learn-More">
                  <span className="Circle" aria-hidden="true">
                    <span className="Icon Arrow"></span>
                  </span>
                  <span className="Button-Text">SEND</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
