// import React from 'react'
// import Child from './Child';
// class Inputs extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//     // this.input = React.createRef();
//     this.state = {
//       text: ''


//     }
//     console.log('1')
//   }
//   // state = {
//   //   text: ''
//   // }


//   handleSubmit = (event) => {
//     // alert('A name was submitted: ' + this.input.current.value);
//     event.preventDefault();
//     localStorage.setItem('set value', JSON.stringify(this.state))
//   }
//   changeText = (e) => {
//     console.log(e.target.value)
//     this.setState({
//       text: e.target.value
//     })
//   }
//   componentDidMount() {
//     console.log('4')
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if ('a' === 'a') {

//       console.log('6')
//     }

//   }
//   // componentWillUnmount
//   componentWillUpdate() {
//     console.log('5')
//   }
//   // shouldComponentUpdate
//   static getDerivedStateFromProps(prevState, prevProps) {
//     if ('a' === 'a') {

//       console.log('2')
//     }
//   }
//   // compo
//   render() {
//     const valueGet = JSON.parse(localStorage.getItem('set value'));
//     console.log('3')
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//             <input type="text"
//             // ref={this.input}
//             value={this.state.text}
//             onChange={
//               this.changeText
//             }
//           />
//         </label>
//         <input type="submit" value="Submit" />
//         <Child text={this.state.text} />
//         {
//           valueGet ? <h1>{valueGet.text}</h1> : null
//         }
//       </form>
//     );
//   }
// }
// export default Inputs