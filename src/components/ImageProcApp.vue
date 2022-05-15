<template>
  <div>
    <img name="image" id="image" :src="imgSrc" style="margin:auto;width:100%;display:block"/>
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange" />

    <!-- <button @click="fetchUsers">Axio Get </button> -->
  </div>
</template>
<script>
export default {
  name: "ImageProcApp",
  data() {
    return {
      imgSrc: "",
      uploaded: "",
    };
  },

  methods: {
    fetchUsers() {
      const baseURI = "https://jsonplaceholder.typicode.com/users";
      this.$http.get(baseURI).then((result) => {
        this.users = result.data;
        console.log(this.users);
      });
    },
    onFileChange(e) {
      //var pic = document.getElementById("image");
      let imgSrc = URL.createObjectURL(e.target.files[0]);
      this.imgSrc = imgSrc;

      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("id", 7878);
      this.$http
        .post(
          "https://europe-west1-promiseq-production2.cloudfunctions.net/detectObjectsFromImg",
          formData
        )
        .then(
          function (result) {
            const obj = JSON.parse(JSON.stringify(result.data));
            console.log(JSON.stringify(obj));
          },
          function (error) {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style scoped>
.conversor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 400px;
  min-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.button {
  margin-top: 1rem;
  padding: 10px;
  border-radius: 5px;
  background-color: #2c3e50;
  color: #fff;
  cursor: pointer;
  font-family: Arial, sans-serif;
  border: none;
  transition: 0.2s;
}
.button:hover {
  opacity: 0.8;
}
</style>