import React, { useState } from 'react'
import { User } from '../types/User.type'

type userContainerProps = {
  user : User
  deleteUser : Function
  updateUser : Function
}

export const UserContainer = (props : userContainerProps) => {

  /**
   * variable pour definir si on est en mode modification des informations de l'utilisateur ou non
   */
  const [updating, setUpdating] = useState(false);

  /**
   * variable pour mettre à jour les informations de l'utilisateur
   */
  const [user, setUser] = useState({ name: '', firstname:''});

  /**
   * envoie l'id du user à supprimer
   */
  const deleteUser = () => {
    props.deleteUser(props.user.id)
  }

  /**
   * enregistre les modifications des inputs pour mettre à jour les informations de l'utilisateur
   * @param event les modifications des inputs
   */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value)
    setUser((user) => ({...user, [event.target.name]: event.target.value}))
}

  /**
   * affiche les inputs de mise à jour des informations de l'utilisateur
   * puis envoies les infos pour les mettre à jour
   */
  const updateUser = () => {
    setUpdating(true);
  }

  /**
   * annule la mise à jour de l'utilisateur en remettant updating à false
   */
  const cancel = () => {
    setUpdating(false);
  }

  const validUpdateUser = (e : any) => {
    e.preventDefault();
    props.updateUser(props.user.id, user)
    cancel()
  }

  return (
    <>
    <div>
      {(!updating) ? 
        <div className="userContainer">
          <span>{props.user.id}</span>
          <span>{props.user.name.toUpperCase()}</span>
          <span>{props.user.firstname.charAt(0).toUpperCase()+props.user.firstname.slice(1)}</span>
          <div>
            <button className="deleteButton" onClick={deleteUser}>Supprimer</button>
            <button className="validateButton" onClick={updateUser}>Modifier</button>
          </div>
        </div> :
        <div className="userContainer">
          <span>{props.user.id}</span>
          <input placeholder={props.user.name.toUpperCase()} name="name" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.user.firstname.charAt(0).toUpperCase()+props.user.firstname.slice(1)} name="firstname" onChange={(event) => handleChange(event)}></input>
          <div>
            <button className="deleteButton" onClick={cancel}>Annuler</button>
            <button className="validateButton" onClick={validUpdateUser}>Valider</button>
          </div>
        </div>}
    </div>
    </>
  )
}
