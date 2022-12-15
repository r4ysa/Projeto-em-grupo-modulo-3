import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './ProjectForm.module.css'

/*import Input from '../form/input'*/

const Adicionar = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [matricula, setMatricula] = useState("");
  const [turma, setTurma] = useState("");


  const navigate = useNavigate();
  let Url = ` https://servidor-json-2qj6knz7k-mateus-ribeiro28.vercel.app/professor`;
 

  const data = {
    nome: nome,
    idade: idade,
    matricula: matricula,
    turma: turma
  };

  function submitForm2(e) {
    e.preventDefault();
    axios.post(Url, data).then(navigate("/Get"));
  }
  
  return( 

    <form className={styles.form}>
        <input 
            type="text" 
            text="Nome do professor" 
            name="name"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        />
        <input 
            type="number" 
            text="Idade do professor" 
            name="Idade" 
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
        />
        <input 
            type="number" 
            text="Número de matrícula" 
            name="Matrícula" 
            placeholder="Matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
        />
        
        <input 
            type="text" 
            text="Turma" 
            name="Turma" 
            placeholder="Turma"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
        />

        <button type="submit" onClick={submitForm2}>Matricular Professor</button>
    </form>
)}   

export default Adicionar;  