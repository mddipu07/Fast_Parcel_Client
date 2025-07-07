import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'
import useTrackingLogger from '../../../Hooks/useTrackingLoger';


const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const {parcelId} = useParams()
    const axiosSecure = useAxiosSecure()
    const {user} =useAuth()
    const { logTracking } = useTrackingLogger()
    const navigate = useNavigate()
    console.log(parcelId);
 
    const [error , setError] = useState('');

  const {isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/parcels/${parcelId}`)
        return res.data

    }
  })
  if(isPending){
   return '...loading...'
  }
 console.log(parcelInfo);
 const amount = parcelInfo.cost;
 const amountInCents = amount * 100;
 console.log(amountInCents);

   const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
     const card = elements.getElement(CardElement);
     if(!card){
        return
     }
     const {error , paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
     })
     if(error){
        setError(error.message)
     }
     else{
        setError('');
        console.log('payment method', paymentMethod);
     }
       const res = await axiosSecure.post(`/create-payment-intent`,{
      amountInCents,
      parcelId
   })
   const clientSecret = res.data.clientSecret

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
         card:elements.getElement(CardElement),
         billing_details:{
            name:user.displayName,
            email:user.email
         }
      }
    });
    if(result.error){
      setError(result.error.message);
    }else{
      setError('')
      if(result.paymentIntent.status === 'succeeded'){
         console.log('Payment Succeeded');
        
         const transactionId = result.paymentIntent.id

         const paymentData = {
            parcelId,
            email: user.email,
            amount,
            transactionId:transactionId,
            paymentMethod:result.paymentIntent.payment_method_types

         }
         const paymentRes = await axiosSecure.post('/payments',paymentData);
         if(paymentRes.data.insertedId){
             await Swal.fire({
               icon:'success',
               title:'Payment succesfull',
               html:`<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
             });
             await logTracking({
               tracking_id:parcelInfo.tracking_id,
               status:"Payment_done",
               details:`paid by ${user.displayName}`,
               updated_by:user.email,
             })
             navigate('/dashedboard/myParcels');
         }
      }
    }
   }
   
    return (
        <div>
             <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto'>
                 <CardElement className='p-2 border rounded'>
                 </CardElement>
                    <button 
                    className='btn btn-primary w-full text-black'
                    type='submit' 
                    disabled={!stripe}>
                    Pay${amount}
                    </button>
                 {
                    error && <p className='text-red-500'>{error}</p>
                 }
             </form>
        </div>
    );
};

export default PaymentForm;