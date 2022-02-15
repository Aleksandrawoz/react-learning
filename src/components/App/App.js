import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List 
          title={['IT IS WHAT IT IS... BUT IT COULD BE BETTER. DO IT', <sup key='1'>soon!</sup>]} 
          image ={'https://images.pexels.com/photos/5717439/pexels-photo-5717439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}>
        </List>
      </main>
    );
  }
}

export default App;