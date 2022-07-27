import React, { useState } from 'react';

export const AddUser = (props : any) => {

    const [user, setUser] = useState({id: null, name: '', firstname:''});

    /**
     * enregistre les modifications des inputs de création d'un utilisateur
     * @param event les modifications des inputs
     */
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUser((user) => ({...user, [event.target.name]: event.target.value}))
    }

    /**
     * envoies les datas des inputs pour les sauvegarder en BDD
     * @param e les modifications des inputs
     */
    const addNewUser = (e : any) => {
        e.preventDefault();
        props.addNewUser(user);
    }

  return (
    <>
        <div className="addUserContainer">
            <h3>Ajouter un utilisateur</h3>
            <form onSubmit={addNewUser}>
                <input type="text" name="name" placeholder="Nom" onChange={(event) => handleChange(event)} />
                <input type="text" name="firstname" placeholder="Prénom" onChange={(event) => handleChange(event)} />
                <button type="submit">Valider</button>
            </form>
        </div>
    </>
  )
}
