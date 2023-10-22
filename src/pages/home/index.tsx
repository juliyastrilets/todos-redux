import styles from './page.module.css';
import { Header } from '@/components/header';
import { List } from '@/components/list';
import { AddTodoForm } from '@/components/addTodoForm';

export default function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.form}>
          <AddTodoForm />
        </div>
        <List />
      </main>
    </>
  );
}
