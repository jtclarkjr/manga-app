import React from 'react'
import HeaderContainer from '../containers/HeaderContainer.js'

const styles = {
  divStyle: {
    fontFamily: 'Arial'
  },
  textStyle: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  }
}

export default function NoMangaComponent () {
  return (
    <div style={styles.divStyle}>
      <HeaderContainer />
      <div style={styles.textStyle}>
        <p>No manga titles added yet. Try adding some by clicking the upper right button!</p>
      </div>
    </div>
  )
}
