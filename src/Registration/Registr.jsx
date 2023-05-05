import { useNavigate } from 'react-router'
import './Registr.css'
import { useCallback, useState } from 'react'

const Registr = () => {

    const [data, setData] = useState()
const submit = useCallback(() => {
    console.log(data);
}, [data])


    const router = useNavigate()
    return (
        <div className='reg__container'>
            <div className='reg__moduls'>
                <div className='reg__buttons'>
                    <button onClick={() => router('/login')}>Вход</button>
                    <button onClick={() => router('/register')}>Регистрация</button>
                </div>
                <div className='reg__inputs'>
                    <input className='reg_forms_input' type="text" 
                    onChange={e=> setData(prev => ({...prev, name: e.target.value}))}
                    />
                    <input className='reg_forms_input' type="text" 
                    onChange={e=> setData(prev => ({...prev, surname: e.target.value}))}
                    />
                    <input className='reg_forms_input' type="text" 
                    onChange={e=> setData(prev => ({...prev, email: e.target.value}))}
                    />
                    <input className='reg_forms_input' type="password" 
                    onChange={e=> setData(prev => ({...prev, password: e.target.value}))}
                    />
                    <input className='reg_forms_input' type="password" 
                    onChange={e=> setData(prev => ({...prev, password: e.target.value}))}
                    />
                </div>
                <div className='reg__login__btn_cont'>
                    <button className='reg__login__btn'
                     onClick={submit} >Регистрация</button>
                </div>
             
            </div>
        </div>
    )
}

export default Registr
