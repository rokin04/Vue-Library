<template>
  <b-col>
    <b-card
      :title="title"
      :img-src="imgSrc"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 12rem;"
      class="mb-2"
    >
      <b-button v-b-modal="title">Description</b-button>
    </b-card>
    <b-modal :id="title" :title="title">
      <p class="my-4">
        {{ description }}
      </p>
    </b-modal>
  </b-col>
</template>

<script>
export default {
  name: "Books",
  props: {
    imgSrc: {
      type: String
    },
    description: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>
