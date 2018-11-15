function Apple (type) {
    this.type = type;
    this.clicked = 0;
	this.left=0;
	this.down=0;
	this.up=0;
	this.right=0;
	this.upleft=0;
	 this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
	
}
function applereturn(id){
	switch (id) {
    case "first":
	 board[0][0]='x';
      return apple;
      break;
	   case "second":
	 
	    board[0][1]='x';
	   
	  
      return appletwo;
      break;
	    case "third":
		 board[0][2]='x';
      return applethree;
      break;
	    case "fourth":
		 board[1][0]='x';
      return applefour;
      break;
	    case "fifth":
		 board[1][1]='x';
      return applefive;
      break;
	    case "sixth":
		 board[1][2]='x';
      return applesix;
      break;
	    case "seventh":
		 board[2][0]='x';
      return appleseven;
      break;
	    case "eighth":
		board[2][1]='x';
      return appleeight;
      break;
	    case "nineth":
		board[2][2]='x';
      return applenine;
      break;

	}

}
 var result={
		 win: 0
		 
	 }
/*
function gameboardreturn(id){
	switch (id) {
    case "first":
      gameBoard[0][0]=1;
	  case "second":
      gameBoard[0][1]=1;
      break;

	}

}
*/
//var apples=[1,2,3,4,5,6,7,8,9]'



 var board= [
        ['_','_','_'],
        ['_','_','_'],
        ['_','_','_']
		];
		


var apple = new Apple('macintosh');
var appletwo = new Apple('macintosh');
var applethree = new Apple('macintosh');
var applefour = new Apple('macintosh');
var applefive = new Apple('macintosh');
var applesix = new Apple('macintosh');
var appleseven = new Apple('macintosh');
var appleeight = new Apple('macintosh');
var applenine = new Apple('macintosh');
apple.color='reddish';
function clickt(Apple){
		this.clicked=1;
		
		
		
	}
	
	 var result={
		 win: 0
		 
	 }
	 
var game = {
  user: '',
  computer: '',
  currentPlayer: 'APPLE',
  moves: 1,
  currentmove: 0,
};
/*
var Move={
    row: 0,
	col: 0,
};
 */
 function Move () {
this.row=0;
this.column=0;
	
}
var player = 'o';
var opponent = 'x';
function isMovesLeft(board)
{
    for (var i = 0; i<3; i++)
        for (var j = 0; j<3; j++)
            if (board[i][j]=='_')
                return true;
    return false;
}
 

function evaluate(b)
{
    // Checking for Rows for X or O victory.
    for (var row = 0; row<3; row++)
    {
        if (b[row][0]==b[row][1] &&
            b[row][1]==b[row][2])
        {
            if (b[row][0]==player)
                return +10;
            else if (b[row][0]==opponent)
                return -10;
        }
    }


    // Checking for Columns for X or O victory.
    for (var col = 0; col<3; col++)
    {
        if (b[0][col]==b[1][col] &&
            b[1][col]==b[2][col])
        {
            if (b[0][col]==player)
                return +10;
 
            else if (b[0][col]==opponent)
                return -10;
        }
    }
 
    // Checking for Diagonals for X or O victory.
    if (b[0][0]==b[1][1] && b[1][1]==b[2][2])
    {
        if (b[0][0]==player)
            return +10;
        else if (b[0][0]==opponent)
            return -10;
    }
 
    if (b[0][2]==b[1][1] && b[1][1]==b[2][0])
    {
        if (b[0][2]==player)
            return +10;
        else if (b[0][2]==opponent)
            return -10;
    }
 
    // Else if none of them have won then return 0
    return 0;
}
 
// This is the minimax function. It considers all
// the possible ways the game can go and returns
// the value of the board
function minimax(board,depth,isMax)
{
    var score = evaluate(board);
 
    // If Maximizer has won the game return his/her
    // evaluated score
    if (score == 10)
        return score;
 
    // If Minimizer has won the game return his/her
    // evaluated score
    if (score == -10)
        return score;
 
    // If there are no more moves and no winner then
    // it is a tie
    if (isMovesLeft(board)==false)
        return 0;
 
    // If this maximizer's move
    if (isMax)
    {
        var best = -1000;
 
        // Traverse all cells
        for (var i = 0; i<3; i++)
        {
            for (var j = 0; j<3; j++)
            {
                // Check if cell is empty
                if (board[i][j]=='_')
                {
                    // Make the move
                    board[i][j] = player;
 
                    // Call minimax recursively and choose
                    // the maximum value
                    best = Math.max( best,
                        minimax(board, depth+1, !isMax) );
 
                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
 
    // If this minimizer's move
    else
    {
        var best = 1000;
 
        // Traverse all cells
        for (var i = 0; i<3; i++)
        {
            for (var j = 0; j<3; j++)
            {
                // Check if cell is empty
                if (board[i][j]=='_')
                {
                    // Make the move
                    board[i][j] = opponent;
 
                    // Call minimax recursively and choose
                    // the minimum value
                    best = Math.min(best,
                           minimax(board, depth+1, !isMax));
 
                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
}
 

function findBestMove(board)
{
    var bestVal = -1000;
	var bestMove = new Move();
    
    bestMove.row = -1;
    bestMove.col = -1;


    // Traverse all cells, evalutae minimax function for
    // all empty cells. And return the cell with optimal
    // value.
    for (var i = 0; i<3; i++)
    {
        for (var j = 0; j<3; j++)
        {
            // Check if celll is empty
            if (board[i][j]=='_')
            {
                // Make the move
                board[i][j] = player;
 
                // compute evaluation function for this
                // move.
                var moveVal = minimax(board, 0, false);
 
                // Undo the move
                board[i][j] = '_';
 
                // If the value of the current move is
                // more than the best value, then update
                // best/
                if (moveVal > bestVal)
                {
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }
 
   // printf("The value of the best Move is : %d\n\n",
         //   bestVal);
 		
    return bestMove;
}
/*
	*/
function setFig(id) {
 var car="A"
 
  if (id === 'x') {
 
 car="X"
    game.user = '<span class="fa fa-times"></span>';
    game.computer = '<span class="fa fa-circle-o"></span>';
  } else if (id === 'o') {
  car="O"
    game.user = '<span class="fa fa-circle-o"></span>';
    game.computer = '<span class="fa fa-times"></span>';
 
  }
onclick=document.getElementById('demo').innerHTML = isMovesLeft(board);
 /*firstMove();*/
 //setCurrPl('user');
  game.currentPlayer = car;
}
function firstMove() {
  $('#fifth').html(game.computer);
  $('#fifth').removeAttr('onClick');
}
function setCurrPl(curr) {
  game.currentPlayer = curr;
}
function icon(id) {
	if(winning()!=-1)
	{
/*
	board= [
        ['x','o','x'],
        ['o','o','x'],
        ['_','_','_']
		];
 */
 	
 /*
    printf("The Optimal Move is :\n");
    printf("ROW: %d COL: %d\n\n", bestMove.row,
                                  bestMove.col );
 */
  if (game.currentPlayer == "X" &&game.currentmove==0) {
	   
	  if (applereturn(id).clicked!=1){
		   //	board[0][0]='x';
	clickt(applereturn(id));
	applereturn(id).clicked=1;
	var bestMove = new Move();

	
	bestMove=findBestMove(board);
    onclick=document.getElementById(id).innerHTML = game.currentPlayer
	    onclick=document.getElementById('demot').innerHTML = bestMove.col
		onclick=document.getElementById('demo').innerHTML = bestMove.row;
	//gameboardreturn(id);

	//game.currentmove=1;
	setTimeout(test(bestMove.row,bestMove.col), 600);
  }
  
   
    //gameStatus();
    //setCurrPl('computer');
	/*
  } else if (game.currentPlayer == 'O') {
	   if (applereturn(id).clicked!=1){
	   onclick=document.getElementById(id).innerHTML = game.currentPlayer
	   applereturn("first").clicked=1;
	   }
   // gameStatus();
    //setCurrPl('user');
  }
  */
  
  
}
}
  //game.moves++;
 // draw();
  //if (game.currentPlayer == 'computer') {
   // comp();
  //}
}
function test(row,col){
	 
var whole=Math.floor((Math.random() * 9) + 1);
var corner=Math.floor((Math.random() * 3) + 1);
if(row==0&&col==0){
	apple.clicked=1;
board[row][col]='o';
id='first';
}
if(row==0&&col==1){
	appletwo.clicked=1;
board[row][col]='o';
id='second';
}
if(row==0&&col==2){
	applethree.clicked=1;
board[row][col]='o';
id='third';
}
if(row==1&&col==0){
	applefour.clicked=1;
board[row][col]='o';
id='fourth';
}
if(row==1&&col==1){
	applefive.clicked=1;
board[row][col]='o';
id='fifth';
}
if(row==1&&col==2){
	applesix.clicked=1;
board[row][col]='o';
id='sixth';
}
if(row==2&&col==0){
	appleseven.clicked=1;
board[row][col]='o';
id='seventh';
}
if(row==2&&col==1){
	appleeight.clicked=1;
board[row][col]='o';
id='eighth';
}
if(row==2&&col==2){
	applenine.clicked=1;
board[row][col]='o';
id='nineth';
}
    onclick=document.getElementById(id).innerHTML = 'o';
	game.currentmove=0;
 //onclick=document.getElementById("fifth").innerHTML = corner;
 /*
	  if(corner==1){
		  onclick=document.getElementById("third").innerHTML = "1t";
		  if (applereturn("third").clicked!=1){
			      
		    onclick=document.getElementById("third").innerHTML = "O";
		  }
	  }
		  else if(corner==2){
			    onclick=document.getElementById("third").innerHTML = "2t";
			  if (applereturn("second").clicked!=1){
				    
			  onclick=document.getElementById("seventh").innerHTML = "O";
			  }
		  }
			  else if (corner==3){
				  onclick=document.getElementById("third").innerHTML = "3t";
				  if (applereturn("third").clicked!=1){
					      
				  onclick=document.getElementById("ninth").innerHTML = "O";
				  }
			  }
	*/
}
function winning(){
	
	   //first we check row, then column, then diagonal
	  if(board[1][0]=='o'&&board[1][1]=='o'&&board[1][2]=='o'){
		  onclick=document.getElementById('demof').innerHTML = "you lost";
		  game.currentmove=1;
		  return -1;
	  }
	  else{
		  
		  return 0;
	  }
	  
	   /*
	  if(line>=3){
		  result.win=1;
		  
	  }
	  else if(line<=-3){
		  result.win=-1;
	  }
	  else{
	  line=0;
	  }
	   
	   for (var i = 0 ; i<3 ; i++){
      for (var i = 0 ; k<3 ; k++){
        line = line+gameboard[k][i];
		
      }
	  if(line>=3){
		  result.win=1;
		  
	  }
	  else if(line<=-3){
		  result.win=-1;
	  }
	  else{
	  line=0;
	  }
	   }
	   
	   line=0;
      line = line + board[0][0] + board[1][1]+ board[2][2]
	  
	   if(line>=3){
		  result.win=1;
		  
	  }
	  else if(line<=-3){
		  result.win=-1;
	  }
	  else{
	  line=0;
	  }
	  line = line + board[0][2] + board[1][1]+ board[2,0]
	   if(line>=3){
		  result.win=1;
		  
	  }
	  else if(line<=-3){
		  result.win=-1;
	  }
	  else{
	  line=0;
	  }
     
    }
	
	*/
}