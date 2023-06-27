const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerEnd: {
    flex: 1,
    marginTop: '60%',
    alignItems: 'center',
    // justifyContent:'space-between',
  },
  // containerRow: {
  //   flex: 2,
  //   flexDirection: 'row',
  //   justifyContent:'space-between',
  //   // flexWrap: 'wrap',
  //   // alignContent:'space-around',
  //   // alignSelf: 'space-between',
  //   padding:10,
  //   alignItems: 'center',
  // },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
    top: 10,
  },
  
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textBold: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    lineHeight: 44,
    textAlign: 'center',
    top: 35
  },
  btn: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    buttom:0
  },
  btntry: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 18,
    // textAlign: 'center',
    // padding:10,
    // flex:2,
    // padding:10,
    // alignSelf: 'flex-start',
    // buttom:0
  },
  logoImg: {
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  logoTxtImg: {
    justifyContent: 'center',
    width: 250,
    height: 50,
    top: 15
  },
};

export default styles;
