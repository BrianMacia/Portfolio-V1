import React from "react";
import { useSelector } from "react-redux";
import "../styles/Information.css";
import iSequelize from "../assets/icon-Sequelize.svg";
import iExpress from "../assets/icon-express.svg";



/* e hace  -/-<a href="https://certificates.academlo.com/en/verify/60635838424675"></a> pero es asi */

const Information = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section
      id="Information"
      className={`${active === "Information" && "active"}`}
    >
      <h2 className="caption">Información</h2>
      <p className="paragraph">
        Algunos datos importantes sobre mi vida profesional.
      </p>
<div className="education">
        <h2 className="secondary-subtitle">
          <i className="bx bxs-graduation bx-tada bx-flip-horizontal"></i>
          Educación
        </h2>


        <ul>
          
          <li className="card-education">
            <span>JUNIO_2022 - FEBRERO_2023</span>
            <h4>Academblo</h4>
            <h6>Bootcamp-Mexico</h6>
            <p>Programación Web Full-Stack</p>
            
          </li>

          
          <li className="card-education">
            <h4>CERTIFICADOS:</h4>  
    </li>

  <div className="myInfoCard01">
      <div>
          <span>Full Stack Web  </span> 
          <p className="myInfoCardText">Certificado de programa de desarrollo web Full Stack </p>
        </div>
        
      </div>

    <li className="card-education">
    
            <span><a href="https://certificates.academlo.com/en/verify/60635838424675"><h1>VERIFICAR CERTIFICADO EN WEB</h1></a></span>
    </li>


    




    
  <div className="myInfoCard02">
   <div>
   
      <span>Fundamentos Web</span>
        <p className="myInfoCardText">Certificado de fundamentos en HTML, CSS y Javascript</p>
    </div>
  </div>

  <li className="card-education">
 
            <span><a href="https://certificates.academlo.com/en/verify/64738374161194"><h1>VERIFICAR CERTIFICADO EN WEB</h1></a></span>
    </li>












    

   <div className="myInfoCard03">
   <div>
     <span>React</span>
     <p className="myInfoCardText">Certificado en el desarrollo front-end con el módulo React</p>
    </div>
  </div>


  <li className="card-education">
  
            <span><a href="https://certificates.academlo.com/en/verify/44295574101172"><h1>VERIFICAR CERTIFICADO EN WEB</h1></a></span>
            
    </li>











    

   <div className="myInfoCard04">
     <div>
          <span>Node.js</span>
          <p className="myInfoCardText">Certificado en desarrollo Back-End con Node.js</p>
     </div>
    </div>
    
    <li className="card-education">
    
            <span><a href="https://certificates.academlo.com/en/verify/01441593906296"><h1>VERIFICAR CERTIFICADO EN WEB</h1></a></span>
    </li>


        
        </ul>
</div>
       




      <div className="skill">
        <h2 className="secondary-subtitle">
          <i className="bx bxs-wrench bx-tada"></i>Habilidades
        </h2>
        <p className="paragraph">
          Diferentes habilidades técnicas y sociales que aprendí durante mi
          proceso de Educación.
        </p>
        <div className="code-skill">
          <h2 className="skills-section-title">Código</h2>
          <div className="code-skill-container ">
            <div className="code-skills-card btn-cursor-hover">
              <input type="radio" name="acc" id="acc1" />
              <label htmlFor="acc1" className="btn-cursor-hover">
                <h4>
                  <i className="bx bx-code-alt"></i>
                </h4>
                <h5>Desarrollo FrontEnd</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-html5"></i>
                    <span>HTML5</span>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-css3"></i>
                    <span>CSS3</span>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-react"></i>
                    <span>REACT</span>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-redux"></i>
                    <span>REDUX</span>
                    <span>Principiante</span>
                  </li>
                  <li>
                    <i className="bx bxl-bootstrap"></i>
                    <span>BOOTSTRAP</span>
                    <span>Novato</span>
                  </li>

                </ul>
              </div>
            </div>
            <div className="code-skills-card btn-cursor-hover">
              <input type="radio" name="acc" id="acc2" />
              <label htmlFor="acc2" className="btn-cursor-hover">
                <h4>
                  <i className="bx bx-server"></i>
                </h4>
                <h5>Desarrollo BackEnd</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-nodejs"></i>
                    <span>NODEJS</span>
                    <span>Principiante</span>
                  </li>
                  <li>
                    <i className="bx bxl-postgresql"></i>
                    <span>POSTGRESQL</span>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-mongodb"></i>
                    <span>MONGODB</span>
                    <span>Principiante</span>
                  </li>
                  <li>
                    <i class="bx bxl-python"></i>
                    <span>PYTHON</span>
                    <span>Principiante</span>
                  </li>
                  <li>
                    <img src={iSequelize} alt="icon sequelize" />
                    <span>ISEQUELIZE</span>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <img src={iExpress} alt="icon sequelize" />
                    <span>IEXPRESS</span>
                    <span>Intermedio</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="code-skills-card btn-cursor-hover">
              <input type="radio" name="acc" id="acc3" />
              <label htmlFor="acc3" className="btn-cursor-hover">
                <h4>
                  <i className="bx bx-wrench"></i>
                </h4>
                <h5>Herramientas</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-git"></i>
                    <span>GIT</span>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i class="bx bxl-heroku"></i>
                    <span>HEROKU</span>
                    <span>Novato</span>
                  </li>
                  <li>
                    <i className="bx bxl-firebase"></i>
                    <span>FIROBASE</span>
                    <span>Novato</span>
                  </li>
                  <li>
                    <i className="bx bxl-visual-studio"></i>
                    <span>VISUAL-STUDIO</span>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-github"></i>
                    <span>GITHUB</span>
                    <span>Intermedio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="soft-skill">
          <h2 className="skills-section-title">Habilidades blandas</h2>
          <ul>
            <li>
              <i className="bx bx-check-double"></i> Proactivo
            </li>
            <li>
              <i className="bx bx-check-double"></i> Perseverante
            </li>
            <li>
              <i className="bx bx-check-double"></i> Comunicación asertiva
            </li>
            <li>
              <i className="bx bx-check-double"></i> Buena actitud
            </li>
            <li>
              <i className="bx bx-check-double"></i> Amable
            </li>
            <li>
              <i className="bx bx-check-double"></i> Empatico
            </li>
            <li>
              <i className="bx bx-check-double"></i> Adaptabilidad
            </li>
            <li>
              <i className="bx bx-check-double"></i> Aprendizaje rapido
            </li>
            <li>
              <i className="bx bx-check-double"></i> Organización y
              planificación
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Information;
