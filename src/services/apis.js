const BASE_URL = "http://localhost:4000/api/v1";


export const AuthEndPoints = {
    SENDOTP_API: "http://localhost:8080/api/auth/send-otp",
    VERIFY_EMAIL:"http://localhost:8080/api/auth/register",
    LOGIN:"http://localhost:8080/api/auth/login",
    // CHANGEPASSWORD:BASE_URL+"/auth/changepassword"
}


export const AdminDashboard = {
    ADD_LOCATION:"http://localhost:8080/api/location/add",
    FETCH_ALL_LOCATION:"http://localhost:8080/api/location/all",
    GET_LOCATION_ID:"http://localhost:8080/api/location"
}