import $ from 'jquery'

const StarrySky = () => {
  window.addEventListener('load', () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var stars = [];
    var w = $('.contents').width();
    var h = $('.contents').height();
    $('#canvas').attr('width', w);
    $('#canvas').attr('height', h);
    
    // 星を100個生成する
    for (var i = 0; i < 100; i++) {
      // 星の座標と大きさをランダムに設定する
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var size = Math.random() * 2 + 1;
    
      stars.push({
        x: x,
        y: y,
        size: size
      });
    }
    
    function draw() {
      // 現在のフレーム時刻を取得する
      var now = Date.now();
      // 前回の描画時刻からの経過時間を計算する
      var delta = now - lastTime;
      lastTime = now;
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // 星を描画する
      for (var i = 0; i < stars.length; i++) {
    
        var star = stars[i];
    
        // 星を小さくする
        star.size -= 0.01;
        // 星が小さくなりすぎたら大きくする
        if (star.size < 0) {
          star.size = Math.random() * 2 + 1;
        }
    
        // 星が流れ星かどうかを判定する
        var isShootingStar = Math.random() < 0.001;
        if (isShootingStar) {
          // 流れ星の場合、流れ星を滑らかかつ長距離に落とす
          star.x -= delta * 0.1;
          star.y += delta * 0.1;
    
          // 始点
          var startX = star.x;
          var startY = star.y;
    
          // 終点
          var endX = star.x - delta * 0.5 * (Math.random() * 2 - 1);
          var endY = star.y + delta * 0.5 * (Math.random() * 2 - 1);
    
          // 始点と終点をつなぐ
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          // 流れ星でない場合、通常速度で星を左にずらす
          star.x -= delta * 0.001;
        }
    
        // 星が画面の左端から消えたら、再び画面の右端に現れるようにする
        if (star.x < 0) {
          star.x = canvas.width;
        }
    
        // 星を描画する
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
        ctx.fill();
    
        // 残像を描画する
        drawTrail(star);
    
        // 星のフレーム時刻を更新する
        star.lastTime = now;
      }
    
      requestAnimationFrame(draw);
    }
    
    // 前回の描画時刻を保存する変数
    var lastTime = Date.now();
    
    draw();
    
    // 残像を描画する
    function drawTrail(star) {
      // 現在のフレーム時刻を取得する
      var now = Date.now(); 
      // 前回の描画時刻からの経過時間を計算する
      var delta = now - star.lastTime;
    
      // 残像の座標を計算する
      var trailX = star.x - delta * 0.001;
      var trailY = star.y - delta * 0.001;
    
      // 残像を描画する
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.beginPath();
      ctx.arc(trailX, trailY, star.size, 0, Math.PI*2);
      ctx.fill();
    }
  });
  
  return (
    <div className="sky">
      <canvas id="canvas" width="1400" height="1000"></canvas>
    </div>
  )
}
export default StarrySky;