class SearchWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['app-id', 'api-key', 'index-name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'app-id' || name === 'api-key' || name === 'index-name') {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const appId = this.getAttribute('app-id') || '';
    const apiKey = this.getAttribute('api-key') || '';
    const indexName = this.getAttribute('index-name') || 'wp_searchable_posts';

    this.shadowRoot.innerHTML = `
      <style>
        .ais-InstantSearch {
          max-width: 960px;
          width: 100%;
          display: block;
          overflow: hidden;
          margin: 0 auto;
        }
        .ais-SearchBox {
          margin-bottom: 1em;
        }
        .ais-Hits-item {
          margin-left: 0;
          width: 100%;
        }
        .ais-Hits-item img {
          margin-right: 1em;
        }
        .ais-Hits-list {
          margin-bottom: 1em;
        }
      </style>
      <div class="ais-InstantSearch">
        <div id="searchbox"></div>
        <div id="hits"></div>
      </div>
      <script type="module">
        import algoliasearch from 'https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch.lite.min.js';
        import instantsearch from 'https://cdn.jsdelivr.net/npm/instantsearch.js@4/dist/instantsearch.production.min.js';

        const appId = '${appId}';
        const apiKey = '${apiKey}';
        const indexName = '${indexName}';

        const searchClient = algoliasearch(appId, apiKey);

        const search = instantsearch({
          indexName: indexName,
          searchClient,
        });

        search.addWidgets([
          searchBox({
            container: "#searchbox"
          }),
          configure({
            hitsPerPage: 5
          }),
          hits({
            container: "#hits",
            templates: {
              item: (hit, { html, components }) => html\`
                <div>
                  <div class="hit-post_title">
                    \${components.Highlight({ hit, attribute: "post_title" })}
                  </div>
                  <div class="hit-content">
                    \${components.Highlight({ hit, attribute: "content" })}
                  </div>
                </div>
              \`,
            },
          }),
        ]);

        search.start();
      </script>
    `;
  }
}

customElements.define('search-widget', SearchWidget);
