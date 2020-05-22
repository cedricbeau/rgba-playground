var app = new Vue({
  el: '#app',
  data: {

    // Links site & Repo
    links: {
      site: "https://cedricbeau.pro/",
      siteTitle: "Lien vers mon site perso",
      repo: "https://github.com/cedricbeau/rgba-playground",
      repoTitle: "Lien vers le repo GitHub du projet",
    },

    defaultBackground: 'rgba(100, 100, 255, 1)',

    // Selectors
    selectors: [
      {
        id: 1,
        name: 'Red',
        defaultValue: 100,
        valueMin: 0,
        valueMax: 255,
        step: 1
      },
      {
        id: 2,
        name: 'Green',
        defaultValue: 100,
        valueMin: 0,
        valueMax: 255,
        step: 1
      },
      {
        id: 3,
        name: 'Blue',
        defaultValue: 250,
        valueMin: 0,
        valueMax: 255,
        step: 1
      },
      {
        id: 4,
        name: 'Alpha',
        defaultValue: 1,
        valueMin: 0,
        valueMax: 1,
        step: 0.01
      }
    ]
  },
  methods: {

    displayRgba: function() {

      const ranges = document.querySelectorAll(".selector_range");
      const values = document.querySelectorAll(".selector_value");
      const result = document.querySelector('.resultat');
      const txt = document.querySelector('.resultat_value');

      values[0].innerHTML = ranges[0].value;
      values[1].innerHTML = ranges[1].value;
      values[2].innerHTML = ranges[2].value;
      values[3].innerHTML = ranges[3].value;

      let resultValues = "rgba(" + ranges[0].value + ", " + ranges[1].value + ", " + ranges[2].value + ", " + ranges[3].value + ")"
      result.style.backgroundColor = resultValues
      txt.innerHTML = resultValues

    },
  }
});
