
import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import{settings} from'../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string.isRequired,
    addColumn: PropTypes.func,
    
  };
  static defaultProps = {
    description: settings.defaultListDescription,
  };
  render() {
    const{title,image,description,columns,addColumn} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <Hero 
            titleText={title}
            imageHero={image}
          />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div><div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </section>
      </Container>
    );
  }
}
export default List;