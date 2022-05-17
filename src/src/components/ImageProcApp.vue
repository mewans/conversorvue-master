<link href="https://unpkg.com/bootstrap-vue@2.0.0-rc.11/dist/bootstrap-vue.css" rel="stylesheet" />
<link href="https://unpkg.com/bootstrap@4.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
<template>
  <div>
    <canvas ref="boxCanvas" class="canvas-overlay"></canvas>
    <img style="margin: auto; width: 100%; display: block"
      name="image"
      id="image"
      :src="imgSrc"
    />
     <v-card elevation="2">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange" />
    </v-card>
    <br/> <br/> <br/>
    <v-card elevation="2" style="height: 200px;">
    <span style="font-weight: bold;">Detected Objects : </span><br/><br/>
    {{objectList_string}}
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ImageProcApp",
  data() {
    return {
      imgSrc: "",
      uploaded: "",
      objectList_string:"",
      objectList:[],
    };
  },

  methods: {
    drawBoxes(x,y,w,h,label){
            console.log(parseInt(x) * 100); console.log(10 + (parseInt(y) *100)); console.log(parseInt(w)); console.log(h);
            let c = this.$refs.boxCanvas;
            const canvas = c.getContext("2d");
            canvas.beginPath();
            canvas.rect(x * 100, 10 + (y *100), w * 100, h* 100);
            canvas.label = label;
            canvas.stroke(); 
    },
    onFileChange(e) {
      let imgSrc_ = URL.createObjectURL(e.target.files[0]);
      this.imgSrc = imgSrc_;
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("id", 7878);
      this.$http
        .post(
          "https://europe-west1-promiseq-production2.cloudfunctions.net/detectObjectsFromImg",
          formData
        )
        .then(
           res =>  {
          const obj = JSON.parse(JSON.stringify(res.data));
          this.objectList = obj.boxes;
          this.objectList_string = JSON.stringify(res.data);

       this.objectList = [];
       obj.boxes.forEach((value,index ) => {
       console.log(index);
       this.drawBoxes(value.bbox[0],value.bbox[1],value.bbox[2],value.bbox[3],value.label);
      });
        }),
          function (error) {
            console.log(error);
          }
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
.canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  width: 100%;
  height: 100%
}
</style>