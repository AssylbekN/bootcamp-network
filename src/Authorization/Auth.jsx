import { useCallback, useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router'

const Auth = () => {
const [data, setData] = useState()
const submit = useCallback(() => {
    console.log(data);
}, [data])

const router = useNavigate()

    return (
        
        <div className='auth__container'>
            <div className='auth__moduls'>
                <div className='auth__buttons'>
                    <button onClick={() => router('/login')}>Вход</button>
                    <button onClick={() => router('/register')}>Регистрация</button>
                </div>
                <div className='auth__inputs'>
                    <input className='forms_input' type="text" 
                    onChange={e=> setData(prev => ({...prev, email: e.target.value}))}
                    />
                    <input className='forms_input' type="password" 
                    onChange={e=> setData(prev => ({...prev, password:e.target.value}))}
                    />
                    <div className='checkbox_cont'><input type="checkbox" 
                    onChange={e=> setData(prev => ({...prev, checkbox:e.target.value}))}
                    /> <p>Запомнить меня</p></div>
                </div>
                <div className='login__btn_cont'>
                    <button className='login__btn'
                    onClick={submit}>Войти</button>
                </div>
                <div className='auth__forgot__pass'>
                    <hr/>
                    <button className='auth__forgot__btn'>Забыли пароль?</button>
                </div>
            </div>
        </div>
    )
}

export default Auth
