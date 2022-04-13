import axios from 'axios';

const gamesActions = {
    
    fetchGames: () =>{
        return async(dispatch, getState) => {

		const res = await axios.get('http://localhost:4000/api/games')

		dispatch({type:'fetchGames', payload:res.data.res})

        }
    },

    deleteGame: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const res = await axios.delete('http://localhost:4000/api/games', {id})

            } catch(err){
                console.log(err)
            }
        }
    },

    filterGames: (games, value)=>{
        return async(dispatch,getState)=>{

		dispatch({type:'filterGames', payload:{games, value}})

        }
    },

    setGame: (gameName, genre, src, size, workson, company, description, requirements, price, images)=>{
        return async(dispatch, getState)=>{

		const res = await axios.post('http://localhost:4000/api/games',{gameName, genre, src, size, workson, company, description, requirements, price, images})

        }
    },

    modifyGame: (game) => {
	return async(dispatch, getState) => {

		const res = await axios.put('http://localhost:4000/api/games', {game})

	    }
    }


}

export default gamesActions;