import { useSelector } from "react-redux";

export function useAuth() {
    const {email, token, id} = useSelector(state => state.user)

    return {
        isAuth: email ? true : false,
        email,
        token,
        id,
    };
}