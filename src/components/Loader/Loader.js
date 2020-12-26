import styles from './styles.module.css'

export default function Loader() {
  return (
    <div className={styles.loading}>
      <div className={styles.ldio_child}>
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
