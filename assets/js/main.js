var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    imgs:[
      'https://i1.wp.com/fotografiaartistica.it/wp-content/uploads/2011/09/hengkikoentjoro1-1.jpg?ssl=1',
      'https://www.caitorino.it/media/media_gallery/img/foto_sergio_chiappino_9.jpg',
      'https://i.pinimg.com/originals/74/13/7f/74137ffb35569f612e81f7a57a7e3ee2.jpg'
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
