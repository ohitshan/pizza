import styles from "../styles/Add.module.css";
function AddButton({ setModalClose }) {
  return (
    <div className={styles.mainAddButton} onClick={() => setModalClose(false)}>
      Add New Pizza
    </div>
  );
}

export default AddButton;
