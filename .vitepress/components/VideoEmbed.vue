<template>
    <div class="video-embed">
      <video width="560" height="315" controls>
        <source :src="src" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  .video-embed {
    /* 添加你的样式 */
  }
  </style>
  