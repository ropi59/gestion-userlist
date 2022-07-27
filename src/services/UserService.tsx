import { User } from "../types/User.type";

const URL : string = "http://localhost:3000/users";

class UserService {

    /**
     *  fonction pour récuperer tous les utilisateur en BDD
     * @returns une liste d'utilisateurs
     */
    findAllUsers = () => {
        return fetch(URL)
        .then(response => response.json())
    }

    /**
     * fonction pour récupérer un utilisateur par son id
     * @param id :number l'id de l'utilisateur a chercher
     * @returns l'utilisateur avec l'id donné en paramètre
     */
    findUserById = (id : number) => {
        return fetch(`${URL}/${id}`, {
            method: "GET",
        }).then(response => response.json())
    }

    /**
     * fonction pour créer un utilisateur
     * @param user les information de l'utilisateur à créer (nom, prénom)
     * @returns un nouvel utilisateur
     */
    createUser = (user : User) => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        }).then((res) => res.json())
    }
    
    /**
     * fonction pour supprimer un utilisateur par son id
     * @param id : number l'id de l'utilisateur a supprimer
     * @returns ok si l'utilisateur a été supprimé
     */
    deleteUser = (id : number) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
    }

    /**
     *  fonction pour mettre à jour les informations d'un utilisateur
     * @param id : number l'id de l'utilisateur à mettre à jour
     * @param user les informations de l'utilisateur à modifier (nom et prénom)
     * @returns l'utilisateur avec ses informations mises à jour
     */
    updateFullUser = (id : number, user : User) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json"}
        }).then(res => res.json())
    }
}

//creation d'un singleton
export const userService = Object.freeze(new UserService());