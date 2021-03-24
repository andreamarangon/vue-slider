var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    imgs:[
      'https://i1.wp.com/fotografiaartistica.it/wp-content/uploads/2011/09/hengkikoentjoro1-1.jpg?ssl=1',
      'https://www.caitorino.it/media/media_gallery/img/foto_sergio_chiappino_9.jpg',
      'https://lh3.googleusercontent.com/proxy/48NM-sTkcy4rBH2shcM9WUZJiX_5AbEgiQ8ajTHn5KtJuE5G1Om8qBTGYS7B2E8iDUWYAJMqwYjtKDIW3KDRKiwefA3PJxeO6jlywg'
    ]
  },
  methods: {
    next : function () {
      if (this.index < this.imgs.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    prev: function () {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.imgs.length - 1
      }
    },
    dotSelection: function (index) {
      this.index = index;
    }
  }
});
