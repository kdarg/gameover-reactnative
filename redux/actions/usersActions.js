import axios from 'axios';

const userActions = {

    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            const res = await axios.post('https://game-over-shop.herokuapp.com/api/auth/signUp', { userData })

        }
    },

    signInUser: (userData) => {

        return async (dispatch, getState) => {
            const user = await axios.post('https://game-over-shop.herokuapp.com/api/auth/logIn', { userData })

            if (user.data.success) {
                localStorage.setItem('token', user.data.response.token)

                dispatch({ type: 'user', payload: user.data.response.userData });
            }

        }
    },

    signOutUser: (closeuser) => {

        return async (dispatch, getState) => {
            localStorage.removeItem('token')

            dispatch({ type: 'user', payload: null});

        }
    },

    verifyToken: (token) => {

        return async (dispatch, getState) => {

            const user = await axios.get('https://game-over-shop.herokuapp.com/api/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
	    
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response });

		return user.data.response

            } else {
                localStorage.removeItem('token')

		return false
            }

        }
    }

}

export default userActions;