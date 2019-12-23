import users from '../infrastructure/Mocks'

class ApiService {
    getUserById(id) {
        return users.find((user) => user.id === id)
    }
}

export default new ApiService();