import styles from './SubmitButton.module.css'
import { FcCheckmark } from "react-icons/fc";

function SubmitButton() {
  return (
    <div>
      <button className={styles.btn}>
        <FcCheckmark size={10} color="#f2f2f2" />
      </button>

    </div>
  )
}

export default SubmitButton