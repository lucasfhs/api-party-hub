# PartyManager API  

**API created for the MongoDB Udemy Course** → [MongoDB from Basic to Advanced (with Mongoose & Projects)](https://www.udemy.com/course/mongodb-do-basico-ao-avancado-c-mongoose-e-projetos/)  

![PartyManager Banner](./public/img/background-image.jpg)  

PartyManager is a **RESTful API** designed for **event and party management**, providing features for creating, organizing, and tracking events efficiently.  

## ✨ Features  

- ✅ **Event Management**: Create, update, and delete parties/events.  
- 🔐 **Secure Authentication**: JWT-based user authentication and authorization.  
- 🗃 **MongoDB Integration**: Persistent data storage using MongoDB and Mongoose.  
- 📚 **API Documentation**: Interactive Swagger UI for easy API exploration.  

## 🛠 Technologies Used  

| Technology       | Purpose                          |  
|------------------|----------------------------------|  
| **Express.js**   | Backend framework                |  
| **MongoDB**      | Database storage                 |  
| **Mongoose**     | MongoDB object modeling          |  
| **JWT**          | Secure user authentication       |  
| **Bcrypt**       | Password hashing                 |  
| **CORS**         | Cross-Origin Resource Sharing    |  
| **Swagger**      | API documentation                |  
| **Dotenv**       | Environment variable management  |  

## ⚙️ Prerequisites  

Before running the app, create a `.env` file in the root directory with the following variables:  

```env
PORT=5000  # Your API port
MONGO_DB_URL=mongodb://localhost:27017/party_manager  # MongoDB connection URL
JWT_SECRET_KEY=your_secure_jwt_secret  # Secret key for JWT
```

## 🚀 Installation & Setup  

1. **Clone the repository**:  
   ```bash
   git clone <repository-url>
   cd party-manager-api
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```

3. **Run the API in development mode**:  
   ```bash
   npm run dev
   ```

4. **Access the API**:  
   - Default URL: `http://localhost:5000`  
   - Swagger Docs: `http://localhost:5000/api-docs`  

## 📖 API Documentation  

The API is fully documented using **Swagger UI**. Explore endpoints, request/response schemas, and test API calls directly at:  

🔗 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**  

## 📂 Available Endpoints  

- **Auth**: User registration, login, and token management.  
- **Events**: Create, read, update, and delete parties/events.  
- **Users**: Manage user profiles and permissions.  

---

### 🖼️ Image Credit  
Banner by [redgreystock on Freepik](https://www.freepik.com/free-vector/pixel-art-happy-birthday-elements-with-y2k-cakes-candles-gift-boxes-ribbon-bows_369889297.htm).  

---
