const rocket = document.getElementById('rocket');
const canvas = document.getElementById('canvas');
const planet1 = document.getElementById('planet1');
const planet2 = document.getElementById('planet2');
const satelit = document.getElementById('satelit');
const clouds = document.getElementById('clouds');
const totalClouds = 50

function random(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setCloud(){
   for(let i = 1; i <= totalClouds; i++){
      let cloud = document.createElement('div');
      cloud.id = 'cloud' + i;
      cloud.classList.add('cloud' + random(1, 5));
      clouds.appendChild(cloud);

      cloud.style.left = random(0, window.innerWidth) + 'px';
      cloud.style.top = random(0, -window.innerHeight) + 'px';
      cloud.style.zIndex = random(1, 50);
   }
}

function animate(){
    rocket
     .velocity({
        top: '0',
     }, {
        duration: 7000,
     })

     .velocity({
         top: '200px',
     }, {
         duration: 4000,
     
     })
     .velocity({
        top: '50px'
     }, {
        duration: 10000,
     })
     .velocity({
        top: '-300px',
     }, {
        duration: 4000,
     })

     canvas
     .velocity({
         top: '0',
     }, {
         queue: false,
         duration: 7000,
     })
     
     planet1
     .velocity({
        top: '1500px',
     }, {
        duration: 15000,
     })

     planet2
     .velocity({
        top: '1500px',
     }, {
        delay: 4000,
        duration: 15000,
     })

     satelit
     .velocity({
        top: '900px',
     }, {
        delay: 5000,
        duration: 7000,
     })

     for(let i = 1; i <= totalClouds; i++){
      document.getElementById('cloud' + i)
         .velocity({
            top: window.innerHeight * 2 ,
         }, {
            duration: random(5000, 50000),
         })

      clouds
      .velocity({
         opacity: 0,
      }, {
         delay: 23000,
         duration: 3000,
      })

      clouds
      .velocity({
         opacity: 0,
      }, {
         delay: 45000,
         duration: 3000,
      })

   }

}

function setCanvas(){
   canvas.style.width = window.innerWidth + 'px';
   canvas.style.height = window.innerHeight * 2 + 'px';
   canvas.style.top = -window.innerHeight + 'px';

}

setCloud()
setCanvas()
animate()