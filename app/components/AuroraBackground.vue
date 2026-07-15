<template>
  <div class="aurora-wrapper" aria-hidden="true">
    <div class="aurora-blob blob-1"></div>
    <div class="aurora-blob blob-2"></div>
    <div class="aurora-blob blob-3"></div>
    <div class="grain-overlay"></div>
  </div>
</template>

<style scoped>
.aurora-wrapper {
  position: fixed;
  inset: 0;
  z-index: -9;
  overflow: hidden;
  pointer-events: none;
}

.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.55;
  will-change: transform;
}

.blob-1 {
  width: 42vw;
  height: 42vw;
  top: -10%;
  left: -8%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.55) 0%, rgba(99, 102, 241, 0) 70%);
  animation: drift-1 24s ease-in-out infinite;
}

.blob-2 {
  width: 38vw;
  height: 38vw;
  top: 30%;
  right: -12%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(6, 182, 212, 0) 70%);
  animation: drift-2 28s ease-in-out infinite;
}

.blob-3 {
  width: 34vw;
  height: 34vw;
  bottom: -12%;
  left: 20%;
  background: radial-gradient(circle, rgba(217, 70, 239, 0.35) 0%, rgba(217, 70, 239, 0) 70%);
  animation: drift-3 32s ease-in-out infinite;
}

@keyframes drift-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(6vw, 8vh) scale(1.15); }
  66% { transform: translate(-4vw, 4vh) scale(0.95); }
}

@keyframes drift-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-8vw, 10vh) scale(1.2); }
}

@keyframes drift-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(5vw, -6vh) scale(1.1); }
  66% { transform: translate(-6vw, -3vh) scale(0.9); }
}

.grain-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 3px 3px;
  opacity: 0.3;
  mix-blend-mode: overlay;
}

@media (prefers-reduced-motion: reduce) {
  .aurora-blob {
    animation: none !important;
  }
}
</style>
