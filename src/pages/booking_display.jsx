import TicketForm from "../components/MainTicket";

export async function getServerSideProps() {
  const api = "http://localhost:8080/available-spots";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
// import { createContext, useReducer } from "react";

// export const formDataContext = createContext();

// export const UpdatePaymentContext = createContext();

// //useReducer to manage complex states in ticketContext
// //global object expanded with inspiration  from https://github.com/Robert-d-s/foofest-app/blob/tereattendees/src/components/BookingForm.js
// const initialState = {
//   formData: {
//     date: "",
//     ticketType: "",
//     ticketAmount: 0,
//     area: "",
//     amount: 0,
//     attendees: [
//       {
//         fullname: "",
//         email: "",
//         phone: "",
//       },
//     ],
//     id: "",
//   },
// };

// //purpose of reducers returns the next state
// function reducer(state, action) {
//   console.log(action);
//   switch (action.action) {
//     case "UPDATE_FIELD":
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           [action.payload.field]: action.payload.value,
//         },
//       };
//     case "UPDATE_ATTENDEE_FIELD":
//       return {};
//     case "CREATE_ATTENDEE_STRUCTURE":
//       let attendees = [];
//       //run through ticketAmount to get correct personal Info tabs loaded
//       for (let i = 0; i < state.formData.ticketAmount; i++) {
//         attendees.push({ fullname: "", email: "", phone: "" });
//       }
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           attendees: attendees,
//         },
//       };
//     case "ADD_ATTENDEE":
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           attendees: [{ fullname: "", email: "", phone: "" }],
//         },
//       };
//     case "NEXT":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         email: action.payload.email,
//         phone: action.payload.phone,
//       };
//     case "SUBMIT":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         email: action.payload.email,
//       };
//     default:
//       return state;
//   }
// }

export default function BookingDisplay({ data }) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { currentStep, formData } = state;

  // function renderFormComponent({ children }) {
  //   switch (currentStep) {
  //     default:
  //       return <TicketForm spotData={data}> {children}</TicketForm>;
  //   }

  return <TicketForm spotData={data} />;
}