/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Button, Text, View} from 'react-native';
import {Box} from './components/box.js'
import { thisTypeAnnotation } from '@babel/types';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={ 
        game:{
          players:{
            simbols:["X","O"],
            active:0
          },
          winner_comb:[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
          ],
          
          gameover:false,
          board:["","","","","","","","",""]
        }
    };
    this.make_play = this.make_play.bind(this);
    this.check_winner = this.check_winner.bind(this);
    this.start = this.start.bind(this);
  }
  make_play(pos){
   
    let s = this.state;
    if(s.game.board[pos] === "" && !this.state.game.gameover){
      s.game.players.active = (s.game.players.active === 0)?1:0;
      s.game.board[pos] = s.game.players.simbols[s.game.players.active];
      this.setState(s);
      this.check_winner();
    }
  }
  check_winner(){
    console.log();
     for(i of this.state.game.winner_comb){
      if(
        this.state.game.board[i[0]] === "X"  &&
        this.state.game.board[i[1]] === "X" &&
        this.state.game.board[i[2]] === "X") 
      {
        console.log("Winner X ",i)
        alert("'X' Ganhou!");this.state.game.board
        this.gameover();
      }
      else if( 
        this.state.game.board[i[0]] === "O"  &&
        this.state.game.board[i[1]] === "O" &&
        this.state.game.board[i[2]] === "O") 
      {
        console.log("Winner X ",i)
        alert("'O' Ganhou!");
        this.gameover();
      }else{
        let emp="";
        for(x of this.state.game.board){
          if(x!= ""){emp=x;}
        }
        if(emp === ""){alert("Deu Velha!")}
      }
     }
  }
  start(){
    let s = this.state;
    s.game.gameover = false;
    s.game.board.fill("");
    console.log("Tabuleiro Limpo",s.game.board);
    this.setState({});
  }
  gameover(){
    let s = this.state;
    s.game.gameover = true;
    this.setState(s);
    console.log("GAME OVER");
  }
  render() {
    return (
      <View  style={{flex:1}}>
      <View style={{flex:1,backgroundColor:"#333"}}></View>
      <View style={{flex:3,alignItems:"center",backgroundColor:"#7b1fad",}}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Box onPress={()=>{this.make_play(0)}} winColor={} text={this.state.game.board[0]} /> 
          <Box onPress={()=>{this.make_play(1)}} text={this.state.game.board[1]} />
          <Box onPress={()=>{this.make_play(2)}} text={this.state.game.board[2]} />
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Box onPress={()=>{this.make_play(3)}} text={this.state.game.board[3]} />
          <Box onPress={()=>{this.make_play(4)}} text={this.state.game.board[4]} />
          <Box onPress={()=>{this.make_play(5)}} text={this.state.game.board[5]} />
        </View>
  
        <View style={{ backgroundColor:"#7b1fad", flexDirection: "row", flex: 1 }}>
          <Box onPress={()=>{this.make_play(6)}} text={this.state.game.board[6]} />
          <Box onPress={()=>{this.make_play(7)}} text={this.state.game.board[7]} />
          <Box onPress={()=>{this.make_play(8)}} text={this.state.game.board[8]} />
        </View>
      </View>
      <View style={{flex:1,backgroundColor:"#333"}}>
        <View style={{flex:1,flexDirection:"row", alignItems:"center",justifyContent:"center"}}>
          <TouchableOpacity
           style={{backgroundColor:"#9724d6",padding:10}}
           onPress={()=>{this.start()}}><Text>Iniciar Game</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    
    );
  }
}
//Adicionado Color para teste de commit.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color:"#fff"
  },
 
});
