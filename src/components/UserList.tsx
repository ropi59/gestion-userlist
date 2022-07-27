import React, { useEffect, useState } from 'react'
import { userService } from '../services/UserService';
import { User } from '../types/User.type';
import { AddUser } from './AddUser';
import { UserContainer } from './UserContainer';


export const UserList = () => {

    //creation d'un user
    const [user, setUser] = useState({id: 0, name: "", firstname: ""});

    //creation de la liste d'user
    const [users, setUsers] = useState([]);

    /**
     * récupère la liste de users à l'initialisation du component
     */
    useEffect(() => {
        getAllUsers()
    }, [])

    /**
     * fonction pour récuperer tous les utilisateurs depuis le userService
     */
    const getAllUsers = () => {
        userService.findAllUsers().then(data => setUsers(data));
    }

    /**
     * fonction pour supprimer un utilisateur par son id depuis le userService
     * @param id :number l'id de l'utilisateur à supprimer
     */
    const deleteUser = (id : number) => {
        userService.deleteUser(id).then(() => getAllUsers())
    }

    /**
     * fonction pour ajouter un utilisateur depuis le userService
     * @param user les informations de l'utilisateur à créer (nom, prénom)
     */
    const addNewUser = (user : User) => {
        userService.createUser(user).then(() => getAllUsers())
    }

    /**
     * fonction pour mettre à jour un utilisateur
     * @param id : number l'id de l'utilisateur
     * @param user les infos de l'utilisateur à mettre à jour
     */
    const updateUser = (id: number, user : User) => {
        userService.updateFullUser(id, user).then(() => getAllUsers())
    }

  return (
    <>
        {(users) && users.map((user, index : number) => {
            return <UserContainer key={index} user={user} deleteUser={deleteUser} updateUser={updateUser}/>})}
            <AddUser addNewUser={addNewUser}/>
    </> 
    )
}
