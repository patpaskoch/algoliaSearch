class SearchWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['api-id', 'search-id', 'setting1'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'api-id' || name === 'search-id' || name === 'setting1') {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const apiId = this.getAttribute('api-id') || '';
    const searchId = this.getAttribute('search-id') || '';
    const setting1 = this.getAttribute('setting1') || '';

    this.shadowRoot.innerHTML = `
      <style>
        .search-widget {
          display: flex;
          flex-direction: column;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        input {
          margin-bottom: 10px;
          padding: 8px;
        }
      </style>
      <div class="search-widget">
        <input id="searchQuery" placeholder="Search...">
        <button id="searchButton">Search</button>
        <div id="results"></div>
      </div>
      <script>
        document.querySelector('#searchButton').addEventListener('click', async () => {
          const query = document.querySelector('#searchQuery').value;
          const response = await fetch(\`https://example.com/api/search?query=\${query}&apiId=${apiId}&searchId=${searchId}&setting1=${setting1}\`);
          const data = await response.json();
          document.querySelector('#results').innerHTML = 'Results: ' + JSON.stringify(data.results);
        });
      </script>
    `;
  }
}

customElements.define('search-widget', SearchWidget);
