import styles from './page.module.css';
import Form from "./components/form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div id="main-container" style={{ backgroundColor: "#fff", borderRadius: '4px',paddingBottom:'10px' }}>
          <div style={{ marginTop: '5px', display: "flex", justifyContent: 'center' }}>
            <h3>Sample Form</h3>
          </div>
          <div id="form-container" style={{}}>
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
