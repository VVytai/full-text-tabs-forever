  import type { FTTF } from '../../background';
  export const fttf: FTTF = { 
    adapter: {
      onInstalled: async () => { },
      onMessage: () => true,
      backend: {
        search: async (query) => {
          return chrome.runtime.sendMessage([ 'search', query ]);
        },
        getPageStatus: async (url) => {
          return chrome.runtime.sendMessage([ 'getPageStatus', url ]);
        },
        indexPage: async (url) => {
          return chrome.runtime.sendMessage([ 'indexPage', url ]);
        },
        nothingToIndex: async (url) => {
          return chrome.runtime.sendMessage([ 'nothingToIndex', url ]);
        },
        findOne: async (url) => {
          return chrome.runtime.sendMessage([ 'findOne', url ]);
        }
      },
    },
  };
