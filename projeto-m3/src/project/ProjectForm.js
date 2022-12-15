/*import {axios, useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'

import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'

function ProjectForm({btnText}) {

    const [ alunos, setAlunos ] = useState([])

    useEffect (() => {
        axios.get("https://projeto-individual-modulo-3-hospedagem.vercel.app/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setAlunos(data)
        })
        .catch((err) => console.log(err))
    })

    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do aluno" 
                name="name" 
                placeholder="Nome"
                required
            />
            <Input 
                type="number" 
                text="Idade do aluno" 
                name="Idade" 
                placeholder="Idade"
                required
            />
            <Input 
                type="number" 
                text="Número de matrícula" 
                name="Matrícula" 
                placeholder="Matrícula"
                required
            />
            <Input 
                type="text" 
                text="Série/ano" 
                name="Série" 
                placeholder="Série"
                required
            />
            <Input 
                type="text" 
                text="Turma" 
                name="Turma" 
                placeholder="Turma"
                required
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm*/

/* CÓDIGO FUNCIONAL ABAIXO */

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './ProjectForm.module.css'

/*import Input from '../form/input'*/

const Adicionar = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [matricula, setMatricula] = useState("");
  const [serie, setSerie] = useState("");
  const [turma, setTurma] = useState("");


  const navigate = useNavigate();
  let Url = `https://projeto-individual-modulo-3-hospedagem.vercel.app/aluno`;

  const data = {
    nome: nome,
    idade: idade,
    matricula: matricula,
    serie: serie,
    turma: turma
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post(Url, data).then(navigate("/Get"));
  }
  
  return(

    <form className={styles.form}>
        <input 
            type="text" 
            text="Nome do aluno" 
            name="name"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        />
        <input 
            type="number" 
            text="Idade do aluno" 
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
            text="Série/ano" 
            name="Série" 
            placeholder="Série"
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
        />
        <input 
            type="text" 
            text="Turma" 
            name="Turma" 
            placeholder="Turma"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
        />

        <button type="submit" onClick={submitForm}>Matricular aluno</button>
    </form>
)}   
  
export default Adicionar;