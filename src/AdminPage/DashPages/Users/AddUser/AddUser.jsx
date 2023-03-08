import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddUser = () => {
   const { register, handleSubmit } = useForm()
   const [addsuccess,setAddsuccess] = useState(false)
 
   const onSubmit = (formData) =>{
      fetch(`https://start-hotel-practice-project.onrender.com/api/v1/admin/addUser`,{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(formData)
      })
      .then(res => setAddsuccess(res.ok))
   }

   return (
      <div className='container'>
         <div className='row my-5'>
            <div className='col-md-6 border mx-auto py-4 row'>
               <p className='text-center text-success'>{addsuccess && 'Admin Added success'}</p>
               <div className='col-md-8  mx-auto'>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                     <h5>Name </h5>
                     <input {...register('name')} class="form-control form-control-lg" type="text" placeholder="Name" aria-label=".form-control-lg example"/>               
                  </div>
                  <div className='mb-4'>
                     <h5>Email</h5>
                     <input {...register('email')} class="form-control form-control-lg" type="text" placeholder="email@gmail.com" aria-label=".form-control-lg example"/>
                     </div>
                  <div>
                     <button type="submit" className='btn btn-primary w-100'>Submit</button>
                  </div>
                </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddUser;