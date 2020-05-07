<template>
  <b-container>
    <b-row align-v="center" active>
      <Books
        :title="title.dune"
        :imgSrc="imgLink.dune"
        :description="description.dune"
      />
      <Books
        :title="title.hyperion"
        :imgSrc="imgLink.hyperion"
        :description="description.dune"
      />
      <Books
        :title="title.neuromancer"
        :imgSrc="imgLink.neuromancer"
        :description="description.dune"
      />
      <Books
        :title="title.brave"
        :imgSrc="imgLink.brave"
        :description="description.dune"
      />
    </b-row>
  </b-container>
</template>

<script>
import Books from "../components/Books.vue";
import imgDune from "../assets/WindsofDune.jpg";
import imgHyperion from "../assets/hyperion.jpg";
import imgNeuromancer from "../assets/neuromancer.jpg";
import imgBrave from "../assets/brave.jpg";
export default {
  name: "Sci-fi",
  components: {
    Books
  },
  data() {
    return {
      title: {
        dune: "Dune",
        hyperion: "Hyperion",
        neuromancer: "Neuromancer",
        brave: "Brave"
      },
      imgLink: {
        dune: imgDune,
        hyperion: imgHyperion,
        neuromancer: imgNeuromancer,
        brave: imgBrave
      },
      description: {
        dune:
          "The Winds of Dune is a science fiction novel written by Brian Herbert and Kevin J. Anderson, set in the Dune universe created by Frank Herbert."
      }
    };
  }
};
</script>
<style scoped>
.title {
  display: inline-block;
}
</style>
