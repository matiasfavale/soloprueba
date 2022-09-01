import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import TextInputDisabled from "../common/TextInputDisabled";

const PosicionesList = ({ posicionesteams ,  errors = {}}) => (
  <>

    <div  className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo A</p>
        </div>      
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoA.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo B</p>
        </div> 
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoB.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
    <br></br>

    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo C</p>
        </div>      
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoC.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo D</p>
        </div>
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoD.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
    <br></br>

    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo E</p>
        </div>      
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoE.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo F</p>
        </div>
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoF.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
    <br></br>

    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo G</p>
        </div>      
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoG.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="titleTable">
          <p>Grupo H</p>
        </div> 
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>GF</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
          {      
            posicionesteams.GrupoH.map(posteam => {
            var sCode = posteam.code;
            return (
              <tr key={posteam.code}>              
                <td>
                  <div>
                    <img className="imgFlag" src={"src/img/" + posteam.code + ".svg"}></img> 
                    <span> {posteam.name}</span>
                  </div>
                </td> 
                <td>{posteam.points}</td> 
                <td>{posteam.goalsf}</td> 
                <td>{posteam.goalsc}</td>               
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
    <br></br>
  </>
  
);

PosicionesList.propTypes = {
  posicionesteams: PropTypes.object.isRequired,
  errors: PropTypes.object
};


export default PosicionesList;
