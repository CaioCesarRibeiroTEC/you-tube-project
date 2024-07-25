import { createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({children}: any) => {
    const navigate = useNavigate();


    const [login, setLogin] = useState(false);
    const [loginPage, setLoginLoginPage] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);

    //user
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    
    //createuser
    const [createUserPage, setCreateUserPage] = useState(false);
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [formatEmail, setFormatEmail] = useState(true);
    const [comparePassword, setComparePassword] = useState('');
    const [samePassword, setSamePassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);


    //search
    const [search, setSearch] = useState('');
    const [categoryId, setCategoryId] = useState('0');

    //videos
    const [userVideos, setUserVideos] = useState([]);


    //user
    useEffect(() => {
        getUser(token);
    }, [token]);

    
    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
        navigate('/')
    }

    const getUser = (token: string) => {
        api.get('/users/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
            getVideos(token, data.user_id);
        }).catch((err) => {
            console.log('Usuário não autenticado', err)
            
        })
    }


    //create_user
    const handleCreateUser = (name: string, email: string, password: string) => {
        api.post('/users/sign-up', {name, email, password}).then(() => {
            alert('Usuário criado com sucesso')
            handleLogin(email,password)
            navigate('/')
        }).catch((err) => {
            console.log('Não foi possivel criar usuário', err);
            if(err.response.status === 409) {
                alert('Esse email já esta em uso')
            } else {
                alert('Não foi possivel criar usuario tente novamente')
            }
        })
    };



    //login
    const handleLogin = (email: string, password: string) => {
        api.post('/users/sign-in', {email, password}).then(({data}) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            setLoginLoginPage(!loginPage);
            navigate('/')
        }).catch((err) => {
            console.log('Não foi possivel fazer o login', err)
        })
    }

    //videos
    const getVideos = (token: string, user_id:string) => {
        api.get(`/videos/get-videos?user_id=${user_id}`,{headers:{Authorization: token}}).then(({ data }) => {
            setUserVideos(data.videos)
        }).catch((err) => {
            console.log('erro ao buscar videos', err)
            alert('erro ao buscar videos')
        })
    }

    const createVideos = (token: string, user_id: string, title: string, description: string, thumbnail: string, publishedAt: Date) => {
        api.post('/videos/create-videos', { user_id, title, description, thumbnail, publishedAt}, {headers:{Authorization: token}}).then((  ) => {
            alert('video criado com sucesso')
            getUser(token)
            getVideos(token, user_id)
        }).catch((err) => {
            console.log('erro ao criar video', err)
            alert('erro ao criar video')
        })
    }    
    

    return(
        <UserContext.Provider value={{ 
            openMenu, setOpenMenu,
            login, setLogin, 
            user, setUser,
            token, setToken,
            openDropDown, setOpenDropDown,
            loginPage, setLoginLoginPage,
            showPassword, setShowPassword,
            createUserPage, setCreateUserPage,
            nameValid, setNameValid,
            emailValid, setEmailValid,
            passwordValid, setPasswordValid,
            formatEmail, setFormatEmail,
            comparePassword, setComparePassword,
            samePassword, setSamePassword,
            search, setSearch,
            categoryId, setCategoryId,
            userVideos, setUserVideos,
            
            handleLogin,
            getUser,
            handleCreateUser,  
            logOut,
            getVideos,
            createVideos          
            
        }}>
            {children}
        </UserContext.Provider>
    )
}
