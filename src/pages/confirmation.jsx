import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";
export default function Confirmation() {
  //get booking order from supabase. if using db

  //using context and reducer - pyamentInfo is state
  const paymentInfo = useContext(formDataContext);
  console.log(paymentInfo);
  return (
    <>
      <h2>Booking for Foo Festival</h2>
      <article>{paymentInfo.fullname}</article>
    </>
  );
}