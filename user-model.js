const dataStudent = ['Rendi','Cecil','Ronaldo','Messi']

const getAllUsers = () =>{
    return dataStudent
}

const getUserByIndex = (index) =>{
    if(index <=0){
        return "Index must be greater than zero"
    }
    if (index > dataStudent.length){
        return "Index not found"
    }

    return dataStudent[index-1]

}

module.exports = {getAllUsers,getUserByIndex}