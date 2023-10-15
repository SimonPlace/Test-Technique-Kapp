import { ThunkAction } from "@reduxjs/toolkit";
import { setError, setLoading, setUsers } from "reducers/users";
import { AnyAction, Dispatch } from "redux";
import { User } from "types/users";

/*
 L'usage de Redux-Toolkit pour une mini-app est totalement inutile
 Je l'ai utilisé dans cette miniapp, pour montrer que je savais l'utiliser (pour de plus gros projets)
*/

export const fetchUsers =
  (): ThunkAction<void, AnyAction, unknown, AnyAction> =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(
        "https://6511a930b8c6ce52b394dc63.mockapi.io/api/users/users"
      );

      if (!response.ok) {
        dispatch(
          setError(
            "Une erreur s'est produite lors de la récupération des utilisateurs."
          )
        );
        throw new Error(
          "Une erreur s'est produite lors de la récupération des utilisateurs."
        );
      }
      const data: Array<User> = await response.json();

      dispatch(setUsers(data));
    } catch (error) {
      dispatch(
        setError("Une erreur s'est produite lors de la récupération des repos.")
      );
      console.error(
        "Une erreur s'est produite lors de la récupération des dépôts.",
        error
      );
    }
  };
