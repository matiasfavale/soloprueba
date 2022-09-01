import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import TextInputDisabled from "../common/TextInputDisabled";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';

const FixtrueList = ({ matches ,  errors = {}, onChange, onSaveClick, activeItem={}}) => (
  <>
    <div hidden={!activeItem.grupo}>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo A</p>
          </div>      
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "A"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
      
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }
                
              })}
            </tbody>
          </table>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo B</p>
          </div>
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "B"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }            
              })}
            </tbody>
          </table>
        </div>
      </div>

      <br></br>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo C</p>
          </div>      
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "C"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
      
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }
                
              })}
            </tbody>
          </table>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo D</p>
          </div>
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "D"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }            
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo E</p>
          </div>      
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "E"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
      
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }
                
              })}
            </tbody>
          </table>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo F</p>
          </div>
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "F"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }            
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
      <div hidden={!activeItem.grupo} className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo G</p>
          </div>      
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "G"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
      
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }
                
              })}
            </tbody>
          </table>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="titleTable">
            <p>Grupo H</p>
          </div>
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.Group === "H"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }            
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
    </div>     
    
    <div hidden={!activeItem.octavos}>
      <div hidden={!activeItem.octavos} className="row">
        <div className="titleTable">
          <p>Octavos</p>
        </div>  
        <br></br>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <br></br>
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableOctHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.code === "OC1" || match.code === "OC3" || match.code === "OC5" || match.code === "OC7"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
      
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>                    
                    </tr>
                  );
                }
                
              })}
            </tbody>
          </table>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <br></br>
          <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableOctHeight">
            <thead>
              <tr>
                <th>Fecha</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Estadio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {      
              matches.map(match => {
                var sCode = match.code;
                var sClass = "class" + match.Group;
                if(match.code === "OC2" || match.code === "OC4" || match.code === "OC6" || match.code === "OC8"){
                  return (
                    <tr className={sClass} key={match.code}>
                      
                      <td>{match.Fecha}</td>            
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamOne + ".svg"}></img>              
                          <br></br>
                          <span>{match.EquipoL}</span>
                        </div>
                      </td>
                      <td>
                        <TextInput
                          name="PrediccionTeamOne"
                          label=""
                          value={match.PrediccionTeamOne}
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />
                      </td>
                      <td>{match.GolEquipoL}</td>
                      <td>{match.GolEquipoV}</td>
                      <td>
                        <TextInput
                          name="PrediccionTeamTwo"
                          value={match.PrediccionTeamTwo}
                          label=""
                          onChange={(event) => onChange(match,event)}
                          error={errors.category}
                          disabled={!match.habilitado}
                        />              
                      </td>
                      <td>
                        <div className="imageEquipo">
                          <img className="imgFlag" src={"src/img/" + match.teamTwo + ".svg"}></img>            
                          <br></br>
                          <span>{match.EquipoV}</span>
                        </div>
                      </td>
                      <td>{match.stadium}</td>
                      <td>
                      {
                        match.habilitado === true 
                        ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                        : <></>
                      }              
                      </td>
                      
                    </tr>
                  );
                }            
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br></br>
  </>
  

  
);

FixtrueList.propTypes = {
  matches: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  activeItem: PropTypes.object
};


export default FixtrueList;
