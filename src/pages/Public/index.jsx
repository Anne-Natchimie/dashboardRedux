import React from 'react'
import { loginByEmail } from '../../commonjs/auth';
import { useForm } from 'react-hook-form';

const Public = () => {

    // gestion des erreurs
    const { register , handleSubmit , formState:{ errors } } = useForm() ; 




    const login = async (data) => { 
        
       // event.preventDefault() ;
       // console.log(data )   ;
         
         const { email , password } = data ; 
         
         loginByEmail(email, password ) .then(user=>{

            console.log('user' , user) ; 

         }).catch(error =>{

            console.log('error' , error.code) ;

         }) 

     }

     


  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <form onSubmit={handleSubmit( login) } >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' {...register('email' , {required:true})} placeholder="email" className="input input-bordered" />
            {
                errors.email && 
                
                <label className="label">
                    <span className="label-text-alt text-red-500">L'email est requis</span>
                </label>
            }
           
            
            
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="text" name='password' {...register('password' , {required:true})} placeholder="password" className="input input-bordered" />
            {
                errors.password && 
                
                <label className="label">
                    <span className="label-text-alt text-red-500">Un mot de pass est requis</span>
                </label>
            }
           
            </div>
            <div className="form-control mt-6">
            <button type='submit'  className="btn btn-primary">Login</button>
            </div>
        </div>
        </div>
        </form>

    
    </div>
   
    </div>

    
  )
}

export default Public