class SwipeGesture extends HTMLElement {
  constructor() {
    super();
    const _shadowRoot = this.attachShadow({ mode: 'open' });
    _shadowRoot.innerHTML = `      
      <style>
        img {
          animation: swipeGesture 2s ease-in-out infinite;
          width: 3rem;
        }
        @keyframes swipeGesture {
          0%      { transform: translateX(50px); }
          50%     { transform: translateX(-50px); }
          100%    { transform: translateX(50px); }
        }
      </style>      
      <img alt="swipe gesture"></img>   
  `;
  this.$imageSrc = _shadowRoot.querySelector('img');
  }
  static get observedAttributes() {
    return ['src'];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
    this.render();
  }
  render () {
    this.$imageSrc.setAttribute('src', this.src);
  }
}
if (!customElements.get('swipe-gesture')){
  window.customElements.define('swipe-gesture', SwipeGesture);
}