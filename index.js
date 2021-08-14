client.on('ready', (message) => {
  console.log(`Logged in as ${client.user.tag}!`); //어떤 계정으로 로그인했는지 콘솔에 표기합니다.
});

client.on('message',(message)=>{
  if(message.content==="!서버목록"){
    client.guilds.cache.forEach((guild)=>{
      message.channel.send(`${guild.name}에는 ${guild.memberCount}명의 멤버가 있습니다`)
    });
  }
  
  if(message.content.startsWith("!청소")){
    num=message.content.substr(4);
    if(!isNaN(num)){
      num=Math.floor(Number(num));
      message.channel.bulkDelete(num);
    }else{message.channel.send("숫자를 입력해주세요.")}
  }
  
  //이 밑은 삭제하지 마시오
})
