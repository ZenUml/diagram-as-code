<template>
  <div>
    <svg v-on:click="onClickHandler()"
         width="20px" height="20px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Async message</title>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Message-Copy">
          <path d="M40.5,5 L40.5,47" id="Line" stroke="#202020" stroke-linecap="square" stroke-dasharray="5"></path>
          <path d="M11.6315789,20 L37,20" id="Line-2" stroke="#202020" stroke-width="2" stroke-linecap="square"></path>
          <path d="M31.9736842,13.7258398 L37.5869926,25.0263158 L26.3603759,25.0263158 L31.9736842,13.7258398 Z" id="Triangle" stroke="#202020" stroke-width="2" transform="translate(31.973684, 20.000000) rotate(90.000000) translate(-31.973684, -20.000000) "></path>
          <path d="M9.5,5 L9.5,47" id="Line" stroke="#202020" stroke-linecap="square" stroke-dasharray="5"></path>
          <rect id="Rectangle" fill="#FFFFFF" x="25" y="13" width="3" height="6"></rect>
          <rect id="Rectangle" fill="#FFFFFF" x="25" y="21" width="3" height="6"></rect>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'AsyncMessage',
    props: ['onClickHandler']
  }
</script>
