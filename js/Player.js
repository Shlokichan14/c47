class Player{
    constructor(){

    }

    getPlayerCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updatePlayerCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }

}