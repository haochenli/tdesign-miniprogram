Component({
  data: {
    visible: false,
    note: '',
    minDate: new Date(1900, 1, 1).getTime(),
    maxDate: new Date(2022, 2, 15).getTime(),
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    handleConfirm(e) {
      const { value } = e.detail;
      const format = (val) => {
        const date = new Date(val);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      };

      this.setData({
        note: format(value),
      });
    },
    onClose({ detail }) {
      console.log(detail.trigger);
    },
  },
});
