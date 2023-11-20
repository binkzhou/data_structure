<template>
  <div class="container">
    <canvas ref="canvasRef" height="280" width="500"></canvas>
    <div class="btns">
      <button @click="handlePush">入栈</button>
      <button @click="handlePop">出栈</button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";

const canvasRef = ref<HTMLCanvasElement>();
const ctxRef = ref<CanvasRenderingContext2D | null>(null);

// 栈大小
const STACK_INIT_SIZE = 5;

let list: number[] = reactive([]);

// 绘制圆角矩形
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  text: string
) {
  ctx.fillStyle = "#82ba81";
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arc(x + width - radius, y + radius, radius, 1.5 * Math.PI, 2 * Math.PI);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arc(x + width - radius, y + height - radius, radius, 0, 0.5 * Math.PI);
  ctx.lineTo(x + radius, y + height);
  ctx.arc(x + radius, y + height - radius, radius, 0.5 * Math.PI, Math.PI);
  ctx.lineTo(x, y + radius);
  ctx.arc(x + radius, y + radius, radius, Math.PI, 1.5 * Math.PI);
  ctx.closePath();
  ctx.fill();

  // 设置文字样式
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "16px Arial";

  // 在矩形中间填上文字
  ctx.fillText(text, x + width / 2, y + height / 2);
}

// 绘制箭头
function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  text: string
) {
  var headlen = 10; // 箭头的长度
  var angle = Math.atan2(toY - fromY, toX - fromX); // 箭头的角度

  // 绘制箭头的主线
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);

  // 绘制箭头的头部
  ctx.lineTo(
    toX - headlen * Math.cos(angle - Math.PI / 6),
    toY - headlen * Math.sin(angle - Math.PI / 6)
  );
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - headlen * Math.cos(angle + Math.PI / 6),
    toY - headlen * Math.sin(angle + Math.PI / 6)
  );

  ctx.stroke();

  // 设置文字样式
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "16px Arial";

  // 在线的中间添加文字
  ctx.fillText(text, (fromX + toX) / 2, (fromY + toY) / 2 - 10);
}

function draw() {
  const ctx = ctxRef.value;
  const canvas = canvasRef.value;
  if (!ctx || !canvas) {
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 起点x坐标
  const startX = 120;
  const startY = 30;
  // 格子高
  const itemHeight = 40;
  ctx.strokeStyle = "black";

  // 绘制桶
  ctx.beginPath(); // Start a new path
  ctx.moveTo(startX, startY); // Move the pen to (30, 50)
  ctx.lineTo(startX, startY + STACK_INIT_SIZE * itemHeight + itemHeight); // Draw a line to (150, 100)
  //
  ctx.moveTo(startX, startY + STACK_INIT_SIZE * itemHeight + itemHeight);
  ctx.lineTo(startX + 120, startY + STACK_INIT_SIZE * itemHeight + itemHeight);

  //
  ctx.moveTo(startX + 120, startY + STACK_INIT_SIZE * itemHeight + itemHeight);
  ctx.lineTo(startX + 120, startY);
  ctx.stroke();
  //
  // 绘制虚线
  ctx.setLineDash([5, 2]); // 设置线条样式为5px实线，15px空白
  ctx.beginPath(); // 开始新的路径
  for (let i = 1; i <= STACK_INIT_SIZE; i++) {
    ctx.moveTo(startX, startY + i * itemHeight); // 移动画笔到指定位置
    ctx.lineTo(startX + 120, startY + i * itemHeight); // 绘制线条到指定位置
  }

  ctx.stroke(); // 执行绘制

  ctx.fillStyle = "#82ba81";
  //   ctx.fillRect(startX + 2, startY + 20 + 2, 66, 16)

  // 栈满
  console.log("list.length", list.length);
  console.log("STACK_INIT_SIZE", STACK_INIT_SIZE);
  ctx.setLineDash([]);
  if (list.length == 0) {
    const y = startY + STACK_INIT_SIZE * itemHeight;
    drawArrow(ctx, startX - 80, y + 5, startX - 5, y + 5, "top");
    drawArrow(ctx, startX - 80, y + 35, startX - 5, y + 35, "base");
  } else {
    const baseY = startY + STACK_INIT_SIZE * itemHeight;
    const y = startY + (STACK_INIT_SIZE - list.length) * itemHeight;
    drawArrow(ctx, startX - 80, y + 20, startX - 5, y + 20, "top");
    drawArrow(ctx, startX - 80, baseY + 35, startX - 5, baseY + 35, "base");
  }

  for (let i = 0; i < list.length; i++) {
    ctx.fillStyle = "#82ba81";
    roundRect(
      ctx,
      startX + 2,
      startY + itemHeight * (STACK_INIT_SIZE - i) + 2,
      116,
      36,
      3,
      `${list[i]}`
    );
  }
}
function handlePush() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (list.length < STACK_INIT_SIZE) {
    list.push(randomNumber);
  }

  draw();
}
function handlePop() {
  if (list.length > 0) {
    list.pop();
    draw();
  }
}
onMounted(() => {
  if (!canvasRef.value) {
    return;
  }
  console.log("canvasRef.value", canvasRef.value);
  ctxRef.value = canvasRef.value.getContext("2d");
  draw();
});
</script>

<style scoped>
.container {
  position: relative;
  padding: 10px;
  /* display: inline-block; */
  border: 1px solid rgb(228, 228, 231);
  border-radius: 6px;
}
.btns {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  column-gap: 5px;
}
button {
  padding: 8px 16px;
  color: rgb(24, 24, 27);
  font-size: 14px;
  background: white;
  border-radius: 6px;
  border: 1px solid rgb(228, 228, 231);
}

button:hover {
  background: rgb(244, 244, 245);
  cursor: pointer;
}
</style>