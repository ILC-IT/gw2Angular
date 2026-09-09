export interface ApiAccount {
  name: string;      // Alias elegido por el usuario, max 20 caracteres
  gw2Name: string;   // Nombre real de GW2 con numeros
  key: string;       // API key
};

export interface ValidImportAccount {
  index: number;
  account: ApiAccount;
}

export interface InvalidImportAccount {
  index: number;
  name: string;
  gw2Name: string;
  reason: string;
}

export interface ImportValidationResult {
  valid: boolean;
  error?: string;
  total: number;
  newAccounts: ApiAccount[];
  existingAccounts: ApiAccount[];
  validAccounts: ValidImportAccount[];
  invalidAccounts: InvalidImportAccount[];
}

export interface ImportResult {
  success: boolean;
  added: number;
  updated: number;
  invalid: number;
  error?: string;
}

export interface Gw2TokenInfo {
  id: string;
  name: string;
  permissions: Gw2Permission[];
}

export const REQUIRED_GW2_PERMISSIONS = [
  'account',
  'inventories',
  'characters',
  'wallet',
  'unlocks',
  'builds',
  'progression'
] as const;

export type Gw2Permission = typeof REQUIRED_GW2_PERMISSIONS[number];

// Comprobar que el gw2Name introducido coincide con la cuenta asociada a la API Key llamando a la API de GW2
export const VALIDATE_GW2_ACCOUNT_NAME = false;

// Insert the name (you can put what you want, max 20 characters), the game name with numbers and the associated API key. 
// You can add as many as you want, just make sure to put a UNIQUE NAME for each one for easy identification. 
// The first key in the list will be used by default, but you can change it from the app's interface.