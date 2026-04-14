export interface ApiAccount {
  name: string;
  key: string;
};

// Insert here the name (you can put what you want) and the associated API key. 
// You can add as many as you want, just make sure to put a unique name for each one for easy identification. 
// The first key in the list will be used by default, but you can change it from the app's interface.

export const apiAccounts: ApiAccount[] = [
  { name: 'acc1', key: 'keyacc1' },
  { name: 'acc2', key: 'keyacc2' }
];

// Alias a la primera key para compatibilidad. No borrar.
export const apiKey = apiAccounts[0].key;