import styles from "../styles/Form.module.css";

import PI_Formtab from "../components/PI_Formtab";
export default function PersonalInfo() {
  function changeFormComponent() {}
  return (
    <>
      <PI_Formtab title="Person 1"></PI_Formtab>
      <PI_Formtab title="Person 2"></PI_Formtab>
      <button type="next" onClick="changeFormComponent">
        Next
      </button>
    </>
  );
}